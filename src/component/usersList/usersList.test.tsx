function sumT(a:number, b:number):number {
    return a + b;
  }
  
  it('test func 2 ',() => {
    expect(sumT(1, 2)).toBe(3);
  });
  