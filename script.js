window.addEventListener("load",checkInternet());

function checkInternet(){
 const statusTxt = document.getElementById("status-text");
 const ipTxt = document.getElementById('IPaddress-text');
 const networkStrengthTxt = document.getElementById('network-strength-text');

 statusTxt.textContent = 'Checking...'

 if(navigator.onLine){
     fetch('https://api.ipify.org?format=json')
     .then(response => response.json())
     .then((data) => {
         ipTxt.textContent= data.ip;
         statusTxt.textContent = 'Connected'

         const connection = navigator.connection;
         const NetworkStrength = connection?connection.downlink +'Mbps' : 'Unknown';
         networkStrengthTxt.textContent = NetworkStrength
      })
      .catch(()=>{
          statusTxt.textContent='Disconnected';
          ipTxt.textContent = 'Null';
          networkStrengthTxt.textContent = 'Null';
      })
 }else{
    statusTxt.textContent='Disconnected';
    ipTxt.textContent = 'Null';
    networkStrengthTxt.textContent = 'Null';
 }
}