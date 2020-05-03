import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AppRoutingModule} from './app.routing.module';
import {ProfileListPageComponent} from './selection-menu/profile-selection/profile-list-page/profile-list-page.component';
import {ProfileListComponent} from './selection-menu/profile-selection/profile-list/profile-list.component';
import {ProfileComponent} from './selection-menu/profile-selection/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {QuizListPageComponent} from './selection-menu/quiz-selection/quiz-list-page/quiz-list-page.component';
import {QuizListComponent} from './selection-menu/quiz-selection/quiz-list/quiz-list.component';
import {QuizComponent} from './selection-menu/quiz-selection/quiz/quiz.component';
import {QuizPageMemoryComponent} from './quizPage/quiz-page-memory/quiz-page-memory.component';
import {QuestionComponent} from './quizPage/question/question-memory/question-memory.component';
import {QuizPageSizeSelectionComponent} from './quizPage/quiz-page-vue/quiz-page-size-selection/quiz-page-size-selection.component';
import {EndQuizComponent} from './quizPage/end-quiz/end-quiz.component';
import {QuizPageVueComponent} from './quizPage/quiz-page-vue/quiz-page-vue.component';
import {HighlightDirective} from './directives/highlight/highlight.directive';
import {QuizPageMoteurComponent} from './quizPage/quiz-page-moteur/quiz-page-moteur.component';
import {QuestionVueComponent} from './quizPage/question/question-vue/question-vue.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuizCreatePageComponent} from './manage/quiz/creation-page/quiz-create-page/quiz-create-page.component';
import {QuizCreateEntranceComponent} from './manage/quiz/creation-page/quiz-create-entrance/quiz-create-entrance.component';
import {QuizCreateQuestionComponent} from './manage/quiz/creation-page/quiz-create-question/quiz-create-question.component';
import {QuizCreateQuestionPageComponent} from './manage/quiz/creation-page/quiz-create-question-page/quiz-create-question-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PopUpWarningComponent} from './pop-up/pop-up-warning/pop-up-warning.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MenuComponent} from './vertical-menu/menu/menu.component';
import {ManageProfilesComponent} from './manage/profile/manage-profiles/manage-profiles.component';
import {ProfileCreatePageComponent} from './manage/profile/profile-create-page/profile-create-page.component';
import {NavbarComponent} from './horizontal-menu/navbar/navbar.component';
import {ManageQuizzesComponent} from './manage/quiz/manage-quizzes/manage-quizzes.component';
import {DisplayQuestionComponent} from './pop-up/visualisation/display-question/display-question.component';
import {AddThemeComponent} from './manage/quiz/add-theme/add-theme.component';
import {ImageUploaderComponent} from './manage/image-uploader/image-uploader.component';
import {EditProfileComponent} from './manage/profile/edit-profile/edit-profile.component';
import {DisplayWindowComponent} from './pop-up/visualisation/display-profiles/display-window/display-window.component';
import {PopUpDeleteComponent} from './pop-up/pop-up-delete/pop-up-delete.component';
import {DisplayQuizComponent} from './pop-up/visualisation/display-quiz/display-quiz.component';
import {FiltreQuizComponent} from './vertical-menu/filtre-quiz/filtre-quiz.component';
import {DisplayStatComponent} from './pop-up/visualisation/display-profiles/display-stat/display-stat.component';
import {NavbarQuestionComponent} from './horizontal-menu/navbar-question/navbar-question.component';
import {SizeBoxDirectiveDirective} from './directives/size-box/size-box-directive.directive';
import {PopUpAnswerComponent} from './pop-up/pop-up-answer-component/pop-up-answer.component';
import {PopUpZoomComponent} from './pop-up/pop-up-zoom/pop-up-zoom.component';
import {QuestionMoteurComponent} from './quizPage/question/question-moteur/question-moteur.component';
import {PopUpConfirmAnswerComponent} from './pop-up/pop-up-confirm-answer/pop-up-confirm-answer.component';
import { PopUpTerminateComponent } from './pop-up/pop-up-terminate/pop-up-terminate.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProfileListPageComponent,
    ProfileListComponent,
    ProfileComponent,
    QuizListPageComponent,
    QuizListComponent,
    QuizComponent,
    QuizCreatePageComponent,
    QuizPageMemoryComponent,
    QuestionComponent,
    QuizPageSizeSelectionComponent,
    EndQuizComponent,
    QuizPageVueComponent,
    HighlightDirective,
    QuizPageMoteurComponent,
    QuestionVueComponent,
    QuizCreateEntranceComponent,
    QuizCreateQuestionComponent,
    QuizCreateQuestionPageComponent,
    PopUpWarningComponent,
    MenuComponent,
    ManageProfilesComponent,
    ProfileCreatePageComponent,
    NavbarComponent,
    ManageQuizzesComponent,
    DisplayQuestionComponent,
    AddThemeComponent,
    ImageUploaderComponent,
    EditProfileComponent,
    DisplayWindowComponent,
    PopUpDeleteComponent,
    DisplayQuizComponent,
    FiltreQuizComponent,
    DisplayStatComponent,
    NavbarQuestionComponent,
    SizeBoxDirectiveDirective,
    PopUpAnswerComponent,
    SizeBoxDirectiveDirective,
    PopUpZoomComponent,
    QuestionMoteurComponent,
    PopUpConfirmAnswerComponent,
    PopUpTerminateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [
    NgxImageCompressService,
    {
      provide: MatDialogRef,
      useValue: {}
    },

  ],
  entryComponents: [DisplayQuizComponent, PopUpDeleteComponent, PopUpWarningComponent, PopUpAnswerComponent, DisplayQuestionComponent,
    AddThemeComponent, DisplayWindowComponent, PopUpZoomComponent, PopUpConfirmAnswerComponent,PopUpTerminateComponent],

  bootstrap: [AppComponent],

  exports: []
})
export class AppModule { }
