const createError = require('http-errors');

// 404 handler
exports.notFound = (req, res, next) => {
    next(createError(404));
};

// Global error handler
exports.globalHandler = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.render('error');
};

// Async error wrapper
exports.asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};