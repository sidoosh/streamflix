export const debounce = (cb: Function, delay: number) => {
  let timer: string | number | NodeJS.Timeout | undefined;

  return (args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};
