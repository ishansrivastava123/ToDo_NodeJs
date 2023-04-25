import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
    try {
        const {title, desc} = req.body;

        await Task.create({
            title,
            desc,
            user: req.user
        })

        res.status(201).json({
            success: true,
            msg: "Task Added Successfully!"
        })
    } catch (error) {
        next(error);
    }
};

export const getMyTasks = async (req, res, next) => {
    try {
        const userid = req.user._id;
        const tasks = await Task.find({user: req.user._id})

        res.status(200).json({
            success: true,
            tasks
        })
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if(!task) return next(new ErrorHandler("Invalid Task ID", 404));

        task.isCompleted = !(task.isCompleted)
        await task.save();

        res.status(200).json({
            success: true,
            msg: "Task Updated Successfully!"
        })
    } catch (error) {
        next(error);
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if(!task) return next(new ErrorHandler("Invalid Task ID", 404));

        await task.deleteOne();

        res.status(200).json({
            success: true,
            msg: "Task Deleted Successfully!"
        })
    } catch (error) {
        next(error);
    }
}