function sleep(t) {
	return new Promise((resolve, reject) => {
		 setTimeout(() => {
			 resolve("done");
		 }, t);
	 });
 }
 async function testAsyncLoop() {
	 const arr = [1, 2, 3, 4, 5];
 
	 for(let i =0;i<arr.length;i++){
		 await sleep(1000)
		 console.log(arr[i])
	 }
 console.log("======== while =========")
	 while (arr.length) {
		 const what = await sleep(1000);
		 console.log(arr.shift(), what);
	 }
	 // await for(let i of arr){
 
	 // }
 }
 testAsyncLoop();