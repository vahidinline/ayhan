import first from "../src/img/first.jpeg";
import second from "../src/img/second.jpeg";
import third from "../src/img/third.jpeg";
import res1 from "../src/img/res-1.jpeg";
import res2 from "../src/img/res-2.jpeg";
import res3 from "../src/img/res-3.jpeg";
import com1 from "../src/img/com-1.jpeg";
import com2 from "../src/img/com-2.jpeg";
import com3 from "../src/img/com-3.jpeg";
export const products = [
  {
    id: 1,
    thumb: first,
    img: [],
    desc: "description ",
    title: "E-design Service",
  },
  {
    id: 2,
    thumb: second,
    img: [
      { id: 1, src: res1 },
      { id: 2, src: res2 },
      { id: 3, src: res3 },
    ],
    desc: "description ",
    title: "Minimal home Decoration",
  },
  {
    id: 3,
    thumb: third,
    img: [
      { id: 1, src: com1 },
      { id: 2, src: com2 },
      { id: 3, src: com3 },
    ],
    desc: "description ",
    title: "Minimal Commercial Decoration",
  },
];
