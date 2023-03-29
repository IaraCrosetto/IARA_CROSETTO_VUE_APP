<template>
    <div class="container my-5">
        <div class="container-top d-flex justify-content-between align-items-center">
            <div class="checkbox-container" id="checkboxes_container">
            </div>
            <div class="search-container">
                <input class="search-input" id="search_input" type="text" name="search" placeholder="Search event">
            </div> 
        </div>
        <div class="container-center m-5" >
            <div class="row row-cols-md-3 g-5">
                <div class="col" v-for="event in events">
                    <a v-bind:href="'./details.html?id=' + event._id" class="card-link text-center">
                        <div class="card h-100 card-hover">
                            <img v-bind:src='event.image' class="card-img-top" v-bind:alt='event.name'>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="card-text" id="card-text">
                                    <h5 class="card-title">{{event.name}}</h5>
                                    <p class="card-description">{{event.description}}</p>  
                                </div>
                                <div class="card-interaction d-flex justify-content-between align-items-center px-3">
                                    <p>Price: ${{event.price}}</p>
                                    <p><small class="text-muted">{{event.date}}</small></p>
                                </div>
                            </div>  
                        </div>
                    </a>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    import { getUpcomingEvents } from '../../data-service';
    export default{
        name:'Upcoming',
        data(){
            return {
                events: []

            };
        },
        methods:{
            async getEvents(){
                return await getUpcomingEvents();
            },
        },
        async created(){
            this.events = await this.getEvents();
            console.log(this.events);
        }
    }
</script>

<style>
    @import '../../styles/cards.css';
</style>