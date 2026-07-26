import "./Gallery.css";

const images = [
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    title: "Networking"
  },
  {
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    title: "CCTV Installation"
  },
  {
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80",
    title: "Wi-Fi Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "Biometric System"
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    title: "Server Rack"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    title: "IT Infrastructure"
  }
];

function Gallery() {
  return (
    <section className="gallery">

      <h2>Our Gallery</h2>

      <div className="gallery-grid">

        {images.map((item, index) => (

          <div className="gallery-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;