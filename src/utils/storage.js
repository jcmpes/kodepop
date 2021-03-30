// I am going to use localStorage if user decided to be remembered
// and use sessionStorage otherwise
const storage = {
    get(key) {
        const value = localStorage.getItem(key) || sessionStorage.getItem(key) ;
        if(!value) {
            return null
        }
        return JSON.parse(value);
    },

    set(key, value, remember) {
        remember ?
        localStorage.setItem(key, JSON.stringify(value)) :
        sessionStorage.setItem(key, JSON.stringify(value))
    },

    remove(key) {
        if(localStorage.getItem(key)) {
            localStorage.removeItem(key);
        }
        if (sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
        }
    },

    clear() {
        localStorage.clear();
    }
};

export default storage;