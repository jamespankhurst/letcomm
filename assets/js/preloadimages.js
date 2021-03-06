/*==================================*/
/*========== LETCOMM ===============*/
/* www.jamespankhurst.co.uk/letcomm */
/* jamespankhurst180@gmail.com      */
/* github.com/jamespankhurst/letcomm*/
/*==================================*/

/*-----------------------*/
/*--- PRE-LOAD IMAGES ---*/
/*-----------------------*/

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

/*--- index images ---*/
preloadImages([
'assets/img/trackpro.png',
'assets/img/claimtrack_logo.png',
'assets/img/lclogo_bg_220x71.png'
]);
/*---------------------------*/
/*--- END PRE-LOAD IMAGES ---*/
/*---------------------------*/


