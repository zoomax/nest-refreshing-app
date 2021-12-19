import { ITeacher } from '../interfaces/teacher';
export interface StudentDto {
  name: string;
  teachers: ITeacher[];
}
