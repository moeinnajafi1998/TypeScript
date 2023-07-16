function test(name:string):string{
    return "hi dear: " + name;
}

function test2(name:string){
    return "hi dear: " + name;
}

// ts considers name variable as any type but return value type is string
function test3(name){
    return "hi dear: " + name;
}

// return type is string or number
function test4(name:string){
    if(name="Moeinnajafi1998"){
        return name;
    }
    return Math.floor(Math.random());
}

// input and return are any type
function test5(name){
    if(name="Moeinnajafi1998"){
        return name;
    }
    return Math.floor(Math.random());
}

// input type is any but return value must be string
function test6(name):string{
    return name;
    // return Math.floor(Math.random()); => Error occured
}