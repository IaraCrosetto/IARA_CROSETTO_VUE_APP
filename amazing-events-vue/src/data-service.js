export async function getAllEvents(){
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data.events;
}

export async function getPastEvents(){
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json()
    return data.events.filter(event => event.date < data.currentDate);   
}

export async function getUpcomingEvents(){
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data.events.filter(event => event.date > data.currentDate);     
}
