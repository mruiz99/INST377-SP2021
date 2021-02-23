document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') // grab the grid class
    const doodler = document.createElement('div') // create a DIV for the doodler
    let doodlerLeftSpace = 50
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    let platformCount = 5
    let isGameOver = false
    let platforms = []
    let upTimerId
    let downTimerId
    let isJumping = true // we dont want doodler to jump if hes already jumping
    isGoingLeft = false
    isGoingRight = false
    let leftTimerId
    let rightTimerId
        

    function createDoodler() { // a function to create the doodler
        grid.appendChild(doodler)  // grab the grid, grid is parent
        // doodler is the child
        doodler.classList.add('doodler') // we need to add style to it
        doodlerLeftSpace = platforms[0].left // this sets the doodlers
        // position to the first platform so it doesnt randomly appear
        // on the grid
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    class Platform { // each value passed in the FOR loop below will
        // pass into this class, will happen 5 times
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315 // left spacing for each platform,
            //  grid width is 400, platform width is 85, gotta make sure the 
            // left spacing is any value up to 315 since 400 - 85 = 315
            // the function above will return any number up to 315
            this.visual = document.createElement('div') // create a DIV for
            // EACH platform

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual) // we gotta place this into the grid
            // using the code above


        }
    }

    function createPlatforms() {
        for (let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount // how much space each platform will have
            // in between each other, refer to CSS pixels
            let newPlatBottom = 100 + i * platGap // using FOR loops to
            // increment gap space
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform) // pushing the newly created platforms into
            // the platforms array so we can work with them

        }

    }

    function movePlatforms () { // we only want to move the platforms if the doodler is in
        // a certain position
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4 // each of the platforms move down by 4 each time
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }

    function jump() {
        clearInterval(downTimerId)
        isJumping = true
        upTimerId = setInterval(function () {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > startPoint + 200) {
                fall()
            }
        }, 30)
    }

    function fall() {
        clearInterval(upTimerId)
        isJumping = false
        downTimerId = setInterval(function () {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0) {
                gameOver()
            }

            platforms.forEach(platform => {
                if (
                    (doodlerBottomSpace >= platform.bottom) &&
                    (doodlerBottomSpace <= platform.bottom + 15) &&
                    ((doodlerLeftSpace + 60) >= platform.left) && // collision handling for doodler
                    (doodlerLeftSpace <= (platform.left + 85)) &&
                    !isJumping
                )
                {
                    console.log('landed')
                    startPoint = doodlerBottomSpace
                    jump()
                }
            })

        }, 30)
    }

    function gameOver() {
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }

    function control(e) {
        if (e.key === "ArrowLeft") {
            moveLeft()
        } else if (e.key === "ArrowRight") {
            moveRight()
        } else if (e.key === "ArrowUp") {
            //move straight
        }
    }

    function moveLeft() {
        isGoingLeft = true
        leftTimerId = setInterval(function () {
            if (doodlerLeftSpace >= 0) {
                doodlerLeftSpace -= 5
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveRight()
        }, 30)
    }

    function moveRight() {
        isGoingRight = true
        rightTimerId = setInterval(function () {
            if(doodlerLeftSpace <= 340) {
                doodlerLeftSpace += 5
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveLeft()
        }, 30)
    }

    function start() { // we will only summon doodler if the game is NOT over
        if(!isGameOver) { 
            createPlatforms() // when the game starts, we create the platforms
            createDoodler()
            setInterval(movePlatforms, 30) // function to move the platforms,
            // set to an interval timer so it happens every 30 milliseconds
            jump()
            document.addEventListener('keyup', control)
        }
    }

    // attach a button
    start()
    
})