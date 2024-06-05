import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
    // création du bouton
    render(<Button>Click me</Button>);
    // Récupérer dans le DOM par contenu textuel
    const buttonElement = screen.getByText(/click me/i);
    // Vérifier qu’on a le texte dans le DOM
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
    // callback du clic sur le bouton
    const handleClick = jest.fn();
    // créer et récupérer le bouton
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    // cliquer sur le bouton
    fireEvent.click(buttonElement);
    // vérifier que le callback a été appelé une fois
    expect(handleClick).toHaveBeenCalledTimes(1);
});
