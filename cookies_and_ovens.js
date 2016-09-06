// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Oven {
  constructor(options) {
    this._kapasitas = options['kapasitas'] || 1
    this._tray = []
    this.timerOven = 0
    this.timePanggang = 0
  }

  panggang(){
    //start timer
    //console.log(this._tray[0].lama_panggang)
  this.startTimer(this._tray[0].lama_panggang)
    console.log(`sedang memanggang. tunggu ${this._tray[0].lama_panggang} ms`);

  }
  add(kue){
    if(this._tray.length > this._kapasitas){
      console.log("oven sudah penuh")
    }else{
    this._tray.push(kue)
  }
  }

  startTimer(time){
    let pointer = this._tray[0];
    let pointer_1 = this;
    this.timerOven = setInterval(function () {
      pointer_1.timePanggang+=1000
      if(pointer_1.timePanggang >= (~~(pointer.lama_panggang*(3/4)))){
        pointer._status = "hampirmasak"
      } else if(pointer_1.timePanggang >= (~~(pointer.lama_panggang))){
        pointer._status = "masak"
      } else if(pointer_1.timePanggang > (~~(pointer.lama_panggang+5))){
        pointer._status = "hangus"
      }
      console.log(pointer_1.timePanggang/1000,"s")
      //jika timer mencapai time hentikan panggangan
      if(time === pointer_1.timePanggang){
        clearInterval(pointer_1.timerOven)
        //selesai bunyikan alarm
        pointer_1.alarm()
      }
    },1000)
  }
  getStatus(){

    return this._tray[0]._status

  }
  //ketika ingin matikan oven dengan settimer berlebihan
  stopPaksa(){
  clearInterval(this.timerOven)
  }
  alarm(){
    console.log("kue sudah matang!!!");
  }

}

class Kue {
  constructor(options) {
    this._name = options['name']
    this._status = "mentah"
    this._rasa = options['rasa']
    this._harga = options['harga']
    this._ukuran = options['ukuran']
  }

      cekHarga()
      {
        return this._harga
      }

      cekUkuran()
      {
        return this._ukuran
      }

      getRasa()
      {
        return this._rasa
      }
}

class Kuekacang extends Kue
{
  constructor(options)
  {
    super(options)
    this._jumlah = 100
    this.lama_panggang = 3000 //milisecond
  }

}

class KueCoklat extends Kue
{
  constructor(options)
  {
    super(options)
    this._jumlah = 150
    this.lama_panggang = 3000 //milisecond
  }
}

let oven = new Oven({kapasitas:3})
let kacang = new Kuekacang({name:"kue kacang",
rasa: "kacang",
harga:150000,
ukuran:"sedang"})
let coklat = new KueCoklat({name:"kue coklat",
rasa: "coklat",
harga:200000,
ukuran:"besar"})
oven.add(kacang)
oven.add(coklat)
oven.panggang()
