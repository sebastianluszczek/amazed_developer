<template>
    <div class="navigation">
        <AppLogo></AppLogo>
        <nav>
            <ul class="nav-list">
                <nuxt-link to="/portfolio">Portfolio</nuxt-link>
                <nuxt-link to="/about">O mnie</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    import AppLogo from "@/components/AppLogo";

    export default {
        name: "app_nav", components: {
            AppLogo
        }
    };
</script>

<style lang="scss">
    .navigation {
        background-color: #fff;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        z-index: 10;
        height: 5rem;
        box-shadow: 10px 3px 10px #eee;

        .nav-list {
            padding: 10px 40px;

            a {
                padding: 5px 10px;
                margin: 0 10px;
                text-decoration: none;
                color: #333;
                transition: 0.3s;
                border-bottom: 1px solid #fff;
                font-weight: 600;

                &.nuxt-link-active {
                    border-bottom: 1px solid #333;
                }
            }
        }
    }
</style>
