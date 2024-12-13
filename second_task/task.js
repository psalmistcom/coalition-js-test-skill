/**

* Explanation of Code 

In the code, I begin by ensuring that the DOM is fully loaded using $(document).ready(). This is crucial for ensuring that our jQuery code executes only after the page elements are available.
Fetching Post Data:

I used Ajax to retrieve the post data from the endpoint https://jsonplaceholder.typicode.com/posts/${postId}. 

Similarly, I fetch the comments associated with the post by calling the endpoint https://jsonplaceholder.typicode.com/posts/${postId}/comments. The comments are also converted to JSON format.

Merging Data: I add the retrieved comments to the post data by assigning the comments array to a new key called comments in the object.

Logging the Result: Finally, I log the complete object, which now includes both the post details and the associated comments, to the console.

Error Handling: The entire process has a error module to handle any potential errors that may arise during the fetching process, ensuring that any issues are logged to the console for debugging.
 

*/
$(document).ready(function () {
  var postID = 50;
  // Use Ajax to fetch the post with ID 50 and its comments
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts/${postID}`, // URL for the post with ID 50
    method: "GET",
    success: function (response) {
      // Fetch the comments associated with the post with ID 50
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${postID}/comments`, // URL for the comments of post 50
        method: "GET",
        success: function (commentsData) {
          // Merge comments array into the post data under the 'comments' key
          response.comments = commentsData;

          // Log the merged data to the console
          console.log(response);
        },
        error: function (error) {
          console.log("Error fetching comments:", error);
        },
      });
    },
    error: function (error) {
      console.log("Error fetching post:", error);
    },
  });
});
