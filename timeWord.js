const timeWord = (str) => {
    str = str.split(':') // splits the string at ":"
    let hour = str[0]
    let minutes = str[1].split('')

    //save output into an array
    const output = []

    const hourWords = {
        0: 'twelve',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven'
    }
    const minuteWords = {
        0: 'oh',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty'
    }

    // the "+" symbol converts the string number into an integer
    
    if (+hour === 12 && +minutes.join('') === 0) {
        return 'noon'
    }

    if (+hour < 12){
        output.push(hourWords[+hour])
    } else {
        output.push(hourWords[+hour - 12])
    }

    if(+minutes.join('') === 0) {
        output.push("o'clock")
    } else if (minutes[0] === '1'){
        minutes = +minutes.join('')
        output.push(minuteWords[minutes])
    } else {
        minutes[0] = +minutes[0] * 10
        minutes[1] = +minutes[1]
        output.push(minuteWords[minutes[0]])
        if (minutes [1] !== 0) output.push(minuteWords[minutes[1]])
    }

    // if hour is below 12, set to "AM"
    if (+hour < 12) {
        output.push('AM')
    } else {
        // if hour is above 12, set to "PM"
        output.push('PM')
    }

    console.log(output)
    return output.join('')
}

module.exports = timeWord