import { Module } from '@nestjs/common';
import { StudentController } from './controllers/Student/student.controller';
import { TeacherStudentController } from './controllers/Teacher/teacher-student.controller';
import { TeacherController } from './controllers/Teacher/teacher.controller';
import { StudentService } from './Providers/students.service';
import { TeacherService } from './Providers/teachers.service';
@Module({
  providers: [StudentService, TeacherService],
  imports: [],
  controllers: [StudentController, TeacherController, TeacherStudentController],
})
export class AppModule {}
