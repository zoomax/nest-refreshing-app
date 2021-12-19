import {ITeacher} from "./teacher" ; 
export interface IStudent {
    name: string;
    id: string;
    teachers: ITeacher[];
  }