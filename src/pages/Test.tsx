import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  return <div>현재 위치 "/test/{id}"</div>;
};

export default Test;
