const spoken_languages = [
  {
    "value": "",
    "text": "交流语言"
  },
    {
      "value": "ab",
      "text": "Abkhazian"
    },
    {
      "value": "aa",
      "text": "Afar"
    },
    {
      "value": "af",
      "text": "Afrikaans"
    },
    {
      "value": "ak",
      "text": "Akan"
    },
    {
      "value": "sq",
      "text": "Albanian"
    },
    {
      "value": "am",
      "text": "Amharic"
    },
    {
      "value": "ar",
      "text": "Arabic"
    },
    {
      "value": "an",
      "text": "Aragonese"
    },
    {
      "value": "hy",
      "text": "Armenian"
    },
    {
      "value": "as",
      "text": "Assamese"
    },
    {
      "value": "av",
      "text": "Avaric"
    },
    {
      "value": "ae",
      "text": "Avestan"
    },
    {
      "value": "ay",
      "text": "Aymara"
    },
    {
      "value": "az",
      "text": "Azerbaijani"
    },
    {
      "value": "bm",
      "text": "Bambara"
    },
    {
      "value": "ba",
      "text": "Bashkir"
    },
    {
      "value": "eu",
      "text": "Basque"
    },
    {
      "value": "be",
      "text": "Belarusian"
    },
    {
      "value": "bn",
      "text": "Bengali"
    },
    {
      "value": "bh",
      "text": "Bihari languages"
    },
    {
      "value": "bi",
      "text": "Bislama"
    },
    {
      "value": "bs",
      "text": "Bosnian"
    },
    {
      "value": "br",
      "text": "Breton"
    },
    {
      "value": "bg",
      "text": "Bulgarian"
    },
    {
      "value": "my",
      "text": "Burmese"
    },
    {
      "value": "ca",
      "text": "Catalan, Valencian"
    },
    {
      "value": "ch",
      "text": "Chamorro"
    },
    {
      "value": "ce",
      "text": "Chechen"
    },
    {
      "value": "ny",
      "text": "Chichewa, Chewa, Nyanja"
    },
    {
      "value": "zh",
      "text": "Chinese"
    },
    {
      "value": "cv",
      "text": "Chuvash"
    },
    {
      "value": "kw",
      "text": "Cornish"
    },
    {
      "value": "co",
      "text": "Corsican"
    },
    {
      "value": "cr",
      "text": "Cree"
    },
    {
      "value": "hr",
      "text": "Croatian"
    },
    {
      "value": "cs",
      "text": "Czech"
    },
    {
      "value": "da",
      "text": "Danish"
    },
    {
      "value": "dv",
      "text": "Divehi, Dhivehi, Maldivian"
    },
    {
      "value": "nl",
      "text": "Dutch, Flemish"
    },
    {
      "value": "dz",
      "text": "Dzongkha"
    },
    {
      "value": "en",
      "text": "English"
    },
    {
      "value": "eo",
      "text": "Esperanto"
    },
    {
      "value": "et",
      "text": "Estonian"
    },
    {
      "value": "ee",
      "text": "Ewe"
    },
    {
      "value": "fo",
      "text": "Faroese"
    },
    {
      "value": "fj",
      "text": "Fijian"
    },
    {
      "value": "fi",
      "text": "Finnish"
    },
    {
      "value": "fr",
      "text": "French"
    },
    {
      "value": "ff",
      "text": "Fulah"
    },
    {
      "value": "gl",
      "text": "Galician"
    },
    {
      "value": "ka",
      "text": "Georgian"
    },
    {
      "value": "de",
      "text": "German"
    },
    {
      "value": "el",
      "text": "Greek, Modern"
    },
    {
      "value": "gn",
      "text": "Guarani"
    },
    {
      "value": "gu",
      "text": "Gujarati"
    },
    {
      "value": "ht",
      "text": "Haitian, Haitian Creole"
    },
    {
      "value": "ha",
      "text": "Hausa"
    },
    {
      "value": "he",
      "text": "Hebrew"
    },
    {
      "value": "hz",
      "text": "Herero"
    },
    {
      "value": "hi",
      "text": "Hindi"
    },
    {
      "value": "ho",
      "text": "Hiri Motu"
    },
    {
      "value": "hu",
      "text": "Hungarian"
    },
    {
      "value": "ia",
      "text": "Interlingua (International Auxil..."
    },
    {
      "value": "id",
      "text": "Indonesian"
    },
    {
      "value": "ie",
      "text": "Interlingue, Occidental"
    },
    {
      "value": "ga",
      "text": "Irish"
    },
    {
      "value": "ig",
      "text": "Igbo"
    },
    {
      "value": "ik",
      "text": "Inupiaq"
    },
    {
      "value": "io",
      "text": "Ido"
    },
    {
      "value": "is",
      "text": "Icelandic"
    },
    {
      "value": "it",
      "text": "Italian"
    },
    {
      "value": "iu",
      "text": "Inuktitut"
    },
    {
      "value": "ja",
      "text": "Japanese"
    },
    {
      "value": "jv",
      "text": "Javanese"
    },
    {
      "value": "kl",
      "text": "Kalaallisut, Greenlandic"
    },
    {
      "value": "kn",
      "text": "Kannada"
    },
    {
      "value": "kr",
      "text": "Kanuri"
    },
    {
      "value": "ks",
      "text": "Kashmiri"
    },
    {
      "value": "kk",
      "text": "Kazakh"
    },
    {
      "value": "km",
      "text": "Central Khmer"
    },
    {
      "value": "ki",
      "text": "Kikuyu, Gikuyu"
    },
    {
      "value": "rw",
      "text": "Kinyarwanda"
    },
    {
      "value": "ky",
      "text": "Kirghiz, Kyrgyz"
    },
    {
      "value": "kv",
      "text": "Komi"
    },
    {
      "value": "kg",
      "text": "Kongo"
    },
    {
      "value": "ko",
      "text": "Korean"
    },
    {
      "value": "ku",
      "text": "Kurdish"
    },
    {
      "value": "kj",
      "text": "Kuanyama, Kwanyama"
    },
    {
      "value": "la",
      "text": "Latin"
    },
    {
      "value": "lb",
      "text": "Luxembourgish, Letzeburgesch"
    },
    {
      "value": "lg",
      "text": "Ganda"
    },
    {
      "value": "li",
      "text": "Limburgan, Limburger, Limburgish"
    },
    {
      "value": "ln",
      "text": "Lingala"
    },
    {
      "value": "lo",
      "text": "Lao"
    },
    {
      "value": "lt",
      "text": "Lithuanian"
    },
    {
      "value": "lu",
      "text": "Luba-Katanga"
    },
    {
      "value": "lv",
      "text": "Latvian"
    },
    {
      "value": "gv",
      "text": "Manx"
    },
    {
      "value": "mk",
      "text": "Macedonian"
    },
    {
      "value": "mg",
      "text": "Malagasy"
    },
    {
      "value": "ms",
      "text": "Malay"
    },
    {
      "value": "ml",
      "text": "Malayalam"
    },
    {
      "value": "mt",
      "text": "Maltese"
    },
    {
      "value": "mi",
      "text": "Maori"
    },
    {
      "value": "mr",
      "text": "Marathi"
    },
    {
      "value": "mh",
      "text": "Marshallese"
    },
    {
      "value": "mn",
      "text": "Mongolian"
    },
    {
      "value": "na",
      "text": "Nauru"
    },
    {
      "value": "nv",
      "text": "Navajo, Navaho"
    },
    {
      "value": "nd",
      "text": "North Ndebele"
    },
    {
      "value": "ne",
      "text": "Nepali"
    },
    {
      "value": "ng",
      "text": "Ndonga"
    },
    {
      "value": "nb",
      "text": "Norwegian Bokmål"
    },
    {
      "value": "nn",
      "text": "Norwegian Nynorsk"
    },
    {
      "value": "no",
      "text": "Norwegian"
    },
    {
      "value": "ii",
      "text": "Sichuan Yi, Nuosu"
    },
    {
      "value": "nr",
      "text": "South Ndebele"
    },
    {
      "value": "oc",
      "text": "Occitan"
    },
    {
      "value": "oj",
      "text": "Ojibwa"
    },
    {
      "value": "cu",
      "text": "Church Slavic, Old Slavonic, Chu..."
    },
    {
      "value": "om",
      "text": "Oromo"
    },
    {
      "value": "or",
      "text": "Oriya"
    },
    {
      "value": "os",
      "text": "Ossetian, Ossetic"
    },
    {
      "value": "pa",
      "text": "Punjabi, Panjabi"
    },
    {
      "value": "pi",
      "text": "Pali"
    },
    {
      "value": "fa",
      "text": "Persian"
    },
    {
      "value": "pl",
      "text": "Polish"
    },
    {
      "value": "ps",
      "text": "Pashto, Pushto"
    },
    {
      "value": "pt",
      "text": "Portuguese"
    },
    {
      "value": "qu",
      "text": "Quechua"
    },
    {
      "value": "rm",
      "text": "Romansh"
    },
    {
      "value": "rn",
      "text": "Rundi"
    },
    {
      "value": "ro",
      "text": "Romanian, Moldavian, Moldovan"
    },
    {
      "value": "ru",
      "text": "Russian"
    },
    {
      "value": "sa",
      "text": "Sanskrit"
    },
    {
      "value": "sc",
      "text": "Sardinian"
    },
    {
      "value": "sd",
      "text": "Sindhi"
    },
    {
      "value": "se",
      "text": "Northern Sami"
    },
    {
      "value": "sm",
      "text": "Samoan"
    },
    {
      "value": "sg",
      "text": "Sango"
    },
    {
      "value": "sr",
      "text": "Serbian"
    },
    {
      "value": "gd",
      "text": "Gaelic, Scottish Gaelic"
    },
    {
      "value": "sn",
      "text": "Shona"
    },
    {
      "value": "si",
      "text": "Sinhala, Sinhalese"
    },
    {
      "value": "sk",
      "text": "Slovak"
    },
    {
      "value": "sl",
      "text": "Slovenian"
    },
    {
      "value": "so",
      "text": "Somali"
    },
    {
      "value": "st",
      "text": "Southern Sotho"
    },
    {
      "value": "es",
      "text": "Spanish, Castilian"
    },
    {
      "value": "su",
      "text": "Sundanese"
    },
    {
      "value": "sw",
      "text": "Swahili"
    },
    {
      "value": "ss",
      "text": "Swati"
    },
    {
      "value": "sv",
      "text": "Swedish"
    },
    {
      "value": "ta",
      "text": "Tamil"
    },
    {
      "value": "te",
      "text": "Telugu"
    },
    {
      "value": "tg",
      "text": "Tajik"
    },
    {
      "value": "th",
      "text": "Thai"
    },
    {
      "value": "ti",
      "text": "Tigrinya"
    },
    {
      "value": "bo",
      "text": "Tibetan"
    },
    {
      "value": "tk",
      "text": "Turkmen"
    },
    {
      "value": "tl",
      "text": "Tagalog"
    },
    {
      "value": "tn",
      "text": "Tswana"
    },
    {
      "value": "to",
      "text": "Tonga (Tonga Islands)"
    },
    {
      "value": "tr",
      "text": "Turkish"
    },
    {
      "value": "ts",
      "text": "Tsonga"
    },
    {
      "value": "tt",
      "text": "Tatar"
    },
    {
      "value": "tw",
      "text": "Twi"
    },
    {
      "value": "ty",
      "text": "Tahitian"
    },
    {
      "value": "ug",
      "text": "Uighur, Uyghur"
    },
    {
      "value": "uk",
      "text": "Ukrainian"
    },
    {
      "value": "ur",
      "text": "Urdu"
    },
    {
      "value": "uz",
      "text": "Uzbek"
    },
    {
      "value": "ve",
      "text": "Venda"
    },
    {
      "value": "vi",
      "text": "Viettextse"
    },
    {
      "value": "vo",
      "text": "Volapük"
    },
    {
      "value": "wa",
      "text": "Walloon"
    },
    {
      "value": "cy",
      "text": "Welsh"
    },
    {
      "value": "wo",
      "text": "Wolof"
    },
    {
      "value": "fy",
      "text": "Western Frisian"
    },
    {
      "value": "xh",
      "text": "Xhosa"
    },
    {
      "value": "yi",
      "text": "Yiddish"
    },
    {
      "value": "yo",
      "text": "Yoruba"
    },
    {
      "value": "za",
      "text": "Zhuang, Chuang"
    },
    {
      "value": "zu",
      "text": "Zulu"
    }
  ]

module.exports = spoken_languages