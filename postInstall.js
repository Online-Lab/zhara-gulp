require('shelljs/global');

if (process.env.NODE_ENV === 'production') {
  console.log('running bower install');
  exec('node_modules/bower/bin/bower install');
  console.log('running gulp build');
  exec('node node_modules/gulp/bin/gulp.js build');
  return;
}

console.error('No postinstall task');
process.exit(0);