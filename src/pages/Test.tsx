import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  return <div>νμ¬ μμΉ "/test/{id}"</div>;
};

export default Test;
