document.querySelector('#deposit_btn').addEventListener('click', function () {

    const depositText = document.querySelector('#deposit_text');
    const newDepositAmountStr = depositText.value;
    const newDepositAmount = parseFloat(newDepositAmountStr)
    depositText.value = '';

    const prevDepositElement = document.querySelector('#deposit_total');
    const prevDepositAmountStr = prevDepositElement.innerHTML;
    const prevDepositAmount = parseFloat(prevDepositAmountStr);

    const newDepositTotal = prevDepositAmount + newDepositAmount;
    prevDepositElement.innerHTML = newDepositTotal;

    // ======
    const depositeTotal = document.querySelector('#balance_total');
    const depositeTotalStr = depositeTotal.innerHTML;
    const depositeTotalAmount = parseFloat(depositeTotalStr)

    const newDepositeBlanace = depositeTotalAmount + newDepositAmount
    depositeTotal.innerHTML = newDepositeBlanace

})
