const root = "register-page";

export const getSelectors = (base?: string) => {
  const composedSelector = base ? `${base}.root` : root;

  return {
    root: composedSelector,
  };
};
