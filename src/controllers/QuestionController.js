module.exports = {
    index(request, response){
        const roomId = request.params.room;
        const questionId = request.params.room;
        const action = request.params.action;
        const password = request.body.password;
        
        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);
    }
};