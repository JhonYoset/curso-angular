import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('log'));
    const directive = new ImgBrokenDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
