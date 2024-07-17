document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let registrants = document.getElementById('registrants');
    registrants.innerText = parseInt(registrants.innerText) + 1;

    let ticketType = document.getElementById('ticketType').value;
    let ticketPrice;
    switch (ticketType) {
        case 'Early Bird':
            ticketPrice = '₹24,500';
            break;
        case 'Standard':
            ticketPrice = '₹32,800';
            break;
        case 'VIP':
            ticketPrice = '₹48,000';
            break;
        default:
            ticketPrice = 'Unknown';
    }

    alert(`Ticket Price: ${ticketPrice}`);
    alert('Thank you for registering! We will contact you soon.');
});

document.getElementById('registerNowBtn').addEventListener('click', function() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('ticketType').addEventListener('change', function() {
    document.getElementById('ticketOptions').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('viewAllSpeakersBtn').addEventListener('click', function() {
    document.getElementById('additionalSpeakers').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('buyTicketsBtn').addEventListener('click', function() {
    let ticketType = prompt("Choose ticket type: Early Bird, Standard, VIP");
    if (ticketType) {
        let paymentConfirmed = confirm("Proceed with payment for " + ticketType + " ticket?");
        if (paymentConfirmed) {
            alert("Welcome to Tech Conference 2024!");
        }
    }
});

document.getElementById('claimEarlyBirdBtn').addEventListener('click', function() {
    let currentDate = new Date();
    let cutoffDate = new Date('2024-08-22');
    if (currentDate <= cutoffDate) {
        alert("You are eligible for the Early Bird discount!");
    } else {
        alert("You are not eligible for the Early Bird discount.");
    }
});

document.getElementById('viewAgendaDetailsBtn').addEventListener('click', function() {
    document.getElementById('agendaDetails').style.display = 'block';
    this.style.display = 'none';
});