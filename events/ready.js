module.exports = async(client) => {
  var oynuyorkısmı = [
  ];
  client.user.setStatus('ONLİNE')
  setInterval(function() {
  //sürekli tekrarlanacak bölüm 
  // 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
     client.user.setActivity("✔ Güncellendi", { type: 'WATCHING' });
      }, 2 * 5000);
  
  
  }