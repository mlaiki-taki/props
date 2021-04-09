import React from 'react'
import PropTypes from "prop-types";
function Profile(props) {
    return (
        <div className="profile">
          <img src={props.children} alt="Myphoto"></img>
          <h2>{props.fullname}</h2>
          <p>{props.bio}</p>
          <p className="prof">{props.profession}</p>
          <div className="logos">
              <a href="https://github.com/JdidiNadhem?tab=repositories" target="blanc">
                  <img  src="github.png" alt="github"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/nadhem-jdidi-215709144/" target="blanc">
                  <img  src="linkedin.png" alt="linkedin"></img>
                  </a>
                  <a href="https://www.facebook.com/nadhem.jdidi" target="blanc"><img  src="facebook.png" alt="facebook"></img></a>
                  </div>
                  <button onClick={() => props.handleName(props.fullname)}>My name</button>
        </div>
    )
}
// Deffault props
Profile.defaultProps = {
fullname:"Your Name",
bio:"Your Degree ",
profession:"Your Profession",
children:"https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"
};
Profile.propTypes = {
 fullname: PropTypes.string,
 bio:PropTypes.string,
 profession:PropTypes.string,
 handleName:PropTypes.func
};


export default Profile
