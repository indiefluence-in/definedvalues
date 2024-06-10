import MetaTag from "../common/metatag";
import { metaData } from "../data/metadata";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";


const index = () => {
  return (
    <Wrapper>
      <MetaTag title={metaData.home.title} />
      <Home />
    </Wrapper>
  );
};

export default index;