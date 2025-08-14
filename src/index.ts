import makeWASocket from './Socket'

export * from '../WAProto'
export * from './Utils'
export * from './Types'
export * from './Defaults'
export * from './WABinary'
export * from './WAM'
export * from './WAUSync'

export type WASocket = any
export { makeWASocket }
export default makeWASocket
