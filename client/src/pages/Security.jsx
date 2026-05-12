import Navbar from '../components/Navbar'

function Security() {
  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>Security Settings</h1>

          <h2>FIDO2 Device</h2>

          <p>Loại thiết bị: Platform Authenticator</p>
          <p>Ví dụ: Windows Hello, Face ID, Touch ID</p>
          <p>Trạng thái: Active</p>

          <hr />

          <h3>Giải thích bảo mật</h3>

          <p>Private key không rời khỏi thiết bị người dùng.</p>
          <p>Server chỉ lưu public key để xác minh chữ ký.</p>
          <p>FIDO2 giúp chống phishing và password leak.</p>
        </div>
      </div>
    </div>
  )
}

export default Security