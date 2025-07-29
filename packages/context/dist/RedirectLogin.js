// packages/context/lib/redirectToLogin.ts
export function redirectLogin() {
    const currentHost = window.location.host;
    // Kalau kita di zona host, masih bisa pakai router.push
    if (currentHost.startsWith("host.")) {
        window.location.href = "/login";
    }
    else {
        // Kalau di zona lain, redirect ke host full URL
        window.location.href = "http://host.bnext.localhost:3000/login";
    }
}
