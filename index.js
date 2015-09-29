var Person = function(fname,lname){
	this.firstName = fname;
	this.lastName = lname;
};

Person.prototype.getFullName = function(){
	return this.firstName+" "+this.lastName;
};

function Employee(fname,lname,empCode,empSalary){
	Person.call(this,fname,lname);
	this.empId = empCode;
	this.salary = empSalary;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.contrustor = Employee;

Employee.prototype.alertSalary = function(){
	alert(this.getFullName()+" has salary "+this.salary);
};

var p = new Person("Rohit","Sengar");
var emp = new Employee("Rahul","Kumar",2342,30000);

console.log(p.getFullName()); // uses its own method
console.log(emp.getFullName()); // uses inhereited function from person
console.log(emp.alertSalary());

// Check that instanceof works correctly
console.log(emp instanceof Person);  // true 
console.log(emp instanceof Employee); // true
