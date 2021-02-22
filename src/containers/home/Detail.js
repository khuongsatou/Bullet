import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import ItemAppBar from '@Components/items/ItemAppBar';
import {useDispatch, useSelector} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LeftContent = (props) => (
  <AntDesign {...props} name="smileo" color={'#333'} size={38} />
);

export default ({}) => {
  const listDetail = useSelector((state) => state.detail.listDetail);
  return (
    <>
      <ItemAppBar routeName="Home" title="Chi tiết" description="" />
      <Card>
        <Card.Title
          title={listDetail?.title}
          subtitle={listDetail?.description}
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri:
              'https://animehay.tv/uploads/images/2021/01/tatoeba-last-dungeon-mae-no-mura-no-shounen-ga-joban-no-machi-de-kurasu-youna-monogatari-thumbnail.jpg',
          }}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
};
