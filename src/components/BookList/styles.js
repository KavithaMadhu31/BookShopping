import {StyleSheet} from 'react-native';
import {ColourPalette} from 'src/styles/ColourPalette';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    marginVertical: 5,
    backgroundColor: ColourPalette.white,
    borderRadius: 8,
    padding: 5,
    shadowColor: ColourPalette.textPrimary,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 1,
    borderWidth: 0.1,
    borderColor: ColourPalette.borderColor,
  },
  subContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  titleTxt: {
    fontSize: 14,
    color: ColourPalette.textPrimary,

    flex: 1,
  },
  createdAt: {
    fontSize: 10,
    color: ColourPalette.textPrimary,
  },
  authourTxt: {
    marginTop: 5,
    fontSize: 12,
    color: ColourPalette.textPrimary,
  },
});

export default styles;
