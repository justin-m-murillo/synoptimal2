import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import cityStyle from '../../style/city';

const CityCardFooter = ({ toggleExpand }) => {
  return (
    <View className={cityStyle.cityFooter}>
      <TouchableOpacity
        className='w-full items-center justify-center'
        onPress={toggleExpand}
      >
        <AntDesign name="ellipsis1" size={48} color="#f1f5f9" />
      </TouchableOpacity>
    </View>
  )
}

export default CityCardFooter;