const Database = require("../database/config");

module.exports = {
    async create(request, response){
        const db = await Database();
        const pass = request.body.password;
        let roomId = "";

        for(var i = 0; i < 6; i++){
            roomId += Math.floor(Math.random() * 10).toString();
        };

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES(
            ${parseInt(roomId)},
            ${pass}
        )`);

        await db.close();

        response.redirect(`/room/${roomId}`)
    }
};