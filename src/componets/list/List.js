import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import ListItem from '../listitem/ListItem';
import './List.scss';

export default function List({ list }) {
    const [isMoved, setisMoved] = useState(false);
    const [slideNumber, setslideNumber] = useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        setisMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        // console.log(distance);
        if (direction === 'left' && slideNumber > 0) {
            setslideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === 'right' && slideNumber < 5) {
            setslideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick('left')} style={{ display: !isMoved && 'none' }} />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    );
}
