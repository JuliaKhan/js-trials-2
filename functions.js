'use strict';

// 1. isHometown

function isHometown(town){
    return town === 'San Francisco';
}

// 2. getFullName

const getFullName = (first, last) => first + ' ' + last

// 3. calculateTotal

const calculateTotal = (base_price, state, tax=0.05) =>{
    const subtotal = base_price * (1 + tax);
    let fee = 0
    if (state === 'CA'){
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA'){
        fee = 2.00;
    }
    else if (state === 'MA' && base_price <= 100){
        fee = 1.00;
    }
    else if (state === 'MA' && base_price > 100){
        fee = 3.00;
    }
    return subtotal + fee
    }
