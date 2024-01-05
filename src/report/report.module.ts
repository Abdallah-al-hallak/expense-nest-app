import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  exports:[ReportModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
