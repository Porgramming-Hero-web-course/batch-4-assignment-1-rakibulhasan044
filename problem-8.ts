const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    const objKeys = Object.keys(obj) as (keyof T)[];
    
    for (let i = 0; i < keys.length; i++) {
        if (!objKeys.includes(keys[i])) {
            
            return false;
        }
    }
    return true;
};


const person1 = { name: "Alice", age: 30, email: "alice@example.com" };

console.log(validateKeys(person1, ["age", "name"]));
