export function dinero(valor) { return new Intl.NumberFormat('es-CL', {style:'currency',currency:'CLP',maximumFractionDigits:0}).format(valor); }
export function plataformaTexto(plataforma) {return plataforma === 'ambas' ? 'PS5 y PC' : plataforma === 'ps5' ? 'PlayStation 5' : 'PC';}
