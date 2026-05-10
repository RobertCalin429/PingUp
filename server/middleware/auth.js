

export const protect = async (req, res ,next) => {
    try {
        const {userId} = await req.auth();
        if(!userId){
            return res.json({succes: false, message: "not authenticated"})
        }
        next()
    } catch (error) {
         res.json({succes: false, message: error.message})
    }
}