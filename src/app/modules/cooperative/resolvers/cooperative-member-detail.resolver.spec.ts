import { TestBed } from '@angular/core/testing';

import { CooperativeMemberDetailResolver } from './cooperative-member-detail.resolver';

describe('CooperativeMemberDetailResolver', () => {
  let resolver: CooperativeMemberDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CooperativeMemberDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
