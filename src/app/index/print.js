export default {
    log(str) {
        console.log(str, '------');
    }
}


function calc(w, h) {
    let width = 0, height = 0
    const baseWidth = 21, baseHeight = 50
    if (w > h) {
        width = baseWidth
        height = baseWidth / w * h
        if (height > baseHeight) {
            width = baseWidth * baseHeight / height
            height = baseHeight
        }
    } else {
        height = baseHeight
        width = baseHeight / h * w
        if (width > baseWidth) {
            height = baseHeight * baseWidth / width
            width = baseWidth
        }
    }
    return w / width
}