import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const BaseLayout = () => {
  return (
    <>
      <LayoutWrapper>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/test/1"}>Test</Link>
        <Link to={"/test/2"}>Test</Link>
      </LayoutWrapper>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0cm;
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    border-radius: 5px;
    padding: 5px 10px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default BaseLayout;
