import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h1>FIDO2 Personal Information Manager</h1>

          <p>
            Hệ thống quản lý thông tin cá nhân an toàn sử dụng FIDO2,
            WebAuthn và Passkey.
          </p>

          <div style={{ marginTop: '30px' }}>
            <h3>Tính năng chính</h3>

            <p>Đăng ký tài khoản</p>
            <p>Đăng nhập không mật khẩu</p>
            <p>Xác thực bằng Windows Hello / Face ID / Touch ID</p>
            <p>Quản lý thiết bị FIDO2</p>
            <p>Bảo vệ thông tin cá nhân bằng public key authentication</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home