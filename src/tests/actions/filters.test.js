import textFilter from '../../actions/filters';

test('should create textFilter action object', () => {
  const text = 'test text';
  const action = textFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});
