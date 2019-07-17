import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from '@testing-library/react';
// import { getByTestId } from '@testing-library/dom';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

// import App from '../App';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should render a button with text Throw Pitch', () => {
        const { getByText } = render(<Dashboard />);
        const button = getByText(/Throw Pitch/i);
        fireEvent.click(button);
    });
});
