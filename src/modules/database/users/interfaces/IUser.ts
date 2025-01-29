// Interface para a coleção de usuários
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
