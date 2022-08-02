<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563f7a">
        <router-link to="/" class="navbar-brand">
            <a class="nav-link">Ürün Listesi</a>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/urun-islemleri" class="nav-item" active-class="active">
                    <a class="nav-link">Ürün İşlemleri</a>
                </router-link>

                <router-link to="/urun-cikisi" class="nav-item" active-class="active">
                    <a class="nav-link">Ürün Çıkışı</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>
