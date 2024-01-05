import { Module } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { SummaryController } from './summary.controller';
import { ReportModule } from 'src/report/report.module';
import { ReportService } from 'src/report/report.service';

@Module({
  imports:[ReportModule],
  providers: [SummaryService,ReportService],
  controllers: [SummaryController],
})
export class SummaryModule {}
