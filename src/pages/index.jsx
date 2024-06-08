import MetaTag from "../common/metatag";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";


const index = () => {
  return (
    <Wrapper>
      <MetaTag pageTitle={'Home - Defined Values CONSULTANTS Mentoring Self-Actualized Leaders'} />
      <Home />
    </Wrapper>
  );
};

export default index;