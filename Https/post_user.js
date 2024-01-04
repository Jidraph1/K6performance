import http from 'k6/http';
import { check } from 'k6'

export default function() {

   let res = http.post(
        'https://test-api.k6.io/auth/token/login/', 

        JSON.stringify({
            username : "Jiiiiid",
            password: "bleeeh"
        }),
        
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const accessToken = res.json().access
        console.log(accessToken)

        http.get('https://test-api.k6.io/my/crocodiles/',
        { 
            headers: {
                Authorization: 'Bearer' + accessToken
            }
        }
    )

    
    http.post(
        'https://test-api.k6.io/my/crocodiles/',

    JSON.stringify(
        {
            name: "Random croc",
            sex: "M",
            date_of_birth: "1900-10-28"
        }),
    
    { 
        headers: {
            Authorization: 'Bearer ' + accessToken, 
            'Content-Type': 'application/json'
        }
    }
)

newcrocodileId =
http.get(`https://test-api.k6.io/my/crocodiles/${newcrocodileId}`,
{ 
    headers: {
        Authorization: 'Bearer' + accessToken
    }
}
)
}
