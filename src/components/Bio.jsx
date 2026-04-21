import room from '../assets/room.jpg'

function Bio() {
    return (
        <>
            <div className="bioContainer">
                <p> We're Wavelength Records, a small independent label based out of Seattle. We've been around since 2018 and we have five artists on our roster right now.</p>
                <img src= { room } alt="placeholderIMG" />
                <hr></hr>
            </div>
        </>
    )
}

export default Bio;