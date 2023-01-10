<script>


export default {
    data() {
        return {
            
        }
    },
    methods: {

    }
}


</script>
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<span class="navbar-brand" href="#">Almacén ACME</span>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link to="/" class="nav-link">Productos</router-link>
					<router-link to="/categorias" class="nav-link">Categorías</router-link>
					<router-link to="/newProduct" class="nav-link">Añadir producto</router-link>
					<router-link to="/newCategory" class="nav-link">Añadir categoria</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>