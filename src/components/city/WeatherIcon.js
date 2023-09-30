import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LottieView  from 'lottie-react-native';

const WeatherIcon = ({ icon }) => {
  const anim = useRef(null);

  useEffect(() => {
    anim.current?.play();
  }, []);

  return (
    <View>
      <LottieView
        ref={anim}
        source={icon}
        loop
        style={{ width: 'auto', height: 'auto' }}
      />
    </View>
  )
}

export default WeatherIcon