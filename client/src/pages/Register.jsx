import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import API from '../api/authApi'
import { registerPasskey } from '../utils/webauthn'

function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    if (!username || !email) {
      alert('Vui lòng nhập username và email')
      return
    }

    try {
      setLoading(true)

      await API.post('/api/auth/register', {
        username,
        email,
      })

      const optionsRes = await API.post('/api/fido/register/options', {
        username,
      })

      const attResp = await registerPasskey(optionsRes.data)

      const verifyRes = await API.post('/api/fido/register/verify', {
        username,
        attResp,
      })

      if (verifyRes.data.verified) {
        alert('Đăng ký FIDO2 thành công')
        navigate('/login')
      } else {
        alert('Xác thực FIDO2 thất bại')
      }
    } catch (err) {
      console.error(err)
      alert('Đăng ký thất bại. Kiểm tra backend hoặc FIDO2 config.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: '450px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <h1>Register</h1>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleRegister} disabled={loading}>
            {loading ? 'Creating Passkey...' : 'Register with FIDO2'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register