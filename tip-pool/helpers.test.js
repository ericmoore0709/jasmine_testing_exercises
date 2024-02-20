describe('helpers test with setup and teardown', () => {

    beforeEach(() => {
        billAmtInput.value = '20.00';
        tipAmtInput.value = '5.00';
        submitPaymentInfo();
    });

    it('should return the sum payment', () => {
        const total = sumPaymentTotal('tipPercent');
        expect(total).toEqual(25);
    });

    it('should calculate the correct tip percentage', () => {
        // const payment = allPayments['payment1'];
        const payment = Object.values(allPayments)[0];
        const result = calculateTipPercent(payment.billAmt, payment.tipAmt);

        expect(result).toEqual(25);

    });

    it('should append td to the tr', () => {
        const trToCheck = document.createElement('tr');
        appendTd(trToCheck, '$12345');
        expect(trToCheck.children.length).toEqual(1);
        expect(trToCheck.children[0].textContent).toEqual('$12345');
    });

    it('should append the delete button to the server tr', () => {
        const tr = document.createElement('tr');
        appendDeleteBtnToServerTr(tr);
        expect(tr.children).toBeDefined();
        expect(tr.children.length).toEqual(1);
        expect(tr.children[0]).toBeDefined();
        expect(tr.children[0].textContent).toEqual('X');
    });

    it('should append the delete button to the payment tr', () => {
        const tr = document.createElement('tr');
        appendDeleteBtnToPaymentTr(tr);
        expect(tr.children).toBeDefined();
        expect(tr.children.length).toEqual(1);
        expect(tr.children[0]).toBeDefined();
        expect(tr.children[0].textContent).toEqual('X');
    });

    afterEach(() => {
        allPayments = {};
        paymentId = 0;
    })

});