import '/src/css/reset.css'
import '/src/css/test.scss'
import print from './print'

print.log('22')
console.log(process.env);

const fun = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 1000);
})

fun().then(() => {
    console.log('1s after');
})