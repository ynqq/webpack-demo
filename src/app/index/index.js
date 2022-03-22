import '/src/css/reset.css'
import '/src/css/test.scss'
import print from './print'

print.log('22', 'main')
console.log(process.env);

const fun = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 1000);
})

fun().then(() => {
    console.log('1s after');
})

class Index{
    constructor(){
        this.event()
    }
    event(){
        document.querySelector('.toLogin').onclick = () => {
            window.location.href = './login.html'
        }
    }
}

new Index()