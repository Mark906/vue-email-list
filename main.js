var app = new Vue ({
    el: "#root",
    data: {
        title: "Genera 10 email!",
        email: [],
        status: false
    },
    methods: {
        generateEmail(){
            const self = this;
            self.status = true;
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta){
                    if(!self.email.includes(risposta.data.response)){
                        self.email.push(risposta.data.response);
                    }
                    else
                    {
                          i--;
                    }
                });
            }
        }
    }

})
