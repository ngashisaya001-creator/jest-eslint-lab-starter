const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {

    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('capitalizes a single word', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });

    test('returns empty string for empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles strings with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-world');
    });

});

describe('filterActiveUsers', () => {

    test('returns only active users from a mixed array', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true },
        ];
        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true },
        ]);
    });

    test('returns empty array when all users are inactive', () => {
        const users = [
            { name: 'Bob', isActive: false },
            { name: 'Dave', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns empty array for empty input', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

});

describe('logAction', () => {

    test('generates a correctly formatted log string', () => {
        const result = logAction('login', 'Alice');
        expect(result).toContain('Alice');
        expect(result).toContain('login');
        expect(result).toMatch(/^User Alice performed login at/);
    });

    test('returns empty string when action is missing', () => {
        expect(logAction('', 'Alice')).toBe('');
    });

    test('returns empty string when username is missing', () => {
        expect(logAction('login', '')).toBe('');
    });

});