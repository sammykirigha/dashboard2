
import React from 'react';
import {render, screen} from '@testing-library/react';
import Marketing from '../components/reusableCompts//Marketing'
import '@testing-library/jest-dom/extend-expect';

test('Hero renders with correct text', () => {
    render(<Marketing />)
    // let heroEl = screen.getByText('Welcome Samuel!')
    let header = screen.getByText((content, element) => content.startsWith('Marketing'))

    expect(header.textContent).toBe('Marketing data is being loaded.....')

})