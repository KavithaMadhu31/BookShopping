import {StyleSheet} from 'react-native';
import {ColourPalette} from 'src/styles/ColourPalette';
const styles = StyleSheet.create({
  searchView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: ColourPalette.white,
    borderColor: ColourPalette.borderColor,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  searchTxt: {
    flex: 1,

    paddingRight: 10,
  },
  searchBtn: {color: ColourPalette.blue},
});

export default styles;
