const nextElement = (list, currentElement) => {
  const currentActionIndex = list.indexOf(currentElement);
  const nextActionIndex = [currentActionIndex + 1] % list.length;
  return list[nextActionIndex];
};
export default nextElement;
