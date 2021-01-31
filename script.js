function ticketCount(category, increase) {
    const ticketCategory = document.getElementById(category + 'Input');
    const ticketNewInput = parseInt(ticketCategory.value);
    let totalTicket = ticketNewInput;
    if (increase == true) {
        totalTicket = ticketNewInput + 1;
    }

    else if (increase == false && ticketNewInput > 0) {
        totalTicket = ticketNewInput - 1;
    }
    ticketCategory.value = totalTicket;
    let totalAmount = 0;
    if (category == 'firstClass') {
        totalAmount = totalTicket * 150;
    }
    if (category == 'economy') {
        totalAmount = totalTicket * 100;
    }
    subTotal();
}


function subTotal() {
    const firstClassTicketCount = ticketCategory('firstClass');
    const economyTicketCount = ticketCategory('economy');

    const subTotal = (firstClassTicketCount * 150) + (economyTicketCount * 100);
    document.getElementById('subTotal').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

function ticketCategory(category) {
    const ticketCategory = document.getElementById(category + 'Input');
    const ticketCount = parseInt(ticketCategory.value);
    return ticketCount;
}




