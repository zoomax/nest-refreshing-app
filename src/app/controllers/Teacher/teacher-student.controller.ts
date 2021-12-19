import { Controller, Put, Get, Param, Body } from '@nestjs/common';

@Controller('/teachers/:id/students')
export class TeacherStudentController {
  @Get('/')
  getTeacherStudents(@Param('id') id: string): string {
    return `get students of the teacher with id of ${id} `;
  }
  @Put('/:studentId')
  updateTeacherStudent(
    @Param() ids: { id: string; studentId: string },
    @Body() studentPayload: { name: string; address: string },
  ): string {
    const { id, studentId } = ids;
    return `update student with id of ${studentId} of the teacher with id of ${id} with the following data ${JSON.stringify(
      studentPayload,
    )} `;
  }
}
