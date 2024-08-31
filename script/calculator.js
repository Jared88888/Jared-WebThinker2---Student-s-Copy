let calculateBMI = (height, weight) => {
    const bmi = weight / (height ** 2);
    return bmi;
};

let onCalcBMIPress = () => {
  let height = document.getElementById("height-m").value;
  let weight = document.getElementById("weight-m").value;
  let bmi = calculateBMI(height, weight);
  console.log(bmi);
  document.getElementById("results").innerHTML = "Your BMI is: " + bmi;
};

let onCalcBMI = () => {
    let height = $('height-m').val();
    let weight = $('weight-m').val();
    let bmi = calculateBMI(height, weight);
    $("#results").append("Your BMI is: " + bmi.toFixed(1));
    $("#results").append("Hello healthy, you are doing well.");
};

if (bmi < 18.5){
    $("#results").append ("Hello skinny, eat more to grow well.").addClass("bg-success");
}
i


























































































