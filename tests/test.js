import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle'

test('checking validation of calculations(Rectangle Perimeter)', () => {
    const outputResult = getRectanglePerimeter(2,3);
    expect(outputResult).toBe(10);
})

test('checking validation of calculations(Rectangle Area)', () => {
    const result = getRectangleArea(2,2);
    expect(result).toBe(4);
})

test('checking info statement', () => {
    // const area = getRectangleArea(2,2);
    // const perimeter = getRectanglePerimeter(2,2);
    const finalResult = getRectangleInfo(2,2);
    
    expect(finalResult).toBe(console.log(`The perimeter of a rectangle is 8 and the area is 4`));
})