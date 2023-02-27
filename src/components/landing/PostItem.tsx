import { type FunctionComponent } from "react";
import type { blogItem } from "~/common/types";

interface PostItemProps extends blogItem {
	key: string;
}

const PostItem: FunctionComponent<PostItemProps> = ({
	title,
	desc,
	image,
	slug,
}) => {
	return (
		<div>
			<div
				className="mr-10 aspect-[6/5] w-[400px] overflow-hidden rounded-lg border-2 border-white hover:cursor-pointer"
				onClick={() => window.open(`/blog/${slug}`)}
			>
				<div
					className="h-[60%] bg-cover"
					style={{ backgroundImage: `url(${image})` }}
				></div>
				<div className="flex h-[40%] flex-col justify-start p-2 text-white">
					<h1 className="font-sans text-2xl font-black">{title}</h1>
					<p className="font-sans font-bold">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
