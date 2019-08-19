/* eslint-env jest */
import { filterProps } from '../src';

const pre = 'dir';

describe('Placeholder', () => {
  test('filterProps', () => {
    const props = {
      dirMarginRight: 10,
      dirMarginLeft: 20,
      dirLeft: 30,
      dirRight: 40,
    };

    const expected = {
      'margin-right': 10, 'margin-left': 20, left: 30, right: 40,
    };

    expect(filterProps(props, pre)).toEqual(expected);
  });
});
