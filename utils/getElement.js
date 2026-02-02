export function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`The was an error in selection of "${selection}"`);
}
