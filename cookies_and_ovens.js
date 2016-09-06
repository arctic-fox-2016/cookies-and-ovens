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
    this.startTimer()

  }
  add(kue){
    if(this._tray.length < this._kapasitas){
      console.log("oven sudah penuh")
    }else{
    this._tray.push(kue)
  }
  }

  startTimer(time){

    timerOven = setInterval(function () {
      timePanggang+=1000
      if(timePanggang >= (~~(this._tray[0]._lama_panggang*(3/4)))){
        this._tray[0]._status = "hampirmasak"
      } else if(timePanggang >= (~~(this._tray[0]._lama_panggang))){
        this._tray[0]._status = "masak"
      } else if(timePanggang > (~~(this._tray[0]._lama_panggang+5))){
        this._tray[0]._status = "hangus"
      }
      //jika timer mencapai time hentikan panggangan
      if(time === timePanggang){
        clearInterval(timerOven)
        //selesai bunyikan alarm
        this.alarm()
      }
    },1000)
  }
  getStatus(){

    return this._tray[0]._status

  }
  //ketika ingin matikan oven dengan settimer berlebihan
  stopPaksa(){
  clearInterval(timerOven)
  }
  alarm(){
    console.log("kue sudah matang!!!");
  }

}

class Kue {
  constructor(options) {
    this._name = options['name']
    this._bahan = "mentah"
    this._status = options['status']
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

class kuekacang extends Kue
{
  constructor(options)
  {
    super(options)
    this._jumlah = 100
    this._lama_panggang = 30000 //milisecond
  }

}

class kueCoklat extends Kue
{
  constructor(options)
  {
    super(options)
    this._jumlah = 150
    this._lama_panggang = 25000 //milisecond
  }
}
