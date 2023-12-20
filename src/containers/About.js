import react from "react";
import styled from 'styled-components';
import STRINGS from "../strings";
import profile from '../assets/images/profile.png';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Profile = styled.h2`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem;
    font-size: 1.2rem;
`;

const Profile_Description = styled.h2`
    padding: 1.2rem;
`

const Intro = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1rem;
    padding-left: 6rem;
`;

const About = () => {
     return(
        <Page>
            <Profile>
                <img src={profile} alt="profile image" width='30%'/>
                <Profile_Description>{STRINGS.about_profile}</Profile_Description>
            </Profile>
            <Intro>{STRINGS.about_intro}</Intro>
        </Page>
    )

}

export default About;