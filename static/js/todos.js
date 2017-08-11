$(function() {
    var categories = ["action", "work"];
    $("#autocomplete").typeahead({ source: categories });
});