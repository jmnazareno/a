import React from 'react'
import "./NewLayout.css"

export default function NewLayout() {
  return (
    <div className='Header'>
        <div className="HeaderContainer">
          <div className="log">
            <img src="./images/acn.png" alt="ACN Logo" />
          </div>
          <div className="HeaderCreate">
            <label className="btn btn-primary" htmlFor="create-post">Donate</label>
            <div className="profile-photo">
              <img src="./images/profile-1.jpg" alt="Profile" />
            </div>
          </div>
        </div>
     </div>
  )
}
