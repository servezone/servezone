import * as plugins from './servezone.plugins'
import * as early from 'early'

early.start('servezone')
import './servezone.cli'
early.stop()
