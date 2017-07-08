import gulp from 'gulp'
import { clean } from './delete'
import { files } from './files'
import { webpackClient } from './webpack'
import { upload } from './upload'
import { bs } from './server'
import { slack, log } from './slack'

gulp.task('default', gulp.parallel(bs))

let build

if (process.env.NODE_ENV === 'development') {
  build = gulp.series(clean, files, 'default')
} else {
  build = gulp.series(clean, files, webpackClient, upload)
}

export default build
