<template>
    <div class="background">
        <div class="login-form">
            <h2 class="title">ログイン</h2>

            <ValidationForm v-slot="{ handleSubmit }" >
            <form @submit.prevent="handleSubmit(handleLogin)" class="validate-form">
                <ValidationField name="email" rules="required|email" v-slot="{ field, errors, meta: { valid, validated }}">
                    <input v-bind="field" v-model="email" type="email" placeholder="メールアドレス" class="input" />
                    <span v-show="!valid && validated" class="error">{{ errors[0] }}</span>
                </ValidationField>

                <ValidationField name="password" rules="required|min:6" v-slot="{ field, errors, meta: { valid, validated }}">
                    <input v-bind="field" v-model="password" type="password" placeholder="パスワード" class="input" />
                    <span v-show="!valid && validated" class="error">{{ errors[0] }}</span>
                </ValidationField>

                <button type="submit" class="submit-btn">ログイン</button>
                </form>
            </ValidationForm>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth-header',
    auth: false
})
const { data, signIn } = useAuth();
import { ref } from 'vue';
const email = ref('');
const password = ref('');

const handleLogin = async () => {
    try {
    await signIn('credentials', {
        email: email.value,
        password: password.value,
        redirect: true,
        callbackUrl: '/'
    });
    } catch (err) {
    console.error('ログイン失敗:', err);
    }
};

</script>

<style scoped>
.background {
    background-color: #0f172a;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
}

.login-form {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px 30px;
    max-width: 400px;
    width: 90%;
}

.title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.validate-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input {
    width: 100%;
    padding: 12px;
    border: 2px solid #000;
    border-radius: 10px;
    font-size: 16px;
    box-sizing: border-box;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 4px;
    display: block;
}

.submit-btn {
    background: #6a11cb;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    width: 50%;
    transition: 0.3s;
    margin: 0 auto;
}

.submit-btn:hover {
    opacity: 0.9;
}
</style>
