import http from 'k6/http';
import { sleep } from 'k6';
import { randomIntBetween, uuidv4, randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options ={
    vus: 5,
    duration: '14s'
}


export default function(){
    http.get(`https://test.k6.io`)

    console.log( 'VU stage ' + 'with a random string ' + randomString(4) )
    const randomUUID = uuidv4()
    const limitedUUID = randomUUID.substring(0,6)
    console.log('This is the randomuuid = ' + limitedUUID)

    sleep(randomIntBetween(1, 5)); // sleep between 1 and 5 seconds.
}
