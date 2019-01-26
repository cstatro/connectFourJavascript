function move(slot){
   let slotPlaced = parseInt(findAndDrop(slot))
    console.log(findRowEnd(slotPlaced))
    checkForWin(slotPlaced)
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
    let slantRight = buildSlantRight(x)
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
    else if(checkFour(slantRight)== true){
        alert('slant right victory')
    }
    else{
        return -1
    }
    
    
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
function buildSlantRight(slot){
    let start = rightSlantStart(slot)
    let current = start
    let arr = []
    while (findRowEnd(current) != 42 && findColumnEnd(current) != 36){
        arr.push(tracker[current])
        current += 6
    }
    arr.push(tracker[current])
    return arr
}