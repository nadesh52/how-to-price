export const vatCalc = (number: number) => {
  return number + number * 0.07;
};

export const getSumShipping = () => {
  //buyer pay
  //from lazada
  //from seller??
}

export const getTransactionFee = (_price: Number) => {
  //percent
  const vat = vatCalc(3);
  return Number(_price) * Number(vat);
};

export const getServiceFee = (_price: Number, _category: any) => {
  const vat = vatCalc(_category.saleValue);
  return Number(_price) * Number(vat);
};
