type Circle = {
    shape: "circle";
    radius: number
}

type Rectangle = {
    shape: 'rectangle'
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape):number => {
    if(shape.shape === 'circle') {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2))

    } else if (shape.shape === 'rectangle') {
        return shape.width * shape.height
    } else {
        throw new Error ("Invalid Input")
    }
}


const circle1 = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangle1 = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circle1, rectangle1);