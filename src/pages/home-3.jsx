import React from 'react';
import MetaTag from '../common/metatag';
import HomeThree from '../components/homes/home-3';
import WrapperThree from '../layout/wrapper-3';

const index = () => {
    return (
        <WrapperThree>
            <MetaTag pageTitle={"Home 3"} />
            <HomeThree />
        </WrapperThree>
    );
};

export default index;