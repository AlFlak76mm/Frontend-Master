
const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; //Esta variable ayuda a identificar los pedidos

addOrderBtn.addEventListener('click', () =>{
    const order = {id: orderId++, status: 'En proceso'};
    addOrder(order);
    processOrder(order)
        .then(result => {
            console.log(result);
            return updateOrderStatus(order, "Completada");
        })
        .catch(error => {
            console.error(error);
        });
});

function addOrder(order){
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status){
    const listItem = document.getElementById(`order-${order.id}`);
    if(listItem){
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order) {
                resolve("Orden completa");
            } else{
                reject("No se registro una orden.");
            }
        }, 2000);
    });
}