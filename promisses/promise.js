const promiseOne = new Promise(function (reolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
  }, 1000);
  reolve();
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

const promiseTwo = new Promise(function (resove, reject) {
  setTimeout(function () {
    resove({ username: "abcd", email: "abc.example.com" });
  }, 1000);
});

promiseTwo.then(function (user) {
  console.log(user);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "zzz", email: "example2@example.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});
promiseThree
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
