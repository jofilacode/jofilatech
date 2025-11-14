import '../styles/gallery.css';

const galleryItems = [
  {
    src: '/gallery/1.jpg',
    caption: 'Speaking on Building Scalable Database Architecture for Startups, 2024'
  },
  {
    src: '/gallery/3.jpg',
    caption: 'The Role of Databases in Crypto Apps and Web3 Projects : On-chain vs off-chain data'
  },
  {
    src: '/gallery/4.jpg',
    caption: 'Unveiling transformative AI tools and robotics technologies shaping tomorrow’s digital world.'
  },
  {
    src: '/gallery/5.jpg',
    caption: 'Marathon coding mode: completed. Short recharge before the next Web3 breakthrough.'
  }
];

export default function Gallery() {
  return (
    <section className="gallery">
     
      <p className="gallery-intro">
      Highlights from developer events and meetups—connecting, building, and sharing with the tech community.
      </p>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.caption} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
