

exports.Allhome = (req, res) => {
    res.status(200)
    res.json([
        {
            Name: "Etim",
            Skill: "MERN",
        },
        {
            Name: "Grace",
            Skill: "spo",
        },
        {
            Name: "DANIEL",
            Skill: "Captain",
        }
    ])
}

exports.home = (req, res) => {
    res.status(200)
    res.json({
        Name: "Job",
        skill: "jack of all trades"
    })
}

exports.createhome = (req, res) => {
    res.status(200)
    res.json({
        Message: "home Created"
    })
}

exports.updatehome = (req, res) => {
    res.status(200)
    res.json({
        Message: "home Updated"
    })
}

exports.deletehome = (req, res) => {
    res.status(200)
    res.json({
        message: "home deleted"
    })
}