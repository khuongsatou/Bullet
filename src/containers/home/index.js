import React from 'react';
import {FlatList} from 'react-native';
import ItemCard from '@Components/items/ItemCard';
import ItemAppBar from '@Components/items/ItemAppBar';
import {HOME_DATA} from '@Datas/HomeData';
import {useDispatch} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';

export default () => {
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => {
    return <ItemCard item={item} index={index} />;
  };

  React.useEffect(() => {
    dispatch(
      action(Types.getTypesUpdate('CHANGE_STATUSBAR'), {
        barStyle: 'light-content',
        backgroundColor: '#6300ee',
      }),
    );
  }, []);

  return (
    <>
      <ItemAppBar
        routeName="Login"
        title="Trang chủ"
        description="Danh sách ghi chú"
      />
      <FlatList
        data={HOME_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};
