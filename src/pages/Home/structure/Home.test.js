/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '.';

describe('homepage', () => {
	render(
		<Router>
			<Home />
		</Router>
	);
	test('user can be updated', () => {
		const userSearch = screen.getByRole('search');
		expect(userSearch).toBeTruthy();
	});
});
