import data from "../data.json";
import "./Artist.css";

function Artist() {
  return (
    <>
      <h1 id="artistH1">Artists</h1>
      {data.artists.map((artist) => (
        <div className="artistInfo" key={artist.id}>
          <h2>{artist.name}</h2>
          <p>
            <strong>Genre:</strong> {artist.genre}
          </p>
          <p>{artist.bio}</p>
        </div>
      ))}
    </>
  );
}

export default Artist;
