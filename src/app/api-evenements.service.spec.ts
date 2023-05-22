import {TestBed} from '@angular/core/testing';

import {ApiEvenementsService} from './api-evenements.service';

describe('ApiEvenementsService', () => {
  let service: ApiEvenementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEvenementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
