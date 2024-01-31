import { expect, describe, afterEach, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../src/app/page';

describe('Home page', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(<Page />);
  });

  it(
    'should render a level 1 heading with the greeting "Hello, World!"',
    () => {
      render(<Page />);

      expect(
        screen.getByRole('heading', { level: 1, name: 'Hello, World!' })
      ).toBeDefined();
    }
  );
});
