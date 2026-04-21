import record from '../assets/record.jpg'

function Header() {
    return (
        <>
            <div className="container">
                <h1>Wavelength Records</h1>
                <img src={ record } alt="recordIcon"></img>
            </div>
        </>
    )
}

export default Header;