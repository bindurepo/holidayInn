import { BinduModule } from './bindu.module';

describe('BinduModule', () => {
  let binduModule: BinduModule;

  beforeEach(() => {
    binduModule = new BinduModule();
  });

  it('should create an instance', () => {
    expect(binduModule).toBeTruthy();
  });
});
