<template>
	<span>
		{{
			`(${formatAuthors(authors)
				.filter(author => author)
				.join(" ")} ${year === 0 ? "No year specified" : year}. ${
				title ? title : "No title specified"
			}.)`
		}}
	</span>
</template>

<script>
export default {
	props: {
		title: String,
		authors: Array[String],
		year: Number
	},
	methods: {
		formatAuthors(arr) {
			if (arr) {
				return arr.map(author => {
					author = author.split(" ");
					if (author[1] && author[0])
						return `${author[1]} ${author[0].charAt(0)}.,`;
					else if (author[1]) return `${author[1]},`;
					else if (author[0]) return `${author[0]},`;
					else return "No author specified.,";
				});
			} else {
				return [];
			}
		}
	}
};
</script>
