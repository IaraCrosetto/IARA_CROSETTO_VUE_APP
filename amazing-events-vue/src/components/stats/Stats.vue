<template>
    <div class="container my-5">
            <div class="container-form d-flex flex-column justify-content-center">
                <h6 class="text-center text-muted" colspan="3"><b>EVENTS STATISTICS</b></h6>
                <table class="bg-body-tertiary"> 
                    <thead>
                        <tr class="table-data-titles">
                            <th>Event with the highest percentage of attendance</th>
                            <th>Event with the lowest percentage of attendance</th>
                            <th>Event with larger capacity</th>
                        </tr>
                    </thead>
                    <tbody id="events-statistics">
                        <tr>
                            <td>{{ eventWithHighestPercentageOfAttendance }}</td>
                            <td>{{ eventWithLowestPercentageOfAttendance }}</td>
                            <td>{{ eventWithLargerCapacity }}</td>
                        </tr>
                    </tbody>
                </table>

                <h6 class="text-center text-muted" colspan="3"><b>UPCOMING EVENTS STATISTICS BY CATEGORY</b></h6>
                <table class="bg-body-tertiary">
                    <thead>
                        <tr class="table-data-titles">
                            <th>Categories</th>
                            <th>Revenues</th>
                            <th>Percentage of attendance</th>
                        </tr>
                    </thead>
                    <tbody id="upcoming-events-statistics-by-category">
                        <tr v-for="category in Object.keys(upcomingEventsByCategory)">
                            <td>{{ category }}</td>
                            <td>${{ getRevenues(upcomingEventsByCategory[category]) }}</td>
                            <td>{{ calculateAverageAttendancePercentage(upcomingEventsByCategory[category]) }}%</td>
                        </tr>
                    </tbody>
                </table>

                <h6 class="text-center text-muted" colspan="3"><b>PAST EVENTS STATISTICS BY CATEGORY</b></h6>
                <table class="bg-body-tertiary">
                    <thead>
                        <tr class="table-data-titles">
                            <th>Categories</th>
                            <th>Revenues</th>
                            <th>Percentage of attendance</th>
                        </tr>
                    </thead>
                    <tbody id="past-events-statistics-by-category">
                        <tr v-for="category in Object.keys(pastEventsByCategory)">
                            <td>{{ category }}</td>
                            <td>${{ getRevenues(pastEventsByCategory[category]) }}</td>
                            <td>{{ calculateAverageAttendancePercentage(pastEventsByCategory[category]) }}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>                 
        </div>
</template>

<script>
    import { getAllEvents } from '../../data-service';
        export default {
            name: 'Stats',
            data(){
                return{
                    //Arrays
                    eventList: [],
                    pastEventsInOrder: [],
                    upcomingEventsInOrder: [],

                    //Dictionaries:
                    categorizedEvents: {},
                    upcomingEventsByCategory: {},
                    pastEventsByCategory: {},

                    //Strings
                    eventWithLargerCapacity: '',
                    eventWithHighestPercentageOfAttendance : '',
                    eventWithLowestPercentageOfAttendance : ''
                }
            },
            methods:{
                async getEvents(){
                    return await getAllEvents();
                },
                organizeByAttendance(events){
                    const pastEventsInOrder = events.filter(event => 'assistance' in event).sort((a, b) => (a.assistance/a.capacity)*100 - (b.assistance/b.capacity)*100);
                    return pastEventsInOrder;
                },
                organizeByEstimatedAttendance(events){
                    const upcomingEventsInOrder = events.filter(event => !('assistance' in event)).sort((a, b) => (a.estimate/a.capacity)*100 - (b.estimate/b.capacity)*100);
                    return upcomingEventsInOrder;
                },
                getCategorizedEvents(events){
                    let categorizedEvents = {};
                    events.forEach(e => {
                        if(!(e.category in categorizedEvents)) {
                            categorizedEvents[e.category] = [];
                        }
                        categorizedEvents[e.category].push(e);
                    })
                    return categorizedEvents;
                },
                getEventWithLargerCapacity(events){
                    return events.reduce((max, event) => max.capacity > event.capacity ? max : event, events[0]).name;
                },
                calculateAverageAttendancePercentage(events){
                    let sumOfCapacity = 0;
                    let sumOfAssistance = 0;
                    events.forEach(event => {
                        sumOfCapacity += event.capacity; 
                        sumOfAssistance += event.assistance || event.estimate; 
                    });
                    return ((sumOfAssistance / sumOfCapacity) * 100).toFixed(2);
                },
                getRevenues(events){
                    let revenue = 0;
                    events.forEach(event => {
                        revenue += event.price;
                    });
                    return (revenue);
                }
            },
            async created(){
                this.eventList = await this.getEvents();

                this.eventWithLargerCapacity = await this.getEventWithLargerCapacity(this.eventList);

                this.upcomingEventsInOrder = await this.organizeByEstimatedAttendance(this.eventList);
                this.pastEventsInOrder = await this.organizeByAttendance(this.eventList);

                this.eventWithHighestPercentageOfAttendance = this.pastEventsInOrder[this.pastEventsInOrder.length-1].name;
                this.eventWithLowestPercentageOfAttendance = this.pastEventsInOrder[0].name;

                this.categorizedEvents = this.getCategorizedEvents(this.eventList);
                this.upcomingEventsByCategory = this.getCategorizedEvents(this.upcomingEventsInOrder);
                this.pastEventsByCategory = this.getCategorizedEvents(this.pastEventsInOrder);
            },
        }
</script>

<style>
    @import '../../styles/stats.css';
</style>