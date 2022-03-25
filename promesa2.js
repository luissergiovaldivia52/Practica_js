var promise = new Promise(function (resolve, reject) {
    console.log('Inside the resolver function'); // 1
    resolve();
    });
    promise.then(function () {
    console.log('Inside the onFulfilled handler'); // 3
    });
    console.log('This is the last line of the script');//2

    