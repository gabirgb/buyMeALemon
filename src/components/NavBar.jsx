import CartWidget from "./cartWidget"
export default function NavBar({ usuario, itemsEnCarrito}) {

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src="./src/assets/logo-limon.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Buy me a Lemon!
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Envío</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><CartWidget /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bienvenido {usuario}!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}