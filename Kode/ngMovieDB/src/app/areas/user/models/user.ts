import { IHaveId } from "./../../../shared/interfaces/modelproperties";

export class UserModel implements IHaveId {
  id: string;
  name: string;
  avatar: string;
}
