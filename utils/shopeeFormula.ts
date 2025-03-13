export const vatCalc = (number: number) => {
  return number + number * 0.07;
};

export const getSellerPrice = (_price: number, _voucher: number) => {
  return Number(_price) - Number(_voucher);
};

export const getSaleTransactionFee = (_price: any, _category: any) => {
  const price = Number(_price);
  const valuePct = Number(_category.saleValue) / 100;
  const result = price * valuePct;
  return Math.round(result);
};

export const getTransactionFee = (_price: any, _paymentMethod: any) => {
  const price = Number(_price);
  const valuePct = Number(_paymentMethod.value) / 100;
  return Math.round(price * vatCalc(valuePct));
};

export const getServiceFee = (_price: any, _program: any, _category: any) => {
  const type = _category.serviceType;
  let val = 0;
  switch (_program) {
    case 1:
      switch (type) {
        case 1:
          val = 5;
          break;
        case 2:
          val = 5;
          break;
        default:
          val = -1; // Handle unexpected type
          break;
      }
      break;
    case 2:
      switch (type) {
        case 1:
          val = 4;
          break;
        case 2:
          val = 5;
          break;
        default:
          val = -1;
          break;
      }
      break;
    case 3:
      switch (type) {
        case 1:
          val = 6;
          break;
        case 2:
          val = 7;
          break;
        default:
          val = -1;
          break;
      }
      break;
    case 0:
      val = 0; // If program is 0, set pct to 0 immediately
      break;
    default:
      val = 0; // Handle unexpected program
      break;
  }
  const toPct = val / 100;
  const result = _price * vatCalc(toPct);
  return Math.round(result);
};
