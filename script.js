//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
  const number = Number(input.value);

  // First Promise - 2 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 2000);
  })
    .then((result) => {
      output.innerText = `Result: ${result}`;

      // Second Promise - 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 2000);
      });
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;

      // Third Promise - 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;

      // Fourth Promise - 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;

      // Fifth Promise - 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((result) => {
      output.innerText = `Final Result: ${result}`;
    });
};