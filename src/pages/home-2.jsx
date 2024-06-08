import React from 'react';
import MetaTag from '../common/metatag';
import HomeTwo from '../components/homes/home-2';
import WrapperTwo from '../layout/wrapper-2';

const index = () => {
    return (
        <WrapperTwo>
            <MetaTag pageTitle={"Home-2"} />
            <HomeTwo />
        </WrapperTwo>
    );
};

export default index;