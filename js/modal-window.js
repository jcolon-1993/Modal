// Declares modal object
var modal = (function ()
{
  // Creates mark up for modal
  var $window = $(window);
  var $modal = $("<div class='modal'/>");
  var $content = $("<div class='modal-content'/>");
  var $close = $("<button role='button' class='modal-close'>close</button>");
  // If user clicks on close
  $modal.append($content, $close);
  // Add close button
  $close.on("click", function(e)
  {
    // Prevent link beahvior
    e.preventDefault();
    modal.close();
  });

  // Add code to modal
  return{
    // Define center method
    center: function()
    {
      // Calculate disatnce from top left and left of windwo to the center the modal.
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      // Set css for the modal
      $modal.css(
        {
          // Center vertically
          top: top + $window.scrollTop(),
          // Center horizontally
          left: left + $window.scrollLeft()
        });
    },
    // Define open() method
    open: function(settings)
    {
      // Set new content of modal
      $content.empty().append(settings.content);

      // Set modal dimensions.
      $modal.css(
        {
          // Set width
          width: settings.width || "auto",
          // Set height
          height: settings.height || "auto"
          // Add it to the page
        }).appendTo("body");

        // Call center method
        modal.center();
        // Call it if window resizes.
        $(window).on("resize", modal.center);
    },
    // Define close() method
    close: function()
    {
      // Remove content from modal
      $content.empty();
      // Remove modal from page
      $modal.detach();
      // Remove event handler
      $(window).off("resize", modal.center);
    }
  };
}());
