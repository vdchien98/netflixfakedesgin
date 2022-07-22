import { PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined } from '@material-ui/icons';
import './ListItem.scss';
import { useState } from 'react';
export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://static1.dienanh.net/upload/202205/db021250-c7f6-44fc-8177-46ba301dcfea.jpg" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>2 hour 9 mins 4 seconds</span>
                            <span className="limit">+16</span>
                            <span>1998</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="genre">Actions</div>
                    </div>
                </>
            )}
        </div>
    );
}
