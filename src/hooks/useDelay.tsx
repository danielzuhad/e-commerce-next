export const useDelay = (delay: number = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
