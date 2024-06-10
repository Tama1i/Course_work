import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APPLIANCES_BY_SEARCH_URL, APPLIANCES_BY_TAG_URL, APPLIANCES_TAGS_URL, APPLIANCES_URL, APPLIANCES_BY_ID_URL } from '../shared/constants/urls';
import { Appliances } from '../shared/models/Appliances';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Appliances[]> {
    return this.http.get<Appliances[]>(APPLIANCES_URL);
  }

  getAllAppliancesBySearchTerm(searchTerm: string) {
    return this.http.get<Appliances[]>(APPLIANCES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(APPLIANCES_TAGS_URL);
  }

  getAllAppliancesByTag(tag: string): Observable<Appliances[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Appliances[]>(APPLIANCES_BY_TAG_URL + tag);
  }

  getAppliancesById(appliancesId:string):Observable<Appliances>{
    return this.http.get<Appliances>(APPLIANCES_BY_ID_URL + appliancesId);
  }

}
