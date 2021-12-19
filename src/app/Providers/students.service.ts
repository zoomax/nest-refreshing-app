import { HttpException, Injectable } from '@nestjs/common';
import { IStudent } from '../interfaces/student';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
import { StudentDto } from '../dto/student';
@Injectable()
export class StudentService {
  addStudent(payload: StudentDto): IStudent {
    const record = {
      id: uuid(),
      ...payload,
    };
    students.push(record);
    return record;
  }
  getStudents(): IStudent[] {
    return students;
  }
  getStudentById(id: string): IStudent {
    return students.find((item) => item.id == id);
  }
  deleteStudentById(id: string): void {
    students.filter((item) => item.id != id);
  }
  updateStudentById(id: string, payload: Partial<IStudent>): IStudent {
    let index = students.findIndex((item) => item.id == id);
    if (index > -1) {
      students[index] = { ...students[index], ...payload };
      return students[index];
    } else {
      throw new HttpException('record is not found', 404);
    }
  }
}
