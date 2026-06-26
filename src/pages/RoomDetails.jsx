import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RoomDetails() {
  const { id } = useParams();

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹2500 / Night",
     images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1200",
        ],
      description:
        "Luxury deluxe room with modern interior design, king size bed, free WiFi and beautiful atmosphere.",
      reviews: [
        "Excellent room and clean environment.",
        "Very comfortable stay.",
        "Friendly hotel staff.",
      ],
    },

    {
      id: 2,
      name: "Luxury Suite",
      price: "₹5000 / Night",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
        ],
      description:
        "Premium luxury suite with swimming pool view and top-class facilities.",
      reviews: [
        "Amazing luxury experience.",
        "Worth every rupee.",
        "Best suite room.",
      ],
    },

    {
      id: 3,
      name: "Family Room",
      price: "₹3500 / Night",
            images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1200",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
        ],
            description:
        "Spacious family room perfect for vacation and comfortable family stay.",
      reviews: [
        "Perfect for families.",
        "Nice and peaceful room.",
        "Kids enjoyed a lot.",
      ],
    },
  ];

  const room = rooms.find((item) => item.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!room) {
    return <h1>Room Not Found</h1>;
  }

  // AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === room.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [room]);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      style={{
        padding: "50px",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* 🖼️ IMAGE SLIDER */}
        <div style={{ position: "relative" }}>
          <img
            src={room.images[currentIndex]}
            alt={room.name}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          {/* PREV */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ⬅
          </button>

          {/* NEXT */}
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ➡
          </button>
        </div>

        {/* DETAILS */}
        <h1 style={{ marginTop: "25px", color: "#0b1730" }}>
          {room.name}
        </h1>

        <h2 style={{ color: "gold", marginTop: "10px" }}>
          {room.price}
        </h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#555",
          }}
        >
          {room.description}
        </p>

        {/* REVIEWS */}
        <h2 style={{ marginTop: "40px", color: "#0b1730" }}>
          Customer Reviews
        </h2>

        <div style={{ marginTop: "20px" }}>
          {room.reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "#f8fafc",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <h4 style={{ color: "gold" }}>⭐ Guest Review</h4>
              <p style={{ marginTop: "10px", color: "#555" }}>
                {review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;