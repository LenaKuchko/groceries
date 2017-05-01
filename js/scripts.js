$(function () {
  $("#form").submit(function (event) {
    var name = $("#name").val();
    var ids = ["fruits", "vegies", "dairy", "bread"];
    var order = [];

    $(".name").text(name);

    ids.forEach(function (id) {

      var userInput = $("select#"+id).val();
      if (userInput) {
        order.push(userInput);
      } else
        return;
    });

    order.sort();

    var orderUp = [];
    order.forEach(function (item) {
      orderUp.push(item.toUpperCase());
    });

    orderUp.forEach(function (item) {
      $("#order").append("<li>"+item+"</li>");
    })

    $("#form").hide();
    $("#order").show();
    event.preventDefault();
  });
});
