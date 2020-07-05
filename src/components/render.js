// Функция отрисовки элементов в DOM
export const render = (block, createFunc) => {
  block.insertAdjacentHTML(`beforeend`, createFunc());
};
