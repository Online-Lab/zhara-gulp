require('shelljs/global');

var is_production = process.env.NPM_CONFIG_PRODUCTION;

if (is_production === 'true') {
  console.log('------------Production environment detected------------');
  console.log('------------Running "bower install"------------');
  exec('node node_modules/bower/bin/bower install');

  console.log('------------Running "gulp build"------------');
  exec('node node_modules/gulp/bin/gulp.js build');
  return;
}

console.error('------------!No postinstall task!------------');
process.exit(0);