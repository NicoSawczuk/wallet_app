import axios from 'axios'
import { API_URL } from "services/settings"


export async function loginService({email, password}) {
    const res = await axios({
        method: 'post',
        url: `${API_URL}/login`,
        headers: {
            'Accept': 'application/json'
        },
        data: {
          email: email,
          password: password
        }
      })

    return {
        data: res.data,
    }
}