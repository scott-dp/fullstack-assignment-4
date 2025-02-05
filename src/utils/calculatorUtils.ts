export function evaluateCalculationAsString(calculationAsString:string) {
    let numSoFar = "";
    let nums:Array<number> = [];
    let operators:Array<string> = [];
    
    for (let i = 0; i < calculationAsString.length; i++) {
      if (calculationAsString[i]=="+" || calculationAsString[i]=="-" || calculationAsString[i]=="*" || calculationAsString[i]=="/") {
        operators.push(calculationAsString[i]);
        nums.push(parseFloat(numSoFar));
        numSoFar="";
      } else {
        numSoFar+=calculationAsString[i];
      }
  
      if(i == calculationAsString.length-1) {
        //Last number in the string to be calculated
        nums.push(parseFloat(numSoFar));
      }
    }
    let result:number = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (operators[i-1] == "+") {
        result += nums[i];
      } else if(operators[i-1] == "-") {
        result -= nums[i];
      } else if(operators[i-1] == "*") {
        result *= nums[i];
      } else if(operators[i-1] == "/") {
        result /= nums[i];
      }
    }
    return result;
}
  
export function isResultValid(result:number) {
    if (Number.isNaN(result) || !isFinite(result)) {
      return false;
    }
    return true;
}
  
export function roundNumber(number:number, numDecimalPoints:number) {
    return Math.round(number * (10**numDecimalPoints)) / (10**numDecimalPoints);
}