import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import TemplateBlock from "./Template.style";

const Template = ({ children, footer }) => {
  return (
    <>
      <TemplateBlock>{children}</TemplateBlock>
      {footer && <Footer />}
    </>
  );
};

export default Template;
