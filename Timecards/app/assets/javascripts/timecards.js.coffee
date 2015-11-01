# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready ->
  $('#filter').submit (e) ->
  	e.preventDefault()
  	stuff = $(this).serialize()
  	$.ajax
        url: '/timecards'
        method: 'post'
        dataType: 'json'
        data: stuff
        success: ->
        	console.log 'ess'
       	error: ->
       		console.log 'error'
       		console.log stuff
