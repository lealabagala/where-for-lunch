
import { getRandom, formatPrice, isPriceChecked, removePrice } from 'client/lib/utils';

describe('getRandom', () => {
  
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });

});

describe('formatPrice', () => {

  test('returns empty object when passed in an empty array', () => {
    const arr = [];
    expect(formatPrice(arr)).toBe('');
  });

  test('returns a comma-separated object when an array of objects is passed', () => {
    const arr = ['1','3','4'];
    expect(formatPrice(arr)).toBe('1,3,4');
  });

});

describe('isPriceChecked', () => {

  test('returns true when passed a object that exists in the array', () => {
    const arr = ['2','3'];
    expect(isPriceChecked(arr, '2')).toBe(true);
  });

  test('returns false when passed a object that does not exist in the array', () => {
    const arr = ['2','3'];
    expect(isPriceChecked(arr, '1')).toBe(false);
  });

});

describe('removePrice', () => {

  test('if the object exists in the array, returns an array without that object', () => {
    const arr = ['2','3'];
    expect(removePrice(arr, '2')).toEqual(['3']);
  });

  test('if the object does not exist in the array, returns the same array', () => {
    const arr = ['2','3'];
    expect(removePrice(arr, '1')).toEqual(['2','3']);
  });

});