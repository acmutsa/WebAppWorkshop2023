import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { blogItem } from "~/common/types";
import { prisma } from "~/server/db";
import { nanoid } from "nanoid";

const blogValidator = z.object({
	title: z.string(),
	content: z.string(),
	tags: z.string(),
	desc: z.string(),
	image: z.string().url(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const posts = await prisma.post.findMany();
		res.status(200).json(posts);
	} else {
		res.status(405).json({ message: "Invalid request method" });
	}
};
