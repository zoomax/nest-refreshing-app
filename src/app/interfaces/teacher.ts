import { IStudent } from './student';
export interface ITeacher {
  name: string;
  id: string;
  students: IStudent[];
}
