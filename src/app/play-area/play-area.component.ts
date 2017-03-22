import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterListService } from '../character-list.service';
import { MdDialog } from '@angular/material';
import { AddCharacterComponent } from "../add-character/add-character.component"

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {

  characters: Character[] = []

  constructor(private characterListService: CharacterListService,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.characters = this.characterListService.getCharacters()
  }

  /**
   * Uses Angular Material Dialog to present fillable form that is closed when the user submits their entry.
   */
  onAddCharacter(): void {
    let dialogRef = this.dialog.open(AddCharacterComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.characterListService.addCharacter(result)
      this.characterListService.clearEditableCharacter()
    })
  }

  /**
   * Uses same logic as the onAddCharacter, however it submits a character for editing
   * @param c Character to be edited
   */
  onEditCard(c: Character): void {
    this.characterListService.setEditableCharacter(c)
    this.onAddCharacter()
  }

  /**
   * Removes the card on screen and deletes the character from the list
   * @param c Character to be deleted
   */
  onDeleteCard(c: Character): void {
    let i = this.characters.indexOf(c)
    this.characters.splice(i, 1)
  }
}
