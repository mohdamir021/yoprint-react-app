// Helpers

export function generateArrayOfNumbers(length:number, multiplesOf?: number) {
  const multiples = multiplesOf ?? 1;
  return Array.from({length}, (_,index) => index * multiples)
}