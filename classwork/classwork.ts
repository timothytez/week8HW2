/* 
Create a class `Car` and then create 2 car subclasses `SmartCar`, `Truck`.
All Cars should be able to `brake` `drive` and `honk`

- When a SmartCar drives it makes `hummmm` sound and when it honks it makes a `MMmeep` sound
- When a Truck drives it makes a `vrooom` sound and when it honks it makes `BWaaaaaahp`
- When a Truck or a SmartCar brakes it makes `squeeel` sound
*/

export default abstract class Car{
    abstract brake():void

    abstract drive():void

    abstract honk():void
}


//////////////////////////////////
// import Car from "./carClass";

// class SmartCar extends Car{
//     drive(): void {
//      console.log('hummmmmmmm');   
//     }

//     honk(): void {
//         console.log('MMmeep');
//     }

//     brake(): void {
//         console.log('squeeel');
//     }
// }

// const smartCar = new SmartCar()




///////////////////////////////////
// import Car from "./carClass";

// class Truck extends Car{
//     drive(): void {
//         console.log('vrooooom');
//     }

//     honk(): void {
//         console.log('BWaaaaaaahp');
//     }

//     brake(): void {
//         console.log('squeeel');
//     }
// }

// const truck = new Truck()