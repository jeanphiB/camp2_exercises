import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const sampleTask = "Task 1";

test('App display task input', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('App accept text in input and to add a task in the list', () => {
  const app = shallow(
    <App />
  );

  app.find('input').simulate('change', {target: {value: sampleTask}});
  app.find('form').simulate('submit', {preventDefault: ()=>{}});
  expect(app.find('li').first().text()).toEqual(sampleTask);
});

test('App has a checkbox on a new task', () => {
  const app = shallow(
    <App />
  );

  app.find('input').simulate('change', {target: {value: sampleTask}});
  app.find('form').simulate('submit', {preventDefault: ()=>{}});
  expect(app.find('li').first().find('input').props().value).toEqual(false);
});

test('App accept to delete a completed task', () => {
  const app = shallow(
    <App />
  );

  app.find('input').simulate('change', {target: {value: sampleTask}});
  app.find('form').simulate('submit', {preventDefault: ()=>{}});
  app.find('li').first().find('input').first().simulate('change');
  app.find('li').first().find('input').at(1).simulate('click');
  expect(app.find('li').exists()).toEqual(false);
});
