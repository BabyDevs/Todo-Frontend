import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h1>Main</h1>
      <Outlet />
      <h1>Nav....</h1>
    </>
  );
};

export default Main;
