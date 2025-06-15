import '../styles/gallery.css';

const galleryItems = [
  {
    src: '/gallery/1.jpg',
    caption: 'Speaking at Lagos Dev Meetup 2024'
  },
  {
    src: '/gallery/3.jpg',
    caption: 'Collaborating with other Blockchain Engineers'
  },
  {
    src: '/gallery/4.jpg',
    caption: 'AI & Robotics Showcase, Abuja'
  },
  {
    src: '/gallery/5.jpg',
    caption: 'Open Source Community Contribution Meetup'
  },
  {
    src: '/gallery/6.jpg',
    caption: 'Backend Dev Summit, 2023'
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
