/*! @preserve
 * numeral.js
 * locales : 2.0.6
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('./numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    
(function() {
        numeral.register('locale', 'bg', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: { // I found these here http://www.unicode.org/cldr/charts/28/verify/numbers/bg.html
            thousand: 'Ñ…Ð¸Ð»',
            million: 'Ð¼Ð»Ð½',
            billion: 'Ð¼Ð»Ñ€Ð´',
            trillion: 'Ñ‚Ñ€Ð»Ð½'
        },
        ordinal: function (number) {
            // google translate suggests:
            // 1st=1-Ð²Ð¸; 2nd=2-Ñ€Ð¸; 7th=7-Ð¼Ð¸;
            // 8th=8-Ð¼Ð¸ and many others end with -Ñ‚Ð¸
            // for example 3rd=3-Ñ‚Ð¸
            // However since I've seen suggestions that in
            // Bulgarian the ordinal can be taken in
            // different forms (masculine, feminine, neuter)
            // I've opted to wimp out on commiting that to code
            return '';
        },
        currency: {
            symbol: 'Ð»Ð²'
        }
    });
})();


(function() {
    
    numeral.register('locale', 'chs', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'åƒ',
            million: 'ç™¾ä¸‡',
            billion: 'åäº¿',
            trillion: 'å…†'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'Â¥'
        }
    });
})();


(function() {
        numeral.register('locale', 'cs', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'KÄ'
        }
    });
})();


(function() {
        numeral.register('locale', 'da-dk', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'DKK'
        }
    });
})();


(function() {
        numeral.register('locale', 'de-ch', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'CHF'
        }
    });
})();


(function() {
        numeral.register('locale', 'de', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'en-au', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });
})();


(function() {
        numeral.register('locale', 'en-gb', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: 'Â£'
        }
    });
})();


(function() {
        numeral.register('locale', 'en-za', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: 'R'
        }
    });
})();


(function() {
        numeral.register('locale', 'es-es', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                    (b === 7 || b === 0) ? 'mo' :
                        (b === 8) ? 'vo' :
                            (b === 9) ? 'no' : 'to';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'es', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                (b === 7 || b === 0) ? 'mo' :
		(b === 8) ? 'vo' :
		(b === 9) ? 'no' : 'to';
        },
        currency: {
            symbol: '$'
        }
    });
})();


(function() {
        numeral.register('locale', 'et', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tuh',
            million: ' mln',
            billion: ' mld',
            trillion: ' trl'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'fi', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'fr-ca', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: '$'
        }
    });
})();


(function() {
        numeral.register('locale', 'fr-ch', {
        delimiters: {
            thousands: '\'',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: 'CHF'
        }
    });
})();


(function() {
        numeral.register('locale', 'fr', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'hu', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'E',  // ezer
            million: 'M',   // milliÃ³
            billion: 'Mrd', // milliÃ¡rd
            trillion: 'T'   // trilliÃ³
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: ' Ft'
        }
    });
})();


(function() {
        numeral.register('locale', 'it', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'Âº';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'ja', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'åƒ',
            million: 'ç™¾ä¸‡',
            billion: 'åå„„',
            trillion: 'å…†'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'Â¥'
        }
    });
})();


(function() {
        numeral.register('locale', 'lv', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tÅ«kst.',
            million: ' milj.',
            billion: ' mljrd.',
            trillion: ' trilj.'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'nl-be', {
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : ' mln',
            billion  : ' mld',
            trillion : ' bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;

            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: 'â‚¬ '
        }
    });
})();


(function() {
        numeral.register('locale', 'nl-nl', {
        delimiters: {
            thousands: '.',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mrd',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: 'â‚¬ '
        }
    });
})();


(function() {
        numeral.register('locale', 'no', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'kr'
        }
    });
})();


(function() {
        numeral.register('locale', 'pl', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tys.',
            million: 'mln',
            billion: 'mld',
            trillion: 'bln'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'PLN'
        }
    });
})();


(function() {
        numeral.register('locale', 'pt-br', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhÃµes',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'Âº';
        },
        currency: {
            symbol: 'R$'
        }
    });
})();


(function() {
        numeral.register('locale', 'pt-pt', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return 'Âº';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'ru-ua', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'Ñ‚Ñ‹Ñ.',
            million: 'Ð¼Ð»Ð½',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
        },
        currency: {
            symbol: '\u20B4'
        }
    });
})();


(function() {
        numeral.register('locale', 'ru', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'Ñ‚Ñ‹Ñ.',
            million: 'Ð¼Ð»Ð½.',
            billion: 'Ð¼Ð»Ñ€Ð´.',
            trillion: 'Ñ‚Ñ€Ð»Ð½.'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
        },
        currency: {
            symbol: 'Ñ€ÑƒÐ±.'
        }
    });
})();


(function() {
        numeral.register('locale', 'sk', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
        numeral.register('locale', 'sl', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mrd',
            trillion: 'trilijon'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â‚¬'
        }
    });
})();


(function() {
    

    numeral.register('locale', 'th', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'à¸žà¸±à¸™',
            million: 'à¸¥à¹‰à¸²à¸™',
            billion: 'à¸žà¸±à¸™à¸¥à¹‰à¸²à¸™',
            trillion: 'à¸¥à¹‰à¸²à¸™à¸¥à¹‰à¸²à¸™'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'à¸¿'
        }
    });
})();


(function() {
        var suffixes = {
            1: '\'inci',
            5: '\'inci',
            8: '\'inci',
            70: '\'inci',
            80: '\'inci',

            2: '\'nci',
            7: '\'nci',
            20: '\'nci',
            50: '\'nci',

            3: '\'Ã¼ncÃ¼',
            4: '\'Ã¼ncÃ¼',
            100: '\'Ã¼ncÃ¼',

            6: '\'ncÄ±',

            9: '\'uncu',
            10: '\'uncu',
            30: '\'uncu',

            60: '\'Ä±ncÄ±',
            90: '\'Ä±ncÄ±'
        };

    numeral.register('locale', 'tr', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'bin',
            million: 'milyon',
            billion: 'milyar',
            trillion: 'trilyon'
        },
        ordinal: function (number) {
            if (number === 0) {  // special case for zero
                return '\'Ä±ncÄ±';
            }

            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;

          return suffixes[a] || suffixes[b] || suffixes[c];
        },
        currency: {
            symbol: '\u20BA'
        }
    });
})();


(function() {
        numeral.register('locale', 'uk-ua', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'Ñ‚Ð¸Ñ.',
            million: 'Ð¼Ð»Ð½',
            billion: 'Ð¼Ð»Ñ€Ð´',
            trillion: 'Ð±Ð»Ð½'
        },
        ordinal: function () {
            // not ideal, but since in Ukrainian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '';
        },
        currency: {
            symbol: '\u20B4'
        }
    });
})();


(function() {
    
    numeral.register('locale', 'vi', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: ' nghÃ¬n',
            million: ' triá»‡u',
            billion: ' tá»·',
            trillion: ' nghÃ¬n tá»·'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â‚«'
        }
    });
})();


}));
