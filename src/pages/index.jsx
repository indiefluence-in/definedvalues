import MetaTag from "../common/metatag";
import { metaData } from "../data/metadata";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import WrapperTwo from '../layout/wrapper-2';
import HomeTwo from "../components/homes/home-2";


const index = () => {
  return (
    <Wrapper>
      <MetaTag title={metaData.home.title} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;