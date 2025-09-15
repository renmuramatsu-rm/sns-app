<template>
    <div class="header">
        <div class="logo">
            <ShareLogo></ShareLogo>
            <img src="" alt="Share" />
        </div>
        <nav class="header-nav">
        <ul class="header-item">
        <li>
            <NuxtLink to="/register" class="register-link">新規登録</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/login" class="login-link">ログイン</NuxtLink>
        </li>
        </ul>
        </nav>
    </div>
    <slot />
</template>

<style>
.header {
background-color: #0f172a;
color: #fff;
display: flex;
padding: 0 50px;
justify-content: space-between;
align-items: center;
}

.header-item{
    display: flex;
    color: #fff;
    list-style: none;
}

.register-link{
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
}

.login-link{
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
}
</style>