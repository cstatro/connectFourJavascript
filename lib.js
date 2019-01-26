function move(slot){
   let slotPlaced = parseInt(findAndDrop(slot))
    console.log(findRowEnd(slotPlaced))
    checkForWin(slotPlaced)
    //checks for winning condition
    // calls next player
}



function findAndDrop(slot){
    let searchSlot = parseInt(findColumnEnd(slot))
    while(searchSlot > 0){
        if (tracker[searchSlot] == 0){
            tracker[searchSlot] = turn[0]
            turn.reverse()
            allSlots[searchSlot-1].style.backgroundColor = teamColor[turn[1]-1]
            return searchSlot
        }
        else{
            searchSlot = searchSlot-7
        }
    }
    
return -1
    
    //drops the token
    //finds the correct slot and sets color
    // set a variable inside the move function scope to be current slot
}

function checkForWin(checkedSlot){
    let x = checkedSlot
    let rowEnd = findRowEnd(x)
    let rowStart = rowEnd-6
    let columnEnd = findColumnEnd(x)
    let columnStart = columnEnd-35
    let vert = buildVerticalArr(columnStart)
    let horiz = tracker.slice(rowStart,rowEnd+1)
    let slantLeft = buildSlantLeft(x)
    console.log('made it here')
    
    if(checkFour(vert) == true){
        console.log(vert)
        alert('got em vert')
    }
    else if (checkFour(horiz)== true){
        console.log(horiz)
        alert('got em horiz')
    }
    else if (checkFour(slantLeft) == true){
        alert('slant left victory')
    }
    
    
    
    // check for in a row in either direction within it's range of 7
    //check verticle for it's base 7 match up
    //left to right find difference and check row for matching 4
    //check diagional lines north west to south east
    //check NE to SW
}

function findColumnEnd(slot){
    if ((slot+7) >= 42 ){
        return slot
    }
    else{
        while ((slot+7) <= 42){
            slot = slot+7
        }
        return slot
    }
}
function findRowEnd(slot){
    let place = parseInt(slot)
    while (place%7 != 0){
        place++
    }
    return place
}

function checkFour(arr){
    let counter = [0,0]    // first number is matched value, second number is counter
    for( var i = 0;i < arr.length;i++){
        if (counter[1] == 4){
            return true
        }
        else if(arr[i] == 0){
            counter[0] = 0
            counter[1] = 0
        }
        else if(arr[i] == counter[0]){
            counter[1] += 1
        }
        else if(arr[i] != counter[0]){
            counter[0] = arr[i]
            counter[1] = 1
        }
    }
    if (counter[1] == 4){
        return true
    }
    else{
        return false
    }
}
function buildVerticalArr(columnStart){
    let arr = []
    let x = columnStart
    while (arr.length != 6){
        arr.push(tracker[x])
        x += 7
    }
    return arr
}

function buildSlantLeft(slot){
    let start = leftSlantStart(slot)
    let current = start
    let arr = []
    while (findRowEnd(current) != 42 && findColumnEnd(current) != 42){
        arr.push(tracker[current])
        current += 8
    }
    arr.push(tracker[current])
    return arr
}

function leftSlantStart(slot){
    let current = slot
    while (findColumnEnd(current) != 36 && findRowEnd(current) != 7){
        current = current-8
    }
    return current
}

function rightSlantStart(slot){
    let current = slot
    while (findColumnEnd(current) != 42 && findRowEnd(current) != 7){
        current = current-6
    }
    return current
}