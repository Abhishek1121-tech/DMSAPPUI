import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export const httpDownloadOptions = {
  
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  responseType: 'arraybuffer'
};