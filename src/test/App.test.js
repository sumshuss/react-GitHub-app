/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const repos = [
	{
		name: 'this is a test repo',
	},
	{ name: 'this is another test repo' },
];
const user = 'TestUser';

describe('testing the Navbar', () => {
	render(
		<Router>
			<App user={user} repos={repos} />
		</Router>
	);
	test('Header is present', async () => {
		const header = screen.getAllByRole('heading')[0];
		expect(header.textContent).toBe(' GitHub Repo getter');
	});
});
