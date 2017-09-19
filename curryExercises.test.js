import * as E from './curryExercises';

describe('Curry exercises', () => {
	it('Exercise 1', () => {
		expect(E.saySomething('Hi', 'Luiz')).toEqual('Hi Luiz');
		expect(E.saySomething('Hi')('Luiz')).toEqual('Hi Luiz');
	});
});
