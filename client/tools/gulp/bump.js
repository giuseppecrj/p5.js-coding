import gulp from 'gulp'
import dotenv from 'dotenv'
import plugins from 'gulp-load-plugins'

const $ = plugins()

gulp.task('env:bump', () => {
  return gulp.src('./package.json')
    .pipe($.bump())
    .pipe(gulp.dest('./'))
})

export const commit = () => {
  return gulp.src('./git-test/*')
    .pipe($.git.add({ args: '.' }))
    .pipe($.git.commit([`client deploy: ${process.env.CDN_VERSION}`]))
}

gulp.task('commit', gulp.series(commit))
