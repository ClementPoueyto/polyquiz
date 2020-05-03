import {HighlightDirective} from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const elMock = {nativeElement: document.activeElement};
    const directive = new HighlightDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
