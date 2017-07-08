/**
 * Created by zhang on 7/8/2017.
 */
import  gulp from "gulp";
import gulpif from  "gulp-if";
import gutil from "gulp-util";
import  args from "./util/args";


gulp.task('browser',(cb)=>{
    console.log(1);
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['script']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
})