import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import TemplateBlock from "./Template.style";

const Template = ({ children, header, footer }) => {
  return (
    <TemplateBlock>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </TemplateBlock>
  );
};

export default Template;
