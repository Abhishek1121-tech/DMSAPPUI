export interface ReportGenerationTypeWrapper {
    name: string;
     id: string;
  }

  export const reportGenerationTypeWrapper: ReportGenerationTypeWrapper[] = [
    {name: 'EXPENSE', id: 'A'},
    {name: 'SALESMAN', id: 'B'},
    {name: 'CUSTOMER', id: 'C'},
    {name: 'OUSTANDING', id: 'D'},
    {name: 'SLAESMAN_SALE', id: 'E'}
  ];
  
export interface ReportGenerationSelectionTypeWrapper {
    name: string;
     id: string;
  }
  
  export const reportGenerationSelectionTypeWrapper: ReportGenerationSelectionTypeWrapper[] = [
    {name: 'ALL', id: 'A'},
    {name: 'DATE_RANGE', id: 'B'}
  ];
  


