import shortid from "shortid";

const coordinateDummy = {
  coordinate: [
    {
      id: shortid.generate(),
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      text: "test",
    },
  ],
};

const postDummy = {
  post: null,
};

export { coordinateDummy, postDummy };
