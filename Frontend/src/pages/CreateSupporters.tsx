import CreateSupportersForm from "../components/CreateSupportersForm";
import MainStyled from "../components/Main/styled";
import { Card } from "../components/Card";

const CreateSupporters = () => {
  return (
    <MainStyled>
      <Card>
        <CreateSupportersForm />
      </Card>
    </MainStyled>
  );
};

export default CreateSupporters;
