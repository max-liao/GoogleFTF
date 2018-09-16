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