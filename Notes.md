For literals (numbers, strings etc) it might be better to make them variables as well.

That allows us to change the values. Increases the usability of flexibility of this code.

```js,
for (let num = 1; num < 101; num++) {
  if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz')
  else if (num % 3 === 0) console.log('Fizz!')
  else if (num % 5 === 0) console.log('Buzz')
  else console.log(num)
}

// becomes

let num1 = 3
let num2 = 5

for (let num = 1; num < 101; num++) {
  if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz')
  else if (num % 3 === 0) console.log('Fizz!')
  else if (num % 5 === 0) console.log('Buzz')
  else console.log(num)
}
```

This algorithm could grow. Are we just going to keep adding a thousand IF statements?

If evenly divisible by X, add WORD
could create an object
{
3: 'fizz',
5: 'buzz',
15: 'fizzbuzz'
}

"Wait, this is a dead end because I just saw this in the future. I'll have to do something else"
