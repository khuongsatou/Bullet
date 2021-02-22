import * as React from 'react';
import {Button} from 'react-native-paper';

export default ({title = '', onPress = () => {}}) => (
  <Button icon="login" mode="contained" onPress={onPress}>
    {title}
  </Button>
);
