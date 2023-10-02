import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LottieView  from 'lottie-react-native';

const WeatherIcon = ({ icon }) => {
  const anim = useRef(null);

  // temp fix for lottie/expo bug
  useEffect(() => {
    setTimeout(() => {
      anim.current?.play();
    }, 100);
  }, []);

  return (
    <View>
      <LottieView
        ref={anim}
        source={icon}
        autoPlay
        loop
        style={{ width: 'auto', height: 'auto' }}
      />
    </View>
  )
}

export default WeatherIcon