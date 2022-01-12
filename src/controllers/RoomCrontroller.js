const res = require("express/lib/response");

module.exports = {
    create(request, response){
        let roomId = 123456

        response.redirect(`/room/${roomId}`)
    }
};