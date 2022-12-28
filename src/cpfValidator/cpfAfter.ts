export function validateCpf(cpfString: string): boolean {
    try {
      const cleanCpf = cleanString(cpfString);
      if (isDigitCorrect(cleanCpf, 1) && isDigitCorrect(cleanCpf, 2)) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

export function cleanString(cpf:string):string {
    const cleanedCpf = cpf.replace(/\.|\-|\,| /g, '');
    if (cleanedCpf.length===11) {
        return cleanedCpf;    
    }
      throw new Error("Invalid digit Numbers!");
}

export function isDigitCorrect(cpf:string, digit:number):boolean {
    const digitPosition = (digit===1 ? 9 : 10)
    const firstDigits = cpf.split("", digitPosition);
    let digitsSum:number = 0;
    for(const [index, value] of firstDigits.entries()){
        const result = ((digitPosition+1) - index) * parseInt(value);
        digitsSum += result;
    }
    const divisionMod = digitsSum % 11;
    console.log(cpf[digitPosition], divisionMod);
    if (divisionMod < 2) return "0" === cpf[digitPosition];
    return (11 - divisionMod).toString() === cpf[digitPosition];
}
