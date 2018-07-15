## setup and try
<pre>
$ ng new my-app
$ ng serve
</pre>
http://localhost:4200/

### help
<pre>
$ ng help
Available Commands:
  add Add support for a library to your project.
  new Creates a new directory and a new Angular app.
  generate Generates and/or modifies files based on a schematic.
  update Updates your application and its dependencies.
  build Builds your app and places it into the output path (dist/ by default).
  serve Builds and serves your app, rebuilding on file changes.
  test Run unit tests in existing project.
  e2e Run e2e tests in existing project.
  lint Lints code in existing project.
  xi18n Extracts i18n messages from source code.
  run Runs Architect targets.
  eject Temporarily disabled. Ejects your app and output the proper webpack configuration and scripts.
  config Get/set configuration values.
  help Help.
  version Outputs Angular CLI version.
  doc Opens the official Angular API documentation for a given keyword.

For more detailed help run "ng [command name] --help"
$
$ ng build --help
</pre>

### build
<pre>
$ ng build
$ la dist/my-app/
</pre>
本番公開用ビルド（サイズ縮小版）
<pre>
$ ng build --prod --aot
</pre>
コード規約遵守の検証
<pre>
$ ng lint
</pre>
