import User from "../models/User.js";

export const update = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {
                    new: true
                }
            );
            res.status(200).json(updatedUser);
        }catch(err){
            next(err);
        }
    }else{
        return next(403, "You can update just your account");
    }
}
export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try{
            await User.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("User has been deleted");
        }catch(err){
            next(err);
        }
    }else{
        return next(403, "You can delete just your account");
    }
}
export const getOneUser = async (req, res, next) => {
}
export const subscribe = async (req, res, next) => {
}
export const unSubscribe = async (req, res, next) => {
}
export const like = async (req, res, next) => {
}
export const dislike = async (req, res, next) => {
}