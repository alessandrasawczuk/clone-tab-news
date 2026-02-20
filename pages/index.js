import { useState } from "react";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

const images = [img1, img2, img3, img4, img5];

function Home() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div
      style={{
        height: "100vw",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10% 0px"
      }}
    >
      <img
        src={images[index].src}
        alt="grupo"
        title="clicaaa"
        onClick={nextImage}
        style={{
          width: "70%",
          height: "auto",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
}

export default Home;