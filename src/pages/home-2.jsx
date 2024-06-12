import React from 'react';
import MetaTag from '../common/metatag';
import HomeTwo from '../components/homes/home-2';
import WrapperTwo from '../layout/wrapper-2';
import Home from '../components/homes/home';

const index = () => {
    return (
        <WrapperTwo>
            <MetaTag pageTitle={"Home-2"} />
            <Home/>
        </WrapperTwo>
    );
};

export default index;