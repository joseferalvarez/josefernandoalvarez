import React from 'react';

import {
    ProfileContainer,
    ProfileImage,
    ProfileVocation
} from './ProfileStyled';

import iconcode from "../../assets/icons/code.svg";

const Profile = ({ profile, images }) => {

    return (
        <ProfileContainer>

            <ProfileImage>
                <img src={images.profile} alt="" />
                <div></div>
            </ProfileImage>

            <div>
                <h1>{profile.name}</h1>
                <ProfileVocation>
                    <img src={iconcode} alt="" />
                    <h2>{profile.vocation}</h2>
                </ProfileVocation>
            </div>

        </ProfileContainer>
    );
}

export default Profile;
