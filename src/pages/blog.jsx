import React from 'react';
import MetaTag from '../common/metatag';
import Blog from '../components/blog';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
           <MetaTag pageTitle={"Blog"} /> 
           <Blog />
        </WrapperFour>
    );
};

export default index;