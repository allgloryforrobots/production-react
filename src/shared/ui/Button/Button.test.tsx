import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('test', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'));
    });
});
