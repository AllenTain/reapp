$(window).load(function() {
  init();
});

function init() {
  initSubmitAjax();
  initDatePicker();
}

function initSubmitAjax()  {
  var stuff;
  $('#filter').submit(function(e) {
    return e.preventDefault();
  });
  stuff = $(this).serialize();
  return $.ajax({
    url: '/timecards',
    method: 'post',
    dataType: 'json',
    data: stuff,
    success: function() {
      return console.log('ess');
    },
    error: function() {
      console.log('error');
      return console.log(stuff);
    }
  });
}

function initDatePicker() {
  return $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    orientation: 'top',
    autoclose: true,
    todayBtn: true,
    todayHighlight: true
  });
}
