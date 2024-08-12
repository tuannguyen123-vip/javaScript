var arrAnh = new Array();
function loadAnh(){
    for(let i =0; i<5;i++){
        arrAnh[i] = new Image(); 
        arrAnh[i].src = 'image/anh' + i + '.jpg';
    }
}
var currencyIndex; 
function nextAnh(){
    if(currencyIndex < arrAnh.length - 1){
        currencyIndex++;
    }else{
        currencyIndex = 0;
    }

    document.getElementById('anh').src = arrAnh[currencyIndex].src;
}
function backAnh(){
    if(currencyIndex > 0){
        currencyIndex--;
    }else{
        currencyIndex = arrAnh.length - 1;
    }

    document.getElementById('anh').src = arrAnh[currencyIndex].src;
}
var t;

t = setInterval('nextAnh()',1000);

function autoplay(){
  
    t = setInterval('nextAnh()',1000);
}
function stop(){
  
    clearInterval(t);
}
function first(){
    currencyIndex = 0;
    document.getElementById('anh').src = arrAnh[currencyIndex].src;
}
function last(){
    currencyIndex = arrAnh.length - 1;
    document.getElementById('anh').src = arrAnh[currencyIndex].src;
}

var count = new Date().getTime() + 6000;
var time = document.getElementById('timer');

function updatecount(){
    var now  = new Date().getTime();
    var distan = count - now;
    if(distan < 0){
    time.innerHTML = "Hết thời gian";
    clearInterval(countInter);
    return;
    }
    var minutes = Math.floor((distan % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distan % (1000 * 60)) / 1000);

    time.innerHTML = `${minutes} phút ${seconds} giây`;
}
var countInter = setInterval(updatecount, 1000);

function varForm(){
    var check = document.querySelectorAll('.buycheck');
    let chon = false;

    document.querySelectorAll('.erro-mua').forEach(erro => erro.innerText = '');

    check.forEach(checkbox => {
    if(checkbox.checked){
        chon = true;
    }
    });

    if(!chon){
     document.querySelectorAll('.erro-mua').forEach(erro => {
     erro.innerText = '*Vui lòng chọn ít nhất 1 sản phẩm khi thanh toán';
     });
     return false;
    }
  return true;
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.buycheck').forEach(checkbox => {
    checkbox.addEventListener('change', function(){
   if(document.querySelectorAll('.buycheck:checked').length > 0){
   document.querySelectorAll('.erro-mua').forEach(erro => erro.innerText = '');
   }
    });
  });
});

