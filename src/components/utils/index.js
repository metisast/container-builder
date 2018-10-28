function getRandomColor (min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    let color = '';
    switch (num) {
        case 1: color = '#D40404'
        break
        case 2: color = '#040404'
        break
        case 3: color = '#5CD444'
        break
        case 4: color = '#0C6CD4'
        break
        case 5: color = '#FCE404'
        break
        case 6: color = '#CCCCCC'
        break
        case 7: color = '#FCBCC4'
        break
        case 8: color = '#04FCFC'
        break
        case 9: color = '#FCF4EC'
        break
        case 10: color = '#B483CD'
        break
        default: color = '#D40404'
    }

    return color
}

export default getRandomColor