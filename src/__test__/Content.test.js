import React from 'react';
import {render, screen} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Contents from '../components/body/Contents';
import { fireEvent, getByTestId } from '@testing-library/react';

test('first card renders with correct text', () => {
    render(<Contents />)
    let element = screen.getByText('Visitors');
    // let header = screen.getByText((content, element) => content.startsWith('Marketing'))

    expect(element.textContent).toBe('Visitors')

})

test('second card renders with correct text', () => {
    render(<Contents />)
    let element = screen.getByText('Orders');
    // let header = screen.getByText((content, element) => content.startsWith('Marketing'))

    expect(element.textContent).toBe('Orders')

})

test('third card renders with correct text', () => {
    render(<Contents />)
    // let element = screen.getByText('Orders');
    let element = screen.getByText((content, element) => content.startsWith('Sell'))

    expect(element.textContent).toBe('Sell your products on your exclusive APP published on the stores')

})

test('fourth card renders with correct text', () => {
    render(<Contents />)
    // let element = screen.getByText('Orders');
    let element = screen.getByText((content, element) => content.startsWith('Extensions'))

    expect(element.textContent).toBe('Extensions marketplace')

})

test('Dashboard inner card renders with correct text', () => {
    render(<Contents />)
    // let element = screen.getByText('Orders');
    let element = screen.getByText((content, element) => content.startsWith('Latest'))

    expect(element.textContent).toBe('Latest news')

})

test('Dashboardinner right card renders with correct text', () => {
    const {getByTestId} = render(<Contents />)
    let element = getByTestId('orders');

    expect(element.textContent).toBe('Orders')

})

test('the select element should change the values', () => {
    const {getByTestId} = render(<Contents />)
    let element = getByTestId('select');

    expect(element.value).toBe("1235")

    fireEvent.change(element, {
        target: {
            value: '1235'
        }
    })

    expect(element.value).toBe("1235")

})
