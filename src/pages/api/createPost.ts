import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { blogItem } from "~/common/types";
import { prisma } from "~/server/db";
import { nanoid } from "nanoid";
import { getCookie } from "cookies-next";
import { env } from "../../env.mjs";

const blogValidator = z.object({
	title: z.string(),
	content: z.string(),
	tags: z.string(),
	desc: z.string(),
	image: z.string().url(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (getCookie("dashpass", { req, res }) !== env.DASHPASS) {
		res.status(401).json({ message: "Not logged in" });
		return;
	}
	if (req.method === "POST") {
		const validatedData = blogValidator.safeParse(req.body);

		if (!validatedData.success) {
			res.status(400).json({ message: "Invalid data" });
			return;
		}

		const slug = encodeURIComponent(
			`${nanoid(6)}-${validatedData.data.title.toLowerCase()}`
		);

		const createdPost = await prisma.post.create({
			data: {
				title: validatedData.data.title,
				content: validatedData.data.content,
				tags: validatedData.data.tags.split(","),
				desc: validatedData.data.desc,
				image: validatedData.data.image,
				slug: slug,
			},
		});

		// console.log(title, content);
		res.status(200).json({
			message: "Post created successfully",
			postURL: "/blog/" + slug,
		});
	} else {
		res.status(405).json({ message: "Invalid request method" });
	}
};
