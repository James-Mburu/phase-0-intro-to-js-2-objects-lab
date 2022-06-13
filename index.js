
    const employee = {
        name: "Stella",
        streetAddress: "Ngeka Centre"

    }

  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };

    newEmployee[key] = value;

    return newEmployee

    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee
    }


     function deleteFromEmployeeByKey(employee, key){     
    //    deleteFromEmployeeByKey(employee, key)
        let newEmployee = { ...employee };
         delete newEmployee['name']

         return newEmployee

     }

     function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee['name']

         return employee
     }