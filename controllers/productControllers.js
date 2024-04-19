

exports.AlluserRoute =  (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            Name: "David lewis",
            Class: "p1"
        },
        {
            id: 2,
            Name: "Matt klaus",
            Class: "p5"
        },
        {
            id: 3,
            Name: "Johnny boy",
            Class: "a5"
        }
    ])
}

exports.userRoute = (req, res) => {
    res.status(200)
    res.json({
        id: 1,
        Name: "simon  expa",
        Class: "p9"
    })
}



exports.createPost = (req, res) => {
    res.status(200)
    res.json({
        message: "product created "
    })
}

exports.updatePost = (req, res) => {
    res.status(200)
    res.json({
        message: "product updated "
    })
}

exports.deletePost = (req, res) => {
    res.status(200)
    res.json({
     message: "product deleted "
    })
}