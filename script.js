var total = 0
var tableArr = []
// const freqArr = []

const getDiceRoll = () => {
    return rnd = Math.floor(Math.random() * 6) +1;
}

const dieRoll = () => {
    var result = getDiceRoll()
    return result
}

const twoDieRoll = () => {
    var result = getDiceRoll() + getDiceRoll()
    return result
}

const threeDieRoll = () => {
    var result = getDiceRoll() + getDiceRoll() + getDiceRoll()
    return result
}

const initialize = () => {
    inputContainer = document.getElementById("inputform")
    numDice = 0
    timesRoll = 0
    diceTable = document.getElementById("dicetable")
}

const recordData = () => {
    tableArr = []
    numDice = inputContainer.diceroll.value
    timesRoll = inputContainer.rolltimes.value
    console.log(numDice)
    numDice == ""? alert("You did not choose the number of dice to roll") : rollDice()
}

const rollDice = () => {
    if(numDice == 1)
    {
        for(r = 0; r < 6; r++)
        {
            rollResult = dieRoll()
            tableArr.push(rollResult)
        }
        console.log(tableArr)
        for(i = 0; i < 6; i++)
        {
            let newRow = diceTable.insertRow()
            var newCell = newRow.insertCell()
            newCell.innerHTML = i + 1
            total += rollResult
            var newCell = newRow.insertCell()
            console.log(count(i+1))
            newCell.innerHTML = count(i+1)

        }
    }
    else if(numDice == 2)
    {
        for(i = 2; i < 13; i++)
        {
            var row = diceTable.insertRow()
            var cell = row.insertCell()
            cell.innerHTML = i + 1
        }
        var rollResult = twoDieRoll()
        tableArr.push(rollResult)
        total += rollResult
        console.log(tableArr)
    }
    else
    {
        for(i = 3; i < 19; i++)
        {
            var row = diceTable.insertRow()
            var cell = row.insertCell()
            cell.innerHTML = i + 1
        }
        var rollResult = threeDieRoll()
        tableArr.push(rollResult)
        total += rollResult
        console.log(tableArr)
    }
}

const count = (target) => {
    let counter = 0
    tableArr.forEach(x => x == target ? counter++ : null)
    return counter
}

