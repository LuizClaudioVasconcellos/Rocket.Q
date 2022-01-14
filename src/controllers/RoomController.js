const Database = require("../database/config");

module.exports = {
    async create(request, response) {
        const db = await Database();
        const pass = request.body.password;
        let roomId = "";
        let isRoom = true;

        while (isRoom) {

            // Gera numero da sala
            for (var i = 0; i < 6; i++) {
                i == 0 ? roomId = roomId += Math.floor(Math.random() * 10).toString() :
                    roomId += Math.floor(Math.random() * 10).toString();
            };

            // Verifica se sala já existe
            const roomsExistId = await db.all(`SELECT id FROM rooms`);

            isRoom = roomsExistId.some(roomsExistId => roomsExistId === roomId);

            if (!isRoom) {
                // Inseri a sala no Db
                await db.run(`INSERT INTO rooms (
            id,
            pass
            ) VALUES(
            ${parseInt(roomId)},
            ${pass}
            )`);
            };
        };

        await db.close();

        response.redirect(`/room/${roomId}`)
    },

    async open(request, response){
        const db = await Database();
        const roomId = request.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

        response.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead});

        await db.close();
    }
};