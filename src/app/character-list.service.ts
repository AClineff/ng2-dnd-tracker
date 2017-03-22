import { Injectable } from '@angular/core';
import { Character } from "./character"

@Injectable()
export class CharacterListService {

  private characters: Character[] = [];

  private currentEditableCharacter: Character

  private currentActiveCharacter: Character

  constructor() {
    let c: Character = {
      initiative: 1,
      name: 'tester'
    }

    let c2: Character = {
      initiative: 2,
      name: 'Tester 2'
    }

    this.characters.push(c)
    this.characters.push(c2)

    this.sortCharacters();
  }

  getCharacters(): Character[] {
    return this.characters;
  }

  sortCharacters(): void {
    this.characters.sort((a, b) => {
      return b.initiative - a.initiative
    });
  }

  /**
   * Adds a new character to the character array.
   * If this character exists already it insteads edits its values
   * @param c The Character to be added
   */
  addCharacter(c: Character): void {
    if(!this.currentEditableCharacter) this.characters.push(c)
    this.sortCharacters()
  }

  getEditableCharacter(): Character {
    return this.currentEditableCharacter
  }

  setEditableCharacter(c: Character): void {
    this.currentEditableCharacter = c
  }

  clearEditableCharacter(): void {
    this.currentEditableCharacter = undefined
  }

  getActiveCharacter(): Character {
    return this.currentActiveCharacter
  }

  setActiveCharacter(c: Character): void {
    this.currentActiveCharacter = c;
  }

  clearActiveCharacter(): void{
    this.currentActiveCharacter = undefined;
  }

}
