class Vehicle{
  color: string;

  constructor( protected color:string){
this.color = color;
  }

  protected honk():void{
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// class BCar extends Vehicle{
// private drive(): void {
//   console.log('vroom');
// }
// startDrivingProcess():void{
//   this.drive();
// this.honk();
// }
// }

// const ncar = new BCar();
// ncar.startDrivingProcess();
// ncar.honk();
