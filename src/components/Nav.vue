<template>
    <header class="header">
        <nav class="main-nav">
            <navButton :linkName="'Home'" :anchorLink="''" />
            <navButton :linkName="'About Me'" :anchorLink="'#about'" />
            <navButton :linkName="'My Works'" :anchorLink="'#works'" />
            <navButton :linkName="'Contact'" :anchorLink="'#contact'" />
        </nav>
    </header>
</template>

<script>
import navButton from '../components/navButton'
export default {
    name: 'MainNav',
    components: {
        navButton
    }
}
</script>

<style lang="scss" scoped>
    .header {
        background: #32084D;
        height: 3.5rem;
        width: 100vw;
        padding: 0 1rem;
        position: fixed;
        top: 0;
        z-index: 1;

        .main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    @media screen and (min-width: 720px) {
        .header {
            display: flex;
            justify-content: center;

            .main-nav {
                width: 500px;
            }            
        }
    }
</style>