

exports.AllaboutRoute = (req, res) => {
    res.status(200)
    res.json([
        {
            Des: "Home service",
            location : "Nigeria"
        },
        {
            Des: "Every thing partis",
            location : "Nigeria"
        }
    ])
}

exports.aboutRoute = (req, res) => {
    res.status(200)
    res.json([
        {
            Des: "Home service",
            location : "Nigeria"
        }
    ])
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