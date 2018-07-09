import filterText from '../../reducers/filters';

let initialState;

beforeEach(() => {
  initialState = { text: '' };
});

test('should set filters reducer default state', () => {
  const state = filterText(undefined, { type: '@@INIT' });
  expect(state).toEqual(initialState);
});

test('should set text filter', () => {
  const text = 'test';
  const action = {
    type: 'SET_TEXT_FILTER',
    text,
  };
  const state = filterText(initialState, action);
  expect(state).toEqual({
    text
  });
});
