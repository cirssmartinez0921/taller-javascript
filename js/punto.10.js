let auto = {
    velocidad: 0,

    acelerar: function(){
        this.velocidad++;
    },
    frenar: function(){
        if(this.velocidad > 0) {
            this.velocidad--;
        }
    }
}

console.log(auto.velocidad);
auto.acelerar()
console.log(auto.velocidad);
auto.frenar()
console.log(auto.velocidad);
auto.frenar()
console.log(auto.velocidad);
auto.acelerar()
console.log(auto.velocidad);
auto.acelerar()
console.log(auto.velocidad);
auto.frenar()
console.log(auto.velocidad);
auto.acelerar()
console.log(auto.velocidad);
auto.acelerar()
console.log(auto.velocidad);
