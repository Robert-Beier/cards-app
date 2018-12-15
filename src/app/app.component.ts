import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Card } from './card.model';
import { YouSureDialog } from './you-sure.dialog';
import { MatSnackBar } from '../../node_modules/@angular/material/snack-bar';
import { Set } from './set.model';
import { defaultSets } from './default-sets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxCount = 7;
  private _selectedBox = 1;
  batchSize = 5;
  mode = 0;
  currentBatchIndex = null;
  batch = [];
  selectedTopics = [];
  private _selectedSet = 0;
  sets: Set[] = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.sets = [...defaultSets.map(set => ({...set, cards: set.cards.map(card => ({...card}))}))];
    this.sets = this.sets.map(set => {
      const storedCards = (localStorage.getItem(set.id + '.cards'));
      set.cards = JSON.parse(storedCards) || set.cards;
      return set;
    });
    this.selectedTopics = this.sets[this.selectedSet].topics.map(() => true);
  }

  get selectedBox(): number {
    return this._selectedBox;
  }

  set selectedBox(box: number) {
    this._selectedBox = box;
    this.updateBatchSize();
  }

  get selectedSet(): number {
    return this._selectedSet;
  }

  set selectedSet(set: number) {
    this.selectedTopics = this.sets[set].topics.map(() => true);
    this.selectedBox = 1;
    this._selectedSet = set;
  }

  updateBatchSize() {
    this.batchSize = Math.min(this.batchSize, this.getCards(this.selectedBox, this.selectedTopics).length);
  }

  getCards(box: number, selectedTopics: boolean[]) {
    return this.sets[this.selectedSet].cards.reduce((cardIds: number[], card: Card, cardId: number) => {
      if (card.box === box && selectedTopics[card.topic]) {
        cardIds.push(cardId);
      }
      return cardIds;
    }, []);
  }

  start() {
    const boxCardIds = this.getCards(this.selectedBox, this.selectedTopics);
    if (this.batchSize === 0 || boxCardIds.length === 0 || this.batchSize > boxCardIds.length) {
      this.snackBar.open('Die Kartenzahl muss passend gewählt werden!', 'OK', {
        duration: 2000,
        verticalPosition: 'top'
      });
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
        this.sets[this.selectedSet].cards =  defaultSets[this.selectedSet].cards.map(card => ({...card}));
        localStorage.removeItem(this.sets[this.selectedSet].id + '.cards');
      }
    });
  }

  success() {
    this.sets[this.selectedSet].cards[this.batch[this.currentBatchIndex]].box++;
    localStorage.setItem(this.sets[this.selectedSet].id + '.cards', JSON.stringify(this.sets[this.selectedSet].cards));
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

  backToOne() {
    this.sets[this.selectedSet].cards[this.batch[this.currentBatchIndex]].box = 1;
    localStorage.setItem(this.sets[this.selectedSet].id + '.cards', JSON.stringify(this.sets[this.selectedSet].cards));
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
