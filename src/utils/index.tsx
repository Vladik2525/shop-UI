const headers = new Headers()

headers.append('Content-Type', 'application/json')

const apiUrl = 'http://localhost:3000'

export const sendRequest = async (url: string, init: RequestInit) => {

    const token = localStorage.getItem('token')

    headers.set('Authorization', `Bearer ${token}`)

    const response = await fetch(`${apiUrl}${url}`, {
        ...init,
        headers: init.headers ?? headers
    });
    const data = await response.json();

    if (response.status == 401) {
        location.href = '/login'

        localStorage.clear()
    }

    return { data, ok: response.ok }
}