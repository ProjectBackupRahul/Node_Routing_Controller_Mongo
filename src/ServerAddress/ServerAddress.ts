import * as ip from "ip";

export class severAddress {
        public static appAddress(PORT: number) {  
            const IP = ip.address();
            var url = 'http://' + IP + ':' + PORT + '/'
            console.log(` App is running & Local addres is : ${url}`);
        }
}
