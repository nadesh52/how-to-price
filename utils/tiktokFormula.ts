export const getSellerPrice = (_price: number, _voucher: number) => {
  return Number(_price) - Number(_voucher);
};

export const getCommissionFee = (_price: any, _category: any) => {
  const price = Number(_price);
  const valuePct = Number(_category.saleValue) / 100;
  const result = price * valuePct;
  return Math.round(result);
};

export const getTransactionFee = (_price: any) => {
  const price = Number(_price);
  const valuePct = 3.21 / 100;
  return Math.round(price * valuePct);
};
