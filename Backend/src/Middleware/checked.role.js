const checkRole = (role) => {
    return (req,res,next) => {
        if(req.user && req.user.rol == role){
            return next();
        }
        return res.status(403).json({error: "Acceso denegado"})
    }
}

module.exports = checkRole;