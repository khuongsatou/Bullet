import React from 'react';
import {View, StyleSheet} from 'react-native';
import ItemInput from '@Components/items/ItemInput';
import ItemButton from '@Components/items/ItemButton';
import ItemLogo from '@Components/items/ItemLogo';
import Styles, {screenWidth} from '@Themes';
import {useDispatch} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';

export default () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(
      action(Types.getTypesUpdate('NAVIGATE'), {
        routeName: 'Home',
      }),
    );
  };

  React.useEffect(() => {
    dispatch(
      action(Types.getTypesUpdate('CHANGE_STATUSBAR'), {
        barStyle: 'dark-content',
        backgroundColor: '#fff',
      }),
    );
  }, []);

  return (
    <View style={[styles.swapper]}>
      <View style={[{width: screenWidth - 32, marginLeft: 16}]}>
        <View style={[Styles.vCenter]}>
          <ItemLogo />
        </View>
        <ItemInput label={'Tài khoản'} />
        <View style={[{marginTop: 8}]} />
        <ItemInput label={'Mật khẩu'} />
        <View style={[{marginTop: 16}]} />
        <ItemButton title={'Đăng nhập'} onPress={onLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
