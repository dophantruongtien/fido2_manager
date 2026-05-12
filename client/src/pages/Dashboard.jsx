import Navbar from '../components/Navbar'

function Dashboard() {
  const username = localStorage.getItem('username') || 'User'

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>Dashboard</h1>

          <p>Xin chào: {username}</p>

          <hr />

          <h2>Thông tin cá nhân</h2>

          <p>Phương thức xác thực: FIDO2 Passkey</p>
          <p>Trạng thái: Đã xác thực</p>
          <p>Mức độ bảo mật: Cao</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard