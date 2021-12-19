import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get('/')
  getAllTeachers(): string {
    return 'get all teachers';
  }
  @Post('/')
  createNewTeacher(
    @Body() teacherPayload: { name: string; address: string },
  ): string {
    return `create a teacher with the following data ${JSON.stringify(
      teacherPayload,
    )}`;
  }
  @Get('/:id')
  getTeacherById(@Param('id') id: string): string {
    return `get teacher data with id of ${id}`;
  }
  @Put('/:id')
  updateTeacherById(
    @Param('id') id: string,
    @Body() teacherPayload: { name: string; address: string },
  ): string {
    return `update teacher data with id of ${id} with the following data ${JSON.stringify(
      teacherPayload,
    )}`;
  }
  @Delete('/:id')
  deleteTeacherById(@Param('id') id: string): string {
    return `delete teacher with the following id ${id}`;
  }
}
