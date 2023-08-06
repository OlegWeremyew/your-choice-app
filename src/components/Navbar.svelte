<script lang="ts">
  import {Link} from "svelte-navigator";
</script>

<nav>
	<Link class="link" to="/">Polls</Link>
	<Link class="link" to="/countries">Countries</Link>
</nav>

<style lang="scss" global>
  nav {
    display: flex;

    .link {
      cursor: pointer;
      color: #444;
      transition: 0.1s linear;
      margin: 0 5px;
      padding: 5px;
      border-radius: 4px;

      &:hover {
        color: #000;
        background-color: #e3d9d9;
      }

      &:focus {
        color: #333;
        text-decoration: underline;
        background-color: #e3d9d9;
      }
    }
  }
</style>