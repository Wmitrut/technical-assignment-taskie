import renderer from 'react-test-renderer';

import Task from './index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const task = {
  id: 'task-51662',
  title: 'Feed the cat',
  description: '',
};

it('Renders open task correctly with data', () => {
  const tree = renderer.create(<Task task={task} />).toJSON();
  expect(tree).toMatchSnapshot();
});
