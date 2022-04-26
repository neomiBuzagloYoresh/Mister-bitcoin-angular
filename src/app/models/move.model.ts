// export interface Move {
//   id: string;
//   at: Date;
//   to: string;
//   toId: string;
//   amount: number;
// }

export class Move {
  constructor(
    public id: string,
    public toId: string = '',
    public to: string = '',
    public at: number,
    public amount: number = 0
  ) {}
}
