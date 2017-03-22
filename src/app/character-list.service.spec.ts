/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterListService } from './character-list.service';

describe('CharacterListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterListService]
    });
  });

  it('should ...', inject([CharacterListService], (service: CharacterListService) => {
    expect(service).toBeTruthy();
  }));
});
