import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Layout } from './layout';

describe('Given Header component', () => {
    describe('When the component is rendered', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Layout>
                        <p>Test</p>
                    </Layout>{' '}
                </Router>
            );
        });

        test('Then it should display a Header component', () => {
            const element = screen.getByRole('heading', { name: 'ROBOTS' });
            expect(element).toBeInTheDocument();
        });

        test('Then it should display a Children component', () => {
            const element = screen.getByText(/test/i);
            expect(element).toBeInTheDocument();
        });
    });
});
