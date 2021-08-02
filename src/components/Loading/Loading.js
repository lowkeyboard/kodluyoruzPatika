import React from 'react';

import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={require('../../../assets/890-loading-animation.json')}></LottieView>
  );
};

export default Loading;
