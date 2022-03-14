
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OneRoute from '../components/reusableCompts/OneRoute';

test('Hero renders with correct text', () => {
    render(<OneRoute />)
    // let heroEl = screen.getByText('Welcome Samuel!')
    let header = screen.getByText((content, element) => content.startsWith('Loading'))

    expect(header.textContent).toBe('Loading your data in a moment.....')

})