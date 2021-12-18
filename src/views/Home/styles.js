import {StyleSheet} from 'react-native';
import {ColourPalette} from 'src/styles/ColourPalette';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor:ColourPalette.appBG
  },
  flatListView: {
    marginVertical: 10,
    flex: 1,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default styles;
