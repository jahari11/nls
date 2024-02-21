import React from 'react'

const ContactForm = () => {
  return (
    <div className="section">
        <div className='contact-sub'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus impedit possimus illum omnis aperiam obcaecati esse velit ullam. Possimus modi natus reprehenderit, esse repudiandae quo aspernatur aperiam veritatis minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nam animi similique eligendi ipsum vero debitis quas, officiis cupiditate quasi soluta doloribus vel rem velit error voluptatem, libero necessitatibus temporibus.</p>
    </div>
    <div className='container'>
        <div className="form-header">
            <h1>Neverland Supply</h1>
            <h5>Contact Us</h5>
        </div>
    <form>
        <div className="name">
            <label for="name"></label>
            <input type="text" placeholder='Name' name='name' required />
        </div>
        <div className="email">
            <label for="email"></label>
            <input type="text" placeholder='E-mail' name='email' required />
        </div>
        <div className="order">
            <label for="order"></label>
            <input type="text" placeholder='Order Number' name='order-number' />
        </div>
        <div className="message">
            <label for=""></label>
            <textarea name="message" id="message-input" cols="30" rows="5" placeholder='Your message'></textarea>
        </div>
    </form>
        <div className="submit">
            <button>Send Message</button>
        </div>
    </div>
    </div>
  )
}

export default ContactForm