class CustomerOrder {
    constructor(customerId, orderId) {
        this.customerId = customerId;
        this.orderId = orderId;
    }

    //methods example
    //getter as the entry point
    get orderDetails () {
        return this.pullOrderDetails();
    }

    //the method to find the orderDetails

    pullOrderDetails() {
        //pull order details code here
        
        //values set in the constructor can be used
        //no dependency injection needed
        return [this.customerId, this.orderId];
    }
}

//new customer instance
const order_1 = new CustomerOrder(7052, 'FA-3498');
//this will return order details without the need for dependency injection
console.log(order_1.orderDetails);
//console.log(order_1);
var me = "Bruce Wayne";
function greeting(){
    console.log(`Hola soy ${me}`);
return
}

greeting();
me = "Batman";
