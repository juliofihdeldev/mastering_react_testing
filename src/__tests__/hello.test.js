import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Hello from '../Hello';



test('Link change la classe lorsqu\'on le survole', () => {
  const component = renderer.create(
    <Hello name="http://www.facebook.com"/>
  );
    act(() => {
        /* fire events that update state */
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});