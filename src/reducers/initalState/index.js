import shortid from "shortid";

const coordinateDummy = {
  coordinate: [
    {
      id: shortid.generate(),
      x: 2,
      y: 2,
      width: 100,
      height: 100,
      text: "네모",
    },
    {
      id: shortid.generate(),
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      text: "네모모",
    },
  ],
};

export { coordinateDummy };
