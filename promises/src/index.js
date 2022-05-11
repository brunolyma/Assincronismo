let myCar = {
  name: "Ecosport",
  velocity: 60,
  acceleration: 0,
};
const velocityAfter2Seconds = (velocity, acceleration) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Nova velocidade: ${velocity} Km/h`);
        resolve(velocity);
      } else {
        console.log("Aceleração inválida");
        reject("Aceleração não realizada");
      }
    },2000);
  });
};

velocityAfter2Seconds(myCar.velocity, myCar.acceleration).then((result) => {
    myCar.velocity = result
    console.log(myCar)
}).catch((err) => {
    console.log(`${myCar.name}: ${err}`)
});

console.log("Execução de Promises");
console.log(myCar);
