export default function validaCpf(cpf: string) {
    if (cpf === undefined)
        return false;
    
    var strCPF = cpf.replace('.', '').replace('.', '').replace('-', '');

    if (strCPF === '00000000000' || strCPF === '11111111111' ||
         strCPF === '22222222222' || strCPF === '33333333333' || 
         strCPF === '44444444444' || strCPF === '55555555555' || 
         strCPF === '66666666666' || strCPF === '77777777777' || 
         strCPF === '88888888888' || strCPF === '99999999999' || 
         strCPF.length !== 11) 
      return false;
    

    var soma = 0;  
    for (let i = 1; i <= 9; i++) 
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    

    var resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) 
      resto = 0;
    

    if (resto !== parseInt(strCPF.substring(9, 10))) 
      return false;
    

    soma = 0;

    for (let k = 1; k <= 10; k++) 
        soma = soma + parseInt(strCPF.substring(k - 1, k)) * (12 - k)
    

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) 
      resto = 0;
    

    if (resto !== parseInt(strCPF.substring(10, 11))) 
      return false;
    

    return true;
}