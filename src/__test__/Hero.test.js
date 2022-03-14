import React from 'react';
import {render, screen} from '@testing-library/react';
import Hero from '../components/navbar/hero/Hero'
import '@testing-library/jest-dom/extend-expect';

test('Hero renders with correct text', () => {
    render(<Hero />)
    // let heroEl = screen.getByText('Welcome Samuel!')
    let heroEl2 = screen.getByText((content, element) => content.startsWith('Welcome'))

    expect(heroEl2.textContent).toBe('Welcome Samuel!')

})