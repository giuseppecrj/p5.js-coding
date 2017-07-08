import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client } from '../paths'

const $ = plugins()

export const files = () => {
  return gulp.src(client.files.input)
    .pipe($.flatten())
    .pipe(gulp.dest(client.files.output))
}
