import React from 'react'

const About = () => {
    var today = new Date();
    var birthDate = new Date("February 27, 2004"); 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
    }
    return (
        <div className="About Container">
            <h2>About me:</h2>
            <p>Use she/her when talking to me, use Luna for my name.
                <br />
                <br />
                I'm {age_now} years old, and I'm into coding, video games, and hiking.
                <br />
                <br />
                I'm really into music, I mostly listen to EDM & Alternative music.
                <br />
                I reccomend you check out K.Flay, Grandson, Mutemath, and Unlike Pluto.
                <br />
                <br />
                I dont have any projects im working on full speed right now, but some of
                <br />
                the personal projects i've worked on in the past have given me the skills to
                <br />
                make even better products going forward.
            </p>
        </div>
    )
}

export default About
