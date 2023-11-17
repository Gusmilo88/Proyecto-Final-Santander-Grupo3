import Layouts from "../../layouts/index";
import VistaSelector from "../../components/VistaSelector";
import FormContact from "../../components/FormContact";

const Contact = () => {
  return (
    <Layouts>
      <VistaSelector title="Contact" arrowLeft="/pastEvents" arrowRight="/stats"/>
        <FormContact/>
    </Layouts>
  );
};

export default Contact;
