var readlineSync = require("readline-sync");
const chalk = require('chalk');
console.log(chalk.green(`welcome to ***Q-U-I-Z*** world`));
console.log("\n");


var username = readlineSync.question("Your Name? ");
console.log("\n");
console.log(`Hey ! ${chalk.blue(username)} Test Your Luck in below games `);

console.log("\n");

var score = 0;
function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log(chalk.green("C.O.R.R.E.C.T   "));
    console.log(`Actual answer : ${chalk.green(answer)} `);
    console.log(`Your answer : ${chalk.green(userAnswer)}`);
    score++;
  }
  else{
    console.log(chalk.red("W.R.O.N.G  "));
    console.log(`Actual answer : ${chalk.green(answer)} `);
    console.log(`Your answer : ${chalk.red(userAnswer)}`);
    score--;
  }
  console.log("your score is ",chalk.cyan(score));
  console.log("-------------------");
  console.log('\n');
}

var g1="LIFE ";
var g2="FUNNY ";
var g3="MATH";
var g4="TECHNO_Science ";
var g5="Exit";
var choice;    
while(true){
  console.log(`List of Games `)
  console.log(`1. ${chalk.green(g1)}`);
  console.log(`2. ${chalk.yellow(g2)}`);
  console.log(`3. ${chalk.red(g3)}`);
  console.log(`4. ${chalk.grey(g4)}`);
  console.log(`5. ${chalk.cyan(g5)}`);
  var cont=readlineSync.question("Do u want to Play ? (Y/N)\t")
  console.log('\n');
  var ans=cont.toLowerCase();
  if(ans==='yes' || ans==='y'|| ans==='YES' || ans==='Y')
  {
    choice = readlineSync.question("Your choice to Play \t");
    console.log('\n');
  switch(choice){
    case "1":
      console.log(`WELCOME to ${chalk.green(g1)}`);
      var questions = [
        {question:"The Most Lovable persons in your life ? ",
         answer:"Father and Mother"},
        {question:"What is the Time you prefred to start your day ?",
         answer:"Morning"},
        {question:"What situation make you sad ?",
         answer:"Loneliness"},
        {question:"Do You believe the Existance of God ?",
         answer:"yes"},
        {question:"Do you believe in Future or Present ? ",
         answer:"Present"},
        {question:"Do u Want to live social life in Village ?",
         answer:"yes"},
        {question:"Are you a Winner or Looser ?",
         answer:"Winner"},
        {question:"What do you do when you feel lost ?",
         answer:"Cry"},
        {question:"How do you celebrate your happiness , success and Failure ?",
         answer:"with my Family"},
        {question:"What little things make you happy ?",
         answer:"Help"},
      ];
          for(var i=0; i<questions.length; i++){
           var currentq = questions[i];
           quiz(currentq.question, currentq.answer);
          }
    console.log("YOUR  FINAL SCORE IS: " + score+"/10");
    console.log('\n');
    break;
    case "2":
      console.log(`welcome to ${chalk.yellow(g2)}`);
      var questions = [
        {question:"What are two things you can never eat for breakfast ?  ",
         answer:"Lunch & Dinner"},
        {question:"What is always coming but never arrives ? ",
         answer:"Tomorrow"},
        {question:"What is it that lives if it is fed, and dies if you give it a drink ? ",
         answer:"Fire"},
        {question:"What goes up but never ever comes down ? ",
         answer:"Age"},
        {question:" I start out tall, but the longer I stand, the shorter I grow. What am I ? ",
         answer:"Candle"},
        {question:"Some months have 31 days, others have 30 days, but how many have 28 days ? ",
         answer:"All Months"},
        {question:"Thanks to me, you can see straight through the wall. What am I ? ",
         answer:"Window"},
        {question:"What has a thumb and four fingers but isn’t actually alive? ",
         answer:"Glove"},
        {question:"What goes up and down, but always remains in the same place ? ",
         answer:"Stairs"},
        {question:"What has a head, a tail, but does not have a body ? ",
         answer:"Coin"},
      ];
          for(var i=0; i<questions.length; i++){
           var currentq = questions[i];
           quiz(currentq.question, currentq.answer);
          }
    console.log("YOUR FINAL SCORE IS: " + score+"/"+questions.length);
      console.log('\n');
    break;
    case "3":
      console.log(`welcome to ${chalk.red(g3)}`);
      var questions = [
        {question:"If 2 sides of a triangle are equal, and one angle is 90 degrees, what are the other 2 angles ? ",
         answer:"45"},
        {question:"What is 7y/5 = y-4 ?",
         answer:"-10"},
        {question:"If 1=3, 2=3, 3=5, 4=4, 5=4, Then, 6=? ",
         answer:"3"},
        {question:"I am an odd number. Take away one letter and I become even. What number am I ?",
         answer:"Seven"},
        {question:"Which 3 numbers have the same answer whether they’re added or multiplied together ?",
         answer:"1,2,3"},
        {question:"Look at this series: 36, 34, 30, 28, 24, … What number should come next ?",
         answer:"22"},
        {question:"What is the only temperature that is the same in Fahrenheit and Celsius ?",
         answer:"-40"},
        {question:"What letter does every odd number have in it ?",
         answer:"E"},
        {question:" I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number ?",
         answer:"77"},
        {question:" In a century how many months are there ?",
         answer:"1200"},
      ];
          for(var i=0; i<questions.length; i++){
           var currentq = questions[i];
           quiz(currentq.question, currentq.answer);
          }
    console.log("YOUR FINAL SCORE IS: " + score+"/10");
      console.log('\n');
    break;
    case "4":
      console.log(`welcome to ${chalk.grey(g4)}`);
      var questions = [
        {question:"Blowfish is a type of ? ",
         answer:"Digital Signature Algorithm"},
        {question:" A social network can be represented as ?",
         answer:"Graph"},
        {question:"Who among the following is known as the father of computing ? ",
         answer:"Charles Babbage"},
        {question:"Which one of the following eco-systems covers the largest area of the earth's surface ? ",
         answer:"Marine Ecosystem"},
        {question:"Xerophthalmia is caused due to the deficiency of vitamin ? ",
         answer:"A"},
        {question:"The average life span of Human Red Blood Cells (RBC) is _____ Days ?",
         answer:"120"},
        {question:"There are how many pairs of cranial nerves in humans? ",
         answer:"12"},
        {question:"The universal donor blood group is ?",
         answer:"O"},
        {question:"Which of the following country was the host of 14th BRICS summit 2022 ? ",
         answer:"China"},
        {question:"Asia's biggest Bio-gas plant Gobar-Dhan has been set up in ?",
         answer:"Indore"},  
      ];
          for(var i=0; i<questions.length; i++){
           var currentq = questions[i];
           quiz(currentq.question, currentq.answer);
          }
    console.log("YOUR FINAL SCORE IS: " + score+"/"+questions.length);
      console.log('\n');
    break;
    case "5":
      console.log('Thanks !!');
      process.exit(0);
  }
    score = 0;
  }
  else {
    console.log("Thank you !!");
    return;
  } 
}



