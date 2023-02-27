import {
	type NextPage,
	type GetServerSideProps,
	type GetServerSidePropsResult,
} from "next";
import { prisma } from "~/server/db";
import ReactMarkdown from "react-markdown";

const Blog: NextPage<{
	title: string;
	content: string;
	desc: string;
	image: string;
}> = ({ title, content, desc, image }) => {
	return (
		<div className="min-h-screen pt-[64px]">
			<div className="mx-auto mt-[100px] max-w-[800px]">
				<img src={image} className="w-full rounded" />
				<h1 className="mt-5 font-sans text-6xl font-black">{title}</h1>
				<h2 className="font-sans text-xl font-light">{desc}</h2>
				<hr className="mt-5"></hr>
				<ReactMarkdown className="prose my-10">{content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	console.log("requested!");

	if (!params?.slug || typeof params.slug !== "string") {
		console.log("no slug", params?.slug);
		return {
			notFound: true,
		};
	}

	const slug = params.slug;

	const postToRet = await prisma.post.findUnique({
		where: {
			slug: encodeURIComponent(slug),
		},
	});

	if (!postToRet) {
		console.log("no post found", params?.slug);
		return {
			notFound: true,
		};
	}

	prisma.post.update({
		where: {
			slug: encodeURIComponent(slug),
		},
		data: {
			views: postToRet.views + 1,
		},
	});

	console.log("found post", postToRet);

	return {
		props: {
			title: postToRet.title,
			desc: postToRet.desc,
			content: postToRet.content,
			tags: postToRet.tags,
			image: postToRet.image,
		},
	};
};
