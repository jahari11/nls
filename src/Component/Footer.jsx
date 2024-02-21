import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = [
    {id: 1,name: 'Contact', link: "/"},
    {id: 2,name: 'Return Policy', link: "/"},
    {id: 3,name: 'Privacy Policy', link: "/"},
    {id: 4,name: 'FAQ', link: "/"},
  ]
  return (
    <footer>
      <div className="footer-links">
        <h2>Neverland Supply © 2024</h2>
      </div>
      <div className="footer-links">
      <ul>
        {footerLinks.map((item)=> (
          <li key={item.id}><Link to= {item.name}>{item.name}</Link></li>
        ))}
      </ul>
      </div>
      <div className="footer-links">
        <Link><i class="fa-brands fa-x-twitter"></i></Link>
        <Link><i class="fa-brands fa-instagram"></i></Link>
        <Link><i class="fa-brands fa-tiktok"></i></Link>
      </div>
    </footer>
  )
}

export default Footer