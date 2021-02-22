/* eslint-disable no-undef */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';

export default ({item, index}) => {
  const dispatch = useDispatch();
  const onItem = () => {
    dispatch(
      action(Types.getTypesUpdate('NAVIGATE'), {
        routeName: 'Detail',
      }),
    );
    dispatch(
      action(Types.getTypesSucess('DETAIL'), {
        title: item.title + ' ' + index,
        description: item.description + ' ' + index,
      }),
    );
  };

  return (
    <TouchableOpacity onPress={onItem}>
      <Card>
        <Card.Content>
          <Title>{item.title + ' ' + index}</Title>
          <Paragraph>{item.description + ' ' + index}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
