const entireGrid = document.querySelectorAll('td')

for(var i = 0; i < entireGrid.length;i++){
    let newCircle = document.createElement('div');
        newCircle.className = "circle"
        newCircle.style.height = '50px'
        newCircle.style.width = '50px'
        newCircle.style.backgroundColor = 'white'
        newCircle.style.borderRadius = '50%'
        newCircle.style.padding = '21%'
        newCircle.style.margin = 'auto'
        newCircle.style.border = '1px solid black'
        newCircle.id = i+1
        newCircle.taken = false
    entireGrid[i].append(newCircle)
    //display text for visual aid on debugging
    let slotNum = document.createElement('p')
        slotNum.innerHTML = `${i+1}`
        slotNum.style.margin = 'auto'
        newCircle.append(slotNum)
}

// empty array will assist with checking WIN conditions. 1 will signify Red 2 Blue 0 empty
let tracker = []
for(var i = 0 ; i < 43;i++){
    tracker.push(0)
}
// variable to cycle turn order
let turn  = [1,2]

let teamColor = ['red','blue']

let allSlots = document.querySelectorAll(".circle")
// attach even listener to Circles


//function attachAll(){
for (var i = 0; i < allSlots.length;i++){
    let target = allSlots[i]

    target.addEventListener('mouseup',function(){
        let clickSrc = parseInt(target.id)
        move(clickSrc)
    })

    }
//}