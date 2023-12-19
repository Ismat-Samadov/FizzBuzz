const fizzBuzzRules = [
  { condition: num => num % 3 === 0, output: 'Fizz' },
  { condition: num => num % 5 === 0, output: 'Buzz' },
  { condition: num => num % 7 === 0, output: 'Qux' },
  { condition: num => num % 3 === 0 && num % 5 === 0, output: 'FizzBuzz' }, 
];

function fizzBuzzAdvanced(start, end, rules) {
  for (let i = start; i <= end; i++) {
    const result = rules.reduce((acc, rule) => acc + (rule.condition(i) ? rule.output : ''), '');

    console.log(result || i);
  }
}

fizzBuzzAdvanced(1, 100, fizzBuzzRules);
