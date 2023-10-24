const {createApp} = Vue;

createApp({
    data()
    {
        return {
            message: "Hello World!!",
            color: "blue padding bg-color",
            img: "img/P8200368.jpg",
            imageContainer: "size"
        }
    }
}).mount("#container");