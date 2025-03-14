export const getSumShipping = () => {
  //buyer pay
  //from lazada
  //from seller??
};

export const getServiceFee = (_price: Number, _category: any) => {
  const categoryRate = _category.saleValue;
  const vatRate = 3;
  const includeVat = (categoryRate * 100) / (100 - vatRate);
  const result = Number(_price) * Number(includeVat / 100);
  return result;
};
