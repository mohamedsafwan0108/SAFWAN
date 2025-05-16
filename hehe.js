setTimeout(
    () => {
        document.getElementById("ten").innerHTML = 10
        setTimeout(() => {
            document.getElementById("ten").innerHTML = 9
            setTimeout(() => {
                document.getElementById("ten").innerHTML = 8
                setTimeout(() => {
                    document.getElementById("ten").innerHTML = 7
                    setTimeout(() => {
                        document.getElementById("ten").innerHTML = 6
                        setTimeout(() => {
                            document.getElementById("ten").innerHTML = 5
                            setTimeout(() => {
                                document.getElementById("ten").innerHTML = 4
                                setTimeout(() => {
                                    document.getElementById("ten").innerHTML = 3
                                    setTimeout(() => {
                                        document.getElementById("ten").innerHTML = 2
                                        setTimeout(() => {

                                            document.getElementById("ten").innerHTML = 1
                                            setTimeout(() => {
                                                document.getElementById("ten").innerHTML = "Happy Diwali 🎆"
                                                console.log("Happy Diwali 🎆")
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    },1000)

