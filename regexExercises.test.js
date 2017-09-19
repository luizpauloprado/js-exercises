import * as E from './regexExercises';

describe('Regex exercises', () => {
	describe('match', () => {
		it('should not match teste', () => {
			expect(E.match('teste')).toBeFalsy();
		});
		it('should not match literally', () => {
			expect(E.match('literally')).toBeFalsy();
		});
		it('should match LITERALLY', () => {
			expect(E.match('LITERALLY')).toBeTruthy();
		});
	});

	describe('hasDot', () => {
		it('should not match', () => {
			expect(E.hasDot('teste')).toBeFalsy();
		});
		it('should match .', () => {
			expect(E.hasDot('.')).toBeTruthy();
		});
		it('should match .com', () => {
			expect(E.hasDot('.com')).toBeTruthy();
		});
	});

	describe('hasBTwoTimes', () => {
		it('should not match', () => {
			expect(E.hasBTwoTimes('bom dia')).toBeFalsy();
		});
		it('should match bb', () => {
			expect(E.hasBTwoTimes('banco do brasil é bb')).toBeTruthy();
		});
	});

	describe('catOrBat', () => {
		it('should not match', () => {
			expect(E.catOrBat('panda')).toBeFalsy();
		});
		it('should match', () => {
			expect(E.catOrBat('cat')).toBeTruthy();
			expect(E.catOrBat('bat')).toBeTruthy();
		});
  });
  
  describe('catOrBatLower', () => {
		it('should not match', () => {
      expect(E.catOrBatLower('panda')).toBeFalsy();
      expect(E.catOrBatLower('Cat')).toBeFalsy();
      expect(E.catOrBatLower('Bat')).toBeFalsy();
		});
		it('should match', () => {
			expect(E.catOrBatLower('cat')).toBeTruthy();
			expect(E.catOrBatLower('bat')).toBeTruthy();
		});
  });

  describe('notCatOrBat', () => {
		it('should not match', () => {
      expect(E.notCatOrBat('cat')).toBeFalsy();
      expect(E.notCatOrBat('bat')).toBeFalsy();
      expect(E.notCatOrBat('panda')).toBeFalsy();
		});
		it('should match', () => {
      expect(E.notCatOrBat('mat')).toBeTruthy();
		});
  });

  describe('notWhiteSpace', () => {
		it('should match', () => {
      expect(E.notWhiteSpace('cat')).toBeTruthy();
		});
  });

  describe('foo', () => {
    it('should not match', () => {
      expect(E.foo('fooblue')).toBeFalsy();
		});
		it('should match', () => {
      expect(E.foo('foobar')).toBeTruthy();
      expect(E.foo('fooboo')).toBeTruthy();
		});
  });
  
  describe('isIs', () => {
    it('should not match', () => {
      expect(E.isIs('not')).toBeFalsy();
		});
		it('should match', () => {
      expect(E.isIs('there is')).toBeTruthy();
		});
  });
  
  describe('maybeTheWithSpaces', () => {
    it('should not match', () => {
      expect(E.maybeTheWithSpaces('not')).toBeFalsy();
		});
		it('should match', () => {
      expect(E.maybeTheWithSpaces('it was the')).toBeTruthy();
      expect(E.maybeTheWithSpaces('it was the thing')).toBeTruthy();
		});
  });

});
