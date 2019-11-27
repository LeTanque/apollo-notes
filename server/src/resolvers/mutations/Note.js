// const getUserId = require("../../utils/getUserId");

const Note = {
    createNote(_, args, { prisma, getUserId }, info) {

        const userId = getUserId();

        if (!userId) return { message: "Authorization required" }

        return prisma.createNote({
            user: { connect: { id: userId } },
            ...args.data
            // title: args.data.title, // Equiv ^^
            // body: args.data.body,
        }, info)
    }
};


module.exports = Note
