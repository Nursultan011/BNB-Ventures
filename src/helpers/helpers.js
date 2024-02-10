export const formatNumberInput = (value) => {
  const numericValue = value.replace(/\D/g, '');

  const formattedNumber = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return formattedNumber;
};
