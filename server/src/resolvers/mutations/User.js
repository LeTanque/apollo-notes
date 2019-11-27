const argon2 = require("argon2");
const generateToken = require("../../utils/generateToken");

module.exports = {
    async createUser(_, args, { prisma }) {
        // Check password length
        if (args.data.password.length < 8) {
            throw new Error("Password must be 8 characters or longer.");
        }
        // Hash password
        const hashedPassword = await argon2.hash(args.data.password, {
            type: argon2.argon2id,
            timeCost: 10,
            hashLength: 64
        });

        const user = await prisma.createUser({
            ...args.data,
            password: hashedPassword
        });
        const token = generateToken(user.id);

        return {
            token,
            user
        };
    },

    async loginUser(_, args, { prisma }) {
        const userInDb = await prisma.user({ email: args.data.email });

        if (!userInDb) throw new Error("User is not available");

        if (await argon2.verify(userInDb.password, args.data.password)) {
            
            const user = { email: args.data.email, password: args.data.password };

            const token = generateToken(user.id);

            return { token, user }
        } else {
            throw new Error("Failed to authenticate")
        }
    }
};
