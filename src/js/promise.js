/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 * Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені), міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
 *
 * Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено
 */
// ================================
/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */
const frameworks = ['React', 'Vue', 'Angular'];
const getRandomDelay = () => Math.ceil(Math.random() * 2000);
function makePromise(framework) {
  return new Promise((resolve, reject) => {
    const DELAY = getRandomDelay();
    setTimeout(() => {
      if (DELAY < 500) {
        resolve({ framework, delay: DELAY });
      } else {
        reject({ framework, delay: DELAY, error: 'Promise error' });
      }
    }, DELAY);
  });
}
const promises = frameworks.map(makePromise);
function onSuccess({ framework, delay }) {
  console.log(`✅ ${framework} won with ${delay} ms`);
}
function onError({ framework, delay, error }) {
  console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
}
/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms`
 * або результат помилки: `❌ ${error}! ${name} rejected in ${delay} ms`
 */
// Promise.race(promises).then(onSuccess).catch(onError);
/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: `✅ ${Framework_name} fulfilled in ${delay} ms`
 * Або з якою затримкою зареджектився один із них: `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 */
// Promise.all(promises)
//   .then(res => res.forEach(onSuccess))
//   .catch(onError);

/*
 * За допомогою Promise.allSettled отримайте масив результатів.
 * Виведіть на екран інформацію, з яким результатом виконався проміс для кожного фреймфорка:
 * `✅ ${Framework_name} fulfilled in ${delay} ms`
 * `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 *
 * Приклад відповіді:
 * {status: "fulfilled", value: 99},
 * {status: "rejected", reason: Error: an error}
 */

// Promise.allSettled(promises).then(res =>
//   res.forEach(({ status, reason, value }) => {
//     if (status === 'fulfilled') {
//       onSuccess(value);
//     } else {
//       onError(reason);
//     }
//   })
// );

/*
 * За допомогою Promise.any дочекайтеся завантаження першого успішного промісу та виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms` або результат помилки кожного промісу в catch: `❌ ${error}! ${name} rejected in ${delay} ms`
 * Приклад об'єкта помилки в catch:
 * {
 * errors: (3) [{…}, {…}, {…}]
 * message: "All promises were rejected"
 * stack: "AggregateError: All promises were rejected"
 * }
 */

// Promise.any(promises)
//   .then(onSuccess)
//   .catch(({ errors }) => {
//     errors.forEach(onError);
//   });
//   .catch(({ errors, message, stack }) => console.dir(errors, message, stack));

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

// 'console.log: 1'  'console.log: 2'  'promise: 1' 'promise: 2' 'setTimeout'

// const promise = new Promise((resolve, reject) => {
//     resolve(1);
//   reject(5);
//   console.log('134');
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//   console.log('134');  1

const promise = new Promise((resolve, reject) => {
  resolve('1');
});

promise
  .then(data => {
    console.log(data);
    return data;
  })
  .then(data => {
    console.log(data);
    if (!data) {
      throw new Error('Error in then!');
    }
    return '2';
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

//   1  undefined  'Error in then!
// 1     1    2
