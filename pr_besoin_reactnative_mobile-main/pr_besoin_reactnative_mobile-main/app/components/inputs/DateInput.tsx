import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MyText} from '../MyText';
import {COLORS} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
type Props = {
  placeholder: string;
  value?: Date | null;
  onSelect?: (d: Date) => void;
};
const DateInput = ({placeholder, onSelect, value}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={new Date()}
        onConfirm={(date: Date) => {
          setOpen(false);
          onSelect && onSelect(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.container}>
        <View style={styles.flagBox}>
          {value ? (
            <MyText color={COLORS.black}>{value.toDateString()}</MyText>
          ) : (
            <MyText color={COLORS.grey}>{placeholder}</MyText>
          )}
        </View>
        <AntDesign
          name="calendar"
          size={22}
          color={COLORS.black}
          style={styles.calanderIcon}
        />
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  flagBox: {flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1},
  calanderIcon: {opacity: 0.3},
});
