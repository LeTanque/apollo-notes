
module.exports = {
    async note(_, args, { prisma }, info) {

        const note = await prisma.$exists.note({ orderBy: "createdAt_ASC", data: { id: args.data.id } }, info)
        // const notesReturned = await prisma.notes(info)

        return { note }
    }
}


