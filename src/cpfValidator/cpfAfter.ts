// @ts-nocheck
export function validate(str: string): boolean {

  if (str !== null) {
    if (str !== undefined) {
      if (str.length >= 11 || str.length <= 14) {
        str = str
          .replace(".", "")
          .replace(".", "")
          .replace("-", "")
          .replace(" ", "");

        if (!str.split("").every((c) => c === str[0])) {
          try {
            let d1, d2;
            let dg1, dg2, rest;
            let digito;
            let nDigResult;
            d1 = d2 = 0;
            dg1 = dg2 = rest = 0;

            for (let nCount = 1; nCount < str.length - 1; nCount++) {
              digito = parseInt(str.substring(nCount - 1, nCount));
              d1 = d1 + (11 - nCount) * digito;
              d2 = d2 + (12 - nCount) * digito;
            }

            rest = d1 % 11;

            dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
            d2 += 2 * dg1;
            rest = d2 % 11;
            if (rest < 2) dg2 = 0;
            else dg2 = 11 - rest;

            let nDigVerific = str.substring(str.length - 2, str.length);
            nDigResult = "" + dg1 + "" + dg2;
            return nDigVerific == nDigResult;
          } catch (e) {
            console.error("Erro !" + e);

            return false;
          }
        } else return false;
      } else return false;
    }
  } else return false;
}

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

export function isDigitCorrect(cpf:string, digit:number):string {
    const digitPosition = (digit===1 ? 9 : 10)
    const firstDigits = cpf.split("", digitPosition);
    let digitsSum:number = 0;
    for(const [index, value] of firstDigits.entries()){
        const result = ((digitPosition+1) - parseInt(index)) * parseInt(value);
        digitsSum += result;
    }
    const divisionMod = digitsSum % 11;
    console.log(cpf[digitPosition], divisionMod);
    if (divisionMod < 2) return "0" === cpf[digitPosition];
    return (11 - divisionMod).toString() === cpf[digitPosition];
}
