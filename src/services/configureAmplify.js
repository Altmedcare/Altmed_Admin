
import Amplify,{Storage} from 'aws-amplify';

// Amplify.configure({
//     Auth: {
//       userPoolId: 'ap-south-1_B6PEmyWrH',
//       userPoolWebClientId: '61bpgcqj9h6ad5aqaqb7hocbil',
//       authenticationFlowType: 'CUSTOM_AUTH'
//     }
//   });

// altmed-pool
export const ConfigureAmplify = () => {
    Amplify.configure({
        Auth: {
            identityPoolId: 'ap-south-1:58878011-439f-4aa4-91aa-7bd4b44f21ad',
            userPoolId: 'ap-south-1_p7Jz6LG3T',
            userPoolWebClientId: '4hjfov85cmrpjrs9r9img7t279',
            authenticationFlowType: 'CUSTOM_AUTH',
            region: 'ap-south-1',
        },
        Storage: {
            // AWSS3: {
            bucket: 'altmed-assets',
            region: 'ap-south-1',
            identityPoolId: 'ap-south-1:58878011-439f-4aa4-91aa-7bd4b44f21ad'
            // }
        }
        // Storage: {

        //   bucket: 'altmed-assets',
        //   region: 'ap-south-1',
        //   identityPoolId: 'ap-south-1:58878011-439f-4aa4-91aa-7bd4b44f21ad'
        //  }
    });

}

export function SetS3Config(bucket, level){
    Storage.configure({
        bucket: bucket,
        level: level,
        region: 'ap-south-1',
        identityPoolId: 'ap-south-1:58878011-439f-4aa4-91aa-7bd4b44f21ad'
    });
}


