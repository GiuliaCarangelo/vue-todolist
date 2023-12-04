const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newProduct: '',
            gameWishList : [
                {
                    text: "Halo 3", 
                    done: true
                },
                {
                    text: "Minecraft", 
                    done: true
                },
                {
                    text: "Left 4 Dead 2", 
                    done: false
                },
                {
                    text: "Hotline Miami", 
                    done: false
                },
                {
                    text: "Hotline Miami 2", 
                    done: true
                },
                {
                    text: "Speedrunners", 
                    done: false
                },
                {
                    text: "Counter Strike: 2", 
                    done: true
                },
                {
                    text: "Gran Turismo 8", 
                    done: true
                },
            ]
        };
    },
    methods: {
        addProduct(game) {
            if (game.done === true) {
                this.gameWishList.text
            }
        }
    },
        removeProduct(game){
            this.gameWishList.splice(game, 1);
        }
});

app.mount('#app');

