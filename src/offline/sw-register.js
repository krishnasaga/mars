import runtime from 'serviceworker-webpack-plugin/lib/runtime';
let registration = null;

if ('serviceWorker' in navigator) {
  registration = runtime.register();
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const applicationServerPublicKey = 'BAE6x83JMpUDJZVEKIEiaO3rw4bgmvrxFwAZMNiKzZoZRIXvNkhiHPdD1vnXFWRRBvgEpLtt8i_LJnWXgXdmVFo';
const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

export default registration
  .then( instance => {
     instance.pushManager.subscribe({
       userVisibleOnly: true,
       applicationServerKey: applicationServerKey
     });
  });
