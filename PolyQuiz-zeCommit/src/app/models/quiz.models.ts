import {Handicap} from './handicap.models';
import {Question} from './question.models';
import {Theme} from './theme.models';

export interface Quiz {

    name: string;
    theme: Theme;
    id: number;
    trouble: Handicap;
    image: string;
    questions: Question[];
}
