/**
 * Created by zhang on 7/8/2017.
 */

import gulp from 'gulp';

gulp.task("img",()=>{
    return gulp.src("app/img/*")
        .pipe(gulp.dest("server/public/img"))
})