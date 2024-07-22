import './Footer.css'
function Contact(){
    return (

        <div className="footer-section contact-info">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Addis Abeba, 5 Kilo</p>
       
            <div className="phone">
                <strong>Phone:</strong>
                <div>
                    <a href="tel:0969827560">0969827560 </a>
                    <a href="tel:0902903480">0902903480</a>
                </div>
            </div>
            
            <div className="email">
                <strong>Email:</strong> 
                <div>
                    <a href="mailto:ephremmamo555@gmail.com">ephremmamo555@gmail.com</a>
                    <a href="mailto:romankebede@gmail.com">romankebede@gmail.com</a>
                </div>
                
            </div> 
    </div>
    
    );
}

export default Contact