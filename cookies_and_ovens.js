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
class Cookies {
  constructor(kue){
    this._waktuPanggang = 20
    this._hargaAdonan = kue.hargaAdonan
    this._bahan = kue.bahan
    this._status = "mentah"
    kuekueku._kumpulan.push(this)
  }

  panggang(){
    this._status = "sedang dipanggang"
  }

  angkatKue(){
    this._status = "selesai dipanggang"
  }

  cetak(){
    console.log("Kue ini harganya ", this._hargaAdonan, ", bahannya ", this._bahan, ", status: ", this._status)
  }


}

class KueKacang extends Cookies {
  constructor(kue){
    super(kue)
    this._tambahan = 'kacang'
    this._warna = 'brown'
  }
  cetak(){
    super.cetak()
    console.log("tambahannya: ", this._tambahan, "dengan warna cookies" , this._warna)
  }
}

class KueCoklat extends Cookies {
  constructor(kue){
    super(kue)
    this._tambahan = 'coklat'
    this._warna = 'black'
  }
  cetak(){
    super.cetak()
    console.log("tambahannya: ", this._tambahan, "dengan warna cookies" ,this._warna)
  }

}

class KumpulanKue {
  constructor(){
    this._kumpulan = []
  }
}

let kuekueku = new KumpulanKue()
let kuecoklatku1 = new KueKacang({hargaAdonan: 5000, bahan :'kacang' })
let kuecoklatku2 = new KueKacang({hargaAdonan: 2000, bahan :'kacang' })
let kuecoklatku3 = new KueCoklat({hargaAdonan: 3000, bahan :'coklat' })
kuecoklatku1.panggang()
kuecoklatku1.cetak()

console.log(kuekueku)
