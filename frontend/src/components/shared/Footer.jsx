import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
      <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      <div>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Terms of Service</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact Us</a>
      </div>
    </footer>
  )
}

export default Footer
