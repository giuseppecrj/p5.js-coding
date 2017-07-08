import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import concurrent from 'concurrent-transform'
import path from 'path'
import { client } from '../paths'

const $ = plugins()

const aws = {
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET
  },
  region: process.env.AMAZON_CLOUDFRONT_REGION,
  params: {
    Bucket: process.env.S3_BUCKET
  },
  distributionId: process.env.AMAZON_CLOUDFRONT_ID
}

export const upload = () => {
  const publisher = $.awspublish.create(aws)

  return gulp.src(client.upload.input)
    .pipe($.rename((file) => {
      const f = file
      f.dirname = path.join(`/assets/${process.env.CDN_VERSION}`, file.dirname)
      return f
    }))
    .pipe($.awspublish.gzip())
    .pipe(concurrent(publisher.publish({
      'x-amz-acl': 'public-read',
      'Cache-Control': 'max-age=315360000, no-transform, public'
    }), 10))
    .pipe(publisher.sync(client.upload.output))
    .pipe($.awspublish.reporter())
}
