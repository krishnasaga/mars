import React from 'react';
import ReactDOM from 'react-dom';
import { ImageCard } from './Cards.js';
import { mount } from 'enzyme';

describe('ImageCard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ImageCard/>, div);
    });
    
    it('', () => {
      const card = mount(<ImageCard options={{ title: 'Hello' }} />);
      expect(card.find('div').length).toEqual(1);
    });
    
});

