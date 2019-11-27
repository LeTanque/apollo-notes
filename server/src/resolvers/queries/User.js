

module.exports = {
    async me(_, __, { prisma, getUserId }, info) {

        const userId = getUserId();
        const user = await prisma.$exists.user({ id: userId })

        if(!user) throw new Error("User do not exist");


        return prisma.user({ id: userId }, info)
    }
};

