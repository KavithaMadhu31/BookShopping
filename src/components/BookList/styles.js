import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  nameView: {
    flex: 1,
    justifyContent: 'center',
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
  },
  name: {
    fontSize: 18,
    color: 'black',
  },
  phone: {
    marginTop: 10,
  },
});

export default styles;
