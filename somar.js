function somar(a, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    if((isFinite(a) == false) || (isFinite(b) == false)){
        return "Caractere Invalido"
    }
    return a+b
}
  
  module.exports = somar;
