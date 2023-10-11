import Koopa from './koopa'
import RedKoopa from './redkoopa'
import GreenKoopa from './greenkoopa'
import FlyingKoopa from './flyingkoopa'

const koopas: Koopa[] = [new RedKoopa(2), new RedKoopa(3), new GreenKoopa(2), new FlyingKoopa(3, 'green')]

for( const koopa of koopas ) {
  koopa.defense()
  console.log(koopa.color)
}

/* 
Create a class `Car` and then create 2 car subclasses `SmartCar`, `Truck`.
All Cars should be able to `brake` `drive` and `honk`

- When a SmartCar drives it makes `hummmm` sound and when it honks it makes a `MMmeep` sound
- When a Truck drives it makes a `vrooom` sound and when it honks it makes `BWaaaaaahp`
- When a Truck or a SmartCar brakes it makes `squeeel` sound
*/