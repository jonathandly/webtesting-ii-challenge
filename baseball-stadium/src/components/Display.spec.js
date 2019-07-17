import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should render', () => {
        render(<Display />);
    });

    it('should display balls and strikes for current at-bat', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText('At-Bat')).toBeInTheDocument();

        const container = document.body;
        const balls = getByTestId(container, 'balls');
        const strikes = getByTestId(container, 'strikes');

        expect(balls).toBeVisible();
        expect(strikes).toBeVisible();
    });
});
