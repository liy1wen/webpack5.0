<template>
	<div>
		<div class="title">你好</div>
		{{title}}
		<img
			src="../src/assets/images/card.jpg"
			alt=""
			style="width: 300px;"
		/>
	</div>
</template>
<script>
export default {
	data () {
		return {
			title: 'hello world'
		}
	},
}
</script>
<style lang="less" scoped>
</style>