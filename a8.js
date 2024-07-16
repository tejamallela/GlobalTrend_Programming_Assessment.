class HashMap {
    constructor() {
        this.map = {};
    }
    put(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : null;
    }
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}
const hashMap = new HashMap();
hashMap.put('name', 'Alice');
hashMap.put('age', 25);

console.log(hashMap.get('name'));  
console.log(hashMap.get('age'));   

hashMap.remove('name');
console.log(hashMap.get('name'));  
