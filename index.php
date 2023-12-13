<?php
session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="style.css" />
    <title>Audit Calculator</title>
    <style>
    .alert {
      padding: 20px;
      background-color: red;
      color: white;
    }

    .alert2 {
      padding: 20px;
      background-color: green;
      color: white;
    }

    .closebtn {
      margin-left: 15px;
      color: white;
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
    }

    .closebtn:hover {
      color: black;
    }
    </style>
  </head>
  <body>
     <div class="container-fluid">
      <?php
            if (isset($_SESSION['flash'])) {
              $message = $_SESSION['flash'];
              if($message == 'Email sent successfully') {
                echo "<div class='alert2'>
                <span class='closebtn' onclick='this.parentElement.style.display='none';'>&times;</span> 
                $message
                </div>";
              } else {
                echo "<div class='alert'>
                <span class='closebtn' onclick='this.parentElement.style.display='none';'>&times;</span> 
                $message
                </div>";
              }
              unset($_SESSION['flash']);
            }
      ?>
  </div>
    
    <div class="flex-container">
  <div class="flex-item-left"> <div class="lc-wrapper">
          <div class="lc-container">
            <div class="appliances">
              <!-- List of appliances -->
              <div class="heading">Appliance</div>
              <input class="heading2" type="text" value="Quantity" readonly />
              <input class="heading2" type="text" value="Wattage" readonly/>
              <input class="heading2" type="text" value="Total Load" readonly /><br /><br />

              <div
                class="appliance bulb"
                onclick="selectBulb(); totalBulbLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Normal Bulb
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="bulb-qty"
                placeholder="How many?"
                disabled
                onchange="totalBulbLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                value="50"
                class=""
                id="bulb-load"
                placeholder="Power(W)"
                onchange="bulbWattChange(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="bulb-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />


              
              <div
                class="appliance tlight"
                onclick="selectTlight(); totalTlightLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Tube Light
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="tlight-qty"
                placeholder="How many?"
                disabled
                onchange="totalTlightLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                value="18"
                id="tlight-load"
                placeholder="Power(W)"
                onchange="tlightWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="tlight-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance ledlamp"
                onclick="selectLedlamp(); totalLedlampLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>LED Lamp
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="ledlamp-qty"
                placeholder="How many?"
                disabled
                onchange="totalLedlampLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                value="15"
                id="ledlamp-load"
                placeholder="Power(W)"
                onchange="ledlampWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="ledlamp-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance fan"
                onclick="selectFan(); totalFanLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Fan
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="fan-qty"
                placeholder="How many?"
                disabled
                onchange="totalFanLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fan-load"
                placeholder="Power(W)"
                value="70"
                onchange="fanWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fan-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance msystem"
                onclick="selectMsystem(); totalMsystemLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Music System
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="msystem-qty"
                placeholder="How many?"
                disabled
                onchange="totalMsystemLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="msystem-load"
                placeholder="Power(W)"
                value="320"
                onchange="msystemWattChange(); calcTotalLoad();"
          
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="msystem-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance tvone"
                onclick="selectTvone(); totalTvoneLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>LCD/LED TV (< 42&quot;)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="tvone-qty"
                placeholder="How many?"
                disabled
                onchange="totalTvoneLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="tvone-load"
                placeholder="Power(W)"
                value="150"
                onchange="tvoneWattChange(); calcTotalLoad();"
        
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="tvone-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance tvtwo"
                onclick="selectTvtwo(); totalTvtwoLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>LCD/LED TV (> 42&quot;)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="tvtwo-qty"
                placeholder="How many?"
                disabled
                onchange="totalTvtwoLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="tvtwo-load"
                placeholder="Power(W)"
                value="200"
                onchange="tvtwoWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="tvtwo-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance desktop"
                onclick="selectDesktop(); totalDesktopLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Desktop Computer
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="desktop-qty"
                placeholder="How many?"
                disabled
                onchange="totalDesktopLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="desktop-load"
                placeholder="Power(W)"
                value="200"
                onchange="desktopWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="desktop-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance laptop"
                onclick="selectLaptop(); totalLaptopLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Laptop
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="laptop-qty"
                placeholder="How many?"
                disabled
                onchange="totalLaptopLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="laptop-load"
                placeholder="Power(W)"
                value="100"
                onchange="laptopWattChange(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="laptop-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance fridgeone"
                onclick="selectFridgeone(); totalFridgeoneLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Refrigerator (165-250Ltr)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="fridgeone-qty"
                placeholder="How many?"
                disabled
                onchange="totalFridgeoneLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgeone-load"
                placeholder="Power(W)"
                value="150"
                onchange="fridgeoneWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgeone-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance fridgetwo"
                onclick="selectFridgetwo(); totalFridgetwoLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Refrigerator (250-350Ltr)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="fridgetwo-qty"
                placeholder="How many?"
                disabled
                onchange="totalFridgetwoLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgetwo-load"
                placeholder="Power(W)"
                value="210"
                onchange="fridgetwoWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgetwo-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance fridgethree"
                onclick="selectFridgethree(); totalFridgethreeLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Refrigerator (350-450Ltr)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="fridgethree-qty"
                placeholder="How many?"
                disabled
                onchange="totalFridgethreeLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgethree-load"
                placeholder="Power(W)"
                value="320"
                onchange="fridgethreeWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgethree-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance fridgefour"
                onclick="selectFridgefour(); totalFridgefourLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Refrigerator (> 450Ltr)
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="fridgefour-qty"
                placeholder="How many?"
                disabled
                onchange="totalFridgefourLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgefour-load"
                placeholder="Power(W)"
                value="460"
                onchange="fridgefourWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="fridgefour-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance acone"
                onclick="selectAcone(); totalAconeLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>AC - 1HP
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="acone-qty"
                placeholder="How many?"
                disabled
                onchange="totalAconeLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="acone-load"
                placeholder="Power(W)"
                value="1120"
                onchange="aconeWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="acone-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance actwo"
                onclick="selectActwo(); totalActwoLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>AC - 1.5HP
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="actwo-qty"
                placeholder="How many?"
                disabled
                onchange="totalActwoLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="actwo-load"
                placeholder="Power(W)"
                value="1830"
                onchange="actwoWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="actwo-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance acthree"
                onclick="selectActhree(); totalActhreeLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>AC - 2HP
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="acthree-qty"
                placeholder="How many?"
                disabled
                onchange="totalActhreeLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="acthree-load"
                placeholder="Power(W)"
                value="2500"
                onchange="acthreeWattChange(); calcTotalLoad();"
                
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="acthree-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance toaster"
                onclick="selectToaster(); totalToasterLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Toaster
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="toaster-qty"
                placeholder="How many?"
                disabled
                onchange="totalToasterLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="toaster-load"
                placeholder="Power(W)"
                value="800"
                onchange="toasterWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="toaster-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance washingmachine"
                onclick="selectWashingmachine(); totalWashingmachineLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Washing Machine
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="washingmachine-qty"
                placeholder="How many?"
                disabled
                onchange="totalWashingmachineLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="washingmachine-load"
                placeholder="Power(W)"
                value="1000"
                onchange="washingmachineWattChange(); calcTotalLoad();"
               
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="washingmachine-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance gamingconsole"
                onclick="selectGamingconsole(); totalGamingconsoleLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Gaming Console
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="gamingconsole-qty"
                placeholder="How many?"
                disabled
                onchange="totalGamingconsoleLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="gamingconsole-load"
                placeholder="Power(W)"
                value="200"
                onchange="gamingconsoleWattChange(); calcTotalLoad();"
              
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="gamingconsole-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />

              <div
                class="appliance microwaveoven"
                onclick="selectMicrowaveoven(); totalMicrowaveovenLoad(); calcTotalLoad();"
              >
                <i>&#10003;</i>Microwave Oven
              </div>
              <input
                type="number"
                min="0"
                class=""
                id="microwaveoven-qty"
                placeholder="How many?"
                disabled
                onchange="totalMicrowaveovenLoad(); calcTotalLoad();"
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="microwaveoven-load"
                placeholder="Power(W)"
                value="1400"
                onchange="microwaveovenWattChange(); calcTotalLoad();"
             
              />
              <input
                type="number"
                min="0"
                name="load"
                class=""
                id="microwaveoven-watt"
                readonly
                placeholder="Total Wattage(W)"
              /><br /><br />
            

            </div>
          </div>
        

      </div></div>
  <div class="flex-item-right">
        <div class="results">
          <form method="post" action="process.php" id="inverter_load_form" autocomplete="off" novalidate>
            <div class="total-load">
              <h3>Your Total Load<br />&#9662;</h3>
              <input name="total_load" type="text" id="total-load" value="0" readonly style="font-family: poppins, lato, verdana; width: 200px; color: #dd3333; font-size: 28px; font-weight: 400; margin: 0; border: none; text-align: center; cursor: default; margin: 0 auto;"/>
              <h4>Watts</h4>
             
              <hr />
            </div>
          
            <div class="rating">
              <h3>
                Recommended<br />
                Inverter Rating<br />&#9662;
              </h3>
              <input name="inverter_rating" type="text" id="rating" value="0" readonly style="font-family: poppins, lato, verdana; width: 200px; color: #dd3333; font-size: 28px; font-weight: 400; margin: 0; border: none; text-align: center; cursor: default; margin: 0 auto;"/>
              <h4>VA</h4>
          
              <hr />
            </div>
            
            <h6>Choose Battery Capacity</h6>
            <select id="battery-capacity" name="battery_size" value="" onchange="calcBackupTime();">
                <option value="">&nbsp;Select An Option</option>
                <option value="220">220 Ah</option>
                <!--<option value="200">200 Ah</option>-->
                <option value="150">150 Ah</option>
            </select>
              <h4>(Ampere Hours)</h4>
            
              <hr/>
              
              
            <div class="inverter_battery">
              <h3>
                Recommended<br />
                Inverter Battery<br />&#9662;
              </h3>
              <input name="battery_number" type="text" id="inverter_battery" value="0v" readonly style=" background-color:#f0f8ff00; font-family: poppins, lato, verdana; width: 200px; color: #dd3333; font-size: 28px; font-weight: 400; margin: 0; border: none; text-align: center; cursor: default; margin: 0 auto;"/>
              <h4>Volts</h4>
             
              <hr />
            </div>
           
            <div class="backup-time">
              <h3>Your Available<br />Battery Back Up Time<br />&#9662;</h3>
              <input name="backup_time" type="text" id="backup-time" value="0" readonly style="font-family: poppins, lato, verdana; width: 200px; color: #dd3333; font-size: 28px; font-weight: 400; margin: 0; border: none; text-align: center; cursor: default; margin: 0 auto;"/>
              <h4>Hours</h4>
              <i class="note"></i>
              <p style="font-size:16px; color:red;">
                <b>Disclaimer:</b> Backup time shown here is approximate.<br />
                The Battery should be in fully charged condition<br />
                to attain this backup time.
              </p>
            </div><hr>

            <!-- <div class="etimate-price">
              <h3>Estimated <br>Price<br /></h3>
              <input name="price" type="text" id="etimate-price" value="NGN 0.00" readonly style="font-family: poppins, lato, verdana; width: 200px; color: #dd3333; font-size: 18px; font-weight: 400; margin: 0; border: none; text-align: center;"/>
              <h4>Naira </h4>
              
            </div><hr> -->
            <div class="client_form">
              <input required type="text" name="fullname" placeholder="Enter Full Name here" style="font-family: poppins, lato, verdana; width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"/>
              <input required type="email" name="email" placeholder="Enter Email Address" style="font-family: poppins, lato, verdana; width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"/>
              <input required type="tel" name="mobile" class="num" placeholder="Enter Mobile Number" style="font-family: poppins, lato, verdana; width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"/>
              <textarea name="address" required placeholder="Enter Your Address" style="font-family: poppins, lato, verdana; width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"></textarea>
              <button type="submit" style="font-family: poppins, lato, verdana; border-radius: 9px; border: 1px solid #1a76af; background-color: transparent; /* Green */ color: #1a76af; padding: 15px 32px; text-align: center; display: inline-block; font-size: 16px;">Send via Email</button>
            </div>
          </form>
        </div>
    </div>
</div>
<script type="text/javascript" src="test.js"></script>
</body>
</html>