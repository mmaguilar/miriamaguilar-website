import react from "react";
import styled from 'styled-components';
import STRINGS from "../strings";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Profile = styled.h2`
    display: flex;
    flex-direction: row;
    flex-flow: space-around;
    padding: 3rem;
    font-size: 1.2rem;
`;

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
                <image>Image</image>
                <h2>{STRINGS.about_profile}</h2>
            </Profile>
            <Intro>{STRINGS.about_intro}</Intro>
        </Page>
    )

}

export default About;