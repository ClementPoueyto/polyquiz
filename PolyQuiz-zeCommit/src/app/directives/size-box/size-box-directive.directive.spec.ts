import {SizeBoxDirectiveDirective} from './size-box-directive.directive';

describe('SizeBoxDirectiveDirective', () => {
  it('should create an instance', () => {
    const elMock = {nativeElement: document.activeElement};
    const directive = new SizeBoxDirectiveDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
