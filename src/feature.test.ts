jest.mock('console');

import { log } from 'console';
import { greet } from './feature';

describe('greet()', () => {
    it('should say "Hello, world!"', () => {
        greet();
        expect(log).toBeCalledWith('Hello, world!');
    });
});
