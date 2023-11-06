/*
Часть 2. Задание Vue

Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products,
где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и
предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).
 */

new Vue({
    el: '#app',
    data: {
        whySorted: "byName",
        products:
            [{
                id: 0,
                name: 'One',
                price: 10
            }, {
                id: 1,
                name: 'two',
                price: 14
            }, {
                id: 2,
                name: 'three',
                price: 91
            }, {
                id: 3,
                name: 'four',
                price: 26
            }, {
                id: 4,
                name: 'five',
                price: 30
            },]
    },
    methods: {},
    computed: {
        sortFromPrice() {
            if (this.whySorted === "ascending") {
                return this.products.sort((a, b) => {
                    if (a.price < b.price) {
                        return -1;
                    }
                });


            } else if (this.whySorted === "descending") {
                return this.products.sort((a, b) => {
                    if (a.price > b.price) {
                        return -1;
                    }

                });
            } else if (this.whySorted === "byName") {
                return this.products.sort((a, b) => {
                    const aName = a.name.toUpperCase();
                    const bName = b.name.toUpperCase();
                    if (aName < bName) {
                        return -1;
                    }
                })
            } else if (this.whySorted === "notSorted") {
                return this.products.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1;
                    }
                });
            }
        }
    }
})