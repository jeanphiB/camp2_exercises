import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('App display task input', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click on a case display an X', () => {
  const app = shallow(
    <App />
  );

  app.find('Board').simulate('click', 0);
  expect(app.find('Board').props().squares[0]).toEqual('X');
});

test('Click on a case display an X and next player is O', () => {
  const app = shallow(
    <App />
  );

  app.find('Board').simulate('click', 0);
  expect(app.find('Board').props().squares[0]).toEqual('X');
  expect(app.find('.game-info').text()).toMatch(/O$/);
});

test('Click on a case display an X, then next click on an other case display a O', () => {
  const app = shallow(
    <App />
  );

  app.find('Board').simulate('click', 0);
  expect(app.find('Board').props().squares[0]).toEqual('X');
  expect(app.find('.game-info').text()).toMatch(/O$/);
  app.find('Board').simulate('click', 1);
  expect(app.find('Board').props().squares[1]).toEqual('O');
  expect(app.find('.game-info').text()).toMatch(/X$/);
});

test('Click on a case display an X, then next click on the same case change nothing and next player is allways O', () => {
  const app = shallow(
    <App />
  );

  app.find('Board').simulate('click', 0);
  expect(app.find('Board').props().squares[0]).toEqual('X');
  expect(app.find('.game-info').text()).toMatch(/O$/);
  app.find('Board').simulate('click', 0);
  expect(app.find('Board').props().squares[0]).toEqual('X');
  expect(app.find('.game-info').text()).toMatch(/O$/);
});

test('Check for a winner', () => {
  const app = shallow(
    <App />
  );

  for(let i = 0; i < 7; i++) {
    app.find('Board').simulate('click', i);
  }
  expect(app.find('.game-info').text()).toMatch(/^Winner/);
});
