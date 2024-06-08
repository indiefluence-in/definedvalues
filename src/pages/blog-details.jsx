import React from 'react';
import MetaTag from '../common/metatag';
import BlogDetails from '../components/blog-details';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <MetaTag pageTitle={"Blog Details"} />
            <BlogDetails />
        </WrapperFour>
    );
};

export default index;