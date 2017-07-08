/**
 * Created by zhang on 7/8/2017.
 */
//TODO:载入所有的模块 编译js模块

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task("build",gulpSequence("clean","pages","css","img","script",["server","browser"]))