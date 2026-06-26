import { Link } from "react-router-dom";

function RoomCard({ room }) {

  return (

    <div
      style={{
        width: "320px",

        background: "white",

        borderRadius: "15px",

        overflow: "hidden",

        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",

        margin: "20px",
      }}
    >

      <img
        src={room.image}
        alt={room.name}
        style={{
          width: "100%",

          height: "220px",

          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "20px",
        }}
      >

        <h2>
          {room.name}
        </h2>

        <p
          style={{
            margin: "10px 0",

            color: "gold",

            fontWeight: "bold",
          }}
        >
          {room.price}
        </p>

        <Link to={`/room/${room.id}`}>

          <button
            style={{
              padding:
                "10px 20px",

              background:
                "#0b1730",

              color: "white",

              border: "none",

              borderRadius: "8px",

              cursor: "pointer",
            }}
          >
            View Details
          </button>

        </Link>

      </div>

    </div>
  );
}

export default RoomCard;