import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseApiUrl = "https://file.io"

  constructor(private http:HttpClient) { }

  upload(file : File):Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append("file", file);

    const req = new HttpRequest('POST', `${this.baseApiUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/files`);
  }
}