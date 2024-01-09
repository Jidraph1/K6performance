import http from 'k6/http'
import {sleep} from 'k6'

export const options ={
   stages: [
    {
        duration: '10s',
        target: 10
    },
    {
        duration: '60s',
        target: 10
    },
    {
        duration: '10s',
        target: 0
    }
   ],
   thersholds:{
    http_req_duration: ['p(90)<1250', 'p(95)<1300'],
    checks: ['rate>=0.99']
   },
   ext:{
    loadimpact:{
        projectID: 3663160
    }
   }
}

export default function(){
    http.get('https://test.k6.io')
    sleep(1)
}

// practice on vitest and 