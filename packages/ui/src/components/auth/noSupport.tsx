const NoSupport:React.FC = () => {
    return (
      <>
        <div className="no-support" style={{ textAlign: "center" }}>
          <img
            src={"./layout/images/logo-bsi-green.png"}
            style={{ maxWidth: "160px", marginBottom: 30 }}
            alt="lock-screen"
          />
          <h3>Mohon Maaf</h3>
          <br />
          <br />
          <h4>
            Perangkat anda tidak support dengan aplikasi kami, silahkan gunakan
            perangkat lain untuk menggunakan aplikasi
          </h4>
          <br />
          <br />
          <h4>Terima Kasih.</h4>
        </div>
      </>
    );
}

export default NoSupport;