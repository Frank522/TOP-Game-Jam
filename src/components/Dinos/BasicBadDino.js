import GenericDino from "./GenericDino.js";

const BasicBadDino = (size) => {
  const { setImage, draw, flip, setColor, setSize } = GenericDino();
  setImage("src/assets/trex-skeleton.svg");
  setColor("red");
  flip();
  setSize(size);
  return { draw };
};

export default BasicBadDino;
