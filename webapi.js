/* Transaction Interval */
function transaction_interval(){
    let transaction_element=document.querySelector(".statistics-amount-first");
    let transaction_value=transaction_element.textContent;
    transaction_element.textContent=Number(transaction_value) + 1;
    console.log(transaction_element.textContent);
}
setInterval(transaction_interval,1000);


/* wallet Interval */
function wallet_interval(){
    let wallet_element=document.querySelector(".statistics-amount-second");
    let wallet_value=wallet_element.textContent;
    wallet_element.textContent=Number(wallet_value) + 1;
    console.log(wallet_element.textContent);
}
setInterval(wallet_interval,30000);
