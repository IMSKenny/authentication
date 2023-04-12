'use strict';

const charConversion = char => {
  if (char.charCodeAt() > 96) {
    return char.charCodeAt() - 96;
  } else {
    return char.charCodeAt() - 64;
  }
};

const sumOfNumber = (numberBill, numberBillOne = 0) => {
  for (const number of numberBill) {
    numberBillOne += +number;
  }
  return numberBillOne;
};

document
  .querySelector('#authentication__button')
  .addEventListener('click', () => {
    const numberBill = document.querySelector('#authentication').value;
    const numberBillOne = charConversion([...numberBill][0]);
    let amount = sumOfNumber(numberBill.slice(1), numberBillOne);
    while (String(amount).length > 1) {
      amount = sumOfNumber(String(amount).split(''));
    }
    if (amount === 8) {
        document.querySelector('.authentic').classList.remove('hidden');
        document.querySelector('.fake').classList.add('hidden');
    } else {
        document.querySelector('.fake').classList.remove('hidden');
        document.querySelector('.authentic').classList.add('hidden');
    }
    
  });
