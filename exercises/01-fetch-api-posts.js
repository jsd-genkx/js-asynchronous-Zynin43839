/* 
TODO-01: Create a function named fetchPostsThen
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors

TODO-02: Export fetchPostsThen and test it in main.js 
*/
export const fetchPost = () => {
        const resource = "https://dummyjson.com/posts"
        fetch(resource)
            .then((respondse) =>{
            if(!respondse.ok) {
                throw new Error("Failed to fetch");
            }
                return respondse.json();
        })
    		.then((data) => {
			console.log(data.posts[1]);
		})

		.catch((error) => {
			console.log("Error occurred: ", error);
		});
}