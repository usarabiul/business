"use strict"
 document.addEventListener('DOMContentLoaded', function() {

		/* initialize the external events
		-----------------------------------------------------------------*/

		var containerEl = document.getElementById('external-events');
		new FullCalendar.Draggable(containerEl, {
		  itemSelector: '.external-event',
		  eventData: function(eventEl) {
			return {
			  title: eventEl.innerText.trim()
			}
		  }
		 
		});
		
		

		//// the individual way to do it
		// var containerEl = document.getElementById('external-events-list');
		// var eventEls = Array.prototype.slice.call(
		//   containerEl.querySelectorAll('.fc-event')
		// );
		// eventEls.forEach(function(eventEl) {
		//   new FullCalendar.Draggable(eventEl, {
		//     eventData: {
		//       title: eventEl.innerText.trim(),
		//     }
		//   });
		// });

		/* initialize the calendar
		-----------------------------------------------------------------*/

		var calendarEl = document.getElementById('calendar');
		var calendar = new FullCalendar.Calendar(calendarEl, {
		  headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		  },
		  
		  selectable: true,
		  selectMirror: true,
		  select: function(arg) {
			var title = prompt('Event Title:');
			if (title) {
			  calendar.addEvent({
				title: title,
				start: arg.start,
				end: arg.end,
				allDay: arg.allDay
			  })
			}
			calendar.unselect()
		  },
		  
		  editable: true,
		  droppable: true, // this allows things to be dropped onto the calendar
		  drop: function(arg) {
			// is the "remove after drop" checkbox checked?
			if (document.getElementById('drop-remove').checked) {
			  // if so, remove the element from the "Draggable Events" list
			  arg.draggedEl.parentNode.removeChild(arg.draggedEl);
			}
		  },
		  initialDate: '2021-02-13',
			  weekNumbers: true,
			  navLinks: true, // can click day/week names to navigate views
			  editable: true,
			  selectable: true,
			  nowIndicator: true,
		   events: [
				{
				  title: 'All Day Event',
				  start: '2021-02-01'
				},
				{
				  title: 'Long Event',
				  start: '2021-02-07',
				  end: '2021-02-10',
				  className: "bg-danger"
				},
				{
				  groupId: 999,
				  title: 'Repeating Event',
				  start: '2021-02-09T16:00:00'
				},
				{
				  groupId: 999,
				  title: 'Repeating Event',
				  start: '2021-02-16T16:00:00'
				},
				{
				  title: 'Conference',
				  start: '2021-02-11',
				  end: '2021-02-13',
				  className: "bg-danger"
				},
				{
				  title: 'Meeting',
				  start: '2021-02-12T10:30:00',
				  end: '2021-02-12T12:30:00',
				  className:"bg-info"
				},
				{
				  title: 'Lunch',
				  start: '2021-02-12T12:00:00'
				},
				{
				  title: 'Meeting',
				  start: '2021-04-12T14:30:00'
				},
				{
				  title: 'Happy Hour',
				  start: '2021-07-12T17:30:00'
				},
				{
				  title: 'Dinner',
				  start: '2021-02-12T20:00:00',
				  className: "bg-warning"
				},
				{
				  title: 'Birthday Party',
				  start: '2021-02-13T07:00:00',
				  className: "bg-secondary"
				},
				{
				  title: 'Click for Google',
				  url: 'https://www.google.com/?gws_rd=ssl',
				  start: '2021-02-28'
				}
			  ]
		});
		calendar.render();

	  });
"use strict"

function fullCalender(){
	
	
	
	/* initialize the external events
		-----------------------------------------------------------------*/

		var containerEl = document.getElementById('external-events');
		new FullCalendar.Draggable(containerEl, {
		  itemSelector: '.external-event',
		  eventData: function(eventEl) {
			return {
			  title: eventEl.innerText.trim()
			}
		  }
		 
		});
		/* initialize the calendar
		-----------------------------------------------------------------*/

		var calendarEl = document.getElementById('calendar');
		var calendar = new FullCalendar.Calendar(calendarEl, {
			initialView: 'dayGridMonth',
		  headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		  },
		  eventPositioned: function(info)
		 {
		      if (info.view.type === 'dayGridMonth' && info.el.classList.contains('fc-event')) {
		        var eventCount = info.event._def.extendedProps.eventCount;
		        var moreIndicator = '<div class="event-more">+' + (eventCount - 1) + ' more</div>';
		        
		        if (eventCount > 1) {
		          info.el.querySelector('.fc-event-title').insertAdjacentHTML('beforeend', moreIndicator);
		        }
		      }
		    },

		  selectable: true,
		  selectMirror: true,
		  select: function(arg) {
			var title = prompt('Event Title:');
			if (title) {
			  calendar.addEvent({
				title: title,
				start: arg.start,
				end: arg.end,
				allDay: arg.allDay
			  })
			}
			calendar.unselect()
		  },
		  
    		longPressDelay: 0,
		  editable: true,
		  droppable: true, // this allows things to be dropped onto the calendar
		  drop: function(arg) {
			// is the "remove after drop" checkbox checked?
			if (document.getElementById('drop-remove').checked) {
			  // if so, remove the element from the "Draggable Events" list
			  arg.draggedEl.parentNode.removeChild(arg.draggedEl);
			}
		  },
		  initialDate: '2021-02-13',
			  weekNumbers: true,
			  navLinks: true, // can click day/week names to navigate views
			  editable: true,
			  selectable: true,
			  nowIndicator: true,
		   events: [
				{
				  title: 'All Day Event',
				  start: '2021-02-01'
				},
				{
				  title: 'Long Event',
				  start: '2021-02-07',
				  end: '2021-02-10',
				  className: "bg-danger"
				},
				{
				  groupId: 999,
				  title: 'Repeating Event',
				  start: '2021-02-09T16:00:00'
				},
				{
				  groupId: 999,
				  title: 'Repeating Event',
				  start: '2021-02-16T16:00:00'
				},
				{
				  title: 'Conference',
				  start: '2021-02-11',
				  end: '2021-02-13',
				  className: "bg-danger"
				},
				{
				  title: 'Lunch',
				  start: '2021-02-12T12:00:00'
				},
				{
				  title: 'Meeting',
				  start: '2021-04-12T14:30:00'
				},
				{
				  title: 'Happy Hour',
				  start: '2021-07-12T17:30:00'
				},
				{
				  title: 'Dinner',
				  start: '2021-02-12T20:00:00',
				  className: "bg-warning"
				},
				{
				  title: 'Birthday Party',
				  start: '2021-02-13T07:00:00',
				  className: "bg-secondary"
				},
				{
				  title: 'Click for Google',
				  url: 'https://www.google.com/?gws_rd=ssl',
				  start: '2021-02-28'
				}
			  ]
		});
		calendar.render();
		
		
	
}	
	
	
	
jQuery(window).on('load',function(){
	setTimeout(function(){
		fullCalender();	
	}, 1000);
	
	
});	
	

		
