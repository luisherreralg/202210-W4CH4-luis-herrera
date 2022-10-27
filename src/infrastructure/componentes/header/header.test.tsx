import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Header component', () => {
    describe('When the component is rendered', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Header />
                </Router>
            );
        });

        test('Then it should display a heading with "ROBOTS"', () => {
            const element = screen.getByRole('heading', { name: 'ROBOTS' });
            expect(element).toBeInTheDocument();
        });

        test('Then it should display a link with "Inicio"', () => {
            const element = screen.getByRole('link', { name: 'Inicio' });
            expect(element).toBeInTheDocument();
        });

        test('Then it should display a link with "Robots"', () => {
            const element = screen.getByRole('link', {
                name: 'Robots',
            });
            expect(element).toBeInTheDocument();
        });
    });
});
