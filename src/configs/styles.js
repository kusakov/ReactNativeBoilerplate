import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  $rem: width > 340 ? 14 : 12,
};