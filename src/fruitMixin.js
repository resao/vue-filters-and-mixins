export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banna', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((fruit) => {
                return fruit.match(this.filterText);
            });
        }
    }
}