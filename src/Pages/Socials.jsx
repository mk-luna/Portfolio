import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Socials = () => {
    return (
        <div className="Socials Container">
            <h2>Social Links</h2>
            <table className="Social-Links">
                <tr>
                    <th>
                        <SocialIcon network="twitter" url="https://twitter.com/lunamkfinal" bgColor="white"></SocialIcon>
                    </th>
                    <th>
                        <SocialIcon network="discord" url="https://discord.gg/tkfyUWTvm9" bgColor="white"></SocialIcon>
                    </th>
                    <th>
                        <SocialIcon network="github" url="https://github.com/mk-luna" bgColor="white"/>
                    </th>
                    <th>
                        <SocialIcon network="stackoverflow" url="https://stackoverflow.com/users/14592154/dew" bgColor="white"/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <SocialIcon network="spotify" url="https://open.spotify.com/user/dewnite?si=685f712f07764a3f" bgColor="white"/>
                    </th>
                    <th>
                    <SocialIcon network="mailto" url="mailto:luna@mkfinal.com" bgColor="white"/>
                    </th>
                    <th>
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/stella-zoller-15a615217/" bgColor="white"/>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Socials
