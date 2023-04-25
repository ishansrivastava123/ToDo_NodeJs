class ErrorHandler extends Error{
    constructor(msg, sCode) {
        super(msg);
        this.sCode = sCode;
    }
}

export  const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error"
    err.sCode = err.sCode || 500

    return res.status(404).json({
        success: false,
        msg: err.message
    })
}

export default ErrorHandler