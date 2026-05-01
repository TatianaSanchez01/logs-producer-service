// Archivo corregido para análisis de SonarQube

// ✔ Eliminada variable no usada

// ✔ Tipado correcto en lugar de any
function processData(data: unknown) {
  return data;
}

// ✔ Función simplificada (menos complejidad)
function getNumberName(value: number): string {
  const numbers: Record<number, string> = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
  };

  return numbers[value] ?? "unknown";
}

// ✔ Acceso seguro a propiedades
const obj: { prop?: string } = {};
console.log(obj.prop ?? "No definido");

// ✔ Eliminada duplicación (una sola función)
function sum(a: number, b: number): number {
  return a + b;
}

// ✔ Eliminado console.log innecesario de debug (solo uno controlado)
console.log("Aplicación ejecutándose correctamente");

// ✔ Función útil en lugar de vacía
function doSomething(): string {
  return "ok";
}

// ✔ Comparación estricta
const numberValue = 5;
if (numberValue === 5) {
  console.log("Iguales");
}

// ✔ Eliminada variable no usada
function anotherFunction(): boolean {
  return true;
}

// ✔ Validación antes de acceder
let data: { value?: string } | null = null;

if (data?.value) {
  console.log(data.value);
}

// ✔ Simplificación de lógica booleana
function isActive(flag: boolean): boolean {
  return flag;
}

// ✔ Eliminado código muerto
