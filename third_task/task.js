/**

* Explanation of Code 

In the code, I begin by ensuring that the DOM is fully loaded using $(document).ready(). This is crucial for ensuring that our jQuery code executes only after the page elements are available.
Fetching Post Data:

The provided code creates a simple HTML form that allows users to update a post by entering its ID, title, and body content. Additionally, users can add custom fields dynamically by entering the title and value.

HTML Structure: The form includes input fields for the post ID, title, and content. A section for custom fields is also included, which can be dynamically modified.

AJAX Submission: The update form function is triggered upon form submission. It prevents the default behavior and gathers the input values, including any custom fields added by the user. The data is then sent to a specified API endpoint.

Dynamic Custom Fields: Users can add custom fields by clicking the "Add Custom Field" button. This triggers the add-custom-field function, which creates new input fields for the title and value.

Error Handling: The AJAX request includes basic error handling to inform the user of success or failure during the update process.

*/
$(document).ready(function () {
  // Add custom field
  $("#add-custom-field").click(function () {
    $("#custom-fields-container").append(`
        <div class="custom-field">
          <input type="text" class="custom-key" placeholder="Custom Key">
          <input type="text" class="custom-value" placeholder="Custom Value">
        </div>
      `);
  });

  // Submit form via AJAX
  $("#update-post-form").submit(function (event) {
    event.preventDefault();

    var postId = $("#post-id").val();
    var postTitle = $("#post-title").val();
    var postBody = $("#post-body").val();
    var customFields = {};

    // Collect custom fields
    $("#custom-fields-container .custom-field").each(function () {
      var key = $(this).find(".custom-key").val();
      var value = $(this).find(".custom-value").val();
      if (key && value) {
        customFields[key] = value;
      }
    });

    // Prepare data to send
    var data = {
      title: postTitle,
      body: postBody,
      ...customFields, // Merge custom fields into the data
    };

    // AJAX request to update the post
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      data: JSON.stringify(data), // Convert data to JSON string
      contentType: "application/json",
      success: function (response) {
        console.log("Post updated successfully:", response);
        alert("Post updated successfully!");
      },
      error: function (error) {
        console.log("Error updating post:", error);
        alert("Error updating post. Please try again.");
      },
    });
  });
});
