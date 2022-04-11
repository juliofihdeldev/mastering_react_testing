import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Link from '../Link';


test('Link change la classe lorsqu\'on le survole', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    act(() => {
        /* fire events that update state */
    
        
        // déclenche manuellement le callback
        tree.props.onMouseEnter();
        // re-rendu
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        
        // déclenche manuellement le callback
        tree.props.onMouseLeave();
    });
    // re-rendu
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
 

});