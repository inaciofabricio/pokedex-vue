export function convertePrimeiraLetraMaiuscula(text) {
    return text.substring(0,1).toUpperCase() + text.substring(1);
}

export function limpaStringVazia(text) {
  return text.trim() != "";
}

export function minimizaStringEspecial(string) {
  return string.replace("special","s")
}

export function compare(a, b) {

  if (a.id < b.id) {
    return -1;
  }

  if (a.id > b.id) {
    return 1;
  }

  return 0;
}
