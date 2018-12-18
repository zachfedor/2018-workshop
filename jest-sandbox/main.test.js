const { sum, difference } = require('./main');

test('adds 1 and 2 to get 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('difference of 3 and 2 to get 1', () => {
  expect(difference(3, 2)).toBe(1);
})

