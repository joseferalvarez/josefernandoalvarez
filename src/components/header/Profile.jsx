import React from 'react';

import {
    ProfileContainer,
    ProfileImage,
    ProfileVocation
} from './ProfileStyled';

import iconcode from "../../assets/icons/code.svg";
import photo from "../../assets/images/fotoperfil.png";

const Profile = ({ profile }) => {

    console.log(profile);

    return (
        <ProfileContainer>

            <ProfileImage>
                <img src={photo} alt="" />
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
