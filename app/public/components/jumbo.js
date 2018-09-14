//const Vue = require("vue");

Vue.component('jumbo', {
    props:{
        text: String
    } ,
    template: 
    ' <div class="container"> \
        <div class="jumbotron"> \
            <p>String here: {{text}} </p>\
            <button type="button" class="btn btn-primary">Primary</button>\
        </div>\
    </div>'
})