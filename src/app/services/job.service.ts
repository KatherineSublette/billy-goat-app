import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiBaseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getJobs(filter?: string): Observable<Job[]> {
    return this.http
      .get<Job[]>(this.apiBaseUrl + 'job' + filter);
  }

  getJob(jobId: number): Observable<Job> {
    return this.http.get<Job>(this.apiBaseUrl + 'job/' + jobId.toString());
  }

  getJobsByGuestId(guestId: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiBaseUrl + 'job/?guestId=' + guestId);
  }

  getJobsByGuideId(guideId: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiBaseUrl + 'job/?guideId=' + guideId);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiBaseUrl + 'job', job);
  }

  updateJob(job: Job): Observable<Job> {
    return this.http.put<Job>(this.apiBaseUrl + 'job/' + job.id.toString(), job);
  }

  deleteJob(jobId: number): Observable<Job> {
    return this.http.delete<Job>(this.apiBaseUrl + 'job/' + jobId.toString());
  }
}
