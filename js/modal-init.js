// Function loads as soon as page loads (Immediately Involved Function Expression)
(function ()
{
  // Removes modal from page
  var $content = $("#share-options").detach();

  /*
  event handler is set to respond to when
  the user clicks on the share button
  */
  $("#share").on("click", function()
  {
    /* function uses the open() method
    of the modal object. It takes parameters in the form
    of an object literal: */
    modal.open({content: $content, width: 340, height: 300});
  });
}());
