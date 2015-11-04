$(window).load(function() {
  init();
});

function init() {
  initSubmitAjax();
  initDatePicker();
  initDateRangePicker();
}

function initSubmitAjax()  {
  var stuff;
  $('#filter').submit(function(e) {
    return e.preventDefault();
  });
  stuff = $(this).serialize();
  return $.ajax({
    url: '/timecards',
    method: 'get',
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
  $('#picker').daterangepicker();
}

function initDateRangePicker() {
  $('#picker').daterangepicker({
    format: 'MM/DD/YYYY',
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    dateLimit: { days: 60 },
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
       'This Month': [moment().startOf('month'), moment().endOf('month')],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    opens: 'right',
    drops: 'down',
    buttonClasses: ['btn', 'btn-sm'],
    applyClass: 'btn-primary',
    cancelClass: 'btn-default',
    separator: ' to ',
    locale: {
        applyLabel: 'Submit',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
    }
}, function(start, end, label) {
    $('#picker span.date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
});
}
