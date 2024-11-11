import React, { useState } from 'react';
import resume from '../assets/resume/Resume_Kunal_data_analyst.pdf';


const ContactPage = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: '',
    });
    const [msg, setMsg] = useState('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzhZCWVkA5iFpXx-FHDkjxjR9jZ7rpmB0Gmxzz0YcV70iQqpXK93-q7kE0j-7mbJc4h/exec';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(e.target), // Send form data
            });

            if (response.ok) {
                setMsg('Message sent successfully');
                setFormData({ Name: '', Email: '', Message: '' }); // Reset form data
                setTimeout(() => setMsg(''), 5000); // Clear message after 5 seconds
            } else {
                setMsg('Failed to send message.');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setMsg('Error occurred while sending message.');
        }
    };

    return (
        <div id="contact" className='banner-border'>
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-solid fa-envelope"></i> kunalgaurav9688@gmail.com</p>
                        <p><i className="fa-solid fa-square-phone"></i> 9113561972</p>
                        <div className="social-icons">
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            <a href=""><i class="bi bi-github"></i></a>
                            <a href=""><i class="bi bi-app"></i></a>
                        </div>
                        <a href={resume} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="Name" 
                                placeholder="Your Name" 
                                required 
                                value={formData.Name} 
                                onChange={handleChange} 
                            />
                            <input 
                                type="email" 
                                name="Email" 
                                placeholder="Your Email" 
                                required 
                                value={formData.Email} 
                                onChange={handleChange} 
                            />
                            <textarea 
                                name="Message" 
                                rows="6" 
                                placeholder="Your Message" 
                                value={formData.Message} 
                                onChange={handleChange} 
                            ></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg">{msg}</span>
                    </div>
                </div>
                {/* <div className="copyright">
                    <i className="fa-solid fa-copyright"></i> CopyRight Made by Kunal
                </div> */}
            </div>
        </div>
    );
};

export default ContactPage;
