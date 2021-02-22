import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default React.memo(({source, style, resizeMode}) => {
  //khởi tao Animated cho thumnail và image large
  // const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);
  // const [loaded, setLoaded] = React.useState(false);

  //Khi tải hình nhỏ, ta sẽ đặt hình nhỏ thành 1
  //Khi tải hình ảnh đầy đủ, sẽ đặt imageAnimated thành 1
  //2 function phía dưới sẽ được gọi trong onLoad()
  const onImageLoad = () => {
    // setTimeout(() => {
    //   Animated.timing(imageAnimated, {
    //     toValue: 1,
    //     useNativeDriver: true,
    //   }).start();
    // }, 2000);

    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

    // setLoaded(true);
  };

  return (
    <View style={[styles.container, style]}>
      {/* <Animated.Image
        source={thumbnailSource}
        // source={null}
        style={[style, {opacity: thumbnailAnimated}]}
        resizeMode={resizeMode}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      /> */}
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        resizeMode={resizeMode}
        onLoad={onImageLoad}
      />
      {/* {!loaded && <MaterialIndicator color="#FC6B7B" size={10} />} */}
    </View>
  );
});

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 9999,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});
