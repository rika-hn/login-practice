// api.ts

const apiUrl = 'https://api.example.com'; // APIのベースURL

export async function loginUser(email: string, password: string) {
  const endpoint = `${apiUrl}/login`; // ログインエンドポイントのURL
    const requestBody = {
        email,
        password,
};

    try {
        const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
    },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const responseData = await response.json();
    return responseData; // ログイン成功時のレスポンスデータを返す
    } catch (error) {
    throw new Error('Login failed');
    }
}
