//2.total & avg of 5 subjects

let tam=parseInt(prompt("Enter Tamil marks:"));
let eng=parseInt(prompt("Enter English marks:"));
let mat=parseInt(prompt("Enter Maths marks:"));
let sci=parseInt(prompt("Enter Science marks:"));
let ss=parseInt(prompt("Enter Social marks:"));
let tot=tam+eng+mat+sci+ss;
let avg=tot/5;
console.log("Marks Entered:", tam,eng,mat,sci,ss);
console.log("Total:",tot);
console.log("Average:",avg);

//3.program to read temperature and display a suitable message according to temperature 

var temp=parseInt(prompt("Enter the value:"));

if(temp<0)
{
	console.log("Freezing weather");
}
else if(temp==0 || temp < 10)
{
	console.log(" Very Cold weather");
}
else if(temp==10 || temp < 20)
{
	console.log("Cold weather");
}
else if(temp==20 || temp < 30)
{
	console.log(" Normal");
}
else if(temp==30 || temp < 40)
{
	console.log("Hot weather");
}
else if(temp >=40)
{
	console.log(" Very Cold weather");
}
else
{
	console.log("unable to find");
}


//4.The given Number is even or odd

var a = parseInt(prompt("Enter the number:"));

if(a/2==0)
{
	console.log("This number is even.",a);
}
else
{
	console.log("This number is odd.",a);
}

//5. Sum of the two given integers. If the two values are same, then returns triple their sum.

var a=parseInt(prompt("Enter 1st value:"));
var b=parseInt(prompt("Enter 2nd value:"));
var sum= a+b;
console.log("the values are:",a,b);
if(a==b)
{
	console.log("Ans:",(sum*3));
}
else
{
	console.log("Ans:",sum);
}

//6. Check two given numbers and return true if one of the number is 50 or if their sum is 50.

var a=parseInt(prompt("Enter 1st value:"));
var b=parseInt(prompt("Enter 2nd value:"));
var sum= a+b;
console.log("The values are:",a,b);
if(a==50 || b==50 || sum==50)
{
	console.log("true");
}
else
{
	console.log("false");
}

//8.Find the largest of three given integers.

var a=parseInt(prompt("Enter 'a' value:"));
var b=parseInt(prompt("Enter 'b' value:"));
var c=parseInt(prompt("Enter 'c' value:"));
console.log("The values are:",a,b,c);
if(a>b && a>c)
{
	console.log("A is the largest number",a);
}
else if(b>c && b>a)
{
	console.log("B is the largest number",b);
}
else
{
	console.log("c is the largest number",c);
}





