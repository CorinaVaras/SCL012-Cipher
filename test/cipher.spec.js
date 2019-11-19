describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });



  describe('cipher.encode', () => {  // para la funcion codificar 

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');

    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");

    it('debería retornar "fghijklmnopqrstuvwxyzabcdx" para "abcdefghijklmnopqrstuvwxys" con offset 5');
    assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxys", 5), "fghijklmnopqrstuvwxyzabcdx");

  });

  describe('cipher.decode', () => { // para la funcion decodificar 

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
    assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    it('debería retornar "abcdefghijklmnopqrstuvwxys" para "fghijklmnopqrstuvwxyzabcdx" con offset 5');
    assert.equal(cipher.encode("fghijklmnopqrstuvwxyzabcdx", 5), "abcdefghijklmnopqrstuvwxys");

  });


});
