import * as plugins from './servezone.plugins'
import * as ServezoneSocket from './servezone.socket'

export let run = () => {
    let done = plugins.q.defer()
    ServezoneSocket.init()
        .then()
        .catch((err) => { console.log(err) })
    return done.promise
}
