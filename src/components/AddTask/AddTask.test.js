import renderer from 'react-test-renderer';
import AddTask from './index';

it('Renders form correctly', () => {
  const tree = renderer.create(<AddTask />).toJSON();
  expect(tree).toMatchSnapshot();
});
