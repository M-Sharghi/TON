function transaction_interval(){
    let counter_element=document.querySelector(".statistics-amount-first");
    let counter_value=counter_element.textContent;
    counter_element.textContent=Number(counter_value) + 1;
    console.log(counter_element.textContent);
}

setInterval(transaction_interval,1000);