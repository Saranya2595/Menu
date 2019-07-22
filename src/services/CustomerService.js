var service ={};
var customerData=[
    {id:1,name:'Neo',email:'sds@sd.sd',contactNo:"3434",address:'fwe'},
    {id:2,name:'Trinity',email:'sds@sd.sd',contactNo:"9876",address:'dfw'}
]
localStorage.setItem('app_data',JSON.stringify(customerData));



service.getCustomers = function(){
    let data=localStorage.getItem('app_data');
    return data;
}

service.addCustomers = function(data){
    customerData.push(data);
    localStorage.setItem('app_data',JSON.stringify(customerData));
}

service.updateCustomerData = function(data){
    customerData=customerData.map((item)=>{
        if(item.id==data.id){
            item=data;
        }
        return item;
    });
    localStorage.setItem('app_data',JSON.stringify(customerData));

}

service.deleteCustomerbyId = function(id){
    customerData = customerData.filter((item)=>{
        return item.id!==id
    })
    localStorage.setItem('app_data',JSON.stringify(customerData));
    return customerData;
}

export default service;