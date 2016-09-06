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
    class BahanKue {
      constructor(property){
      this.coklat = property['coklat']
      this.telur = property['telur']
      this.gula = property['gula']
      this.margarin = property ['margarin']
      this.terigu = property ['terigu']
      }
    }

    class Memasak extends BahanKue{
      constructor(property){
        super(property)
        this.namaMasakan = property['namaMasakan']
        this.statusKue = property ['statusKue']
        this.waktuMemasak = property ['waktuMemasak']
        console.log("kita akan membuat "+this.namaMasakan)
        console.log("Bahan Kue Coklat :")
        console.log("coklat   : " + this.coklat + " Gram ")
        console.log("telur    : " + this.telur + " butir ")
        console.log("gula     : " + this.gula + " Gram ")
        console.log("margarin : " + this.margarin + " Gram ")
        console.log("terigu   : " + this.terigu + " Gram ")
      }

        mixing(){
          bahan.coklat -= this.coklat
          bahan.telur -= this.telur
          bahan.gula -= this.gula
          bahan.margarin -= this.margarin
          bahan.terigu -= this.terigu
        }

        waktuMemanggang(){
          this.statusPanggangan = property['statusPanggangan']
          return this.waktuMemanggang
          }

        kueMatang (value){
          console.log(this.waktuMemasak)
          console.log(value)
          if(value > this.waktuMemasak){
            this.statusKue = "Hangus"
          }else if (value < this.waktuMemasak){
            this.statusKue = "Kurang matang"
          }else{
            this.statusKue ="Siap disajikan"
          }
          return this.statusKue
      console.log("Status Kue Anda Adalah : "+ this.statusKue)
      console.log("----Waktu Sudah Berjalan : " + this.waktuTotal+ " Menit")
        }
      }

    class KueCoklat extends Memasak{
      constructor(property){
        super(property)
        this.waktuMemasak = 120
      }
    }

    // bahan memasak
    let bahan = new BahanKue({
      coklat  : 3000,
      telur   : 100,
      gula    : 5000,
      margarin: 1000,
      terigu  : 1000
  })

 // waktu memasak
    let coklatManis = new Memasak({
      namaMasakan : "coklatManis",
      coklat  : 200,
      telur   : 10,
      gula    : 250,
      margarin: 100,
      terigu  : 350,
      waktuMemasak:120
  })


  console.log(coklatManis.kueMatang(90))
  console.log(coklatManis.statusKue)
