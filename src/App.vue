<template>
    <div>
        <div class="title">你好</div>
        {{ title }}
        <img src="./assets/images/message.png" alt="" style="width: 300px" />
        <div class="bg-div"></div>
        <!-- <picture /> -->
    </div>
</template>
<script>
// import Picture from "./components/Picture";
export default {
    components: {
        // Picture,
    },
    data() {
        return {
            title: "hello world",
        };
    },
};
</script>
<style lang="less" scoped>
.bg-div {
    width: 200px;
    height: 200px;
    background: url(./assets/images/card.jpg);
}
</style>