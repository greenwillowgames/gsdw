$(function () {
  $("li > a[href='" + location.pathname + "']").parent().addClass('active');
});
