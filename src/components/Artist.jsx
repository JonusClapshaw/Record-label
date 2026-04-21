import data from "../data.json";

function Artist() {
    return (
        <>
            {data.artists.map((artist) => (
                <div key={artist.id}>
                    <h2>{artist.name}</h2>
                    <p><strong>Genre:</strong> {artist.genre}</p>
                    <p>{artist.bio}</p>
                </div>
            ))}
        </>
    );
}

export default Artist;