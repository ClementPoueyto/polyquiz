import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ProfileListPageComponent} from './selection-menu/profile-selection/profile-list-page/profile-list-page.component';
import {QuizListPageComponent} from './selection-menu/quiz-selection/quiz-list-page/quiz-list-page.component';
import {QuizCreatePageComponent} from './manage/quiz/creation-page/quiz-create-page/quiz-create-page.component';
import {QuizPageMemoryComponent} from './quizPage/quiz-page-memory/quiz-page-memory.component';
import {QuizPageVueComponent} from './quizPage/quiz-page-vue/quiz-page-vue.component';
import {QuizPageMoteurComponent} from './quizPage/quiz-page-moteur/quiz-page-moteur.component';
import {ManageProfilesComponent} from './manage/profile/manage-profiles/manage-profiles.component';
import {ProfileCreatePageComponent} from './manage/profile/profile-create-page/profile-create-page.component';
import {ManageQuizzesComponent} from './manage/quiz/manage-quizzes/manage-quizzes.component';
import {QuizCreateQuestionPageComponent} from './manage/quiz/creation-page/quiz-create-question-page/quiz-create-question-page.component';
import {QuizCreateQuestionComponent} from './manage/quiz/creation-page/quiz-create-question/quiz-create-question.component';
import {EditProfileComponent} from './manage/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component : AccueilComponent },
  { path: ':trouble/profile-list-page', component : ProfileListPageComponent },
  { path: ':trouble/profile-list-page/:idProfile/quiz-list-page', component : QuizListPageComponent },
  { path: 'memoire/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageMemoryComponent},
  { path: 'vue/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageVueComponent},
  { path: 'moteur/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageMoteurComponent},
  { path: ':trouble/profile-list-page/manage-quizzes/create', component : QuizCreatePageComponent },
  { path: ':trouble/profile-list-page/manage-quizzes/create/:quizId', component : QuizCreateQuestionComponent },
  { path: ':trouble/profile-list-page/manage-quizzes/create/:quizId/add-question/:questionId', component : QuizCreateQuestionPageComponent},
  { path: ':trouble/profile-list-page/manage-quizzes/create/:quizId/add-question', component : QuizCreateQuestionPageComponent },
  { path: ':trouble/profile-list-page/manage-profiles', component : ManageProfilesComponent},
  { path: ':trouble/profile-list-page/manage-quizzes', component : ManageQuizzesComponent},
  { path: ':trouble/profile-list-page/manage-profiles/edit/:profileId', component : EditProfileComponent},
  { path: ':trouble/profile-list-page/manage-profiles/create', component : ProfileCreatePageComponent},



]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
