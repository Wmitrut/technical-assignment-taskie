import renderer from 'react-test-renderer';

import AddColumn from './index';

it('Renders correctly', () => {
  const tree = renderer.create(<AddColumn />).toJSON();
  expect(tree).toMatchSnapshot();
});
