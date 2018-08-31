import { IHaveId } from "./../../../shared/interfaces/modelproperties";

/** Comments is optional */
export class MovieModel implements IHaveId {
  id: string;
  img: string;
  title: string;
  rating: string;
  description: string;
  comments?: IHaveId[];
}
