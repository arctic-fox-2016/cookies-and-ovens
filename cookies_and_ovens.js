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

class Kue {
  constructor(component) {
    this.namaKue = component['namaKue'] //string
    this.waktuMasak = component['waktuMasak'] //int
    this.statusKue = "belum diapa - apain" //string
    this.kematangan = 0 //int
    this.kueMasihMentah = [] //array
    this.kueHampirMasak = [] //array
    this.kueSelesai = [] //array
    this.kueHangus = [] //array
    this.kueBelumApaApa = [] //array
  }

  masak(waktu){
    for(var i=0;i<waktu;i++){
      this.kematangan += 3
      this.waktuMasak--
    }

    console.log("Kematangan " + this.namaKue + " sekarang adalah " + this.kematangan + " waktu masak yang tersisa adalah " + this.waktuMasak)
  }

  angkat(){
    if(this.kematangan >= 0 && this.kematangan <= 30 ){
      this.statusKue = "masih mentah"
      this.kueMasihMentah.push(this.namaKue)
    }
    else if (this.kematangan > 30 && this.kematangan <= 60) {
      this.statusKue = "hampir masak"
      this.kueHampirMasak.push(this.namaKue)
    }
    else if (this.kematangan > 60 && this.kematangan <= 100) {
      this.statusKue = "selesai"
      this.kueSelesai.push(this.namaKue)
    }
    else if (this.kematangan > 100) {
      this.statusKue = "hangus"
      this.kueHangus.push(this.namaKue)
    }
    else{
      this.statusKue = "belum diapa - apain"
      this.kueBelumApaApa.push(this.namaKue)
    }
  }
}

class KueKacang extends Kue{
  constructor(component) {
    super(component)
    this.waktuMasak = 50
  }
}

class KueCoklat extends Kue{
  constructor(component) {
    super(component)
    this.waktuMasak = 70
  }
}

class KueKeju extends Kue{
  constructor(component) {
    super(component)
    this.waktuMasak = 90
  }
}

class KueSrikaya extends Kue{
  constructor(component) {
    super(component)
    this.waktuMasak = 40
  }
}

let kuesrikaya1 = new KueSrikaya({
    namaKue: "Kue Srikaya Numero Uno"
})

console.log(kuesrikaya1)
kuesrikaya1.masak(5) // waktu masak = 40 - 5 = 35 & kematangan = 5 * 3 = 15

console.log(kuesrikaya1)
kuesrikaya1.masak(20) // waktu masak = 35 - 20 = 15 & kematangan = 15 + (20*3) = 75
// kuesrikaya selesai karena kematangan = 75
kuesrikaya1.angkat() //  kue diangkat! kueSelesai = ['Kue Srikaya Numero Uno']

console.log(kuesrikaya1)
