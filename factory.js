function employee() {
    this.newEmployee = function (type)
    {
        var employee;
 
        if (type === "hr") {
            employee = new Hr();
        } else if (type === "sales") {
            employee = new Sales();
        } else if (type === "developer") {
            employee = new Developer();
        } else if (type === "managment") {
            employee = new Management();
        }
 
        employee.type = type;
 
        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "hour");
        }
 
        return employee;
    }
}
 
var Hr = function () {
    this.hourly = "9hr";
};
 
var Sale = function () {
    this.hourly = "8hr";
};
 
var Developer = function () {
    this.hourly = "7hr";
};
 
var Managment = function () {
    this.hourly = "6hr";
};
 

var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var employees = [];
    var employee = new Employee();
 
    employees.push(employee.newEmployee("hr"));
    employees.push(employee.newEmployee("sale"));
    employees.push(employee.newEmployee("developer"));
    employees.push(employee.newEmployee("management"));
    
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
 
    log.show();
}
