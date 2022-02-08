import { connect } from '@theme';
import { ViewStyle } from 'react-native';

type Style = {
  container: ViewStyle;
};

export default connect<Style>({
  container: 'flex items-center justify-center bg-white',
});
