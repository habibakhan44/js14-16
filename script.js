// QUESTION 1
// var studentNames = [];

// // QUESTION 2
// var studentNames = new Array();

// // QUESTION 3
// var studentNames=["Habiba ", "Rizwa", "Jannat"];

// // QUESTION 4
// var numbers= [1, 5, 10];

// // QUESTION 5
// var boolValues = [true, false, true];

// // QUESTION 6
// var mixArr = [42, "Hello", true, 2, 3];


// QUESTION 7 
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualifications:</h1>");
// document.write("<h2>1: " + qualifications[0] + "</h2><br>");
// document.write("<h2>2: " + qualifications[1] + "</h2><br>");
// document.write("<h2>3: " + qualifications[2] + "</h2><br>");
// document.write("<h2>4: " + qualifications[3] + "</h2><br>");
// document.write("<h2>5: " + qualifications[4] + "</h2><br>");
// document.write("<h2>6: " + qualifications[5] + "</h2><br>");
// document.write("<h2>7: " + qualifications[6] + "</h2><br>");
// document.write("<h2>8: " + qualifications[7] + "</h2><br>");


// QUESTION 8
// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];
// const totalMarks = 500;
// var percentage1 = (studentScores[0] / totalMarks) * 100;
// var percentage2 = (studentScores[1] / totalMarks) * 100;
// var percentage3 = (studentScores[2] / totalMarks) * 100;
// document.write(`Score of ${studentNames[0]} is ${studentScores[0]}. Percentage: ${percentage1.toFixed(0)}%<br>`);
// document.write(`Score of ${studentNames[1]} is ${studentScores[1]}. Percentage: ${percentage2.toFixed(0)}%<br>`);
// document.write(`Score of ${studentNames[2]} is ${studentScores[2]}. Percentage: ${percentage3.toFixed(0)}%<br>`);



// QUESTION 9
// let colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("Initial colors: " + colors);

// let colorToAddAtBeginning = prompt("What color do you want to add to the beginning?");
// colors.unshift(colorToAddAtBeginning); 
// document.write("After adding color to the beginning: " + colors.join(", "));

// let colorToAddAtEnd = prompt("What color do you want to add to the end?");
// colors.push(colorToAddAtEnd);
// document.write("After adding color to the end: " + colors.join(", "));

// colors.unshift("Purple", "Orange");
// document.write("After adding two more colors to the beginning: " + colors.join(", "));

// colors.shift(); 
// document.write("After deleting the first color: " + colors.join(", "));

// colors.pop(); 
// document.write("After deleting the last color: " + colors.join(", "));

// let indexToAddColor = parseInt(prompt("At which index do you want to add a color?"));
// let colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAddColor + ":");
// colors.splice(indexToAddColor, 0, colorToAddAtIndex); 
// document.write("After adding color at index " + indexToAddColor + ": " + colors.join(", "));

// let indexToDeleteColor = parseInt(prompt("At which index do you want to delete color(s)?"));
// let numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexToDeleteColor, numberOfColorsToDelete); 
// document.write("After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDeleteColor + ": " + colors.join(", "));

// QUESTION 10
// let studentScores = [320, 230, 480, 120];
// studentScores.sort();
// document.write("Scores of Students: 320,230,480,120" +  "<br>");
// document.write("Ordered Scores of Students: " + studentScores.join(','));


// QUESTION 11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4); 
// document.write("Cities list: " + cities.join(',') + "<br>");
// document.write("Selected cities list: " + selectedCities.join(','));



// QUESTION 12
// var arr = ["This", " is", " my", " cat"];
// var singleString = arr.join('');
// document.write(singleString);


// QUESTION 13
// let arr = ["keyboard", "mouse", "printer", "monitor"];
// document.write(`Devices: <br> ${arr} <br><br>`);
// for(i = 0; i < arr.length; i++){
//     document.write(`Out: <br> ${arr[i]} <br>`);
// } 


// QUESTION 14
// let Array = ["keyboard", "mouse", "printer", "monitor"];
// document.write(`Devices: <br> ${Array} <br><br>`);
// for(let i = arr.length-1; i >= 0 ; i--){
//     document.write(`Out: <br> ${arr[i]} <br>`);
// }



// QUESTION 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");






















