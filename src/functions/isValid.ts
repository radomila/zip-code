export const isValid = (zipCode: string): boolean => {
  return /^\d{3} \d{2}$/.test(zipCode);
};
