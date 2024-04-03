import { Controller, Get, Param } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor() {}

  @Get()
  async index(): Promise<boolean> {
    return true;
  }
}
