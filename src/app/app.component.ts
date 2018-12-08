import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { cards } from './cards';
import { Card } from './card.model';
import { topics } from './topics';
import { YouSureDialog } from './you-sure.dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxCount = 7;
  private _selectedBox = 1;
  cards: Card[];
  topics: string[];
  batchSize = 5;
  mode = 0;
  currentBatchIndex = null;
  batch = [];
  selectedTopics = [];

  constructor(
    private dialog: MatDialog
  ) {
    const storedCards = localStorage.getItem('cards');
    this.cards = JSON.parse(storedCards) || cards.map(card => ({...card}));
    const storedTopics = localStorage.getItem('topics');
    this.topics = JSON.parse(storedTopics) || [...topics];
    this.selectedTopics = this.topics.map(() => true);
  }

  get selectedBox(): number {
    return this._selectedBox;
  }

  set selectedBox(box: number) {
    this._selectedBox = box;
    this.updateBatchSize();
  }

  updateBatchSize() {
    this.batchSize = Math.min(this.batchSize, this.getCards(this.selectedBox, this.selectedTopics).length);
  }

  getCards(box: number, selectedTopics: boolean[]) {
    return this.cards.reduce((cardIds: number[], card: Card, cardId: number) => {
      if (card.box === box && selectedTopics[card.topic]) {
        cardIds.push(cardId);
      }
      return cardIds;
    }, []);
  }

  start() {
    const boxCardIds = this.getCards(this.selectedBox, this.selectedTopics);
    if (this.batchSize === 0 || boxCardIds.length === 0 || this.batchSize > boxCardIds.length) {
      return;
    }

    this.batch = [];
    for (let i = 0; i < this.batchSize; i++) {
      let randomCardId;
      do {
        randomCardId = boxCardIds[Math.floor(Math.random() * boxCardIds.length)];
      } while (this.batch.includes(randomCardId));
      this.batch.push(randomCardId);
    }
    this.currentBatchIndex = 0;
    this.mode = 1;
  }

  reset() {
    const dialogRef = this.dialog.open(YouSureDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.cards =  cards.map(card => ({...card}));
        localStorage.removeItem('cards');
      }
    });
  }

  success() {
    this.cards[this.batch[this.currentBatchIndex]].box++;
    localStorage.setItem('cards', JSON.stringify(this.cards));
    if (this.currentBatchIndex + 1 < this.batch.length) {
      this.currentBatchIndex++;
    } else {
      this.batchDone();
    }
  }

  failure() {
    if (this.currentBatchIndex + 1 < this.batch.length) {
      this.currentBatchIndex++;
    } else {
      this.batchDone();
    }
  }

  batchDone() {
    this.batch = [];
    this.currentBatchIndex = null;
    this.mode = 0;
  }
}
