'use strict';

const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const through2 = require('through2');
const yaml = require('js-yaml');

// パスの設定
const entryPath = './src';
const outputFileName = 'swagger';
const outputPath = './';

gulp.task('compile', cb => {
  return gulp
    .src(`${entryPath}/index.yaml`)
    .pipe(through2.obj((file, enc, cb) => {
        if (!file.isBuffer()) throw new Error(`[FAILED]. '${entryPath}/index.yaml' can not load target file.`);
        const root = yaml.safeLoad(file.contents);
        // resolveパッケージを再読み込み
        const resolve = require('json-refs').resolveRefs;
        const options = {
          filter : ['relative', 'remote'],
          loaderOptions : {
            processContent : (res, callback) => {
              callback(null, yaml.safeLoad(res.text));
            }
          }
        };
        resolve(root, options).then((results) => {
          file.contents = Buffer.from(yaml.safeDump(results.resolved));
          // gulpで実行すると読み込んだyamlがキャッシュされてそうだったのでモジュールキャッシュを削除 <- いらないかも
          delete require.cache[require.resolve('json-refs')];
          cb(null, file);
        }).catch((e) => {
          throw new Error(e);
        });
      })
    )
    .pipe(rename({
      basename: outputFileName,
      extname: '.yaml'
    }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('watch', cb => {
  gulp.watch(
    [
      entryPath + '/**/*.yaml'
    ],
    gulp.task('compile')
  );
});

gulp.task(
  'default',
  gulp.series(
    'compile',
    gulp.parallel('watch')
  )
);

gulp.task(
  'build',
  gulp.series(
    'compile'
  )
);