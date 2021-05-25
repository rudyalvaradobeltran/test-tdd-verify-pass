const { verifyPass } = require('./verifier');

describe('verifyPass', () => {
    test('no rules, passes', () => {
        const result = verifyPass('any', []);
        expect(result).toBeTruthy();
    });
    test('one failed rule, fails', () => {
        const result = verifyPass('any', [
            input => false,
        ]);
        expect(result).toBeFalsy();
    });
    test('one passing rule, passes', () => {
        const result = verifyPass('any', [
            input => true,
        ]);
        expect(result).toBeTruthy();
    });
});