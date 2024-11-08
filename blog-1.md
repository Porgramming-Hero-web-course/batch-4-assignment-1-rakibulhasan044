# The significance of union and intersection types in Typescript

Union and intersection types are widely used feature of typescript, because of its help the programmer to handle more complex data type easily.

### Union type: 
Union types are use when a variable or an object need one or more types from multiple property types, which provide flexibility for programmers as they don not need to write types for each variable and object. Its also increase the code readability. In union type there must be at least on type which need to be present in the new variable or object. Here is an example of union type

types Circle = {
    shape: "circle";
    radius: number;
}

types Rectangle = {
    shape: "rectangle";
    width: number;
    height: number
}

type Shape = Circle | Rectangle

### Intersection type:
Intersection types are use when a variable or an object need more than one types of property. By using object we can extends of one or multiple object property into a new object, which save us from declaring same type object for an new object which can have the previous properties of the object and new property as well. In intersection type all the type's property need to present in the intersection type. Here is an example

type Person = {
    name: string;
    age: number;
    address: string
}

type Student = {
    id: number;
}

type NewStudent = Person & Student
