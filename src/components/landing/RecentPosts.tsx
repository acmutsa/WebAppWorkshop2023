import { type FunctionComponent, type ReactElement } from "react";
import { type blogItem } from "~/common/types";
import PostItem from "./PostItem";

interface RecentPostsProps {
	blogPostsToDisplay: blogItem[];
}

const RecentPosts: FunctionComponent<RecentPostsProps> = ({
	blogPostsToDisplay,
}) => {
	const postsToRender: ReactElement[] = [];

	for (const post of blogPostsToDisplay) {
		postsToRender.push(<PostItem key={post.slug} {...post} />);
	}

	return (
		<section className="flex min-h-screen grid-cols-2 flex-col flex-nowrap justify-center bg-blue-500 md:p-10 lg:p-32">
			<div>
				<h1 className="mb-5 font-sans text-6xl font-black text-white">
					Recent Blog Posts
				</h1>
				<div className="do-side-fade overflow-x-scroll">
					<div className="flex flex-nowrap pb-3">{postsToRender}</div>
				</div>
			</div>
		</section>
	);
};

export default RecentPosts;
