/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, number]){
    let newRecord = {}
    newRecord.firstName = firstName
    newRecord.familyName = familyName
    newRecord.title = title
    newRecord.payPerHour = number
    newRecord.timeInEvents = []
    newRecord.timeOutEvents = []
    return newRecord
}

function createEmployeeRecords(arrayOfArrays){
    // console.log(arrayOfArrays)
    let newArr = []
    arrayOfArrays.forEach(array => newArr.push(createEmployeeRecord(array)))
    // console.log(newArr)
    return newArr
}

function createTimeInEvent(dateString){
    // Declare and initialize the keys
    // console.log(dateString)
    // console.log(this)
    let timeInObject = {};
    
    // Assign values to the keys
    timeInObject["type"] = "TimeIn"
    timeInObject["date"] = dateString.slice(0, 10)
    timeInObject["hour"] = parseInt(dateString.slice(11, 15))
    
    this["timeInEvents"].push(timeInObject)
    return this
}

function createTimeOutEvent(dateString){
    // Declare and initialize the keys
    // console.log(employeeRecord, dateString)
    let timeOutObject = {};
    // Assign values to the keys
    timeOutObject["type"] = "TimeOut"
    timeOutObject["date"] = dateString.slice(0, 10)
    timeOutObject["hour"] = parseInt(dateString.slice(11, 15))
    
    this["timeOutEvents"].push(timeOutObject)
    // console.log(employeeRecord)
    return this
}

function hoursWorkedOnDate(dateString){
    let timeIn = this["timeInEvents"].find((element) => {
        return element.date === dateString
    })
    // console.log(timeIn)
    
    let timeOut = this["timeOutEvents"].find((element) => {
        return element.date === dateString
    })
    // console.log(timeOut)

    let hoursWorked = timeOut["hour"] - timeIn["hour"]
    return hoursWorked / 100
}

function wagesEarnedOnDate(dateString) {
    console.log(this)
    let payOwed = hoursWorkedOnDate.call(this, dateString) * this.payPerHour
    console.log(payOwed)
    return payOwed
}

function findEmployeeByFirstName(srcArray, firstName){
    console.log(srcArray)
    let found = srcArray.find(object => object.firstName === firstName)
    console.log(found)
    return found
}

function calculatePayroll(employeeRecords){
    let allPayRoll = employeeRecords.map((employeeRecord) => {
        return allWagesFor.call(employeeRecord)
    })
    // console.log(allPayRoll)
    let total = allPayRoll.reduce(
        (accumulator, currentValue) => {return accumulator + currentValue}, 0)
        return total
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

