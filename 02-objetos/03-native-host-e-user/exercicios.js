// Liste 5 objetos nativos
// 1 - String;
// 2 - Array;
// 3 - Boolean;
// 4 - Number;

// Liste 5 objetos do browser
// querySector()
// querySelectorAll()
// Window
// history
// Document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitVjisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
