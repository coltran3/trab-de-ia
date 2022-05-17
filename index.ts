interface Node {
  state: unknown;
  father: Node;
  children: Node[];
  cost: number;
  depth: number;
}
