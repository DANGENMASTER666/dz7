// const block = document.getElementsByClassName('block')
// const block2 = document.getElementsById('block2')

// console.log(block)


// const [ame, gam, ...info] = ['amega', 'gama', 'block1',['block2']]

//console.log(ame, gam, info, mas)


// const mass = ('a','b','c','d')
// const obj = {a: 'a', b: 'b'}


//const button = document.getElementById('btn')

//button.onclick = () => {
   // let hello = prompt('имя')
//}

// class  Dog {
//     constructor(weight,height,color) {
//
//     }
// }
//
// const PZ = new Dog(
//     80,
//     150,
//     "voilet"
// )
//
// console.log(PZ)
//
// class animal {
//     constructor(type,gender,color,voiceText)     {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//
// }
//
// class Cat extends Animal {
//     constructor(type,gender,color,voiceText,name, purposeText) {
//         super(type, gender, color, voiceText,);
//         this.name = name;
//         this.purposeText = purposeText;
//     }
// }
//
// function  Animal(type, gender, color, voiceText, purposeText, name) {
//     console.log(type, gender, color, voiceText, purposeText, name)
//
// }
//  Animal('domestic', "male", "blue", "mrrrrrr", "security",
//      "PZ")


////////////////////////////////////

// class weapon {
//     constructor(length,weight,height,calibr,type,saund,barrels,avia,carrier,name,) {
//     }
// }
//
// const m20 = new Weapon(
//     2000,
//     150,
//     50,
//     "50BMG",
//     "hevy",
//     "brrr",
//     7,
//     "a10",
//     "carrier",
//     "name",
// )
// console.log()
//
// class weapon extends Carrier {
//     constructor(calibr,type,saund,barrels,avia,carrier,name,bzt,length) {
//          super(calibr,type,saund,barrels,avia,carrier,name,bzt,length);
//          this.name = name;
//          this.saund = saund ;
//          this.type = type ;
//          this.avia = avia ;
//          this.barrels = barrels ;
//          this.carrier = carrier ;
//          this.calibr = calibr ;
//          this.bzt = bzt ;
//          this.length = length  ;
//      }
//  }
//
// function Carrier (length,weight,height,calibr,type,saund,barrels,avia,carrier,name) {
//
// }
// console.log(length, weight, height, calibr, type, saund, barrels, avia, carrier, name)






class Carier {
    constructor(length,weight,height,calibr,type)     {
        this.length = length ;
        this.weigth = weight ;
        this.heigth = height ;
        this.calibr = calibr ;
        this.type = type ;
    }

}

class weapon extends Carier {
    constructor(length,weight,height,calibr,type,saund,barrels,carrier,name) {
        super(length,weight,height,calibr,type);
        this.saund = saund ;
        this.barrels = barrels ;
        this.carrier = carrier ;
        this.name = name ;
    }
}


const vulkan = new Carier(
    'dt',
    'dv',
    'sh',
    'dmm',
    'minigun',
)

console.log(vulkan)


class m20 extends vulkan {
    constructor(saund,barrels,carrier,name,dt,dv,sh,dmm,minigun) {
        super(saund,barrels,carrier,name);
        this.dt = dt;
        this.dv = dv;
        this.sh = sh;
        this.dmm =dmm;
        this.minigun =minigun;
    }
}

const m24 = new m20(

)
console.log(m24)


// function Carier(length,weight,height,calibr,type,saund,barrels,carrier,name){
//     console.log(length,weight,height,calibr,type,saund,barrels,carrier,name)
// }
//
// Carier('2000','200','60','20mm','minigun','brr','7','avia','vulcan',)


