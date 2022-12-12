export const MaskForCard = (number = '', mask = '*', divider = ' ') => {
  const len = number.length
  const lastPart = number.slice(len - 4, len)
  let firstPart = ''
  for (let i = 0; i < 3; i++) {
    firstPart += mask.repeat(4) + divider
  }
  return firstPart + lastPart
}
