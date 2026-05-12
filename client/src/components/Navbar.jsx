import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  }

  return (
    <nav
      style={{
        background: '#111827',
        color: 'white',
        padding: '18px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2 style={{ margin: 0 }}>FIDO2 Manager</h2>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white' }}>
          Home
        </Link>

        <Link to="/register" style={{ color: 'white' }}>
          Register
        </Link>

        <Link to="/login" style={{ color: 'white' }}>
          Login
        </Link>

        <Link to="/dashboard" style={{ color: 'white' }}>
          Dashboard
        </Link>

        <Link to="/security" style={{ color: 'white' }}>
          Security
        </Link>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            style={{
              background: '#dc2626',
              padding: '8px 12px',
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar