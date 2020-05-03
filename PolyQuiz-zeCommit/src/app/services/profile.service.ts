import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {httpOptionsBase, serverUrl} from '../../configs/server.config';
import {PROFILE_LIST} from '../mocks/profiles-list.mock';
import {Profile} from '../models/profile.models';
import {Stat} from '../models/stat.models';
import {Handicap} from '../models/handicap.models';


@Injectable({
    providedIn: 'root'
})

export class ProfileService {

  private profiles: Profile[] = PROFILE_LIST;

  private URL: string = serverUrl + '/profiles';
  public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(this.profiles);
  private httpOptions = httpOptionsBase;
  public selectedStats: Stat[];
  public selectedStats$: BehaviorSubject<Stat[]> = new BehaviorSubject(this.selectedStats);
  public createdStat: Stat;
  public createdStat$: BehaviorSubject<Stat> = new BehaviorSubject(this.createdStat);

  constructor(private http: HttpClient) {
    this.setProfilesFromUrl();
  }

  addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.URL, profile, this.httpOptions);

  }

  deleteProfile(id: number) {
    return this.http.delete(this.URL + '/' + id, this.httpOptions).subscribe(() => {
      this.setProfilesFromUrl();
    });
  }

  editProfile(profile: Profile) {
    return this.http.put<Profile>(this.URL + '/' + profile.id, profile, this.httpOptions).subscribe(() => {
      this.setProfilesFromUrl();
    });
  }

  setProfilesFromUrl() {
    this.http.get<Profile[]>(this.URL).subscribe((profiles) => {
      this.profiles = profiles;
      this.profiles$.next(this.profiles);
    });
  }

  addStat(stat: any, trouble: Handicap) {
    const statToCreate = {...stat};
    if (trouble === Handicap.Memoire) {
      let trial = [...statToCreate.trial].reduce((o, [key, value]) => (o[key] = value, o), {});
      statToCreate.trial = trial;
    }
    statToCreate.resume = [...statToCreate.resume].reduce((o, [key, value]) => (o[key] = value, o), {});
    this.http.post<Stat>(this.URL + '/' + stat.profileId + '/stats', statToCreate, this.httpOptions).subscribe((stat$) => {
      this.createdStat = stat$;
      this.createdStat$.next(this.createdStat);
    });
  }


  getProfileStats(profile: Profile) {
    this.http.get<Stat[]>(this.URL + '/' + profile.id + '/stats', this.httpOptions).subscribe((stats) => {
      this.selectedStats = stats;
      this.selectedStats$.next(this.selectedStats);
    });
  }


}

