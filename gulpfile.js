const gulp   = require('gulp'),
      pug    = require('gulp-pug'),
      stylus = require('gulp-stylus'),
      babel  = require('gulp-babel');

// Default Task - Executada apenas com o "npm run gulp"
gulp.task ('default', ['pug', 'pug-watch', 'stylus', 'stylus-watch', 'babel', 'babel-watch']);


gulp.task ('pug', () => 
	      gulp.src('./pug/**/*.pug') 
				.pipe(pug())
				.pipe(gulp.dest('./dist/'))
);

gulp.task('stylus', () => 
     gulp.src('./css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('babel', () =>
    gulp.src('./js/app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js/app'))
);

// Watchers

gulp.task ('pug-watch', () => 
	gulp.watch('./pug/*.pug', ['pug'])
);

gulp.task('stylus-watch', () => 
	gulp.watch('./css/**/*.styl', ['stylus'])
);

gulp.task('babel-watch', () => 
	gulp.watch('./js/app/**/*.js', ['babel'])
)

