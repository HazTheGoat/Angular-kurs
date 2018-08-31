import { IHaveId } from "src/app/shared/interfaces/modelproperties";

export class CommentModel implements IHaveId {
  id: string;
  movieId: string;
  userId: string;
  title: string;
  comment: string;
}

