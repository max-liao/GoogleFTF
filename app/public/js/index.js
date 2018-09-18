var test = new Vue({
    el:"#TestComponent",
    data: {
        isActive: true,
        hasError: false,
        activeColor: 'blue',
        fontSize: '30px',
        computed: {
            classObject: function () {
                return {
                    active: this.isActive && !this.hasError,
                    'text-danger': ((this.isActive && this.hasError) ? true : false)
                }
            }
        },
        message: 'Hello World'
    },
    errorClass: function () {
        return { 'text-danger': ((this.isActive && this.hasError) ? true : false) }
    }
});


var header = new Vue({
    el:"#header-wrapper",
    data: {
        image: 'img/blueTruck.png',
        activeColor: 'blue',
        fontSize: '30px',
        background: '#444 url(../img/bg/bg-1.jpg) no-repeat center center fixed'
    }
});
