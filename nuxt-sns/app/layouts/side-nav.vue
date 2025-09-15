<template>
    <div class="header">
        <div class="logo">
            <ShareLogo></ShareLogo>
            <img src="" alt="Share" />
        </div>
        <nav class="side-nav">
        <ul class="side-item">
        <li>
            <NuxtLink to="/" class="home-link">ホーム</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/logout" class="logout-link">ログアウト</NuxtLink>
        </li>
        <li>
            <lavel>シェア</lavel>
            <textarea class="comment"></textarea>
        </li>
        <li>
            <button type="submit" class="submit-btn">シェアする</button>
        </li>
        </ul>
        </nav>
    </div>
    <slot />
</template>