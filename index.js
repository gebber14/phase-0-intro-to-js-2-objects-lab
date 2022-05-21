const employee = {
    name: "Phil",
    streetAddress: "1010 N Noble",
}
function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj,key) {
    const delByKey = {...obj};
    delete delByKey[key];
    return delByKey;
}
function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key];
    return obj;
}
