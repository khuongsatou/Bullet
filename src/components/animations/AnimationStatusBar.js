import React from 'react';
import {Animated, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
export default () => {
  const statusBar = useSelector((state) => state.statusBar);

  return (
    <AnimatedStatusBar
      animated={true}
      backgroundColor={statusBar.backgroundColor}
      barStyle={statusBar.barStyle}
      translucent={true}
    />
  );
};
