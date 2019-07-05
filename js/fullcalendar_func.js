
       	/* initialize the external events
		-----------------------------------------------------------------*/
	
		$('#external-events .external-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});

		});
	
	
		/* initialize the calendar
		-----------------------------------------------------------------*/
		
		$('#calendar').fullCalendar({
			
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			events: [
				{
					title: 'Lesson',
					start: '2015-07-01'
				},
				{
					title: 'Lesson',
					start: '2014-07-07',
					end: '2015-07-10'
				},
				{
					title: 'Exam',
					start: '2015-07-09T10:30:00'
				},
				{
					title: 'Meeting',
					start: '2015-07-12T10:30:00',
					end: '2015-07-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2015-07-12T12:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2015-07-28'
				},
				{
					title: 'Lesson',
					start: '2015-08-01'
				},
				{
					title: 'Lesson',
					start: '2015-08-07',
					end: '2015-08-10'
				},
				{
					title: 'Exam',
					start: '2015-08-09T10:30:00'
				},
				{
					title: 'Meeting',
					start: '2015-08-12T10:30:00',
					end: '2015-08-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2015-08-12T12:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2015-08-28'
				},
				{
					title: 'Lesson',
					start: '2015-09-01'
				},
				{
					title: 'Lesson',
					start: '2015-09-07',
					end: '2015-09-10'
				},
				{
					title: 'Exam',
					start: '2015-09-09T10:30:00'
				},
				{
					title: 'Meeting',
					start: '2015-09-12T10:30:00',
					end: '2015-09-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2015-09-12T12:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2015-09-28'
				}
			],
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
				
			}
		});
