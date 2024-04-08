test('addition', () => {
    expect(2+3).toBe(5);
});

test('null', () => {
    const i = null;

    // Number of expect in the test
    expect.assertions(2);

    expect(i).toBeNull();
    expect(i).toBeDefined();
});

const animals = ['cat', 'dog'];

test('Animal Array', () => {
    expect(animals).toContain('cat');
    expect(animals).toBeInstanceOf(Array);
});

const getData = () => {
    throw new Error('Not Found');
};

test('getData', () => {
    expect(() => getData()).toThrow('Not Found');
});