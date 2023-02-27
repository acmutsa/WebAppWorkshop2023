import { type NextPage } from "next";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormValues {
	title: string;
	desc: string;
	tags: string;
	image: string;
	content: string;
}

const Dash: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({});

	const onSubmit = handleSubmit(async (data) => {
		const res = await fetch("/api/createPost", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: data.title,
				desc: data.desc,
				content: data.content,
				tags: data.tags,
				image: data.image,
			}),
		});
		const json = await res.json();
		console.log(json);
		alert(JSON.stringify(json));
	});

	return (
		<div className="h-screen flex-col flex-nowrap justify-center overflow-x-scroll px-32 pt-[64px]">
			<h1 className="mb-10 mt-[50px] font-sans text-6xl font-black">
				New Post
			</h1>
			<form onSubmit={onSubmit}>
				<p>Title</p>
				<input
					{...register("title", { required: true })}
					className="form-input w-[500px] rounded"
					placeholder="My Awesome Post"
				/>
				<p className="mt-[10px]">Description</p>
				<textarea
					{...register("desc", { required: true })}
					className="form-textarea w-[500px] rounded"
					placeholder="My Awesome Post is about..."
				/>
				<p className="mt-[10px]">Image URL</p>
				<input
					{...register("image", { required: true })}
					className="form-input w-[500px] rounded"
					placeholder="https://i.imgur.com/my-awesome-header.png"
				/>
				<p className="mt-[10px]">
					Tags {"(Seperated by commas without spaces)"}
				</p>
				<input
					{...register("tags", { required: true })}
					className="form-input w-[500px] rounded"
					placeholder="Technology,Programming,Web Development"
				/>
				<br />
				<p className="mt-[10px]">Content {"(Markdown supported!)"}</p>
				<textarea
					{...register("content", { required: true })}
					className="form-input min-w-[500px] rounded"
				/>
				<br />

				<button className="mt-[15px] mb-[50px] rounded bg-gradient-to-l from-[#24C6DC] to-[#514A9D] px-5 py-2 font-sans font-bold text-white">
					Create
				</button>
			</form>
		</div>
	);
};

export default Dash;
