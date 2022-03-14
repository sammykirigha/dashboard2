import React from 'react';
import {render, screen} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Contents from '../components/body/Contents';

test('renders with correct text', () => {
    render(<Contents />)
    let element = screen.getByText('Visitors');
    // let header = screen.getByText((content, element) => content.startsWith('Marketing'))

    expect(element.textContent).toBe('Visitors')

})