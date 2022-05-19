interface Node {
  state: unknown;
  father: Node;
  children: Node[];
  cost: number;
  depth: number;
}

type Line = "red" | "pink" | "blue" | "yellow";

type StationName =
  | "E1"
  | "E2"
  | "E3"
  | "E4"
  | "E5"
  | "E6"
  | "E7"
  | "E8"
  | "E9"
  | "E10"
  | "E11"
  | "E12"
  | "E13"
  | "E14"
  | "E15"
  | "E16"
  | "E17"
  | "E18"
  | "E19"
  | "E20"
  | "E21"
  | "E22"
  | "E23"
  | "E24"
  | "E25"
  | "E26"
  | "E27"
  | "E28"
  | "E29"
  | "E31"
  | "E32"
  | "E33"
  | "E34"
  | "E35"
  | "E36"
  | "E37"
  | "E38"
  | "E39"
  | "E40"
  | "E41"
  | "E42"
  | "E43";

interface Conection {
  name: StationName;
  cost: Cost;
}
interface Cost {
  direct: number;
  real: number;
  line: Line;
}

interface Station {
  name: StationName;
  conections: Conection[];
}

const stations: Record<StationName, Station> = {
  E1: {
    name: "E1",
    conections: [{ name: "E2", cost: { line: "pink", direct: 9, real: 10 } }],
  },
  E2: {
    name: "E2",
    conections: [
      { name: "E1", cost: { line: "pink", direct: 9, real: 10 } },
      { name: "E3", cost: { line: "pink", direct: 12, real: 13.2 } },
    ],
  },
  E3: {
    name: "E3",
    conections: [
      { name: "E2", cost: { line: "pink", direct: 12, real: 13.2 } },
      { name: "E4", cost: { line: "pink", direct: 9, real: 11.5 } },
    ],
  },
  E4: {
    name: "E4",
    conections: [
      { name: "E3", cost: { line: "pink", direct: 9, real: 11.5 } },
      { name: "E5", cost: { line: "pink", direct: 16, real: 17.1 } },
    ],
  },
  E5: {
    name: "E5",
    conections: [
      { name: "E4", cost: { line: "pink", direct: 16, real: 17.1 } },
      { name: "E6", cost: { line: "blue", direct: 5, real: 6 } },
      { name: "E8", cost: { line: "pink", direct: 11, real: 12.8 } },
      { name: "E43", cost: { line: "blue", direct: 7, real: 9 } },
    ],
  },
  E6: {
    name: "E6",
    conections: [
      { name: "E5", cost: { line: "blue", direct: 5, real: 6 } },
      { name: "E7", cost: { line: "blue", direct: 7, real: 7.7 } },
    ],
  },
  E7: {
    name: "E7",
    conections: [{ name: "E6", cost: { line: "blue", direct: 7, real: 7.7 } }],
  },
  E8: {
    name: "E8",
    conections: [
      { name: "E5", cost: { line: "pink", direct: 11, real: 12.8 } },
      { name: "E9", cost: { line: "pink", direct: 11, real: 11.9 } },
    ],
  },
};

interface Border {
  state: unknown;
}
