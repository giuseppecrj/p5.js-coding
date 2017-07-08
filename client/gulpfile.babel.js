import yargs from 'yargs'
import dotenv from 'dotenv'
import init from './tools/gulp'

dotenv.load()

process.env.NODE_ENV = process.env.NODE_ENV || yargs.argv.env || 'development'
process.env.CDN_VERSION = require('./package.json').version || process.env.CDN_VERSION
process.noDeprecation = true

init()
