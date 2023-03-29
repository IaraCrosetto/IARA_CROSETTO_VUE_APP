<template>
    <main>
        <div class="container my-5">
            <div class="container-form d-flex justify-content-center">
                <form action="mailto:destinatario@ejemplo.com" method="post" enctype="text/plain" class="d-flex flex-column">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                  
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                  
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                  
                    <button class="form-btn mx-5 my-3 border-0" type="submit">Submit</button>
                </form>     
            </div>                 
        </div>
    </main>
</template>


<script>
    
</script>


<style scoped>
    @import '../../styles/contact.css';
</style>