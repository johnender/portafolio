<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playing with PHP</title>


	<style>
		.error {
			color: red;
		}
	</style>
</head>
<body>
<?php 

echo "<br> <br> <strong><mark>First Test</mark> </strong><br> ";
echo " hello world! <hr />" ;
//single line comment

#another single line comment

/*
mutilple lines comment
mutilple lines comment
 */
$x = 10 / 5 * 4 + 2 - 1;
echo "10 / 5 * 4 + 2 - 1 = " . $x . "<hr/>"; //important, the "." to concat

echo "10 / 5 * 4 + 2 - 1 = " . $X . "<hr/>"; //variables are case sensitive



echo "<br> <br> <strong><mark>Variables</mark></strong> <br> ";
//variables names cannot start with a number

$var1 = "Hello world!";
$x = 15;
$y = 20.5;

//three different ways to do the same
echo $var1 . "<br>";
echo "$x <br>";
echo $y;
echo "<br>";
echo "<hr />";

$sport= "Football";
echo "I like $sport!";
echo "<hr />";

$sport= "Football";
echo "I like " . $sport . "!";
echo "<hr />";

$x = 5;
$y = 6;
echo $x + $y;





echo "<br> <br> <strong><mark>Variables Scope</mark></strong> <br> ";
//GLOBAL SCOPE EXAMPLE

$x = 5; // global scope
  
function test1() {
     // Will Generate Error
     echo "<p>Value of x is: $x</p>";
} 
test1();

echo "<p>Value of x is: $x</p><hr />";

//LOCAL SCOPE EXAMPLE

function test2() {
    $a = 5; // local scope
    echo "<p>Value of y is: $a</p>";
} 
test2();

// Will Generate Error
echo "<p>Value of y is: $a</p>";

function test3($param) {
    $y = $param; // local scope
    echo "<p>Value of y is: $y</p>";
} 
test3($x);

echo "<br> <br> <strong><mark>Global Keyword</mark></strong> <br> ";
//the global keyword casn be used to access global variables from within a function
//PHP saves the variables on the $GLOBALS[index] array
$b = 30;
$c = 20;


function test4() {
     global $b, $c;
	 $c = $b + $c;
} 

test4(); // Execute Function
echo $c . "<hr/>"; // Output Value of Variable y

function test5() {
    $GLOBALS['c'] = $GLOBALS['b'] + $GLOBALS['c'];
} 

test5(); // Execute Function
echo $c; // Output Value of Variable y

echo "<hr/>";
    
echo "<br> <br> <strong><mark>Static Keyword</mark></strong> <br> ";
//this keywords makes the variables to keep the value in memory

function test6() {
    static $x = 10;
    echo $x;
    $x++;
}

echo "<div>";
test6();
echo "<br>";
test6();
echo "<br>";
test6();
echo "<br>";
test6();
echo "<hr/>";
echo "</div>";


echo "<br> <br> <strong><mark>Echo vs Print</mark></strong> <br> ";
//BASIC OUTPUT USING ECHO
echo "<h1>Test Header Echo</h1>";
echo "Sample Paragraph 1. <br>";
//Echo allows multiple parameters - Print Does not
echo "This ", "string ", "has ", "multiple parameters ";
echo "<hr />";

//OUTPUT VARIABLES ECHO
$txt1 = "Sample Text 1";
$txt2 = "Soccer";

echo "<h2>" . $txt1 . "</h2>";
echo "I like " . $txt2 . "<br>";
echo $x + $y;

//BASIC OUTPUT USING PRINT
print "<h1>Test Header Print</h1>";
print "Sample Paragraph 1. <br>";
print "Print doesn't allow multiple parameters";
print "<hr />";

//OUTPUT VARIABLES PRINT
print "<h2>" . $txt1 . "</h2>";
print "I like " . $txt2 . "<br>";
print $x + $y;

echo "<hr/>";

echo "<br> <br> <strong><mark>Data Types</mark></strong> <br> ";
//var_dump shows the info about a variable

// STRING
echo "Strings<br>";
$str = "Hello world!";
$str2 = 'Hello world!';
echo $str;
echo "<br>";
echo $str2;
echo "<hr />";

// INTEGER, can be decimal hexa or octa
echo "Integer<br>";
$num = 6000;
var_dump($num);
echo "<hr />";

// FLOAT, exponencial or with a decimal point
echo "Float<br>";
$num2 = 20.565;
var_dump($num2);
echo "<hr />";

// ARRAY
echo "Array<br>";
$sports = array("Soccer","Tennis","Baseball","Football");
var_dump($sports);
echo "<hr />";

// NULL
echo "Null<br>";
$color = "Blue";
$color = null;
var_dump($color);
echo "<hr />";

// BOOLEAN
echo "Boolean<br>";
$boollean1 = true;
$boollean2 = false;
var_dump($boollean1);
var_dump($boollean2);

echo "<hr/>";


echo "<br> <br> <strong><mark>PHP Objects</mark></strong> <br> ";
// Create the Class
class Person {
	// Create Properties - (Variables tied to objects)
	public $firstname;
	public $lastname;
	public $age;
	
	// Assigning Values to the Property Variables
	public function __construct($firstname ="John", $lastname = "Doe", $age = 1) {
	  $this->firstname = $firstname;
	  $this->lastname = $lastname;
	  $this->age = $age;
	}
	
	// Create a Method (Function tied to an Object)
	public function hello() {
	  return "I am " . $this->firstname . " " . $this->lastname . ", my age is: " . $this->age . "";
	}
}
  
// Creating a new person named "John Smith", who is 25 years old
$person1 = new Person('John', 'Smith', 25);
$person2 = new Person('Joe', 'Bob', 35);
$person3 = new Person();


// Print out what the hello method returns
echo $person1->hello(); 
echo "<br>";
echo $person2->hello(); 
echo "<br>";
echo $person3->hello(); 
echo "<hr/>";


echo "<br> <br> <strong><mark>Strings</mark></strong> <br> ";
//WORD COUNT
echo "Word count<br>";
echo str_word_count("Hello world!");
echo "<hr />";

//REVERSE WORDS
echo "Reverse words<br>";
echo strrev("Hello world!"); // outputs !dlrow olleH
echo "<hr />";

//SEARCH FOR TEXT INSIDE A STRING
echo "Searching text within a string<br>";
echo strpos("Hello world!", "world"); // outputs 6
echo "<hr />";

//REPLACE TEXT INSIDE A STRING
echo "Replace text within a string<br>";
echo str_replace("world", "John", "Hello world!"); // outputs Hello John!
echo "<hr />";


echo "<br> <br> <strong><mark>Constants</mark></strong> <br> ";
//constants dont require the $ before the name, are global and case-sensitive
// Case-Sensitive
define("WELCOME", "Hello my name is John Smith");
echo WELCOME;

echo "<hr />";
/* not longer suported
// Case-Insensitive
define("WELCOME2", "Hello my name is John Smith", true);
echo welcome2;
echo "<hr />";
*/

// Constants are Global
define("CAR", "VOLVO");

function mycar() {
    echo CAR;
}
 
mycar();
echo "<hr/>";


echo "<br> <br> <strong><mark>PHP Operators</mark></strong> <br> ";
/*
PHP divide operators on 
* Arithmetic
*Assignment
*Comparison
*Increment / decrement
*Logical
*String
*Array
*/


echo "Increment / Decrement operators<br>";
//Post-increment - Returns $x, then increments $x by one
$x = 50; 
echo $x++;
echo "<hr />";

//Pre-increment - Increments $x by one, then returns $x
$x = 50; 
echo ++$x;
echo "<hr />";

//Pre-decrement - Decrements $x by one, then returns $x
$x = 50; 
echo --$x;
echo "<hr />";

//Post-decrement - Returns $x, then decrements $x by one
$x = 50; 
echo $x--;
echo "<hr/>";

echo "String Operators<br>";
//Concatenation - Concatenation of $x and $y
$e = "Hello";
$f = " world!";
echo $e . $f;
echo "<hr />";

//Concatenation assignment - Appends $txt2 to $txt1
$e = "John";
$f = " Smith";
$e .= $f;
echo $e;
echo "<hr />";

echo "Array Operators<br>";
//Union - Union of $g and $h
$g= array("a" => "blue", "b" => "red"); 
$h = array("c" => "pink", "d" => "brown"); 

print_r($g + $h); //Union
echo "<hr />";

//Equality - Returns true if $g and $h have the same key/value pairs
$g = array("a" => "blue", "b" => "red"); 
$h = array("a" => "pink", "d" => "brown"); 

var_dump($g == $h);
echo "<hr />";

//Identity - Returns true if $g and $h have the same key/value pairs in the same order and of the same types
$g = array("a" => "blue", "b" => "red"); 
$h = array("a" => "pink", "d" => "brown"); 

var_dump($g === $h);
echo "<hr />";

//Inequality - Returns true if $g is not equal to $h
$g = array("a" => "blue", "b" => "red"); 
$h = array("a" => "pink", "d" => "brown"); 

var_dump($g != $h);
echo "<hr />";

//Inequality - Returns true if $g is not equal to $h
$g = array("a" => "blue", "b" => "red"); 
$h = array("a" => "pink", "d" => "brown"); 

var_dump($g <> $h);
echo "<hr />";

//Non-identity - Returns true if $g is not identical to $h
$g = array("a" => "blue", "b" => "red"); 
$h = array("a" => "pink", "d" => "brown"); 

var_dump($g !== $h);
echo "<hr />";


echo "<br> <br> <strong><mark>Switch</mark></strong> <br> ";
$car = "volvo";

switch ($car) {
     case "volvo":
         echo "You drive a Volvo!";
         break;
     case "bmw":
         echo "You drive a BMW!";
         break;
     case "honda":
         echo "You drive a Honda!";
         break;
     default:
         echo "You don't drive";
}
echo "<hr/>";


echo "<br> <br> <strong><mark>For loops</mark></strong> <br> ";
for ($i = 0; $i <= 10; $i++) {
	echo "$i <br>";
 }
 
 echo "<hr />";
 
 
 
 //FOR EACH LOOP
 $cars = array("volvo", "bmw", "honda", "ford"); 
 
 foreach ($cars as $value) {
	echo "$value <br>";
 }
echo "<hr/>";


echo "<br> <br> <strong><mark>Functions</mark></strong> <br> ";
function displaytxt() {
	echo "My First Function";
}

displaytxt();

echo "<hr />";

//FUNCTION ARGUMENTS
function myCarF($car) {
   echo "$car<br>";
}


myCarF("Volvo");
myCarF("BMW");
myCarF("Honda");
echo "<hr />";

//DEFAULT ARGUMENT VALUE
function myAge($minage = 30) {
	echo "My age is : $minage <br>";
}

myAge();
myAge(50);
myAge(60);
myAge(18);

echo "<hr />";


//RETURNING VALUES
function add($x, $y) {
	$z = $x + $y;
	return $z;
}

echo "1 + 2 = " . add(1,2) . "<br>";
echo "3 + 4 = " . add(3,4) . "<br>";
echo "5 + 5 = " . add(5,5);
echo "<hr/>";


echo "<br> <br> <strong><mark>Arrays</mark></strong> <br> ";

//INDEXED ARRAY 
$colors = array("Blue", "Green", "Red"); 
echo "My Favorite Colors are: " . $colors[0] . ", " . $colors[1] . " and " . $colors[2] . "<hr />";

//ARRAY LENGTH
echo count($colors) . "<hr />";

//LOOP THROUGH AN INDEXED ARRAY
$arrlength = count($colors);

for($i = 0; $i < $arrlength; $i++) {
    echo $colors[$i] . "<br />";

}

echo "<hr />";

//ASSOCIATIVE ARRAYS
$tscore = array("John"=>"60", "Bill"=>"80", "Dan"=>"75");
echo "Bill scored " . $tscore['Bill'] . " /100.";

echo "<hr />";

//LOOP THROUGH AN ASSOCIATIVE ARRAY
foreach($tscore as $x => $score) {
    echo "Key=" . $x . ", Score=" . $score;
    echo "<br>";
}

echo "<hr />";
//MULTIDIMENTIONAL ARRAYS
$grades = array
   (
   array("John",50,60),
   array("Bob",40,25),
   array("Sam",35,48),
   array("Ted",55,26)
   );
   
echo $grades[0][0].": Test 1: ".$grades[0][1].", Test 2: ".$grades[0][2].".<br>";
echo $grades[1][0].": Test 1: ".$grades[1][1].", Test 2: ".$grades[1][2].".<br>";
echo $grades[2][0].": Test 1: ".$grades[2][1].", Test 2: ".$grades[2][2].".<br>";
echo $grades[3][0].": Test 1: ".$grades[3][1].", Test 2: ".$grades[3][2].".<br>";
echo "<hr/>";


echo "<br> <br> <strong><mark>Sorting arrays</mark></strong> <br> ";
//add r to be desecnding , like arsort, rsort, krsort
//SORT
$names = array("John", "Bob", "Dana", "Sue", "Ted", "Sam", "Xena", "Zara");
sort($names);

$nlen = count($names);
for($x = 0; $x <  $nlen; $x++) {
     echo $names[$x];
     echo "<br>";
}
echo "<hr/>";

//RSORT
$names2 = array("John", "Bob", "Dana", "Sue", "Ted", "Sam", "Xena", "Zara");
rsort($names2);

$nlen2 = count($names2);
for($x = 0; $x <  $nlen2; $x++) {
     echo $names2[$x];
     echo "<br>";
}

echo "<hr />";
//ASSOCIATIVE ARRAY SORT ACCORDING TO VALUE
$tscore = array("John"=>"60", "Bill"=>"80", "Dan"=>"75");
asort($tscore);


foreach($tscore as $x => $x_value) {
     echo "Key=" . $x . ", Value=" . $x_value;
     echo "<br>";
}
echo "<hr/>";

//ASSOCIATIVE ARRAY SORT ACCORDING TO VALUE
$tscore2 = array("John"=>"60", "Bill"=>"80", "Dan"=>"75");
ksort($tscore2);


foreach($tscore2 as $x => $x_value) {
     echo "Key=" . $x . ", Value=" . $x_value;
     echo "<br>";
}
echo "<hr/>";


echo "<br> <br> <strong><mark>Superglobal variables</mark></strong> <br> ";
//GLOBAL VARIABLE
$j = 30; 
$k = 40;
 
function add2() { 
    $GLOBALS['l'] = $GLOBALS['j'] + $GLOBALS['k']; 
}
 
add2(); 
echo $l; 

//OTHER SUPERGLOBALS (also _REQUEST, _POST and _GET), always save the value
echo "<hr />";
 
echo $_SERVER['PHP_SELF'];
echo "<hr />";
echo $_SERVER['SERVER_NAME'];
echo "<hr />";

echo "<br> <br> <strong><mark>Forms</mark></strong> <br> ";
//GET past the params through the URL 2000 characters limit
//POSRT pst the params using the HHTP Post method, no limits

/**Validation
 * Pass all variables through PHPs htmlspecialchars() to make sure data is transmited securely
 * Use the trim function to strip any unnecessary characters such as extra space, tabs, or breaks into input fields
 * Use the striplashes() to remove any backslashes from user input data. This helps add an aditional layer  of security and protects data integrity.
 */
echo "<hr/>";
$name = $website = $position = $experience = $estatus = $comments = "";

if ($_SERVER["REQUEST_METHOD"] == "POST"){
	//chenking the mandatory fields are not empty
	if (empty($_POST["name"])){
		echo "<span class=\"error\">Error: First name required</span>";
	}//validating the name only have latters and white spaces
	elseif (!preg_match(" /^[a-zA-Z ]* $/", $_POST["name"])){
		echo "<span class=\"error\">Error: First name can only contain letters and white space</span>";
	}
	else if (empty($_POST["website"])){
		echo "<span class=\"error\">Error: Website required</span>";
	}//validating the URL is valid
 /*  elseif (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%?=~_|]/i ", $_POST["website"])){
		echo "<span class=\"error\">Error: Website is in wrong format</span>";
	} */
  else{
		$name = val($_POST["name"]);
		$website = val($_POST["website"]);
		$position = val($_POST["position"]);
		$experience = val($_POST["experience"]);
		$estatus = val($_POST["estatus"]);
		$comments =val($_POST["comments"]);
	}
}


function val($data){
	$data = trim($data);	//removing any unnecessary characters such as extra space, tabs, or breaks into input fields
	$data = stripcslashes($data); //remove any backslashes from user input data.
	$data = htmlspecialchars($data); //to make sure data is transmited securely
	return $data;
}

//php code to validate the form


?>
<!--
<form action="send.php" method="GET">
	First Name: <input type="text" name="fname"><br>
	E-mail: <input type="text" name="email"><br>
	<input type="submit">
</form>
-->


<!-- $_SERVER sends the data to the same file as the existing file (because the parameter PHP_SELF), htmlspecialchars prevents data injection -->


<form name="employment" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post"> 
 <table width="600" border="0" cellspacing="1" cellpadding="1">
    <tr>
      <td><h2>Employment Application</h2></td>
      <td></td>
    </tr>
    <tr>
      <td>Name</td>
      <td><input type="text" name="name" maxlength="50" />
	  </td>
    </tr>
    <tr>
      <td>Website</td>
      <td><input type="text" name="website" maxlength="50" /></td>
    </tr>
    <tr>
      <td>Position</td>
      <td>
	  
			  <select name="position">
			  
				<option value="Accountant">Accountant</option>
				<option value="Receptionist">Receptionist</option>
				<option value="Administrator">Administrator</option>
				<option value="Supervisor">Supervisor</option>
			  
			  </select>
			  	  
	  </td>
    </tr>
    <tr>
      <td>Experience Level</td>
      <td>
	  
			<select name="experience">
			  
				<option value="Entry Level">Entry Level</option>
				<option value="Some Experience">Some Experience</option>
				<option value="Very Experienced">Very Experienced</option>
			  
			</select>
	  
	  </td>
    </tr>
    <tr>
      <td>Employment Status</td>
      <td>
	  
	  <input type="radio" name="estatus" value="Employed" checked />Employed
	  <input type="radio" name="estatus" value="Unemployed" />Unemployed
	  <input type="radio" name="estatus" value="Student" />Student
	  
	  </td>
    </tr>
    <tr>
      <td>Additional Comments</td>
      <td>
	  
	  <textarea name="comments" cols="45" rows="5"></textarea>
	  
	  </td>
    </tr>
    <tr>
      <td></td>
      <td>
	  
	  <input type="submit" name="submit" value="Submit" />
	  <input type="reset" name="reset" value="Reset" />
	  
	  </td>
    </tr>
  </table>
</form>

<?php
//printing the form values
echo "<h2>User Input: </h2>";
echo "Name: " .$name . "<br>";
echo "Website: " .$website . "<br>";
echo "Position: " .$position . "<br>";
echo "Experience: " .$experience . "<br>";
echo "Estatus: " .$estatus . "<br>";
echo "Comments: " .$comments . "<br>";
?>
</body>
</html>