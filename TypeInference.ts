// 아이템 19
/* 
let x: number = 12;
let y = 12;

const axis1: string = 'x';
const axis2 = 'y';

// 추론될 수 있는 경우라도 객체 리터럴과 함수 반환에는 타입 명시를 고려!

 */
// 아이템 20
/* 
let id = '12-34-56';
id = 12345; // 오류가 나온다.

let id1: string | number = '12-23';
id1 = 1234;

// 다른 타입에는 다른 변수를 사용하는게 바람직하다. 변수ㅕㅇ을 구체적으로 지을 수 있다.

const id3 = '123-234-123';
{
  const id3 = 21345; // 정상 가려지는 변수 (Shadowed)
}

// 타입이 다른 값을 다룰 때에는 변수를 재사용하지 않도록 한다.
 */

// 아이템 21
/* 
const mixed = ['x', 1];
const v = {
  x: 1,
};
v.x = 3;
v.x = '3';
v.y = 4;
// 위코드는 자바스크립트에서는 오류가 아니지만 타입스크립트에서는 오류다!
 */

// 아이템 22

interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if (polygon.bbox) {
    if (pt.x < box.x[0] || pt.x > box.x[1]) {
      // box undefined가 나온다.
    }
  }
}

const getNumber = async () => 42;
