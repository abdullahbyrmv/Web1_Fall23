let paragraph = $(".paragraph1");
let button = $("#Button");

button.click(function() {
  if (paragraph.is(":visible")) {
    paragraph.hide();
    button.text("Click again!");
  } else {
    paragraph.show();
    button.text("Click me!");
  }
});
