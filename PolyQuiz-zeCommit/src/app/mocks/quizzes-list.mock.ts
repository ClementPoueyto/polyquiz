import {Quiz} from '../models/quiz.models';
import {Handicap} from '../models/handicap.models';

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'football',
        theme: {
            id: 1,
            name: 'SPORT'

        },
        id: 1,
        questions: [
            {
                text: 'Question test 1?',
                id: 1,
                quizId: 1,
                answersAreText: true,
                answers: [{
                    questionId: 1,
                    id: 1,
                    text: 'reponse 1 true',
                    isCorrect: true,

                },
                {
                    id: 2,
                    questionId: 1,
                    text: 'reponse 2 false',
                    isCorrect: false,
                },
                {
                    id: 3,
                    questionId: 1,
                    text: 'reponse 3 false',
                    isCorrect: false,
                },
                {
                    id: 4,
                    questionId: 1,
                    text: 'reponse 4 false',
                    isCorrect: false,
                },
                ],



            }, {
                text: 'Ceci est une réelle question ?',
                id: 2,
                quizId: 1,
                answersAreText: true,
                image: '../../../assets/img/question.jpg',
                answers: [{
                    id: 1,
                    text: 'reponse 1',
                    isCorrect: false,
                    questionId: 2,

                }, {
                    id: 2,
                    text: 'reponse 2',
                    isCorrect: true,
                    questionId: 2,

                },
                ]
            },
        ],
        trouble: Handicap.Memoire,
        image: '../../../assets/img/profil/Papy-Brossard.jpg',
    },
];
