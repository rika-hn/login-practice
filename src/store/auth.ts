import { defineStore } from 'pinia';

interface AuthState {
    isLoggedIn: boolean;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        isLoggedIn: false,
    }),
    actions: {
        login (email: string, password: string): void {
            // ログイン処理をここに記述
            this.isLoggedIn = true;
            console.log("ログインできました")
        },
        logout(): void {
            // ログアウト処理をここに記述
            this.isLoggedIn = false;
        },

    }
})
