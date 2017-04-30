import sw from 'sw-toolbox'
import pushImage from 'assets/flight_delay.png'

sw.router.get(/.(js|css|jpg|png|gif)$/,sw.cacheFirst);
sw.router.get('/',sw.networkFirst);

self.addEventListener('push', function(event) {

  const title = 'Flight delay';
  const options = {
    body: 'Your flight will be delayed by 2 hours',
    icon: pushImage,
    badge: pushImage
  };
  var promise = self.registration.showNotification(title, options);
  event.waitUntil(promise);
});

self.addEventListener('notificationclick', function(event) {
  clients.openWindow('/notification/4444');
});
