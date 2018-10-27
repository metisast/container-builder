function getRandomColor (min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    let color = '';
    switch (num) {
        case 1: color = 'red'
        break
        case 2: color = 'black'
        break
        case 3: color = 'green'
        break
        case 4: color = 'blue'
        break
        case 5: color = 'yellow'
        break
        case 6: color = 'gray'
        break
        case 7: color = 'pink'
        break
        case 8: color = 'aqua'
        break
        case 9: color = 'silver'
        break
        case 10: color = 'purple'
        break
        default: color = 'red'
    }

    return color
}

export default getRandomColor