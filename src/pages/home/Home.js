import React, { useState, useEffect } from 'react';

import './Home.scss';
// import { AcUnit } from '@material-ui/icons';
import NavBar from '../../componets/NavBar/NavBar';
import Featured from '../../componets/featured/Featured';
import List from '../../componets/list/List';
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRamdomLists = async () => {
            try {
                const res = await axios.get(`http://localhost:9999/api/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQ2MWU2ODAzNTM3NDU3YmYxNDU0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ0MTY0NSwiZXhwIjoxNjYxODczNjQ1fQ.GmkgJLCqlqmrAWK_7uhiXtyMBwG_F5xC5MdB56NdWTo',
                    },
                });
                console.log(res);
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRamdomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <NavBar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List list={list} />
            ))}
        </div>
    );
};

export default Home;
