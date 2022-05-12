import renderer from 'react-test-renderer';

import Header from './index';

it('Renders header correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
