export async function stall(stallTime = 3000) {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
}

export function isObjEmpty(obj) {
  return obj 
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype
}