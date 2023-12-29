import http from 'k6/http';
import { check, sleep } from 'k6'



export const options = {
  vus: 5,
  duration: '5s',
  thresholds : {
    http_req_duration: ['p(95)<100'],
    http_req_duration: ['max<2000'],
    http_req_failed: ['rate<0.1'],
    http_reqs: ['count>20'],
    http_reqs: ['rate>4']
  }
}

export default function(){
  const res = http.get('https://test.k6.io');
  check(res, {
    'The Status code is 200': (r) => r.status === 200,
    "The page is the startpage": (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
   })
  //  sleep(1)

  
}

