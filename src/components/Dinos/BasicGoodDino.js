import GenericDino from "./GenericDino.js";

const BasicGoodDino = (size) => {
  const { setImage, draw, flip, setColor, setSize } = GenericDino();
  setImage("src/assets/velociraptor.svg");
  setColor("red");
  setSize(size);
  return { draw };
};

export default BasicGoodDino;
