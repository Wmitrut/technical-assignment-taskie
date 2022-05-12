import renderer from 'react-test-renderer';

import Board from './index';

it('Renders correctly without data', () => {
  const tree = renderer.create(<Board />).toJSON();
  expect(tree).toMatchSnapshot();
});
