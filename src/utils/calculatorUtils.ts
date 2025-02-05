import axios from 'axios';
export async function getApiResponse(calculationAsString:string) {
  let apiResponse = await axios.post("http://localhost:8080/calculate", {
    "calculation" : calculationAsString
  });
  return apiResponse;
}
  
export function roundNumber(number:number, numDecimalPoints:number) {
    return Math.round(number * (10**numDecimalPoints)) / (10**numDecimalPoints);
}