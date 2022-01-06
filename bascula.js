// https://aules.edu.gva.es/fp/pluginfile.php/2738124/mod_resource/content/2/b_desarrollando_el_software.html

console.log('Calculadora BMI');

function BMI(weight, height) {
    return(weight / (height * height));
}

let bmiResult = BMI(78, 1.82);
console.log(bmiResult);

if (bmiResult < 18.5) {
    console.log('Bajo Peso');
  } else if (bmiResult < 25) {
    console.log('Peso Normal');
  } else if (bmiResult < 30) {
    console.log('PreObeso');
  } else if (bmiResult < 35) {
    console.log('Obeso');
  } else if (bmiResult < 40) {
    console.log('Obeso+');
  } else {
    console.log('Obeso++');
  }