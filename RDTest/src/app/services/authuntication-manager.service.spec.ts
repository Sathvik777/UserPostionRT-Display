import { TestBed, inject } from '@angular/core/testing';

import { AuthunticationManagerService } from './authuntication-manager.service';

describe('AuthunticationManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthunticationManagerService]
    });
  });

  it('should be created', inject([AuthunticationManagerService], (service: AuthunticationManagerService) => {
    expect(service).toBeTruthy();
  }));
});
