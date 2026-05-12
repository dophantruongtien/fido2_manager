import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import API from '../api/authApi'
import { loginPasskey } from '../utils/webauthn'

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!username) {
      alert('Vui lòng nhập username')
      return
    }

    try {
      setLoading(true)

      const optionsRes = await API.post('/api/fido/login/options', {
        username,
      })

      const authResp = await loginPasskey(optionsRes.data)

      const verifyRes = await API.post('/api/fido/login/verify', {
        username,
        authResp,
      })

      if (verifyRes.data.verified) {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('username', username)

        alert('Đăng nhập thành công')
        navigate('/dashboard')
      } else {
        alert('Xác thực thất bại')
      }
    } catch (err) {
      console.error(err)
      alert('Đăng nhập thất bại. Kiểm tra backend hoặc passkey.')
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
          <h1>Login</h1>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Authenticating...' : 'Login with Passkey'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login