import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {editProfile} from "../profile-reducer";
import './index.css';

const EditProfile = () => {
    const nav = useNavigate();
    let [whatsHappening, setWhatsHappening] = useState('');
    const profile = useSelector((state) => state.profile);
    const onLoadData = {...profile}
    const dispatch = useDispatch();
    const [profileCurrState, setProfileCurrState] = useState(profile);
    const cancelListener = () => {
        dispatch(editProfile(onLoadData));
    }

    const changeListener = (event) => {

    }


    return (
        <></>
    );
}
export default EditProfile;