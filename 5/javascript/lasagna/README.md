# Lucian's Luscious Lasagna

Welcome to Lucian's Luscious Lasagna on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.

## Exposing to Other Files

To make a `function`, a constant, or a variable available in _other files_, they need to be [exported][mdn-export] using the `export` keyword. Another file may then [import][mdn-import] these using the `import` keyword. This is also known as the module system. A great example is how all the tests work. Each exercise has at least one file, for example `lasagna.js`, which contains the _implementation_. Additionally there is at least one other file, for example `lasagna.spec.js`, that contains the _tests_. This file _imports_ the public (i.e. exported) entities in order to test the implementation:

```javascript
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```

[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

## Instructions

Lucian's girlfriend is on her way home and he hasn't cooked their anniversary dinner!

In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cook book.

You have four tasks, all related to the time spent cooking the lasagna.

## 1. Define the expected oven time in minutes

Define the `EXPECTED_MINUTES_IN_OVEN` constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is `40`.

## 2. Calculate the remaining oven time in minutes

Implement the `remainingMinutesInOven` function that takes the actual minutes the lasagna has been in the oven as a _parameter_ and _returns_ how many minutes the lasagna still has to remain in the oven, based on the **expected oven time in minutes** from the previous task.

```javascript
remainingMinutesInOven(30);
// => 10
```

## 3. Calculate the preparation time in minutes

Implement the `preparationTimeInMinutes` function that takes the number of layers you added to the lasagna as a _parameter_ and _returns_ how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

```javascript
preparationTimeInMinutes(2);
// => 4
```

## 4. Calculate the total working time in minutes

Implement the `totalTimeInMinutes` function that takes _two parameters_: the `numberOfLayers` parameter is the number of layers you added to the lasagna, and the `actualMinutesInOven` parameter is the number of minutes the lasagna has been in the oven. The function should _return_ how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

```javascript
totalTimeInMinutes(3, 20);
// => 26
```

## Source

### Created by

- @SleeplessByte

### Contributed to by

- @junedev