const languages = [
  {
    "value": "",
    "text": "语言"
  },
  {
    "value": "1c-enterprise",
    "text": "1C Enterprise"
  },
  {
    "value": "abap",
    "text": "ABAP"
  },
  {
    "value": "abnf",
    "text": "ABNF"
  },
  {
    "value": "actionscript",
    "text": "ActionScript"
  },
  {
    "value": "ada",
    "text": "Ada"
  },
  {
    "value": "adobe-font-metrics",
    "text": "Adobe Font Metrics"
  },
  {
    "value": "agda",
    "text": "Agda"
  },
  {
    "value": "ags-script",
    "text": "AGS Script"
  },
  {
    "value": "alloy",
    "text": "Alloy"
  },
  {
    "value": "alpine-abuild",
    "text": "Alpine Abuild"
  },
  {
    "value": "ampl",
    "text": "AMPL"
  },
  {
    "value": "angelscript",
    "text": "AngelScript"
  },
  {
    "value": "ant-build-system",
    "text": "Ant Build System"
  },
  {
    "value": "antlr",
    "text": "ANTLR"
  },
  {
    "value": "apacheconf",
    "text": "ApacheConf"
  },
  {
    "value": "apex",
    "text": "Apex"
  },
  {
    "value": "api-blueprint",
    "text": "API Blueprint"
  },
  {
    "value": "apl",
    "text": "APL"
  },
  {
    "value": "apollo-guidance-computer",
    "text": "Apollo Guidance Computer"
  },
  {
    "value": "applescript",
    "text": "AppleScript"
  },
  {
    "value": "arc",
    "text": "Arc"
  },
  {
    "value": "asciidoc",
    "text": "AsciiDoc"
  },
  {
    "value": "asn.1",
    "text": "ASN.1"
  },
  {
    "value": "asp",
    "text": "ASP"
  },
  {
    "value": "aspectj",
    "text": "AspectJ"
  },
  {
    "value": "assembly",
    "text": "Assembly"
  },
  {
    "value": "ats",
    "text": "ATS"
  },
  {
    "value": "augeas",
    "text": "Augeas"
  },
  {
    "value": "autohotkey",
    "text": "AutoHotkey"
  },
  {
    "value": "autoit",
    "text": "AutoIt"
  },
  {
    "value": "awk",
    "text": "Awk"
  },
  {
    "value": "ballerina",
    "text": "Ballerina"
  },
  {
    "value": "batchfile",
    "text": "Batchfile"
  },
  {
    "value": "befunge",
    "text": "Befunge"
  },
  {
    "value": "bison",
    "text": "Bison"
  },
  {
    "value": "bitbake",
    "text": "BitBake"
  },
  {
    "value": "blade",
    "text": "Blade"
  },
  {
    "value": "blitzbasic",
    "text": "BlitzBasic"
  },
  {
    "value": "blitzmax",
    "text": "BlitzMax"
  },
  {
    "value": "bluespec",
    "text": "Bluespec"
  },
  {
    "value": "boo",
    "text": "Boo"
  },
  {
    "value": "brainfuck",
    "text": "Brainfuck"
  },
  {
    "value": "brightscript",
    "text": "Brightscript"
  },
  {
    "value": "bro",
    "text": "Bro"
  },
  {
    "value": "c",
    "text": "C"
  },
  {
    "value": "c%23",
    "text": "C#"
  },
  {
    "value": "c%2B%2B",
    "text": "C++"
  },
  {
    "value": "c-objdump",
    "text": "C-ObjDump"
  },
  {
    "value": "c2hs-haskell",
    "text": "C2hs Haskell"
  },
  {
    "value": "cap'n-proto",
    "text": "Cap'n Proto"
  },
  {
    "value": "cartocss",
    "text": "CartoCSS"
  },
  {
    "value": "ceylon",
    "text": "Ceylon"
  },
  {
    "value": "chapel",
    "text": "Chapel"
  },
  {
    "value": "charity",
    "text": "Charity"
  },
  {
    "value": "chuck",
    "text": "ChucK"
  },
  {
    "value": "cirru",
    "text": "Cirru"
  },
  {
    "value": "clarion",
    "text": "Clarion"
  },
  {
    "value": "clean",
    "text": "Clean"
  },
  {
    "value": "click",
    "text": "Click"
  },
  {
    "value": "clips",
    "text": "CLIPS"
  },
  {
    "value": "clojure",
    "text": "Clojure"
  },
  {
    "value": "closure-templates",
    "text": "Closure Templates"
  },
  {
    "value": "cmake",
    "text": "CMake"
  },
  {
    "value": "cobol",
    "text": "COBOL"
  },
  {
    "value": "coffeescript",
    "text": "CoffeeScript"
  },
  {
    "value": "coldfusion",
    "text": "ColdFusion"
  },
  {
    "value": "coldfusion-cfc",
    "text": "ColdFusion CFC"
  },
  {
    "value": "collada",
    "text": "COLLADA"
  },
  {
    "value": "common-lisp",
    "text": "Common Lisp"
  },
  {
    "value": "common-workflow-language",
    "text": "Common Workflow Language"
  },
  {
    "value": "component-pascal",
    "text": "Component Pascal"
  },
  {
    "value": "cool",
    "text": "Cool"
  },
  {
    "value": "coq",
    "text": "Coq"
  },
  {
    "value": "cpp-objdump",
    "text": "Cpp-ObjDump"
  },
  {
    "value": "creole",
    "text": "Creole"
  },
  {
    "value": "crystal",
    "text": "Crystal"
  },
  {
    "value": "cson",
    "text": "CSON"
  },
  {
    "value": "csound",
    "text": "Csound"
  },
  {
    "value": "csound-document",
    "text": "Csound Document"
  },
  {
    "value": "csound-score",
    "text": "Csound Score"
  },
  {
    "value": "css",
    "text": "CSS"
  },
  {
    "value": "csv",
    "text": "CSV"
  },
  {
    "value": "cuda",
    "text": "Cuda"
  },
  {
    "value": "cweb",
    "text": "CWeb"
  },
  {
    "value": "cycript",
    "text": "Cycript"
  },
  {
    "value": "cython",
    "text": "Cython"
  },
  {
    "value": "d",
    "text": "D"
  },
  {
    "value": "d-objdump",
    "text": "D-ObjDump"
  },
  {
    "value": "darcs-patch",
    "text": "Darcs Patch"
  },
  {
    "value": "dart",
    "text": "Dart"
  },
  {
    "value": "dataweave",
    "text": "DataWeave"
  },
  {
    "value": "desktop",
    "text": "desktop"
  },
  {
    "value": "diff",
    "text": "Diff"
  },
  {
    "value": "digital-command-language",
    "text": "DIGITAL Command Language"
  },
  {
    "value": "dm",
    "text": "DM"
  },
  {
    "value": "dns-zone",
    "text": "DNS Zone"
  },
  {
    "value": "dockerfile",
    "text": "Dockerfile"
  },
  {
    "value": "dogescript",
    "text": "Dogescript"
  },
  {
    "value": "dtrace",
    "text": "DTrace"
  },
  {
    "value": "dylan",
    "text": "Dylan"
  },
  {
    "value": "e",
    "text": "E"
  },
  {
    "value": "eagle",
    "text": "Eagle"
  },
  {
    "value": "easybuild",
    "text": "Easybuild"
  },
  {
    "value": "ebnf",
    "text": "EBNF"
  },
  {
    "value": "ec",
    "text": "eC"
  },
  {
    "value": "ecere-projects",
    "text": "Ecere Projects"
  },
  {
    "value": "ecl",
    "text": "ECL"
  },
  {
    "value": "eclipse",
    "text": "ECLiPSe"
  },
  {
    "value": "edje-data-collection",
    "text": "Edje Data Collection"
  },
  {
    "value": "edn",
    "text": "edn"
  },
  {
    "value": "eiffel",
    "text": "Eiffel"
  },
  {
    "value": "ejs",
    "text": "EJS"
  },
  {
    "value": "elixir",
    "text": "Elixir"
  },
  {
    "value": "elm",
    "text": "Elm"
  },
  {
    "value": "emacs-lisp",
    "text": "Emacs Lisp"
  },
  {
    "value": "emberscript",
    "text": "EmberScript"
  },
  {
    "value": "eq",
    "text": "EQ"
  },
  {
    "value": "erlang",
    "text": "Erlang"
  },
  {
    "value": "f%23",
    "text": "F#"
  },
  {
    "value": "factor",
    "text": "Factor"
  },
  {
    "value": "fancy",
    "text": "Fancy"
  },
  {
    "value": "fantom",
    "text": "Fantom"
  },
  {
    "value": "filebench-wml",
    "text": "Filebench WML"
  },
  {
    "value": "filterscript",
    "text": "Filterscript"
  },
  {
    "value": "fish",
    "text": "fish"
  },
  {
    "value": "flux",
    "text": "FLUX"
  },
  {
    "value": "formatted",
    "text": "Formatted"
  },
  {
    "value": "forth",
    "text": "Forth"
  },
  {
    "value": "fortran",
    "text": "Fortran"
  },
  {
    "value": "freemarker",
    "text": "FreeMarker"
  },
  {
    "value": "frege",
    "text": "Frege"
  },
  {
    "value": "g-code",
    "text": "G-code"
  },
  {
    "value": "game-maker-language",
    "text": "Game Maker Language"
  },
  {
    "value": "gams",
    "text": "GAMS"
  },
  {
    "value": "gap",
    "text": "GAP"
  },
  {
    "value": "gcc-machine-description",
    "text": "GCC Machine Description"
  },
  {
    "value": "gdb",
    "text": "GDB"
  },
  {
    "value": "gdscript",
    "text": "GDScript"
  },
  {
    "value": "genie",
    "text": "Genie"
  },
  {
    "value": "genshi",
    "text": "Genshi"
  },
  {
    "value": "gentoo-ebuild",
    "text": "Gentoo Ebuild"
  },
  {
    "value": "gentoo-eclass",
    "text": "Gentoo Eclass"
  },
  {
    "value": "gerber-image",
    "text": "Gerber Image"
  },
  {
    "value": "gettext-catalog",
    "text": "Gettext Catalog"
  },
  {
    "value": "gherkin",
    "text": "Gherkin"
  },
  {
    "value": "glsl",
    "text": "GLSL"
  },
  {
    "value": "glyph",
    "text": "Glyph"
  },
  {
    "value": "gn",
    "text": "GN"
  },
  {
    "value": "gnuplot",
    "text": "Gnuplot"
  },
  {
    "value": "go",
    "text": "Go"
  },
  {
    "value": "golo",
    "text": "Golo"
  },
  {
    "value": "gosu",
    "text": "Gosu"
  },
  {
    "value": "grace",
    "text": "Grace"
  },
  {
    "value": "gradle",
    "text": "Gradle"
  },
  {
    "value": "grammatical-framework",
    "text": "Grammatical Framework"
  },
  {
    "value": "graph-modeling-language",
    "text": "Graph Modeling Language"
  },
  {
    "value": "graphql",
    "text": "GraphQL"
  },
  {
    "value": "graphviz-(dot)",
    "text": "Graphviz (DOT)"
  },
  {
    "value": "groovy",
    "text": "Groovy"
  },
  {
    "value": "groovy-server-pages",
    "text": "Groovy Server Pages"
  },
  {
    "value": "hack",
    "text": "Hack"
  },
  {
    "value": "haml",
    "text": "Haml"
  },
  {
    "value": "handlebars",
    "text": "Handlebars"
  },
  {
    "value": "harbour",
    "text": "Harbour"
  },
  {
    "value": "haskell",
    "text": "Haskell"
  },
  {
    "value": "haxe",
    "text": "Haxe"
  },
  {
    "value": "hcl",
    "text": "HCL"
  },
  {
    "value": "hlsl",
    "text": "HLSL"
  },
  {
    "value": "html",
    "text": "HTML"
  },
  {
    "value": "html%2Bdjango",
    "text": "HTML+Django"
  },
  {
    "value": "html%2Becr",
    "text": "HTML+ECR"
  },
  {
    "value": "html%2Beex",
    "text": "HTML+EEX"
  },
  {
    "value": "html%2Berb",
    "text": "HTML+ERB"
  },
  {
    "value": "html%2Bphp",
    "text": "HTML+PHP"
  },
  {
    "value": "http",
    "text": "HTTP"
  },
  {
    "value": "hy",
    "text": "Hy"
  },
  {
    "value": "hyphy",
    "text": "HyPhy"
  },
  {
    "value": "idl",
    "text": "IDL"
  },
  {
    "value": "idris",
    "text": "Idris"
  },
  {
    "value": "igor-pro",
    "text": "IGOR Pro"
  },
  {
    "value": "inform-7",
    "text": "Inform 7"
  },
  {
    "value": "ini",
    "text": "INI"
  },
  {
    "value": "inno-setup",
    "text": "Inno Setup"
  },
  {
    "value": "io",
    "text": "Io"
  },
  {
    "value": "ioke",
    "text": "Ioke"
  },
  {
    "value": "irc-log",
    "text": "IRC log"
  },
  {
    "value": "isabelle",
    "text": "Isabelle"
  },
  {
    "value": "isabelle-root",
    "text": "Isabelle ROOT"
  },
  {
    "value": "j",
    "text": "J"
  },
  {
    "value": "jasmin",
    "text": "Jasmin"
  },
  {
    "value": "java",
    "text": "Java"
  },
  {
    "value": "java-server-pages",
    "text": "Java Server Pages"
  },
  {
    "value": "javascript",
    "text": "JavaScript"
  },
  {
    "value": "jflex",
    "text": "JFlex"
  },
  {
    "value": "jison",
    "text": "Jison"
  },
  {
    "value": "jison-lex",
    "text": "Jison Lex"
  },
  {
    "value": "jolie",
    "text": "Jolie"
  },
  {
    "value": "json",
    "text": "JSON"
  },
  {
    "value": "json5",
    "text": "JSON5"
  },
  {
    "value": "jsoniq",
    "text": "JSONiq"
  },
  {
    "value": "jsonld",
    "text": "JSONLD"
  },
  {
    "value": "jsx",
    "text": "JSX"
  },
  {
    "value": "julia",
    "text": "Julia"
  },
  {
    "value": "jupyter-notebook",
    "text": "Jupyter Notebook"
  },
  {
    "value": "kicad-layout",
    "text": "KiCad Layout"
  },
  {
    "value": "kicad-legacy-layout",
    "text": "KiCad Legacy Layout"
  },
  {
    "value": "kicad-schematic",
    "text": "KiCad Schematic"
  },
  {
    "value": "kit",
    "text": "Kit"
  },
  {
    "value": "kotlin",
    "text": "Kotlin"
  },
  {
    "value": "krl",
    "text": "KRL"
  },
  {
    "value": "labview",
    "text": "LabVIEW"
  },
  {
    "value": "lasso",
    "text": "Lasso"
  },
  {
    "value": "latte",
    "text": "Latte"
  },
  {
    "value": "lean",
    "text": "Lean"
  },
  {
    "value": "less",
    "text": "Less"
  },
  {
    "value": "lex",
    "text": "Lex"
  },
  {
    "value": "lfe",
    "text": "LFE"
  },
  {
    "value": "lilypond",
    "text": "LilyPond"
  },
  {
    "value": "limbo",
    "text": "Limbo"
  },
  {
    "value": "linker-script",
    "text": "Linker Script"
  },
  {
    "value": "linux-kernel-module",
    "text": "Linux Kernel Module"
  },
  {
    "value": "liquid",
    "text": "Liquid"
  },
  {
    "value": "literate-agda",
    "text": "Literate Agda"
  },
  {
    "value": "literate-coffeescript",
    "text": "Literate CoffeeScript"
  },
  {
    "value": "literate-haskell",
    "text": "Literate Haskell"
  },
  {
    "value": "livescript",
    "text": "LiveScript"
  },
  {
    "value": "llvm",
    "text": "LLVM"
  },
  {
    "value": "logos",
    "text": "Logos"
  },
  {
    "value": "logtalk",
    "text": "Logtalk"
  },
  {
    "value": "lolcode",
    "text": "LOLCODE"
  },
  {
    "value": "lookml",
    "text": "LookML"
  },
  {
    "value": "loomscript",
    "text": "LoomScript"
  },
  {
    "value": "lsl",
    "text": "LSL"
  },
  {
    "value": "lua",
    "text": "Lua"
  },
  {
    "value": "m",
    "text": "M"
  },
  {
    "value": "m4",
    "text": "M4"
  },
  {
    "value": "m4sugar",
    "text": "M4Sugar"
  },
  {
    "value": "makefile",
    "text": "Makefile"
  },
  {
    "value": "mako",
    "text": "Mako"
  },
  {
    "value": "markdown",
    "text": "Markdown"
  },
  {
    "value": "marko",
    "text": "Marko"
  },
  {
    "value": "mask",
    "text": "Mask"
  },
  {
    "value": "mathematica",
    "text": "Mathematica"
  },
  {
    "value": "matlab",
    "text": "Matlab"
  },
  {
    "value": "maven-pom",
    "text": "Maven POM"
  },
  {
    "value": "max",
    "text": "Max"
  },
  {
    "value": "maxscript",
    "text": "MAXScript"
  },
  {
    "value": "mediawiki",
    "text": "MediaWiki"
  },
  {
    "value": "mercury",
    "text": "Mercury"
  },
  {
    "value": "meson",
    "text": "Meson"
  },
  {
    "value": "metal",
    "text": "Metal"
  },
  {
    "value": "minid",
    "text": "MiniD"
  },
  {
    "value": "mirah",
    "text": "Mirah"
  },
  {
    "value": "modelica",
    "text": "Modelica"
  },
  {
    "value": "modula-2",
    "text": "Modula-2"
  },
  {
    "value": "module-management-system",
    "text": "Module Management System"
  },
  {
    "value": "monkey",
    "text": "Monkey"
  },
  {
    "value": "moocode",
    "text": "Moocode"
  },
  {
    "value": "moonscript",
    "text": "MoonScript"
  },
  {
    "value": "mql4",
    "text": "MQL4"
  },
  {
    "value": "mql5",
    "text": "MQL5"
  },
  {
    "value": "mtml",
    "text": "MTML"
  },
  {
    "value": "muf",
    "text": "MUF"
  },
  {
    "value": "mupad",
    "text": "mupad"
  },
  {
    "value": "myghty",
    "text": "Myghty"
  },
  {
    "value": "ncl",
    "text": "NCL"
  },
  {
    "value": "nearley",
    "text": "Nearley"
  },
  {
    "value": "nemerle",
    "text": "Nemerle"
  },
  {
    "value": "nesc",
    "text": "nesC"
  },
  {
    "value": "netlinx",
    "text": "NetLinx"
  },
  {
    "value": "netlinx%2Berb",
    "text": "NetLinx+ERB"
  },
  {
    "value": "netlogo",
    "text": "NetLogo"
  },
  {
    "value": "newlisp",
    "text": "NewLisp"
  },
  {
    "value": "nextflow",
    "text": "Nextflow"
  },
  {
    "value": "nginx",
    "text": "Nginx"
  },
  {
    "value": "nim",
    "text": "Nim"
  },
  {
    "value": "ninja",
    "text": "Ninja"
  },
  {
    "value": "nit",
    "text": "Nit"
  },
  {
    "value": "nix",
    "text": "Nix"
  },
  {
    "value": "nl",
    "text": "NL"
  },
  {
    "value": "nsis",
    "text": "NSIS"
  },
  {
    "value": "nu",
    "text": "Nu"
  },
  {
    "value": "numpy",
    "text": "NumPy"
  },
  {
    "value": "objdump",
    "text": "ObjDump"
  },
  {
    "value": "objective-c",
    "text": "Objective-C"
  },
  {
    "value": "objective-c%2B%2B",
    "text": "Objective-C++"
  },
  {
    "value": "objective-j",
    "text": "Objective-J"
  },
  {
    "value": "ocaml",
    "text": "OCaml"
  },
  {
    "value": "omgrofl",
    "text": "Omgrofl"
  },
  {
    "value": "ooc",
    "text": "ooc"
  },
  {
    "value": "opa",
    "text": "Opa"
  },
  {
    "value": "opal",
    "text": "Opal"
  },
  {
    "value": "opencl",
    "text": "OpenCL"
  },
  {
    "value": "openedge-abl",
    "text": "OpenEdge ABL"
  },
  {
    "value": "openrc-runscript",
    "text": "OpenRC runscript"
  },
  {
    "value": "openscad",
    "text": "OpenSCAD"
  },
  {
    "value": "opentype-feature-file",
    "text": "OpenType Feature File"
  },
  {
    "value": "org",
    "text": "Org"
  },
  {
    "value": "ox",
    "text": "Ox"
  },
  {
    "value": "oxygene",
    "text": "Oxygene"
  },
  {
    "value": "oz",
    "text": "Oz"
  },
  {
    "value": "p4",
    "text": "P4"
  },
  {
    "value": "pan",
    "text": "Pan"
  },
  {
    "value": "papyrus",
    "text": "Papyrus"
  },
  {
    "value": "parrot",
    "text": "Parrot"
  },
  {
    "value": "parrot-assembly",
    "text": "Parrot Assembly"
  },
  {
    "value": "parrot-internal-representation",
    "text": "Parrot Internal Representation"
  },
  {
    "value": "pascal",
    "text": "Pascal"
  },
  {
    "value": "pawn",
    "text": "PAWN"
  },
  {
    "value": "pep8",
    "text": "Pep8"
  },
  {
    "value": "perl",
    "text": "Perl"
  },
  {
    "value": "perl-6",
    "text": "Perl 6"
  },
  {
    "value": "php",
    "text": "PHP"
  },
  {
    "value": "pic",
    "text": "Pic"
  },
  {
    "value": "pickle",
    "text": "Pickle"
  },
  {
    "value": "picolisp",
    "text": "PicoLisp"
  },
  {
    "value": "piglatin",
    "text": "PigLatin"
  },
  {
    "value": "pike",
    "text": "Pike"
  },
  {
    "value": "plpgsql",
    "text": "PLpgSQL"
  },
  {
    "value": "plsql",
    "text": "PLSQL"
  },
  {
    "value": "pod",
    "text": "Pod"
  },
  {
    "value": "pogoscript",
    "text": "PogoScript"
  },
  {
    "value": "pony",
    "text": "Pony"
  },
  {
    "value": "postcss",
    "text": "PostCSS"
  },
  {
    "value": "postscript",
    "text": "PostScript"
  },
  {
    "value": "pov-ray-sdl",
    "text": "POV-Ray SDL"
  },
  {
    "value": "powerbuilder",
    "text": "PowerBuilder"
  },
  {
    "value": "powershell",
    "text": "PowerShell"
  },
  {
    "value": "processing",
    "text": "Processing"
  },
  {
    "value": "prolog",
    "text": "Prolog"
  },
  {
    "value": "propeller-spin",
    "text": "Propeller Spin"
  },
  {
    "value": "protocol-buffer",
    "text": "Protocol Buffer"
  },
  {
    "value": "public-key",
    "text": "Public Key"
  },
  {
    "value": "pug",
    "text": "Pug"
  },
  {
    "value": "puppet",
    "text": "Puppet"
  },
  {
    "value": "pure-data",
    "text": "Pure Data"
  },
  {
    "value": "purebasic",
    "text": "PureBasic"
  },
  {
    "value": "purescript",
    "text": "PureScript"
  },
  {
    "value": "python",
    "text": "Python"
  },
  {
    "value": "python-console",
    "text": "Python console"
  },
  {
    "value": "python-traceback",
    "text": "Python traceback"
  },
  {
    "value": "qmake",
    "text": "QMake"
  },
  {
    "value": "qml",
    "text": "QML"
  },
  {
    "value": "r",
    "text": "R"
  },
  {
    "value": "racket",
    "text": "Racket"
  },
  {
    "value": "ragel",
    "text": "Ragel"
  },
  {
    "value": "raml",
    "text": "RAML"
  },
  {
    "value": "rascal",
    "text": "Rascal"
  },
  {
    "value": "raw-token-data",
    "text": "Raw token data"
  },
  {
    "value": "rdoc",
    "text": "RDoc"
  },
  {
    "value": "realbasic",
    "text": "REALbasic"
  },
  {
    "value": "reason",
    "text": "Reason"
  },
  {
    "value": "rebol",
    "text": "Rebol"
  },
  {
    "value": "red",
    "text": "Red"
  },
  {
    "value": "redcode",
    "text": "Redcode"
  },
  {
    "value": "regular-expression",
    "text": "Regular Expression"
  },
  {
    "value": "ren'py",
    "text": "Ren'Py"
  },
  {
    "value": "renderscript",
    "text": "RenderScript"
  },
  {
    "value": "restructuredtext",
    "text": "reStructuredText"
  },
  {
    "value": "rexx",
    "text": "REXX"
  },
  {
    "value": "rhtml",
    "text": "RHTML"
  },
  {
    "value": "ring",
    "text": "Ring"
  },
  {
    "value": "rmarkdown",
    "text": "RMarkdown"
  },
  {
    "value": "robotframework",
    "text": "RobotFramework"
  },
  {
    "value": "roff",
    "text": "Roff"
  },
  {
    "value": "rouge",
    "text": "Rouge"
  },
  {
    "value": "rpc",
    "text": "RPC"
  },
  {
    "value": "rpm-spec",
    "text": "RPM Spec"
  },
  {
    "value": "ruby",
    "text": "Ruby"
  },
  {
    "value": "runoff",
    "text": "RUNOFF"
  },
  {
    "value": "rust",
    "text": "Rust"
  },
  {
    "value": "sage",
    "text": "Sage"
  },
  {
    "value": "saltstack",
    "text": "SaltStack"
  },
  {
    "value": "sas",
    "text": "SAS"
  },
  {
    "value": "sass",
    "text": "Sass"
  },
  {
    "value": "scala",
    "text": "Scala"
  },
  {
    "value": "scaml",
    "text": "Scaml"
  },
  {
    "value": "scheme",
    "text": "Scheme"
  },
  {
    "value": "scilab",
    "text": "Scilab"
  },
  {
    "value": "scss",
    "text": "SCSS"
  },
  {
    "value": "sed",
    "text": "sed"
  },
  {
    "value": "self",
    "text": "Self"
  },
  {
    "value": "shaderlab",
    "text": "ShaderLab"
  },
  {
    "value": "shell",
    "text": "Shell"
  },
  {
    "value": "shellsession",
    "text": "ShellSession"
  },
  {
    "value": "shen",
    "text": "Shen"
  },
  {
    "value": "slash",
    "text": "Slash"
  },
  {
    "value": "slim",
    "text": "Slim"
  },
  {
    "value": "smali",
    "text": "Smali"
  },
  {
    "value": "smalltalk",
    "text": "Smalltalk"
  },
  {
    "value": "smarty",
    "text": "Smarty"
  },
  {
    "value": "smt",
    "text": "SMT"
  },
  {
    "value": "solidity",
    "text": "Solidity"
  },
  {
    "value": "sourcepawn",
    "text": "SourcePawn"
  },
  {
    "value": "sparql",
    "text": "SPARQL"
  },
  {
    "value": "spline-font-database",
    "text": "Spline Font Database"
  },
  {
    "value": "sqf",
    "text": "SQF"
  },
  {
    "value": "sql",
    "text": "SQL"
  },
  {
    "value": "sqlpl",
    "text": "SQLPL"
  },
  {
    "value": "squirrel",
    "text": "Squirrel"
  },
  {
    "value": "srecode-template",
    "text": "SRecode Template"
  },
  {
    "value": "stan",
    "text": "Stan"
  },
  {
    "value": "standard-ml",
    "text": "Standard ML"
  },
  {
    "value": "stata",
    "text": "Stata"
  },
  {
    "value": "ston",
    "text": "STON"
  },
  {
    "value": "stylus",
    "text": "Stylus"
  },
  {
    "value": "sublime-text-config",
    "text": "Sublime Text Config"
  },
  {
    "value": "subrip-text",
    "text": "SubRip Text"
  },
  {
    "value": "sugarss",
    "text": "SugarSS"
  },
  {
    "value": "supercollider",
    "text": "SuperCollider"
  },
  {
    "value": "svg",
    "text": "SVG"
  },
  {
    "value": "swift",
    "text": "Swift"
  },
  {
    "value": "systemverilog",
    "text": "SystemVerilog"
  },
  {
    "value": "tcl",
    "text": "Tcl"
  },
  {
    "value": "tcsh",
    "text": "Tcsh"
  },
  {
    "value": "tea",
    "text": "Tea"
  },
  {
    "value": "terra",
    "text": "Terra"
  },
  {
    "value": "tex",
    "text": "TeX"
  },
  {
    "value": "text",
    "text": "Text"
  },
  {
    "value": "textile",
    "text": "Textile"
  },
  {
    "value": "thrift",
    "text": "Thrift"
  },
  {
    "value": "ti-program",
    "text": "TI Program"
  },
  {
    "value": "tla",
    "text": "TLA"
  },
  {
    "value": "toml",
    "text": "TOML"
  },
  {
    "value": "turing",
    "text": "Turing"
  },
  {
    "value": "turtle",
    "text": "Turtle"
  },
  {
    "value": "twig",
    "text": "Twig"
  },
  {
    "value": "txl",
    "text": "TXL"
  },
  {
    "value": "type-language",
    "text": "Type Language"
  },
  {
    "value": "typescript",
    "text": "TypeScript"
  },
  {
    "value": "unified-parallel-c",
    "text": "Unified Parallel C"
  },
  {
    "value": "unity3d-asset",
    "text": "Unity3D Asset"
  },
  {
    "value": "unix-assembly",
    "text": "Unix Assembly"
  },
  {
    "value": "uno",
    "text": "Uno"
  },
  {
    "value": "unrealscript",
    "text": "UnrealScript"
  },
  {
    "value": "urweb",
    "text": "UrWeb"
  },
  {
    "value": "vala",
    "text": "Vala"
  },
  {
    "value": "vcl",
    "text": "VCL"
  },
  {
    "value": "verilog",
    "text": "Verilog"
  },
  {
    "value": "vhdl",
    "text": "VHDL"
  },
  {
    "value": "vim-script",
    "text": "Vim script"
  },
  {
    "value": "visual-basic",
    "text": "Visual Basic"
  },
  {
    "value": "volt",
    "text": "Volt"
  },
  {
    "value": "vue",
    "text": "Vue"
  },
  {
    "value": "wavefront-material",
    "text": "Wavefront Material"
  },
  {
    "value": "wavefront-object",
    "text": "Wavefront Object"
  },
  {
    "value": "wdl",
    "text": "wdl"
  },
  {
    "value": "web-ontology-language",
    "text": "Web Ontology Language"
  },
  {
    "value": "webassembly",
    "text": "WebAssembly"
  },
  {
    "value": "webidl",
    "text": "WebIDL"
  },
  {
    "value": "wisp",
    "text": "wisp"
  },
  {
    "value": "world-of-warcraft-addon-data",
    "text": "World of Warcraft Addon Data"
  },
  {
    "value": "x10",
    "text": "X10"
  },
  {
    "value": "xbase",
    "text": "xBase"
  },
  {
    "value": "xc",
    "text": "XC"
  },
  {
    "value": "xcompose",
    "text": "XCompose"
  },
  {
    "value": "xml",
    "text": "XML"
  },
  {
    "value": "xojo",
    "text": "Xojo"
  },
  {
    "value": "xpages",
    "text": "XPages"
  },
  {
    "value": "xpm",
    "text": "XPM"
  },
  {
    "value": "xproc",
    "text": "XProc"
  },
  {
    "value": "xquery",
    "text": "XQuery"
  },
  {
    "value": "xs",
    "text": "XS"
  },
  {
    "value": "xslt",
    "text": "XSLT"
  },
  {
    "value": "xtend",
    "text": "Xtend"
  },
  {
    "value": "yacc",
    "text": "Yacc"
  },
  {
    "value": "yaml",
    "text": "YAML"
  },
  {
    "value": "yang",
    "text": "YANG"
  },
  {
    "value": "yara",
    "text": "YARA"
  },
  {
    "value": "zephir",
    "text": "Zephir"
  },
  {
    "value": "zimpl",
    "text": "Zimpl"
  }
]

module.exports = languages