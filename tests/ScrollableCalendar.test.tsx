import React from 'react';
import renderer from 'react-test-renderer';

import SymptomDisplay from '../components/SymptomDisplay';

describe('<ScrollableCalendar />', () => {
  it('has 30 days', () => {
    const tree = renderer.create(<SymptomDisplay/>);
    expect(tree.children.length).toBe(30);
  });
});
