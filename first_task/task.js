/**

* Explanation of Code 
In the code, I begin by ensuring that the DOM is fully loaded using $(document).ready(). This is crucial for ensuring that our jQuery code executes only after the page elements are available.

After that I got the id of the form using the documentgetelementById method and I prevented the form from reloading after the submit button is clicked.

Defining Post Data: We create an object called postInformation that contains the necessary keys for the post. This includes:

title: A string representing the title of the post.
body: A string that contains the main content of the post.
excerpt: A new key that captures the first 20 characters of the body content. This is done manually in this example, but it can also be dynamically generated using JavaScript string methods.
Sending the POST Request: We use jQuery's $.ajax() method to send a POST request to the specified API endpoint (https://jsonplaceholder.typicode.com/posts). The parameters for the request include:

url: The endpoint where the request is sent.
type: The HTTP method used, which is POST in this case.
contentType: Specifies the type of data being sent, which is JSON.
data: The postInformation object is converted to a JSON string using JSON.stringify().
Handling the Response: The success callback function is executed if the request is successful, logging the response to the console. Conversely, if an error occurs during the request, the error callback function logs the error details.
 

*/

$(document).ready(function () {
  document.getElementById("postInfo").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    // Collect form data
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    // Generate the excerpt (first 20 characters of body)
    const excerpt = body.substring(0, 20);

    // Prepare data to be sent
    const postInformation = {
      title: title,
      body: body,
      excerpt: excerpt,
    };

    // Send a POST request to the API
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(postInformation),
      success: function (response) {
        console.log("Post created successfully:", response);
      },
      error: function (error) {
        console.error("Error creating post:", error);
      },
    });
  });
});
