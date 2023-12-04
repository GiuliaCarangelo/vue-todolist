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
        removeProduct(game){
            this.gameWishList.splice(game, 1);
        },
        addProduct() {
            if (this.newProduct.trim() !== '') { 
                this.gameWishList.push({
                    text: this.newProduct,
                    done: false 
                });
                this.newProduct = '';
            }
        },
    },
});

app.mount('#app');

