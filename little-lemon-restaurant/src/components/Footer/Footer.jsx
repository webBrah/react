import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <h2>Logo</h2>
            </div>
            <div className="footer-nav">
                <h3>Menu</h3>
                <ul>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Contact info here</p>
            </div>
            <div className="social">
                <h3>Social Media</h3>
                <p>Social here</p>
            </div>

        </footer>
    );
}
