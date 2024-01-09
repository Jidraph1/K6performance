import http from 'k6/http';


export const options = {
  thresholds : {
    http_req_duration: ['p(95)<300'],
    'http_req_duration{status:200}': ['p(95)<300'],
    'http_req_duration{status:404}': ['p(95)<300']
}
}
export default function(){
 http.get('https://run.mocky.io/v3/abed46e4-37a4-44a8-90b5-f7738a721e8f');
 http.get('https://run.mocky.io/v3/a21d38ce-11d2-4fa2-be73-7817439786aa?mocky-delay=2000ms')
}