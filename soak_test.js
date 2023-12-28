import http from 'k6/http';
import { sleep } from 'k6'

export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },  {
            duration: '30h',
            target: 1000
        },  {
            duration: '5s',
            target: 0
        }
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1)
    http.get('https://test.k6.io/contacts.php');
    sleep(1)
    http.get('https://test.k6.io/news/php');
    sleep(1)
}

