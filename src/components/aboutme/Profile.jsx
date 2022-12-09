import React from 'react';
import { ProfileContainer, ProfileImage, ProfileVocation } from './ProfileStyled';
import IconCode from "../../assets/icons/code.svg";

import data from "../../db/profile.json"
import photo from "../../assets/images/fotoperfil.png";

const Profile = () => {

    return (
        <ProfileContainer>

            <ProfileImage>
                <img src={photo} alt="" />
                <div></div>
            </ProfileImage>

            <div>
                <h1>{data.name}</h1>
                <ProfileVocation>
                    <img src={IconCode} alt="" />
                    <h2>{data.vocation}</h2>
                </ProfileVocation>
            </div>

        </ProfileContainer>
    );
}

export default Profile;
