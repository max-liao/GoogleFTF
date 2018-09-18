

Vue.component('jumbo-jumbo', {
    props:{
        text:String
    } ,
    template: 
    ' <div class="container"> \
        <div class="jumbotron">\
            <p>String here: {{text}} </p>\
            <button type="button" class="btn btn-primary">Test Logo</button>\
        </div>\
    </div>'
});