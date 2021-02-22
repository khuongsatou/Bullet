import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import {useDispatch, useSelector} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';

export default ({routeName = '', title = '', description = ''}) => {
  const dispatch = useDispatch();
  const onBack = () => {
    dispatch(
      action(Types.getTypesUpdate('NAVIGATE'), {
        routeName: routeName,
      }),
    );
  };
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onBack} />
      <Appbar.Content title={title} subtitle={description} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      {/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
    </Appbar.Header>
  );
};
