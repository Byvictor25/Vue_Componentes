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
					<router-link to="/" class="nav-link">Tareas</router-link>
					<router-link to="/addTarea" class="nav-link">Añadir Tarea</router-link>
					<router-link to="/delTareas" class="nav-link">Borrar Tareas</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>