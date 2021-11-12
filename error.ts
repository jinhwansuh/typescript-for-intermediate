// const states = [
//   { name: 'Alabama', capital: 'Montgomery' },
//   { name: 'Ska', capitol: 'Kime' },
// ];

// for (const state of states) {
//   console.log(state.capital);
// } // 오류가 난다.

// interface State {
//   name: string;
//   capital: string;
// }

// const stes: State[] = [
//   { name: 'Alabama', capitol: 'Montgomery' }, // 친절하게 알려주는 타입스크립트
//   { name: 'Ska', capital: 'Kime' },
// ];

// // 의도를 명확히 해서 오류를 찾을 수 있다.

// const a = null + 7;
// const b = [] + 12;
// alert('Hello', 'Type');

// const names = ['Alice', 'Bob'];
// console.log(names[2].toUpperCase()); // toUpperCase typeError

// const x: number = null;
// const y: number | null = null;
// const z: number = undefined;

// 벡터 연산

// interface Vector2D {
//   x: number;
//   y: number;
// }

// interface NamedVector {
//   name: string;
//   x: number;
//   y: number;
// }
// function calculateLength(v: Vector2D) {
//   return Math.sqrt(v.x * v.x + v.y * v.y);
// }

// interface Vector3D {
//   x: number;
//   y: number;
//   z: number;
// }

// const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
// console.log(calculateLength(v));

// function normalize(v: Vector3D) {
//   const length = calculateLength(v);
//   return {
//     x: v.x / length,
//     y: v.y / length,
//     z: v.z / length,
//   };
// }

// console.log(normalize({ x: 3, y: 4, z: 5 }));
// // 위에껀 오류를 잡지 못한다.

let age: number;
// age = '12';
age = '12' as any;
age += 1;
console.log(age);

let date: Date;

// interface에서 사용하는 것들의 이름을 바꿀수 있다.
interface Person {
  firsts: string;
  last: string;
}

const formatName = (p: Person) => `${p.firsts} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`; // 안바뀜 any라

interface ComonentProps {
  onSelectItem: (id: number) => void;
}

function renderSelector(props: ComonentProps) {}

let selectedId: number = 0;
function handleSelectItem(item: any) {
  selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
