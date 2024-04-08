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