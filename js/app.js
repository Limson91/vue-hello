const {createApp} = Vue;

createApp({
    data()
    {
        return {
            message: "Hello World!!",
            color: "blue",
            img: "img/P8200368.jpg",
            imageContainer: "size"
        }
    }
}).mount("#container");