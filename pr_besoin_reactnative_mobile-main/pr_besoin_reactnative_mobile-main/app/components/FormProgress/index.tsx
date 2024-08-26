import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../MyText';

const FormProgress = ({
  percent = 0,
  step = 0,
}: {
  percent?: number;
  step?: number;
}) => {
  const length = 5;
  return (
    <View>
      <View style={styles.percentageContainer}>
        <MyText color={COLORS.red} bold={FONT_WEIGHT.bold} size={FONT_SIZE.xl}>
          {percent}
          {'%'}
        </MyText>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.line} />
        {new Array(length).fill(undefined).map((_, key) => {
          const isActive = key <= step;
          return (
            <View key={key} style={styles.itemContainer}>
              <View
                style={[
                  styles.circle,
                  isActive
                    ? {
                        borderColor: COLORS.lightGreen,
                      }
                    : null,
                ]}>
                <View
                  style={[
                    styles.innerCircle,
                    isActive
                      ? {
                          backgroundColor: COLORS.lightGreen,
                        }
                      : null,
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FormProgress;

const CIRCLE_SIZE = 30;

const styles = StyleSheet.create({
  percentageContainer: {marginVertical: 10},
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  innerCircle: {
    width: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE / 2,
    backgroundColor: 'lightgrey',
    borderRadius: CIRCLE_SIZE / 2,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'lightgrey',
    position: 'absolute',
  },
});
