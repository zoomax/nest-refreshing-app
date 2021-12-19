import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { StudentDto } from 'src/app/dto/student';
import { IStudent } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/Providers/students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get('/')
  getAllStudents(): IStudent[] {
    return this.studentService.getStudents();
  }
  @Get('/:id')
  getStudentById(@Param('id') id: string): IStudent {
    console.log(id, this.studentService.getStudentById(id));
    return this.studentService.getStudentById(id);
  }
  @Post('/')
  createNewStudent(@Body() studentPayload: StudentDto): IStudent {
    return this.studentService.addStudent(studentPayload);
  }
  @Put('/:id')
  updateStudentById(
    @Param('id') id: string,
    @Body() studentPayload: Partial<StudentDto>,
  ): IStudent {
    return this.studentService.updateStudentById(id, studentPayload);
  }

  @Delete('/:id')
  deleteStudentById(@Param('id') id: string) {
    return this.studentService.deleteStudentById(id);
  }
}
