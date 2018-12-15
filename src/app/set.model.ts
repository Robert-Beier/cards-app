import { Card } from './card.model';
import { Topic } from './topic.model';

export class Set {
  id: string;
  label: string;
  cards: Card[];
  topics: Topic[];
}
