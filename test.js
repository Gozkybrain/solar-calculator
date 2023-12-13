// Selectors
let appliance = document.querySelector(".appliance");
let selected = document.querySelector(".selected");
let loadActive = document.getElementsByClassName("load-active");
// // Other
let totalLoad = document.getElementById("total-load");
let batteryCapacity = document.getElementById("battery-capacity");
let backupTime = document.getElementById("backup-time");
let rating = document.getElementById("rating");
let batteryVolt = document.getElementById("inverter_battery");
let loadPrice = document.getElementById("etimate-price");
let load = document.getElementsByName("load");


// Bulb
let bulb = document.querySelector(".bulb");
let bulbLoad = document.getElementById("bulb-load");
let bulbQty = document.getElementById("bulb-qty");
let bulbWatt = document.getElementById("bulb-watt");
// Tube Light
let tlight = document.querySelector(".tlight");
let tlightLoad = document.getElementById("tlight-load");
let tlightQty = document.getElementById("tlight-qty");
let tlightWatt = document.getElementById("tlight-watt");
// LED Lamp
let ledlamp = document.querySelector(".ledlamp");
let ledlampLoad = document.getElementById("ledlamp-load");
let ledlampQty = document.getElementById("ledlamp-qty");
let ledlampWatt = document.getElementById("ledlamp-watt");
// Fan
let fan = document.querySelector(".fan");
let fanLoad = document.getElementById("fan-load");
let fanQty = document.getElementById("fan-qty");
let fanWatt = document.getElementById("fan-watt");
// Music system
let msystem = document.querySelector(".msystem");
let msystemLoad = document.getElementById("msystem-load");
let msystemQty = document.getElementById("msystem-qty");
let msystemWatt = document.getElementById("msystem-watt");
// TV one
let tvone = document.querySelector(".tvone");
let tvoneLoad = document.getElementById("tvone-load");
let tvoneQty = document.getElementById("tvone-qty");
let tvoneWatt = document.getElementById("tvone-watt");
// TV two
let tvtwo = document.querySelector(".tvtwo");
let tvtwoLoad = document.getElementById("tvtwo-load");
let tvtwoQty = document.getElementById("tvtwo-qty");
let tvtwoWatt = document.getElementById("tvtwo-watt");
// Refrigerator one
let fridgeone = document.querySelector(".fridgeone");
let fridgeoneLoad = document.getElementById("fridgeone-load");
let fridgeoneQty = document.getElementById("fridgeone-qty");
let  fridgeoneWatt = document.getElementById(" fridgeone-watt");
// Refrigerator two
let fridgetwo = document.querySelector(".fridgetwo");
let fridgetwoLoad = document.getElementById("fridgetwo-load");
let fridgetwoQty = document.getElementById("fridgetwo-qty");
let fridgetwoWatt = document.getElementById("fridgetwo-watt");
// Refrigerator three
let fridgethree = document.querySelector(".fridgethree");
let fridgethreeLoad = document.getElementById("fridgethree-load");
let fridgethreeQty = document.getElementById("fridgethree-qty");
let fridgethreeWatt = document.getElementById("fridgethree-watt");
// Refrigerator four
let fridgefour = document.querySelector(".fridgefour");
let fridgefourLoad = document.getElementById("fridgefour-load");
let fridgefourQty = document.getElementById("fridgefour-qty");
let fridgefourWatt = document.getElementById("fridgefour-watt");
// AC one
let acone = document.querySelector(".acone");
let aconeLoad = document.getElementById("acone-load");
let aconeQty = document.getElementById("acone-qty");
let aconeWatt = document.getElementById("acone-watt");
// AC two
let actwo = document.querySelector(".actwo");
let actwoLoad = document.getElementById("actwo-load");
let actwoQty = document.getElementById("actwo-qty");
let actwoWatt = document.getElementById("actwo-watt");
// AC three
let acthree = document.querySelector(".acthree");
let acthreeLoad = document.getElementById("acthree-load");
let acthreeQty = document.getElementById("acthree-qty");
let acthreeWatt = document.getElementById("acthree-watt");
// Desktop
let desktop = document.querySelector(".desktop");
let desktopLoad = document.getElementById("desktop-load");
let desktopQty = document.getElementById("desktop-qty");
let desktopWatt = document.getElementById("desktop-watt");
// Laptop
let laptop = document.querySelector(".laptop");
let laptopLoad = document.getElementById("laptop-load");
let laptopQty = document.getElementById("laptop-qty");
let laptopWatt = document.getElementById("laptop-watt");
// Toaster
let toaster = document.querySelector(".toaster");
let toasterLoad = document.getElementById("toaster-load");
let toasterQty = document.getElementById("toaster-qty");
let toasterWatt = document.getElementById("toaster-watt");
// Washing Machine
let washingmachine = document.querySelector(".washingmachine");
let washingmachineLoad = document.getElementById("washingmachine-load");
let washingmachineQty = document.getElementById("washingmachine-qty");
let washingmachineWatt = document.getElementById("washingmachine-watt");
// Gaming Console
let gamingconsole = document.querySelector(".gamingconsole");
let gamingconsoleLoad = document.getElementById("gamingconsole-load");
let gamingconsoleQty = document.getElementById("gamingconsole-qty");
let gamingconsoleWatt = document.getElementById("gamingconsole-watt");
// Microwave Oven
let microwaveoven = document.querySelector(".microwaveoven");
let microwaveovenLoad = document.getElementById("microwaveoven-load");
let microwaveovenQty = document.getElementById("microwaveoven-qty");
let microwaveovenWatt = document.getElementById("microwaveoven-watt");

// Select functions
// Bulb
  function selectBulb() {
    bulb.classList.toggle("selected");
    if (bulb.classList.contains("selected")) {
      bulbQty.classList.add("active");
      bulbWatt.classList.add("active", "load-active");
      bulbQty.value = 1;
      bulbWatt.value = bulbQty.value * bulbLoad.value;
      bulbQty.disabled = false;
    } else {
      bulbQty.classList.remove("active");
      bulbWatt.classList.remove("active", "load-active");
      bulbQty.value = 0;
      bulbLoad.value = 0;
      bulbWatt.value = 0;
      bulbQty.disabled = true;
    }
  }

   // Tube Light
   function selectTlight() {
    tlight.classList.toggle("selected");
    if (tlight.classList.contains("selected")) {
      tlightQty.classList.add("active");
      tlightWatt.classList.add("active", "load-active");
      tlightQty.value = 1;
      tlightWatt.value = tlightQty.value * tlightLoad.value;
      tlightQty.disabled = false;
    } else {
      tlightQty.classList.remove("active");
      tlightLoad.classList.remove("active", "load-active");
      tlightQty.value = 0;
      tlightLoad.value = 0;
      tlightWatt.value = 0;
      tlightQty.disabled = true;
    }
  }

  // LED Lamp
  function selectLedlamp() {
    ledlamp.classList.toggle("selected");
    if (ledlamp.classList.contains("selected")) {
      ledlampQty.classList.add("active");
      ledlampWatt.classList.add("active", "load-active");
      ledlampQty.value = 1;
      ledlampWatt.value = ledlampQty.value * ledlampLoad.value;
      ledlampQty.disabled = false;
    } else {
      ledlampQty.classList.remove("active");
      ledlampLoad.classList.remove("active", "load-active");
      ledlampQty.value = 0;
      ledlampLoad.value = 0;
      ledlampWatt.value = 0;
      ledlampQty.disabled = true;
    }
  }

  // Fan
  function selectFan() {
    fan.classList.toggle("selected");
    if (fan.classList.contains("selected")) {
      fanQty.classList.add("active");
      fanWatt.classList.add("active", "load-active");
      fanQty.value = 1;
      fanWatt.value = fanQty.value * fanLoad.value;
      fanQty.disabled = false;
    } else {
      fanQty.classList.remove("active");
      fanLoad.classList.remove("active", "load-active");
      fanQty.value = 0;
      fanLoad.value = 0;
      fanWatt.value = 0;
      fanQty.disabled = true;
    }
  }

  // Music system
  function selectMsystem() {
    msystem.classList.toggle("selected");
    if (msystem.classList.contains("selected")) {
      msystemQty.classList.add("active");
      msystemWatt.classList.add("active", "load-active");
      msystemQty.value = 1;
      msystemWatt.value = msystemQty.value * msystemLoad.value;
      msystemQty.disabled = false;
    } else {
      msystemQty.classList.remove("active");
      msystemLoad.classList.remove("active", "load-active");
      msystemQty.value = 0;
      msystemLoad.value = 0;
      msystemWatt.value = 0;
      msystemQty.disabled = true;
    }
  }

  // TV one
  function selectTvone() {
    tvone.classList.toggle("selected");
    if (tvone.classList.contains("selected")) {
      tvoneQty.classList.add("active");
      tvoneWatt.classList.add("active", "load-active");
      tvoneQty.value = 1;
      tvoneWatt.value = tvoneQty.value * tvoneLoad.value;
      tvoneQty.disabled = false;
    } else {
      tvoneQty.classList.remove("active");
      tvoneLoad.classList.remove("active", "load-active");
      tvoneQty.value = 0;
      tvoneLoad.value = 0;
      tvoneWatt.value = 0;
      tvoneQty.disabled = true;
    }
  }

  // TV two
  function selectTvtwo() {
    tvtwo.classList.toggle("selected");
    if (tvtwo.classList.contains("selected")) {
      tvtwoQty.classList.add("active");
      tvtwoWatt.classList.add("active", "load-active");
      tvtwoQty.value = 1;
      tvtwoWatt.value = tvtwoQty.value * tvtwoLoad.value;
      tvtwoQty.disabled = false;
    } else {
      tvtwoQty.classList.remove("active");
      tvtwoLoad.classList.remove("active", "load-active");
      tvtwoQty.value = 0;
      tvtwoLoad.value = 0;
      tvtwoWatt.value = 0;
      tvtwoQty.disabled = true;
    }
  }


  // Gaming Console
  function selectGamingconsole() {
    gamingconsole.classList.toggle("selected");
    if (gamingconsole.classList.contains("selected")) {
      gamingconsoleQty.classList.add("active");
      gamingconsoleWatt.classList.add("active", "load-active");
      gamingconsoleQty.value = 1;
      gamingconsoleWatt.value = gamingconsoleQty.value * gamingconsoleLoad.value;
      gamingconsoleQty.disabled = false;
    } else {
      gamingconsoleQty.classList.remove("active");
      gamingconsoleLoad.classList.remove("active", "load-active");
      gamingconsoleQty.value = 0;
      gamingconsoleLoad.value = 0;
      gamingconsoleWatt.value = 0;
      gamingconsoleQty.disabled = true;
    }
  }

  // Microwave Oven
  function selectMicrowaveoven() {
    microwaveoven.classList.toggle("selected");
    if (microwaveoven.classList.contains("selected")) {
      microwaveovenQty.classList.add("active");
      microwaveovenWatt.classList.add("active", "load-active");
      microwaveovenQty.value = 1;
      microwaveovenWatt.value = microwaveovenQty.value * microwaveovenLoad.value;
      microwaveovenQty.disabled = false;
    } else {
      microwaveovenQty.classList.remove("active");
      microwaveovenLoad.classList.remove("active", "load-active");
      microwaveovenQty.value = 0;
      microwaveovenLoad.value = 0;
      microwaveovenWatt.value = 0;
      microwaveovenQty.disabled = true;
    }
  }

  // Refrigerator one
  function selectFridgeone() {
    fridgeone.classList.toggle("selected");
    if (fridgeone.classList.contains("selected")) {
      fridgeoneQty.classList.add("active");
      fridgeoneWatt.classList.add("active", "load-active");
      fridgeoneQty.value = 1;
      fridgeoneWatt.value = fridgeoneQty.value * fridgeoneLoad.value;
      fridgeoneQty.disabled = false;
    } else {
      fridgeoneQty.classList.remove("active");
      fridgeoneLoad.classList.remove("active", "load-active");
      fridgeoneQty.value = 0;
      fridgeoneLoad.value = 0;
      fridgeoneWatt.value = 0;
      fridgeoneQty.disabled = true;
    }
  }

  // Refrigerator two
  function selectFridgetwo() {
    fridgetwo.classList.toggle("selected");
    if (fridgetwo.classList.contains("selected")) {
      fridgetwoQty.classList.add("active");
      fridgetwoWatt.classList.add("active", "load-active");
      fridgetwoQty.value = 1;
      fridgetwoWatt.value = fridgetwoQty.value * fridgetwoLoad.value;
      fridgetwoQty.disabled = false;
    } else {
      fridgetwoQty.classList.remove("active");
      fridgetwoLoad.classList.remove("active", "load-active");
      fridgetwoQty.value = 0;
      fridgetwoLoad.value = 0;
      fridgetwoWatt.value = 0;
      fridgetwoQty.disabled = true;
    }
  }

  // Refrigerator three
  function selectFridgethree() {
    fridgethree.classList.toggle("selected");
    if (fridgethree.classList.contains("selected")) {
      fridgethreeQty.classList.add("active");
      fridgethreeWatt.classList.add("active", "load-active");
      fridgethreeQty.value = 1;
      fridgethreeWatt.value = fridgethreeQty.value * fridgethreeLoad.value;
      fridgethreeQty.disabled = false;
    } else {
      fridgethreeQty.classList.remove("active");
      fridgethreeLoad.classList.remove("active", "load-active");
      fridgethreeQty.value = 0;
      fridgethreeLoad.value = 0;
      fridgethreeWatt.value = 0;
      fridgethreeQty.disabled = true;
    }
  }

  // Refrigerator four
  function selectFridgefour() {
    fridgefour.classList.toggle("selected");
    if (fridgefour.classList.contains("selected")) {
      fridgefourQty.classList.add("active");
      fridgefourLoad.classList.add("active", "load-active");
      fridgefourQty.value = 1;
      ledlampWatt.value = ledlampQty.value * ledlampLoad.value;
      fridgefourQty.disabled = false;
    } else {
      fridgefourQty.classList.remove("active");
      fridgefourLoad.classList.remove("active", "load-active");
      fridgefourQty.value = 0;
      fridgefourLoad.value = 0;
      fridgefourQty.disabled = true;
    }
  }

  // AC one
  function selectAcone() {
    acone.classList.toggle("selected");
    if (acone.classList.contains("selected")) {
      aconeQty.classList.add("active");
      aconeLoad.classList.add("active", "load-active");
      aconeQty.value = 1;
      fridgefourWatt.value = fridgefourQty.value * fridgefourLoad.value;
      aconeQty.disabled = false;
    } else {
      aconeQty.classList.remove("active");
      aconeLoad.classList.remove("active", "load-active");
      aconeQty.value = 0;
      aconeLoad.value = 0;
      aconeWatt.value = 0;
      aconeQty.disabled = true;
    }
  }

  // AC two
  function selectActwo() {
    actwo.classList.toggle("selected");
    if (actwo.classList.contains("selected")) {
      actwoQty.classList.add("active");
      actwoWatt.classList.add("active", "load-active");
      actwoQty.value = 1;
      actwoWatt.value = actwoQty.value * actwoLoad.value;
      actwoQty.disabled = false;
    } else {
      actwoQty.classList.remove("active");
      actwoLoad.classList.remove("active", "load-active");
      actwoQty.value = 0;
      actwoLoad.value = 0;
      actwoWatt.value = 0;
      actwoQty.disabled = true;
    }
  }

  // AC three
  function selectActhree() {
    acthree.classList.toggle("selected");
    if (acthree.classList.contains("selected")) {
      acthreeQty.classList.add("active");
      acthreeWatt.classList.add("active", "load-active");
      acthreeQty.value = 1;
      acthreeWatt.value = acthreeQty.value * acthreeLoad.value;
      acthreeQty.disabled = false;
    } else {
      acthreeQty.classList.remove("active");
      acthreeLoad.classList.remove("active", "load-active");
      acthreeQty.value = 0;
      acthreeLoad.value = 0;
      acthreeWatt.value = 0;
      acthreeQty.disabled = true;
    }
  }

  // Desktop Computer
  function selectDesktop() {
    desktop.classList.toggle("selected");
    if (desktop.classList.contains("selected")) {
      desktopQty.classList.add("active");
      desktopWatt.classList.add("active", "load-active");
      desktopQty.value = 1;
      desktopWatt.value = desktopQty.value * desktopLoad.value;
      desktopQty.disabled = false;
    } else {
      desktopQty.classList.remove("active");
      desktopLoad.classList.remove("active", "load-active");
      desktopQty.value = 0;
      desktopLoad.value = 0;
      desktopWatt.value = 0;
      desktopQty.disabled = true;
    }
  }

  // Laptop
  function selectLaptop() {
    laptop.classList.toggle("selected");
    if (laptop.classList.contains("selected")) {
      laptopQty.classList.add("active");
      laptopWatt.classList.add("active", "load-active");
      laptopQty.value = 1;
      laptopWatt.value = laptopQty.value * laptopLoad.value;
      laptopQty.disabled = false;
    } else {
      laptopQty.classList.remove("active");
      laptopLoad.classList.remove("active", "load-active");
      laptopQty.value = 0;
      laptopLoad.value = 0;
      laptopWatt.value = 0;
      laptopQty.disabled = true;
    }
  }

  // Toaster
  function selectToaster() {
    toaster.classList.toggle("selected");
    if (toaster.classList.contains("selected")) {
      toasterQty.classList.add("active");
      toasterWatt.classList.add("active", "load-active");
      toasterQty.value = 1;
      toasterWatt.value = toasterQty.value * toasterLoad.value;
      toasterQty.disabled = false;
    } else {
      toasterQty.classList.remove("active");
      toasterLoad.classList.remove("active", "load-active");
      toasterQty.value = 0;
      toasterLoad.value = 0;
      toasterWatt.value = 0;
      toasterQty.disabled = true;
    }
  }

  // Washing Machine
  function selectWashingmachine() {
    washingmachine.classList.toggle("selected");
    if (washingmachine.classList.contains("selected")) {
      washingmachineQty.classList.add("active");
      washingmachineWatt.classList.add("active", "load-active");
      washingmachineQty.value = 1;
      washingmachineWatt.value = washingmachineQty.value * washingmachineLoad.value;
      washingmachineQty.disabled = false;
    } else {
      washingmachineQty.classList.remove("active");
      washingmachineLoad.classList.remove("active", "load-active");
      washingmachineQty.value = 0;
      washingmachineLoad.value = 0;
      washingmachineWatt.value = 0;
      washingmachineQty.disabled = true;
    }
  }


  // Load calculators
  
  // Bulb
  function bulbWattChange() {
    bulbWatt.value = bulbLoad.value;
  }
  function totalBulbLoad() {
    bulbWatt.value = bulbQty.value * bulbLoad.value;
  }

  // Tube light
  function tlightWattChange() {
    tlightWatt.value = tlightLoad.value;
  }
  function totalTlightLoad() {
    tlightWatt.value = tlightQty.value * tlightLoad.value;
  }

  // LED Lamp
  function ledlampWattChange() {
    ledlampWatt.value = ledlampLoad.value;
  }
  function totalLedlampLoad() {
    ledlampWatt.value = ledlampQty.value * ledlampLoad.value;
  }

  // Fan
  function fanWattChange() {
    fanWatt.value = fanLoad.value;
  }
  function totalFanLoad() {
    fanWatt.value = fanQty.value * fanLoad.value;
  }

  // Music system
  function msystemWattChange() {
    msystemWatt.value = msystemLoad.value;
  }
  function totalMsystemLoad() {
    msystemWatt.value = msystemQty.value * msystemLoad.value;
  }

  // TV one
  function tvoneWattChange() {
    tvoneWatt.value = tvoneLoad.value;
  }
  function totalTvoneLoad() {
    tvoneWatt.value = tvoneQty.value * tvoneLoad.value;
  }

  // TV two
  function tvtwoWattChange() {
    tvtwoWatt.value = tvtwoLoad.value;
  }
  function totalTvtwoLoad() {
    tvtwoWatt.value = tvtwoQty.value * tvtwoLoad.value;
  }

  // Refrigerator one
  function fridgeoneWattChange() {
    fridgeoneWatt.value = fridgeoneLoad.value;
  }
  function totalFridgeoneLoad() {
    fridgeoneWatt.value = fridgeoneQty.value * fridgeoneLoad.value;
  }

  // Refrigerator two
  function fridgetwoWattChange() {
    fridgetwoWatt.value = fridgetwoLoad.value;
  }
  function totalFridgetwoLoad() {
    fridgetwoWatt.value = fridgetwoQty.value * fridgetwoLoad.value;
  }

  // Refrigerator three
  function fridgethreeWattChange() {
    fridgethreeWatt.value = fridgethreeLoad.value;
  }
  function totalFridgethreeLoad() {
    fridgethreeWatt.value = fridgethreeQty.value * fridgethreeLoad.value;
  }

  // Refrigerator four
  function fridgefourWattChange() {
    fridgefourWatt.value = fridgefourLoad.value;
  }
  function totalFridgefourLoad() {
    fridgefourWatt.value = fridgefourQty.value * fridgefourLoad.value;
  }

  // AC one
  function aconeWattChange() {
    aconeWatt.value = aconeLoad.value;
  }
  function totalAconeLoad() {
    aconeWatt.value = aconeQty.value * aconeLoad.value;
  }

  // AC two
  function actwoWattChange() {
    actwoWatt.value = actwoLoad.value;
  }
  function totalActwoLoad() {
    actwoWatt.value = actwoQty.value * actwoLoad.value;
  }

  // AC three
  function acthreeWattChange() {
    acthreeWatt.value = acthreeLoad.value;
  }
  function totalActhreeLoad() {
    acthreeWatt.value = acthreeQty.value * acthreeLoad.value;
  }

  // Desktop Computer
  function desktopWattChange() {
    desktopWatt.value = desktopLoad.value;
  }
  function totalDesktopLoad() {
    desktopWatt.value = desktopQty.value * desktopLoad.value;
  }

  // Laptop
  function laptopWattChange() {
    laptopWatt.value = laptopLoad.value;
  }
  function totalLaptopLoad() {
    laptopWatt.value = laptopQty.value * laptopLoad.value;
  }

  // Toaster
  function toasterWattChange() {
    toasterWatt.value = toasterLoad.value;
  }
  function totalToasterLoad() {
    toasterWatt.value = toasterQty.value * toasterLoad.value;
  }

  // Washing Machine
  function washingmachineWattChange() {
    washingmachineWatt.value = washingmachineLoad.value;
  }
  function totalWashingmachineLoad() {
    washingmachineWatt.value = washingmachineQty.value * washingmachineLoad.value;
  }


  // Recommended rating
  var bbv = 0;
  function getRating() {
    if (totalLoad.value <= 400) {
      rating.value = 800;
      bbv = 12;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir01";
    } else if (totalLoad.value > 400 && totalLoad.value < 751) {
      rating.value = 1500;
      bbv = 24;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir02";
    } else if (totalLoad.value > 750 && totalLoad.value < 1226) {
      rating.value = 2500;
      bbv = 36;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir03";
    } else if (totalLoad.value > 1225 && totalLoad.value < 1751) {
      rating.value = 3500;
      bbv = 48;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir04";
    } else if (totalLoad.value > 1750 && totalLoad.value < 2501) {
      rating.value = 5000;
      bbv = 96;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir05";
    } else if (totalLoad.value > 2500 && totalLoad.value < 3751) {
      rating.value = 7500;
      bbv = 120;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir06";
    } else if (totalLoad.value > 3750 && totalLoad.value < 5001) {
      rating.value = 10000;
      bbv = 180;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir07";
    } else if (totalLoad.value > 5000 && totalLoad.value < 7501) {
      rating.value = 15000;
      bbv = 240;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir08";
    } else if (totalLoad.value > 7500 && totalLoad.value < 10001) {
      rating.value = 20000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir09";
    } else if (totalLoad.value > 10000 && totalLoad.value < 15001) {
      rating.value = 30000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir10";
    } else if (totalLoad.value > 15000 && totalLoad.value < 20001) {
      rating.value = 40000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir11";
    } else if (totalLoad.value > 20000 && totalLoad.value < 25001) {
      rating.value = 50000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir12";
    } else if (totalLoad.value > 25000 && totalLoad.value < 30001) {
      rating.value = 60000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir13";
    } else if (totalLoad.value > 30000 && totalLoad.value < 40001) {
      rating.value = 80000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir14";
    } else if (totalLoad.value > 40000 && totalLoad.value < 60001) {
      rating.value = 120000;
      bbv = 384;
      //getInvertors.href = "https://www.thesimbaden.com/product-tag/ir15";
    } else {
      console.log("none");
    }
    
  }

 // Battery backup time calculator
  function calcBackupTime() {
    var bbt = 0;
    const x = 0.8;
    bbt = (x * batteryCapacity.value * bbv) / totalLoad.value;
    backupTime.value = Math.round(bbt * 100) / 100;

    if(totalLoad.value >= 700 && rating.value >= 1500 && rating.value < 2000){
      batteryVolt.value = `2 Battery 24v`;
    }else if(totalLoad.value >= 730 && rating.value >= 1500){
      batteryVolt.value = `4 Battery 48v`;
    }else{
      batteryVolt.value = `1 Battery 12v`;
    }
  }

   // // Total load calculator
  function calcTotalLoad() {
    var total = 0;
    var i = 0;

    for (i = 0; i < loadActive.length; i++) {
      total += parseInt(loadActive[i].value);
    }
    
    totalLoad.value = total;
    getRating();
    calcBackupTime();

    if(totalLoad.value >= 700 && rating.value >= 1500 && rating.value < 2000){
      batteryVolt.value = `2 Battery 24v`;

    }else if(totalLoad.value >= 730 && rating.value >= 1500){
      batteryVolt.value = `4 Battery 48v`;
      
    }else{
      batteryVolt.value = `1 Battery 12v`;
      
    }
  }