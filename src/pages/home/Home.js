import React from 'react';

import './Home.scss';
// import { AcUnit } from '@material-ui/icons';
import NavBar from '../../componets/NavBar/NavBar';
import Featured from '../../componets/featured/Featured';
import List from '../../componets/list/List';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Featured
            // type="movie"
            />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
