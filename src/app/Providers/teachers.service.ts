import { HttpException, Injectable } from '@nestjs/common';
import { ITeacher } from '../interfaces/teacher';
import { teachers } from '../db';
import { v4 as uuid } from 'uuid';
import { TeacherDto } from '../dto/teacher';
@Injectable()
export class TeacherService {
  addTeacher(payload: TeacherDto): ITeacher {
    teachers.push({
      id: uuid(),
      ...payload,
    });
    return;
  }
  getTeachers(): ITeacher[] {
    return teachers;
  }
  getTeacherById(id: string): ITeacher {
    return teachers.find((item) => item.id === id);
  }
  deleteTeacherById(id: string): void {
    teachers.filter((item) => item.id !== id);
  }
  updateTeacherById(id: string, payload: Partial<ITeacher>): ITeacher {
    let index = teachers.findIndex((item) => item.id === id);
    if (index > -1) {
      teachers[index] = { ...teachers[index], ...payload };
      return teachers[index];
    } else {
      throw new HttpException('record is not found', 404);
    }
  }
}
