// Helpers

export function generateArrayOfNumbers(length:number, multiplesOf?: number) {
  const multiples = multiplesOf ?? 1;
  return Array.from({length}, (_,index) => index * multiples)
}

export function catchAndLogError (error: unknown) {
  console.log(error)
}