import { TestBed } from '@angular/core/testing';

import { CommunityAPIService } from './community-api.service';

describe('CommunityAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunityAPIService = TestBed.get(CommunityAPIService);
    expect(service).toBeTruthy();
  });
});
