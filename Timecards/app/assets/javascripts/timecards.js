$(window).load(function() {
  init();
});

function init() {
  initDatePicker();
  initDateRangePicker();
  initTableTabs();
}

function initSubmitAjax(start, end)  {
  var data = {'startDate':start , 'endDate':end}
  return $.ajax({
    url: '/timecards',
    method: 'post',
    dataType: 'json',
    data: data,
    success: function() {
      return console.log(start + " " + end);
    },
    error: function() {
      console.log('error');
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
    buttonClasses: ['btn-block', 'btn-sm'],
    applyClass: 'btn-primary',
    cancelClass: 'btn-danger',
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
    $('.js-dateRange').val(start.format('MMM D, YY') + ' to ' + end.format('MMM D, YY'));
    initSubmitAjax(start.format('YYYY-M-D'), end.format('YYYY-M-D'));
});
}

function initTableTabs(){
  $(".tableTab").click(function(e) {
        $(this).siblings().removeClass('activeTableTab');
        $(this).addClass('activeTableTab');
    });
}
