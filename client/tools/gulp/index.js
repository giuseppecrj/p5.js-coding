import gulp from 'gulp'
import { slack, log } from './slack'
import { commit } from './bump'
import build from './build'

export default () => {
  gulp.task('build', build)
  gulp.task('notify', gulp.series(slack, commit, log))
}
