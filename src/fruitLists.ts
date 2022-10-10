import fruits from "./fruits";
import orange from "./assets/orange.jpg";
import apple from "./assets/apple.jpg";
import kiwi from "./assets/kiwi.jpg";
import peach from "./assets/peach.jpg";

const fruitLists: fruits[] = [
    {
        imgUrl: orange,
        name: "Orange",
        calories: 46,
        macro: [11.8, 0.1, 0.9],
    },
    { imgUrl: apple, name: "Apple", calories: 57, macro: [15.5, 0.2, 0.1] },
    { imgUrl: kiwi, name: "Kiwi", calories: 53, macro: [13.5, 0.1, 1.0] },
    { imgUrl: peach, name: "Peach", calories: 40, macro: [10.2, 0.1, 0.6] },
];

export default fruitLists;
