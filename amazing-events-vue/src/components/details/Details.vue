<template>
        <div class="container my-5 d-flex justify-content-center">
            <div class="container-center mt-5">
                <div class="container" id="details_cards">
                    <div class="card mb-3" style="max-width: 790px;">
                        <div class="row g-0">
                            <div class="details_card_img col-md-6">
                                <img v-bind:src='myEvent.image' class="img-fluid" alt="Image">
                            </div>
                            <div class="col-md-6 my-4">
                                <div class="card-body">
                                    <h5 class="card-title">{{ myEvent.name }}</h5>
                                    <p class="card-text"><span class="text-muted">{{ myEvent.date }} ({{ myEvent.category }})</span></p>
                                    <p class="card-text">{{ myEvent.description }}</p>
                                    <p class="card-text"><small>Place: {{ myEvent.place }} - Price: ${{ myEvent.price }}</small></p>
                                    <p class="card-text"><small class="text-muted">Capacity: {{ myEvent.capacity }} - Assistance: {{ myEvent.assistance }}</small></p>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted"><a href="./index.html" class="card-link-return">Return to the homepage</a></small>
                </div>
            </div>        
        </div>
</template>

<script>
    import { getAllEvents } from '../../data-service';
    export default{
        name:'DetailsCard',
        data(){
            return{
                eventId: {},
                getEvent: {},
                myEvent: {
                        "_id": 1,
                        "name": "Collectivities Party",
                        "category": "Food",
                        "date": "2021-12-12",
                        "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
                        "image": "https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
                        "place": "Multi Space",
                        "price": 10,
                        "capacity": 50000,
                        "assistance": 42756
                },
            }
        },
        // methods:{
        //     async getEvent(){
        //         return await 
        //     }
        // },
        // async created(){
            
        // }
    }
</script>

<style>
    @import '../../styles/details.css';
</style>