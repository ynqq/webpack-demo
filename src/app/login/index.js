class Index{
    constructor(){
        this.event()
    }
    event(){
        document.querySelector('.toLogin').onclick = () => {
            window.location.href = './index.html'
        }
    }
}

new Index()