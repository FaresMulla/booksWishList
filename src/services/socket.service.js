import io from 'socket.io-client'

const baseUrl = (process.env.NODE_ENV === 'production')? '' : '//localhost:3030'
export const socketService = createSocketService()

// For DEBUG:
// window.socketService = socketService

socketService.setup()


function createSocketService() {
  var socket = null;
  const socketService = {
    async setup() {
      console.log(' i setup' ,baseUrl );
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb=null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      console.log('i will emit', eventName, data);
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}




