import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {THEME_LIST} from '../mocks/theme.mock';
import {httpOptionsBase, serverUrl} from '../../configs/server.config';
import {Theme} from '../models/theme.models';

@Injectable({
    providedIn: 'root'
})

export class ThemeService {

  public themes: Theme[] = THEME_LIST;

  private URL : string = serverUrl+"/themes";
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);
  private httpOptions = httpOptionsBase;

  constructor(private http:HttpClient) {
    this.setThemesFromUrl()
  }

  addTheme(theme: Theme){
    return this.http.post<Theme>(this.URL, theme, this.httpOptions)
  }

  editTheme(theme:Theme){
    return this.http.put<Theme>(this.URL+"/"+(theme.id).toString(), theme, this.httpOptions)
  }

  deleteTheme(id: string) {
    return this.http.delete(this.URL+"/"+id, this.httpOptions)
  }

  setThemesFromUrl(){
    this.http.get<Theme[]>(this.URL).subscribe((themes) =>{
      this.themes = themes;
      this.themes$.next(this.themes);
    });
  }

}

