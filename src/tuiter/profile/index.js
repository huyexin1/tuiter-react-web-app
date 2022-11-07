import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeftLong,
    faBirthdayCake,
    faCalendar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return(
        <div className={'border'}>
            <li className="list-group-item  margin-left">
                <div className="row">
                    <div className="col-auto">
                        <FontAwesomeIcon icon={faArrowLeftLong}/>
                    </div>
                    <div className="col-10">
                        <span className="fw-bold font-20">{profile.firstName} {profile.lastName}</span>
                        <div className="text-secondary">{profile.tuits} Tuits</div>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div>
                        <img src={`../../images/${profile.bannerPicture}`} className="w-100"/>
                    </div>
                    <div className="rounded-circle">
                        <img className="rounded-circle position-relative" src={`/images/${profile.profilePicture}`} width={100}/>

                    </div>
                    <div>
                        <Link to="/tuiter/edit-profile">
                            <button className="btn btn-outline-dark rounded-pill top-margin float-end margin-right">
                                Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li className="list-group-item  margin-right margin-left">
                <div className="row">
                    <span className="fw-bolder">{profile.firstName} {profile.lastName}</span>
                    <span className="text-secondary wd-margin-bottom-small">{profile.handle}</span>
                    <span className="text-body wd-margin-bottom-small">{profile.bio}</span>
                    <br/>
                    <br/>
                    <div className="row bottom-margin">
                        <div className='col-3'>
                            <a href="#" className="text-secondary">
                                <FontAwesomeIcon className="wd-right-margin" icon={faLocationDot} />
                                <span>{profile.location}</span>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="#" className="text-secondary">
                                <FontAwesomeIcon className="wd-right-margin" icon={faBirthdayCake} />
                                <span>{profile.dateOfBirth}</span>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="#" className="text-secondary">
                                <FontAwesomeIcon className="wd-right-margin" icon={faCalendar} />
                                <span>{profile.dateJoined}</span>
                            </a>
                        </div>

                    </div>

                    <span className="text-secondary">
                        <span className="fw-bold text-black">{profile.followingCount}</span>
                        Following <span className="fw-bold text-black">{profile.followersCount}</span> Followers</span>

                </div>
            </li>
        </div>
    );
};
export default ProfileComponent;