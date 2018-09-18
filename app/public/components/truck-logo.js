
Vue.component('truck-logo',{
    props:['truckImg'],
    template:
    '<div class="logo">\
        <audio id="TruckHorn" src="http://soundbible.com/grab.php?id=1446&type=mp3" autostart="false"></audio>\
            <a id="playTruckHorn">\
                <img :src=truckImg>\
            </a>\
    </div>'
});
