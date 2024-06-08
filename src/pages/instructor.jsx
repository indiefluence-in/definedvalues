import React from 'react';
import MetaTag from '../common/metatag';
import Instructor from '../components/instructor';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <MetaTag pageTitle={"Instructor"} />
            <Instructor />
        </WrapperFour>
    );
};

export default index;