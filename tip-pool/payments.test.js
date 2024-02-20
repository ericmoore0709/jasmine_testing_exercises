describe('payments test with setup and teardown', () => {

    beforeEach(() => {
        billAmtInput.value = '20.00';
        tipAmtInput.value = '5.00';

        while (paymentTbody.lastChild)
            paymentTbody.removeChild(paymentTbody.lastChild);

        allPayments = {};
        paymentId = 0;
    });

    it('should prove that payment was added', () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].tipPercent).toEqual(25);
    });

    it('should calculate a correct tip percentage', () => {
        const result = createCurPayment();
        expect(result['tipPercent']).toEqual(25);
    });

    it('should append to the payment table', () => {
        const payment = createCurPayment();
        appendPaymentTable(payment);
        expect(paymentTbody.children.length).toEqual(1);
        expect(paymentTbody.children[0]).toBeDefined();
        expect(paymentTbody.children[0].children[0].textContent).toEqual('$20.00');
        expect(paymentTbody.children[0].children[1].textContent).toEqual('$5.00');
        expect(paymentTbody.children[0].children[2].textContent).toEqual('25%');
    });

    it('should update the summary', () => {
        expect(summaryTds.length).toEqual(3);
        expect(summaryTds[0].textContent).toEqual('$20');
        expect(summaryTds[1].textContent).toEqual('$5');
        expect(summaryTds[2].textContent).toEqual('25%');
    });

    afterEach(() => {
        while (paymentTbody.lastChild)
            paymentTbody.removeChild(paymentTbody.lastChild);

        allPayments = {};
        paymentId = 0;
    })

});