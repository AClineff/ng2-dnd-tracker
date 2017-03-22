import { Component, OnInit } from '@angular/core'
import { Character } from "../character"
import { CharacterListService } from '../character-list.service'
import { MdDialogRef } from "@angular/material"

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  private c: Character = {name: "", initiative: null};

  constructor(private characterListService: CharacterListService,
              public dialogRef: MdDialogRef<AddCharacterComponent>) {
  }

  ngOnInit() {
    if(this.characterListService.getEditableCharacter()){
      this.c = this.characterListService.getEditableCharacter()
    }
  }

  /**
   * Submits a new character to the running character list
   */
  onSubmit(): void {
    // Check for empty fields
    if (!this.c.name || this.c.initiative === null) {
      console.warn("Blank input field");
      return;
    }

    // Force field value to int, check if valid integer
    if (!Number.isInteger(Number.parseInt(this.c.initiative))) {
      console.warn("Not an integer value");
      return;
    }

    // Add character to list
    // this.characterListService.addCharacter(this.c)
    this.dialogRef.close(this.c);
  }

}
