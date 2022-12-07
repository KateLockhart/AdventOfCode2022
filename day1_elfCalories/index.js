// ----- PART 1 -----
const input = "./input.txt";

async function getData() {
  let fileData = await fetch(input);
  let calorieData = await fileData.text();
  //console.log(calorieData);
  whichElf(calorieData);
}

function whichElf(data) {
  let calorieArray = data.split("\r\n");
  // console.log(calorieArray);
  let finalArray = [];
  let total = 0;
  calorieArray.map((cal) => {
    // console.log(cal);

    if (cal == "") {
      finalArray.push(total);
      total = 0;
    } else {
      total = +cal + total;
    }
  });
  // console.log(finalArray);
  // console.log(Math.max(...finalArray));
  // console.log(finalArray.indexOf(72478) + 1);
  // Answer Part 1: The 123th elf is carrying 72478 calories.

  // ----- PART 2 -----

  finalArray.sort(function (a, b) {
    return b - a;
  });
  let topThree = 0;
  for (let i = 0; i <= 2; i++) {
    topThree = topThree + finalArray[i];
  }
  console.log(topThree);
  // Answer Part 2: The top three elves are carrying a total of 210367 calories.
}

getData();
