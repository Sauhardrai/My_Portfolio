function Add() {
  let a11 = parseFloat(document.getElementById("A11").value);
  let a12 = parseFloat(document.getElementById("A12").value);
  let a13 = parseFloat(document.getElementById("A13").value);
  let a21 = parseFloat(document.getElementById("A21").value);
  let a22 = parseFloat(document.getElementById("A22").value);
  let a23 = parseFloat(document.getElementById("A23").value);
  let a31 = parseFloat(document.getElementById("A31").value);
  let a32 = parseFloat(document.getElementById("A32").value);
  let a33 = parseFloat(document.getElementById("A33").value);

  let b11 = parseFloat(document.getElementById("B11").value);
  let b12 = parseFloat(document.getElementById("B12").value);
  let b13 = parseFloat(document.getElementById("B13").value);
  let b21 = parseFloat(document.getElementById("B21").value);
  let b22 = parseFloat(document.getElementById("B22").value);
  let b23 = parseFloat(document.getElementById("B23").value);
  let b31 = parseFloat(document.getElementById("B31").value);
  let b32 = parseFloat(document.getElementById("B32").value);
  let b33 = parseFloat(document.getElementById("B33").value);

  document.getElementById("C11").value = a11 + b11;
  document.getElementById("C12").value = a12 + b12;
  document.getElementById("C13").value = a13 + b13;
  document.getElementById("C21").value = a21 + b21;
  document.getElementById("C22").value = a22 + b22;
  document.getElementById("C23").value = a23 + b23;
  document.getElementById("C31").value = a31 + b31;
  document.getElementById("C32").value = a32 + b32;
  document.getElementById("C33").value = a33 + b33;
}

function Multiply() {
  let a11 = parseFloat(document.getElementById("A11").value);
  let a12 = parseFloat(document.getElementById("A12").value);
  let a13 = parseFloat(document.getElementById("A13").value);
  let a21 = parseFloat(document.getElementById("A21").value);
  let a22 = parseFloat(document.getElementById("A22").value);
  let a23 = parseFloat(document.getElementById("A23").value);
  let a31 = parseFloat(document.getElementById("A31").value);
  let a32 = parseFloat(document.getElementById("A32").value);
  let a33 = parseFloat(document.getElementById("A33").value);

  let b11 = parseFloat(document.getElementById("B11").value);
  let b12 = parseFloat(document.getElementById("B12").value);
  let b13 = parseFloat(document.getElementById("B13").value);
  let b21 = parseFloat(document.getElementById("B21").value);
  let b22 = parseFloat(document.getElementById("B22").value);
  let b23 = parseFloat(document.getElementById("B23").value);
  let b31 = parseFloat(document.getElementById("B31").value);
  let b32 = parseFloat(document.getElementById("B32").value);
  let b33 = parseFloat(document.getElementById("B33").value);

  document.getElementById("C11").value = a11 * b11 + a12 * b21 + a13 * b31;
  document.getElementById("C12").value = a11 * b12 + a12 * b22 + a13 * b32;
  document.getElementById("C13").value = a11 * b13 + a12 * b23 + a13 * b33;
  document.getElementById("C21").value = a21 * b11 + a22 * b21 + a23 * b31;
  document.getElementById("C22").value = a21 * b12 + a22 * b22 + a23 * b32;
  document.getElementById("C23").value = a21 * b13 + a22 * b23 + a23 * b33;
  document.getElementById("C31").value = a31 * b11 + a32 * b21 + a33 * b31;
  document.getElementById("C32").value = a31 * b12 + a32 * b22 + a33 * b32;
  document.getElementById("C33").value = a31 * b13 + a32 * b23 + a33 * b33;
}
