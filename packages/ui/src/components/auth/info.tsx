const Info: React.FC = () => {
    return(
        <>
            <div className="box">
                <div className="label">Notes</div>
                <ol type="1">
                    <li>Isilah kolom <b>User Id</b> dan <b>Password</b> anda dengan benar</li>
                    <li>Apabila anda memiliki masalah dengan sistem, silahkan open tiket pada &nbsp;
                        <a className='userid' href="https://userid.bankbsi.co.id" target="_blank" rel="noopener noreferrer">https://userid.bankbsi.co.id</a></li>
                </ol>
            </div>
            <div className="box info">
                <div className="label">Information</div>
                <div className="data"></div>
            </div>
        </>
    );
}

export default Info;