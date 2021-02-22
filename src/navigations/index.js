import React from 'react';
import {useSelector} from 'react-redux';
import AnimatedStatusBar from '@Animations/AnimationStatusBar';
import Home from '@Containers/home';
import Login from '@Containers/login';
import Detail from '@Containers/home/Detail';
export default () => {
  const routeName = useSelector((state) => state.navigation.routeName);

  const renderRoute = () => {
    switch (routeName) {
      case 'Home':
        return <Home />;
      case 'Detail':
        return <Detail />;
    }
    return <Login />;
  };

  return (
    <>
      <AnimatedStatusBar />
      {renderRoute()}
    </>
  );
};
