import { Choice } from "./choice";

export interface Poll {
  id: string;
  title: string;
  description: string;
  ownerId: number;
  username: string;
  choices: Choice[];
  voterList: number[];
}
