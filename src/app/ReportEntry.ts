export class ReportEntry {
    reportType: string;
    reportSelectionType: string;
    reportStatus: string;
    reportStartRangeTimestampInMs: number;
    reportEndRangeTimestampInMs:number;
    constructor(
    reportType: string,
    reportSelectionType: string,
    reportStatus: string,
    reportStartRangeTimestampInMs: number,
    reportEndRangeTimestampInMs:number
    ){
        this.reportStatus=reportStatus;
    }
  }