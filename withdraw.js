
document.querySelector('#withdraw_btn').addEventListener('click', function () {
    const withdrawAmountElement = document.querySelector('#withdraw_text');
    const withdrawAmountStr = withdrawAmountElement.value;
    const newWithdrawAmount = parseFloat(withdrawAmountStr);

    withdrawAmountElement.value = '';

    const prevWithdrawElement = document.querySelector('#withdrow_total');
    const prevWithdrawStr = prevWithdrawElement.innerHTML
    const prevWithdrawAmount = parseFloat(prevWithdrawStr)

    const widthdrawBalnce = prevWithdrawAmount + newWithdrawAmount
    prevWithdrawElement.innerHTML = widthdrawBalnce;

    const depositeTotal = document.querySelector('#balance_total');
    const depositeTotalStr = depositeTotal.innerHTML;
    const depositeTotalAmount = parseFloat(depositeTotalStr);
    const newDepositeBlanace = depositeTotalAmount - newWithdrawAmount
    depositeTotal.innerHTML = newDepositeBlanace
})
