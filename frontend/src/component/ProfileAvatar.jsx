import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const ProfileAvatar = () => {
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <div className="header-right">
      <Dropdown variant="secondary">
        <Dropdown.Toggle id="dropdown-basic" className="log-out-drop-down">
          <img
            className="profile-pic"
            src="images/user.png"
            alt="Profile"
            id="droptrigger"
          />
        </Dropdown.Toggle>
        <div className="dropcontent open">
          <Dropdown.Menu>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">Profile</a>
              </li>
              <li className="list-group-item">
                <Button onClick={logoutHandler}>Logout</Button>
              </li>
            </ul>
          </Dropdown.Menu>
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileAvatar;
