import { Component, Input } from '@angular/core';
import {
  Question,
  AnswerOption,
} from '../../post/create-post/create-survey/create-survey.component';

interface Comment {
  username: string;
  content: string;
  replies: Reply[];
}

interface Reply {
  username: string;
  content: string;
}


@Component({
  selector: 'app-survey-content-card',
  templateUrl: './survey-content-card.component.html',
  styleUrls: ['./survey-content-card.component.css'],
})
export class SurveyContentCardComponent {
  @Input() username!: string;
  @Input() surveyTitle!: string;
  @Input() questions: Question[] = [
    {
      question: 'What is your age group?',
      answerType: 'single-choice',
      answerOptions: [
        { text: 'Under 18', selected: false },
        { text: '18-25', selected: false },
        { text: '26-35', selected: false },
        { text: '36-50', selected: false },
        { text: 'Over 50', selected: false },
      ],
      selectedOption: undefined,
    },
    {
      question: 'Which fruits do you like?',
      answerType: 'multiple-choice',
      answerOptions: [
        { text: 'Apple', selected: false },
        { text: 'Banana', selected: false },
        { text: 'Orange', selected: false },
        { text: 'Grapes', selected: false },
      ],
      selectedOption: undefined,
    },
    {
      question: 'How satisfied are you with our service?',
      answerType: 'linear-scale',
      minValue: 1,
      maxValue: 5,
      selectedOption: 1,
    },
  ];

  // Helper function to parse linear scale values
  parseLinearScaleValue(event: Event): number {
    const target = event.target as HTMLInputElement;
    const numberValue = parseFloat(target.value || '3');
    return isNaN(numberValue) ? 3 : Math.min(Math.max(numberValue, 1), 5);
  }

  showComments = false;

  toggleComments(): void {
    this.showComments = !this.showComments;
  }
  
}
