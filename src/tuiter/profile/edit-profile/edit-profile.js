import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {editProfile} from "../profile-reducer";
import './index.css';

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [profileCurrState, setProfileCurrState] = useState(profile);

    const saveHandler = () => {
        dispatch(editProfile(profileCurrState));
    }

    const updateHandler = (event) => {
        const targetName = event.target.name;
        const newTargetName = event.target.value;
        const newProfile = {
            ...profileCurrState,
            [targetName]: newTargetName
        }
        setProfileCurrState(newProfile);
    }


    return (
        <div className="row wd-div-border">
            <li className="list-group-item margin-bottom">
                <div className="col">
                    <Link to="/tuiter/profile">
                        <FontAwesomeIcon icon={faClose}/>
                    </Link>
                    <span className="fw-bold">              Edit Profile</span>
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill float-end"
                                onClick={saveHandler}>Save</button>
                    </Link>
                </div>
            </li>
            <li className="list-group-item wd-margin-bottom-large">
                <div className="row">
                    <div>
                        <img src={`/images/${profile.bannerPicture}`} width="100%"/>
                    </div>
                    <div className="rounded-circle position-relative margin-bottom">
                        <img className="rounded-circle margin-top"
                             src={`/images/${profile.profilePicture}`} width={120} height={120}/>
                    </div>
                </div>
            </li>
            <div>
                <div className="form-floating margin-bottom">
                    <input type="text" className="form-control" name="firstName" id="nameFloating"
                           defaultValue={profile.firstName}
                           onChange={updateHandler}/>
                    <label htmlFor="nameFloating">First Name</label>
                </div>

                <div className="form-floating margin-bottom">
                    <input type="text" className="form-control" id="lastName"
                           defaultValue={profile.lastName} name="lastName"
                           onChange={updateHandler}/>
                    <label htmlFor="nameFloating">Last Name</label>
                </div>

                <div className="form-floating margin-bottom">
                    <textarea type="text" className="form-control" id="bio"
                              defaultValue={profile.bio} name="bio"
                              onChange={updateHandler}/>
                    <label htmlFor="bioFloating">Bio</label>
                </div>

                <div className="form-floating margin-bottom">
                    <input type="text" className="form-control" id="locationFloating"
                           defaultValue={profile.location} name="location"
                           onChange={updateHandler}/>
                    <label htmlFor="locationFloating">Location</label>
                </div>

                <div className="form-floating margin-bottom">
                    <input type="text" className="form-control" id="websiteFloating"
                           defaultValue={profile.website} name="website"
                           onChange={updateHandler}/>
                    <label htmlFor="websiteFloating">Website</label>
                </div>

                <div className="form-floating margin-bottom">
                    <input type="date" className="form-control" id="dateOfBirthFloating"
                           defaultValue={profile.dateOfBirth} name="dateOfBirth"
                           onChange={updateHandler}/>
                    <label htmlFor="dateOfBirthFloating">Birth date</label>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;