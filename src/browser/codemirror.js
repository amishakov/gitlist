require('codemirror/lib/codemirror.css')
require(`codemirror/theme/idea.css`)
require(`codemirror/theme/dracula.css`)

global.CodeMirror = require('codemirror');
require('codemirror/addon/selection/active-line.js')
require('codemirror/addon/mode/simple');
require('codemirror/addon/mode/multiplex');
require('codemirror/mode/cmake/cmake');
require('codemirror/mode/clike/clike');
require('codemirror/mode/css/css');
require('codemirror/mode/dockerfile/dockerfile');
require('codemirror/mode/go/go');
require('codemirror/mode/handlebars/handlebars');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/perl/perl');
require('codemirror/mode/php/php');
require('codemirror/mode/powershell/powershell');
require('codemirror/mode/python/python');
require('codemirror/mode/properties/properties');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/sass/sass');
require('codemirror/mode/shell/shell');
require('codemirror/mode/vbscript/vbscript');
require('codemirror/mode/groovy/groovy');
require('codemirror/mode/erlang/erlang');
require('codemirror/mode/ecl/ecl');
require('codemirror/mode/coffeescript/coffeescript');
require('codemirror/mode/clojure/clojure');
require('codemirror/mode/diff/diff');
require('codemirror/mode/smalltalk/smalltalk');
require('codemirror/mode/rust/rust');
require('codemirror/mode/lua/lua');
require('codemirror/mode/haskell/haskell');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/scheme/scheme');
require('codemirror/mode/r/r');
require('codemirror/mode/rst/rst');
require('codemirror/mode/ntriples/ntriples');
require('codemirror/mode/pascal/pascal');
require('codemirror/mode/sql/sql');
require('codemirror/mode/swift/swift');
require('codemirror/mode/twig/twig');
require('codemirror/mode/vue/vue');
require('codemirror/mode/xml/xml');
require('codemirror/mode/xquery/xquery');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/protobuf/protobuf');