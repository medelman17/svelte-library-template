import Hello from '../lib/components/Hello.svelte';
import { render } from '@testing-library/svelte';

it('it works', () => {
	const { getByText } = render(Hello, { name: 'Mike' });
	expect(() => getByText('Hello, Mike!')).not.toThrow();
});
