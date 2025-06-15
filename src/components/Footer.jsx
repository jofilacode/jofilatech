import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} JOFILATECH Solutions. All rights reserved.</p>
      <p>
        <a href="https://github.com/jofilacode" target="_blank" rel="noopener noreferrer">GitHub</a> 
      
      </p>
    </footer>
  );
}
