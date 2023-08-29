const product = {
  Quantity: 0, // 55 + 30
  variant: [
    {
      color: "blue",
      ColorQuantity: 0,
      size: {
        l: 0, // 5
        m: 0, // 5
        n: 0,
      },
    },
    {
      color: "red",
      ColorQuantity: 60,
      size: {
        l: 10,
        m: 20,
        n: 30,
      },
    },
    {
      color: "green",
      ColorQuantity: 10,
      size: {
        l: 5,
        m: 0,
        n: 5,
      },
    },
  ],
};

const availableProduct = product?.variant?.filter(
  (available) => available?.ColorQuantity > 0
);
console.log(availableProduct);
const colorsArray = availableProduct.map((colorAndSize) => colorAndSize?.color);
console.log(colorsArray);
const SelectedColorProduct = availableProduct.find(
  (product) => product?.color == "red"
);
console.log(SelectedColorProduct?.size);
// const sizeSet = new Set(
//   variant.map((colorAndSize) => Object.keys(colorAndSize.size)).flat()
// );
// const sizeArray = Array.from(sizeSet);
// console.log(colorsArray);
// console.log(sizeSet);
