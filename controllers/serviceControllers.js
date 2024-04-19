


exports.AllserviceRoute =  (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            Name: "Home managment",
            Ratings: "5 start"
        },
        {
            id: 2,
            Name: "Hotel Management",
            Ratings: "5 start"
        },
        {
            id: 3,
            Name: "Digital Marketing",
            Ratings: "5 start"
        }
    ])
}


exports.serviceRoute = (req, res) => {
    res.status(200)
    res.json({
        id: 3,
        Name: "Digital Marketing",
        Ratings: "5 start"
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