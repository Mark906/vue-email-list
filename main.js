var app = new Vue ({
    el: "#root",
    data: {
        title: "Genera 10 email!",
        email: [],
        index: 0
    },
    mounted(){
        const self = this;

        do{
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta){
                if(!self.email.includes(risposta.data.response)){
                    self.email.push(risposta.data.response);
                }
            });
            self.index++;
        } while(self.index < 10)
    }
})
