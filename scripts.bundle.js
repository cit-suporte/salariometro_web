/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
})(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Private TransitionEnd Helpers
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default["default"](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default["default"](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * Public Util API
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default["default"](element).css('transition-duration');
      var transitionDelay = $__default["default"](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default["default"](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default["default"].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * Constants
   */

  var NAME$a = 'alert';
  var VERSION$a = '4.6.2';
  var DATA_KEY$a = 'bs.alert';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$7 = 'show';
  var EVENT_CLOSE = "close" + EVENT_KEY$a;
  var EVENT_CLOSED = "closed" + EVENT_KEY$a;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  /**
   * Class definition
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$a);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default["default"].Event(EVENT_CLOSE);
      $__default["default"](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);

      if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default["default"](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$a);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY$a, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }]);

    return Alert;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
  $__default["default"].fn[NAME$a].Constructor = Alert;

  $__default["default"].fn[NAME$a].noConflict = function () {
    $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Alert._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$9 = 'button';
  var VERSION$9 = '4.6.2';
  var DATA_KEY$9 = 'bs.button';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_BUTTON = '.btn';
  /**
   * Class definition
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);

              if (activeElement) {
                $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default["default"](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
        }

        if (triggerChangeEvent) {
          $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$9);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$9, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Button;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default["default"](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
    $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$9] = Button._jQueryInterface;
  $__default["default"].fn[NAME$9].Constructor = Button;

  $__default["default"].fn[NAME$9].noConflict = function () {
    $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Button._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$8 = 'carousel';
  var VERSION$8 = '4.6.2';
  var DATA_KEY$8 = 'bs.carousel';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$8;
  var EVENT_SLID = "slid" + EVENT_KEY$8;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var Default$7 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$7 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * Class definition
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default["default"](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default["default"](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default["default"](this._element).off(EVENT_KEY$8);
      $__default["default"].removeData(this._element, DATA_KEY$8);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, config);
      Util.typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default["default"](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default["default"](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default["default"](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default["default"](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default["default"](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default["default"].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default["default"](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default["default"](activeElement).addClass(directionalClassName);
        $__default["default"](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default["default"](activeElement).one(Util.TRANSITION_END, function () {
          $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
          $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default["default"](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
        $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        $__default["default"](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$8);

        var _config = _extends({}, Default$7, $__default["default"](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default["default"](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default["default"](selector)[0];

      if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default["default"](target).data(), $__default["default"](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default["default"](target), config);

      if (slideIndex) {
        $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Carousel;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default["default"](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
  $__default["default"].fn[NAME$8].Constructor = Carousel;

  $__default["default"].fn[NAME$8].noConflict = function () {
    $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Carousel._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$7 = 'collapse';
  var VERSION$7 = '4.6.2';
  var DATA_KEY$7 = 'bs.collapse';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
  var Default$6 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$6 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  /**
   * Class definition
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default["default"].Event(EVENT_SHOW$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default["default"](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default["default"](actives).data(DATA_KEY$7, null);
        }
      }

      var dimension = this._getDimension();

      $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var startEvent = $__default["default"].Event(EVENT_HIDE$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
              $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$7);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default["default"](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);

      if (triggerArray.length) {
        $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$7);

        var _config = _extends({}, Default$6, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return Collapse;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default["default"](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default["default"](selectors).each(function () {
      var $target = $__default["default"](this);
      var data = $target.data(DATA_KEY$7);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
  $__default["default"].fn[NAME$7].Constructor = Collapse;

  $__default["default"].fn[NAME$7].noConflict = function () {
    $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Collapse._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$6 = 'dropdown';
  var VERSION$6 = '4.6.2';
  var DATA_KEY$6 = 'bs.dropdown';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_SHOW$5 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
  var EVENT_CLICK = "click" + EVENT_KEY$6;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$5 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$5 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * Class definition
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        // Check for Popper dependency
        if (typeof Popper__default["default"] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default["default"](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$6);
      $__default["default"](this._element).off(EVENT_KEY$6);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default["default"](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default["default"](this._element).data(), config);
      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default["default"](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default["default"](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$6);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default["default"](this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
        $__default["default"](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
        $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);

      if (!isActive && event.which === ESCAPE_KEYCODE$1) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE$1) {
          $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default["default"](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default["default"](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Dropdown;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default["default"](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
  $__default["default"].fn[NAME$6].Constructor = Dropdown;

  $__default["default"].fn[NAME$6].noConflict = function () {
    $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Dropdown._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.2';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$4 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  /**
   * Class definition
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
        this._isTransitioning = true;
      }

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function (event) {
        return _this.hide(event);
      });
      $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default["default"](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
      $__default["default"](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
      $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default["default"](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$4, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
      $__default["default"](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default["default"](this._element).off(Util.TRANSITION_END);
      $__default["default"](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default["default"](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default["default"](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default["default"](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default["default"](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default["default"](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default["default"](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default["default"](this._backdrop).appendTo(document.body);
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default["default"](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default["default"](element).css('padding-right');
          $__default["default"](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default["default"](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default["default"](element).css('margin-right');
          $__default["default"](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default["default"](document.body).css('padding-right');
        $__default["default"](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default["default"](fixedContent).each(function (index, element) {
        var padding = $__default["default"](element).data('padding-right');
        $__default["default"](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default["default"](elements).each(function (index, element) {
        var margin = $__default["default"](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default["default"](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default["default"](document.body).data('padding-right');
      $__default["default"](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$4, $__default["default"](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default["default"](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }]);

    return Modal;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default["default"](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default["default"](target).data(), $__default["default"](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default["default"](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default["default"](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default["default"](target), config, this);
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
  $__default["default"].fn[NAME$5].Constructor = Modal;

  $__default["default"].fn[NAME$5].noConflict = function () {
    $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.2): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes); // eslint-disable-next-line unicorn/prefer-spread

      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * Constants
   */

  var NAME$4 = 'tooltip';
  var VERSION$4 = '4.6.2';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    INSERTED: "inserted" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    FOCUSIN: "focusin" + EVENT_KEY$4,
    FOCUSOUT: "focusout" + EVENT_KEY$4,
    MOUSEENTER: "mouseenter" + EVENT_KEY$4,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$4
  };
  /**
   * Class definition
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // Private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default["default"](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default["default"](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
      $__default["default"](this.element).off(this.constructor.EVENT_KEY);
      $__default["default"](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default["default"](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default["default"](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default["default"](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default["default"](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default["default"](tip).appendTo(container);
        }

        $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default["default"](this.element, tip, this._getPopperConfig(attachment));
        $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
        $__default["default"](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default["default"](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default["default"](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default["default"](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default["default"](this.config.container);
      }

      return $__default["default"](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default["default"](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default["default"](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$4);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }]);

    return Tooltip;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
  $__default["default"].fn[NAME$4].Constructor = Tooltip;

  $__default["default"].fn[NAME$4].noConflict = function () {
    $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Tooltip._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$3 = 'popover';
  var VERSION$3 = '4.6.2';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$2 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';

  var Default$2 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$2 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event = {
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    INSERTED: "inserted" + EVENT_KEY$3,
    CLICK: "click" + EVENT_KEY$3,
    FOCUSIN: "focusin" + EVENT_KEY$3,
    FOCUSOUT: "focusout" + EVENT_KEY$3,
    MOUSEENTER: "mouseenter" + EVENT_KEY$3,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$3
  };
  /**
   * Class definition
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default["default"](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$3);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default["default"](this).data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      get: // Getters
      function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$3;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
  $__default["default"].fn[NAME$3].Constructor = Popover;

  $__default["default"].fn[NAME$3].noConflict = function () {
    $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Popover._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$2 = 'scrollspy';
  var VERSION$2 = '4.6.2';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  /**
   * Class definition
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default["default"](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(Boolean).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$2);
      $__default["default"](this._scrollElement).off(EVENT_KEY$2);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default["default"](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$2);
          $__default["default"](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
        $link.addClass(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$1); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
      }

      $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$2);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default["default"](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default["default"](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
  $__default["default"].fn[NAME$2].Constructor = ScrollSpy;

  $__default["default"].fn[NAME$2].noConflict = function () {
    $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$1 = 'tab';
  var VERSION$1 = '4.6.2';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * Class definition
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED) || this._element.hasAttribute('disabled')) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
        relatedTarget: this._element
      });
      var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (previous) {
        $__default["default"](previous).trigger(hideEvent);
      }

      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
          relatedTarget: previous
        });
        $__default["default"](previous).trigger(hiddenEvent);
        $__default["default"](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default["default"](element).addClass(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
          $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default["default"](this);
        var data = $this.data(DATA_KEY$1);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$1, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Tab;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default["default"](this), 'show');
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
  $__default["default"].fn[NAME$1].Constructor = Tab;

  $__default["default"].fn[NAME$1].noConflict = function () {
    $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Tab._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME = 'toast';
  var VERSION = '4.6.2';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
  var Default = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  /**
   * Class definition
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default["default"].Event(EVENT_SHOW);
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW);

        $__default["default"](_this._element).trigger(EVENT_SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE);
      $__default["default"](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
      $__default["default"].removeData(this._element, DATA_KEY);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, $__default["default"](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME] = Toast._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Toast;

  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.js.map

;// powerbi-client v2.22.3
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/*! For license information please see powerbi.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["powerbi-client"]=e():t["powerbi-client"]=e()}(this,(()=>(()=>{var t={615:function(t){var e;e=function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e){"use strict";var r=function(){function t(t,e,r){void 0===e&&(e={}),this.defaultHeaders=e,this.defaultTargetWindow=r,this.windowPostMessageProxy=t}return t.addTrackingProperties=function(t,e){return t.headers=t.headers||{},e&&e.id&&(t.headers.id=e.id),t},t.getTrackingProperties=function(t){return{id:t.headers&&t.headers.id}},t.isErrorMessage=function(t){return"number"==typeof(t&&t.statusCode)&&!(200<=t.statusCode&&t.statusCode<300)},t.prototype.get=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r=this.defaultTargetWindow),this.send({method:"GET",url:t,headers:e},r)},t.prototype.post=function(t,e,r,i){return void 0===r&&(r={}),void 0===i&&(i=this.defaultTargetWindow),this.send({method:"POST",url:t,headers:r,body:e},i)},t.prototype.put=function(t,e,r,i){return void 0===r&&(r={}),void 0===i&&(i=this.defaultTargetWindow),this.send({method:"PUT",url:t,headers:r,body:e},i)},t.prototype.patch=function(t,e,r,i){return void 0===r&&(r={}),void 0===i&&(i=this.defaultTargetWindow),this.send({method:"PATCH",url:t,headers:r,body:e},i)},t.prototype.delete=function(t,e,r,i){return void 0===e&&(e=null),void 0===r&&(r={}),void 0===i&&(i=this.defaultTargetWindow),this.send({method:"DELETE",url:t,headers:r,body:e},i)},t.prototype.send=function(t,e){if(void 0===e&&(e=this.defaultTargetWindow),t.headers=this.assign({},this.defaultHeaders,t.headers),!e)throw new Error("target window is not provided.  You must either provide the target window explicitly as argument to request, or specify default target window when constructing instance of this class.");return this.windowPostMessageProxy.postMessage(e,t)},t.prototype.assign=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(null==t)throw new TypeError("Cannot convert undefined or null to object");var i=Object(t);return e.forEach((function(t){if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e])})),i},t}();e.HttpPostMessage=r}])},t.exports=e()},149:function(t){var e;e=()=>(()=>{var t=[function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.TextAlignment=e.CommonErrorCodes=e.BookmarksPlayMode=e.ExportDataType=e.QnaMode=e.PageNavigationPosition=e.BrowserPrintAdjustmentsMode=e.AggregateFunction=e.DataCacheMode=e.CredentialType=e.isPercentOfGrandTotal=e.isColumnAggr=e.isHierarchyLevelAggr=e.isHierarchyLevel=e.isColumn=e.isMeasure=e.getFilterType=e.isBasicFilterWithKeys=e.isFilterKeyColumnsTarget=e.HierarchyFilter=e.AdvancedFilter=e.TupleFilter=e.IdentityFilter=e.BasicFilterWithKeys=e.BasicFilter=e.RelativeTimeFilter=e.RelativeDateFilter=e.TopNFilter=e.IncludeExcludeFilter=e.NotSupportedFilter=e.Filter=e.RelativeDateOperators=e.RelativeDateFilterTimeUnit=e.FilterType=e.FiltersLevel=e.FiltersOperations=e.MenuLocation=e.ContrastMode=e.TokenType=e.ViewMode=e.Permissions=e.SectionVisibility=e.ReportAlignment=e.HyperlinkClickBehavior=e.LayoutType=e.VisualContainerDisplayMode=e.BackgroundType=e.DisplayOption=e.PageSizeType=e.TraceType=void 0,e.validateVisualHeader=e.validateExportDataRequest=e.validateQnaInterpretInputData=e.validateLoadQnaConfiguration=e.validateSaveAsParameters=e.validateUpdateFiltersRequest=e.validateFilter=e.validatePage=e.validateTileLoad=e.validateDashboardLoad=e.validateQuickCreate=e.validateCreateReport=e.validatePaginatedReportLoad=e.validateReportLoad=e.validateMenuGroupExtension=e.validateExtension=e.validateCustomPageSize=e.validateVisualizationsPane=e.validateSyncSlicersPane=e.validateSelectionPane=e.validatePageNavigationPane=e.validateFieldsPane=e.validateFiltersPane=e.validateBookmarksPane=e.validatePanes=e.validateSettings=e.validateCaptureBookmarkRequest=e.validateApplyBookmarkStateRequest=e.validateApplyBookmarkByNameRequest=e.validateAddBookmarkRequest=e.validatePlayBookmarkRequest=e.validateSlicerState=e.validateSlicer=e.validateVisualSelector=e.isIExtensionArray=e.isIExtensions=e.isGroupedMenuExtension=e.isFlatMenuExtension=e.isReportFiltersArray=e.isOnLoadFilters=e.VisualDataRoleKindPreference=e.VisualDataRoleKind=e.CommandDisplayOption=e.SlicerTargetSelector=e.VisualTypeSelector=e.VisualSelector=e.PageSelector=e.Selector=e.SortDirection=e.LegendPosition=void 0,e.validatePrintSettings=e.validateZoomLevel=e.validateCustomTheme=e.validateCommandsSettings=e.validateVisualSettings=void 0;var o,n,l,s,u,d,c,p,f,h,v,y,m,V,g,b,w,P,S,O=r(1);(S=e.TraceType||(e.TraceType={}))[S.Information=0]="Information",S[S.Verbose=1]="Verbose",S[S.Warning=2]="Warning",S[S.Error=3]="Error",S[S.ExpectedError=4]="ExpectedError",S[S.UnexpectedError=5]="UnexpectedError",S[S.Fatal=6]="Fatal",(P=e.PageSizeType||(e.PageSizeType={}))[P.Widescreen=0]="Widescreen",P[P.Standard=1]="Standard",P[P.Cortana=2]="Cortana",P[P.Letter=3]="Letter",P[P.Custom=4]="Custom",P[P.Mobile=5]="Mobile",(w=e.DisplayOption||(e.DisplayOption={}))[w.FitToPage=0]="FitToPage",w[w.FitToWidth=1]="FitToWidth",w[w.ActualSize=2]="ActualSize",(b=e.BackgroundType||(e.BackgroundType={}))[b.Default=0]="Default",b[b.Transparent=1]="Transparent",(g=e.VisualContainerDisplayMode||(e.VisualContainerDisplayMode={}))[g.Visible=0]="Visible",g[g.Hidden=1]="Hidden",(V=e.LayoutType||(e.LayoutType={}))[V.Master=0]="Master",V[V.Custom=1]="Custom",V[V.MobilePortrait=2]="MobilePortrait",V[V.MobileLandscape=3]="MobileLandscape",(m=e.HyperlinkClickBehavior||(e.HyperlinkClickBehavior={}))[m.Navigate=0]="Navigate",m[m.NavigateAndRaiseEvent=1]="NavigateAndRaiseEvent",m[m.RaiseEvent=2]="RaiseEvent",(y=e.ReportAlignment||(e.ReportAlignment={}))[y.Left=0]="Left",y[y.Center=1]="Center",y[y.Right=2]="Right",y[y.None=3]="None",(v=e.SectionVisibility||(e.SectionVisibility={}))[v.AlwaysVisible=0]="AlwaysVisible",v[v.HiddenInViewMode=1]="HiddenInViewMode",(h=e.Permissions||(e.Permissions={}))[h.Read=0]="Read",h[h.ReadWrite=1]="ReadWrite",h[h.Copy=2]="Copy",h[h.Create=4]="Create",h[h.All=7]="All",(f=e.ViewMode||(e.ViewMode={}))[f.View=0]="View",f[f.Edit=1]="Edit",(p=e.TokenType||(e.TokenType={}))[p.Aad=0]="Aad",p[p.Embed=1]="Embed",(c=e.ContrastMode||(e.ContrastMode={}))[c.None=0]="None",c[c.HighContrast1=1]="HighContrast1",c[c.HighContrast2=2]="HighContrast2",c[c.HighContrastBlack=3]="HighContrastBlack",c[c.HighContrastWhite=4]="HighContrastWhite",(d=e.MenuLocation||(e.MenuLocation={}))[d.Bottom=0]="Bottom",d[d.Top=1]="Top",(u=e.FiltersOperations||(e.FiltersOperations={}))[u.RemoveAll=0]="RemoveAll",u[u.ReplaceAll=1]="ReplaceAll",u[u.Add=2]="Add",u[u.Replace=3]="Replace",(s=e.FiltersLevel||(e.FiltersLevel={}))[s.Report=0]="Report",s[s.Page=1]="Page",s[s.Visual=2]="Visual",function(t){t[t.Advanced=0]="Advanced",t[t.Basic=1]="Basic",t[t.Unknown=2]="Unknown",t[t.IncludeExclude=3]="IncludeExclude",t[t.RelativeDate=4]="RelativeDate",t[t.TopN=5]="TopN",t[t.Tuple=6]="Tuple",t[t.RelativeTime=7]="RelativeTime",t[t.Identity=8]="Identity",t[t.Hierarchy=9]="Hierarchy"}(o=e.FilterType||(e.FilterType={})),(l=e.RelativeDateFilterTimeUnit||(e.RelativeDateFilterTimeUnit={}))[l.Days=0]="Days",l[l.Weeks=1]="Weeks",l[l.CalendarWeeks=2]="CalendarWeeks",l[l.Months=3]="Months",l[l.CalendarMonths=4]="CalendarMonths",l[l.Years=5]="Years",l[l.CalendarYears=6]="CalendarYears",l[l.Minutes=7]="Minutes",l[l.Hours=8]="Hours",(n=e.RelativeDateOperators||(e.RelativeDateOperators={}))[n.InLast=0]="InLast",n[n.InThis=1]="InThis",n[n.InNext=2]="InNext";var _=function(){function t(t,e){this.target=t,this.filterType=e}return t.prototype.toJSON=function(){var t={$schema:this.schemaUrl,target:this.target,filterType:this.filterType};return void 0!==this.displaySettings&&(t.displaySettings=this.displaySettings),t},t}();e.Filter=_;var T=function(t){function e(r,i,a){var n=t.call(this,r,o.Unknown)||this;return n.message=i,n.notSupportedTypeName=a,n.schemaUrl=e.schemaUrl,n}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.message=this.message,e.notSupportedTypeName=this.notSupportedTypeName,e},e.schemaUrl="http://powerbi.com/product/schema#notSupported",e}(_);e.NotSupportedFilter=T;var E=function(t){function e(r,i,a){var n=t.call(this,r,o.IncludeExclude)||this;return n.values=a,n.isExclude=i,n.schemaUrl=e.schemaUrl,n}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.isExclude=this.isExclude,e.values=this.values,e},e.schemaUrl="http://powerbi.com/product/schema#includeExclude",e}(_);e.IncludeExcludeFilter=E;var F=function(t){function e(r,i,a,n){var l=t.call(this,r,o.TopN)||this;return l.operator=i,l.itemCount=a,l.schemaUrl=e.schemaUrl,l.orderBy=n,l}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.itemCount=this.itemCount,e.orderBy=this.orderBy,e},e.schemaUrl="http://powerbi.com/product/schema#topN",e}(_);e.TopNFilter=F;var C=function(t){function e(r,i,a,n,l){var s=t.call(this,r,o.RelativeDate)||this;return s.operator=i,s.timeUnitsCount=a,s.timeUnitType=n,s.includeToday=l,s.schemaUrl=e.schemaUrl,s}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.timeUnitsCount=this.timeUnitsCount,e.timeUnitType=this.timeUnitType,e.includeToday=this.includeToday,e},e.schemaUrl="http://powerbi.com/product/schema#relativeDate",e}(_);e.RelativeDateFilter=C;var R=function(t){function e(r,i,a,n){var l=t.call(this,r,o.RelativeTime)||this;return l.operator=i,l.timeUnitsCount=a,l.timeUnitType=n,l.schemaUrl=e.schemaUrl,l}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.timeUnitsCount=this.timeUnitsCount,e.timeUnitType=this.timeUnitType,e},e.schemaUrl="http://powerbi.com/product/schema#relativeTime",e}(_);e.RelativeTimeFilter=R;var k=function(t){function e(r,i){for(var a=[],n=2;n<arguments.length;n++)a[n-2]=arguments[n];var l=t.call(this,r,o.Basic)||this;if(l.operator=i,l.schemaUrl=e.schemaUrl,0===a.length&&"All"!==i)throw new Error('values must be a non-empty array unless your operator is "All".');return Array.isArray(a[0])?l.values=a[0]:l.values=a,l}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.values=this.values,e.requireSingleSelection=!!this.requireSingleSelection,e},e.schemaUrl="http://powerbi.com/product/schema#basic",e}(_);e.BasicFilter=k;var x=function(t){function e(e,r,i,a){var o=t.call(this,e,r,i)||this;o.keyValues=a,o.target=e;var n=e.keys?e.keys.length:0;if(n>0&&!a)throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(n," keys"));if(0===n&&a&&a.length>0)throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");for(var l=0,s=o.keyValues;l<s.length;l++){var u=s[l];if(u){var d=u.length;if(d!==n)throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(d," values and ").concat(n," keys"))}}return o}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.keyValues=this.keyValues,e},e}(k);e.BasicFilterWithKeys=x;var A=function(t){function e(r,i){var a=t.call(this,r,o.Identity)||this;return a.operator=i,a.schemaUrl=e.schemaUrl,a}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.target=this.target,e},e.schemaUrl="http://powerbi.com/product/schema#identity",e}(_);e.IdentityFilter=A;var j=function(t){function e(r,i,a){var n=t.call(this,r,o.Tuple)||this;return n.operator=i,n.schemaUrl=e.schemaUrl,n.values=a,n}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.operator=this.operator,e.values=this.values,e.target=this.target,e},e.schemaUrl="http://powerbi.com/product/schema#tuple",e}(_);e.TupleFilter=j;var M=function(t){function e(r,i){for(var a=[],n=2;n<arguments.length;n++)a[n-2]=arguments[n];var l,s=t.call(this,r,o.Advanced)||this;if(s.schemaUrl=e.schemaUrl,"string"!=typeof i||0===i.length)throw new Error("logicalOperator must be a valid operator, You passed: ".concat(i));if(s.logicalOperator=i,(l=Array.isArray(a[0])?a[0]:a).length>2)throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(a.length));if(1===l.length&&"And"!==i)throw new Error('Logical Operator must be "And" when there is only one condition provided');return s.conditions=l,s}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.logicalOperator=this.logicalOperator,e.conditions=this.conditions,e},e.schemaUrl="http://powerbi.com/product/schema#advanced",e}(_);e.AdvancedFilter=M;var L,I,q,D,N,B,U,H,W,z=function(t){function e(r,i){var a=t.call(this,r,o.Hierarchy)||this;return a.schemaUrl=e.schemaUrl,a.hierarchyData=i,a}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.hierarchyData=this.hierarchyData,e.target=this.target,e},e.schemaUrl="http://powerbi.com/product/schema#hierarchy",e}(_);function Q(t){if(t.filterType)return t.filterType;var e=t,r=t;return"string"==typeof e.operator&&Array.isArray(e.values)?o.Basic:"string"==typeof r.logicalOperator&&Array.isArray(r.conditions)?o.Advanced:o.Unknown}function G(t){return!(!t.table||!t.column||t.aggregationFunction)}e.HierarchyFilter=z,e.isFilterKeyColumnsTarget=function(t){return G(t)&&!!t.keys},e.isBasicFilterWithKeys=function(t){return Q(t)===o.Basic&&!!t.keyValues},e.getFilterType=Q,e.isMeasure=function(t){return void 0!==t.table&&void 0!==t.measure},e.isColumn=G,e.isHierarchyLevel=function(t){return!(!(t.table&&t.hierarchy&&t.hierarchyLevel)||t.aggregationFunction)},e.isHierarchyLevelAggr=function(t){return!!(t.table&&t.hierarchy&&t.hierarchyLevel&&t.aggregationFunction)},e.isColumnAggr=function(t){return!!(t.table&&t.column&&t.aggregationFunction)},e.isPercentOfGrandTotal=function(t){return!!t.percentOfGrandTotal},(W=e.CredentialType||(e.CredentialType={}))[W.NoConnection=0]="NoConnection",W[W.OnBehalfOf=1]="OnBehalfOf",W[W.Anonymous=2]="Anonymous",(H=e.DataCacheMode||(e.DataCacheMode={}))[H.Import=0]="Import",H[H.DirectQuery=1]="DirectQuery",(U=e.AggregateFunction||(e.AggregateFunction={}))[U.Default=1]="Default",U[U.None=2]="None",U[U.Sum=3]="Sum",U[U.Min=4]="Min",U[U.Max=5]="Max",U[U.Count=6]="Count",U[U.Average=7]="Average",U[U.DistinctCount=8]="DistinctCount",(B=e.BrowserPrintAdjustmentsMode||(e.BrowserPrintAdjustmentsMode={}))[B.Default=0]="Default",B[B.NoAdjustments=1]="NoAdjustments",(N=e.PageNavigationPosition||(e.PageNavigationPosition={}))[N.Bottom=0]="Bottom",N[N.Left=1]="Left",(D=e.QnaMode||(e.QnaMode={}))[D.Interactive=0]="Interactive",D[D.ResultOnly=1]="ResultOnly",(q=e.ExportDataType||(e.ExportDataType={}))[q.Summarized=0]="Summarized",q[q.Underlying=1]="Underlying",(I=e.BookmarksPlayMode||(e.BookmarksPlayMode={}))[I.Off=0]="Off",I[I.Presentation=1]="Presentation",e.CommonErrorCodes={TokenExpired:"TokenExpired",NotFound:"PowerBIEntityNotFound",InvalidParameters:"Invalid parameters",LoadReportFailed:"LoadReportFailed",NotAuthorized:"PowerBINotAuthorizedException",FailedToLoadModel:"ExplorationContainer_FailedToLoadModel_DefaultDetails"},e.TextAlignment={Left:"left",Center:"center",Right:"right"},e.LegendPosition={Top:"Top",Bottom:"Bottom",Right:"Right",Left:"Left",TopCenter:"TopCenter",BottomCenter:"BottomCenter",RightCenter:"RightCenter",LeftCenter:"LeftCenter"},(L=e.SortDirection||(e.SortDirection={}))[L.Ascending=1]="Ascending",L[L.Descending=2]="Descending";var J=function(){function t(t){this.$schema=t}return t.prototype.toJSON=function(){return{$schema:this.$schema}},t}();e.Selector=J;var K=function(t){function e(r){var i=t.call(this,e.schemaUrl)||this;return i.pageName=r,i}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.pageName=this.pageName,e},e.schemaUrl="http://powerbi.com/product/schema#pageSelector",e}(J);e.PageSelector=K;var Y=function(t){function e(r){var i=t.call(this,e.schemaUrl)||this;return i.visualName=r,i}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.visualName=this.visualName,e},e.schemaUrl="http://powerbi.com/product/schema#visualSelector",e}(J);e.VisualSelector=Y;var $=function(t){function e(e){var r=t.call(this,Y.schemaUrl)||this;return r.visualType=e,r}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.visualType=this.visualType,e},e.schemaUrl="http://powerbi.com/product/schema#visualTypeSelector",e}(J);e.VisualTypeSelector=$;var Z,X,tt,et=function(t){function e(e){var r=t.call(this,Y.schemaUrl)||this;return r.target=e,r}return a(e,t),e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.target=this.target,e},e.schemaUrl="http://powerbi.com/product/schema#slicerTargetSelector",e}(J);function rt(t){return Array.isArray(t)}function it(t){return t&&!!t.groupName}function at(t){return Array.isArray(t)}function ot(t){var e=t.message;return e||(e="".concat(t.path," is invalid. Not meeting ").concat(t.keyword," constraint")),{message:e}}e.SlicerTargetSelector=et,(tt=e.CommandDisplayOption||(e.CommandDisplayOption={}))[tt.Enabled=0]="Enabled",tt[tt.Disabled=1]="Disabled",tt[tt.Hidden=2]="Hidden",(X=e.VisualDataRoleKind||(e.VisualDataRoleKind={}))[X.Grouping=0]="Grouping",X[X.Measure=1]="Measure",X[X.GroupingOrMeasure=2]="GroupingOrMeasure",(Z=e.VisualDataRoleKindPreference||(e.VisualDataRoleKindPreference={}))[Z.Measure=0]="Measure",Z[Z.Grouping=1]="Grouping",e.isOnLoadFilters=function(t){return t&&!rt(t)},e.isReportFiltersArray=rt,e.isFlatMenuExtension=function(t){return t&&!it(t)},e.isGroupedMenuExtension=it,e.isIExtensions=function(t){return t&&!at(t)},e.isIExtensionArray=at,e.validateVisualSelector=function(t){var e=O.Validators.visualSelectorValidator.validate(t);return e?e.map(ot):void 0},e.validateSlicer=function(t){var e=O.Validators.slicerValidator.validate(t);return e?e.map(ot):void 0},e.validateSlicerState=function(t){var e=O.Validators.slicerStateValidator.validate(t);return e?e.map(ot):void 0},e.validatePlayBookmarkRequest=function(t){var e=O.Validators.playBookmarkRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateAddBookmarkRequest=function(t){var e=O.Validators.addBookmarkRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateApplyBookmarkByNameRequest=function(t){var e=O.Validators.applyBookmarkByNameRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateApplyBookmarkStateRequest=function(t){var e=O.Validators.applyBookmarkStateRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateCaptureBookmarkRequest=function(t){var e=O.Validators.captureBookmarkRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateSettings=function(t){var e=O.Validators.settingsValidator.validate(t);return e?e.map(ot):void 0},e.validatePanes=function(t){var e=O.Validators.reportPanesValidator.validate(t);return e?e.map(ot):void 0},e.validateBookmarksPane=function(t){var e=O.Validators.bookmarksPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateFiltersPane=function(t){var e=O.Validators.filtersPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateFieldsPane=function(t){var e=O.Validators.fieldsPaneValidator.validate(t);return e?e.map(ot):void 0},e.validatePageNavigationPane=function(t){var e=O.Validators.pageNavigationPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateSelectionPane=function(t){var e=O.Validators.selectionPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateSyncSlicersPane=function(t){var e=O.Validators.syncSlicersPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateVisualizationsPane=function(t){var e=O.Validators.visualizationsPaneValidator.validate(t);return e?e.map(ot):void 0},e.validateCustomPageSize=function(t){var e=O.Validators.customPageSizeValidator.validate(t);return e?e.map(ot):void 0},e.validateExtension=function(t){var e=O.Validators.extensionValidator.validate(t);return e?e.map(ot):void 0},e.validateMenuGroupExtension=function(t){var e=O.Validators.menuGroupExtensionValidator.validate(t);return e?e.map(ot):void 0},e.validateReportLoad=function(t){var e=O.Validators.reportLoadValidator.validate(t);return e?e.map(ot):void 0},e.validatePaginatedReportLoad=function(t){var e=O.Validators.paginatedReportLoadValidator.validate(t);return e?e.map(ot):void 0},e.validateCreateReport=function(t){var e=O.Validators.reportCreateValidator.validate(t);return e?e.map(ot):void 0},e.validateQuickCreate=function(t){var e=O.Validators.quickCreateValidator.validate(t);return e?e.map(ot):void 0},e.validateDashboardLoad=function(t){var e=O.Validators.dashboardLoadValidator.validate(t);return e?e.map(ot):void 0},e.validateTileLoad=function(t){var e=O.Validators.tileLoadValidator.validate(t);return e?e.map(ot):void 0},e.validatePage=function(t){var e=O.Validators.pageValidator.validate(t);return e?e.map(ot):void 0},e.validateFilter=function(t){var e=O.Validators.filterValidator.validate(t);return e?e.map(ot):void 0},e.validateUpdateFiltersRequest=function(t){var e=O.Validators.updateFiltersRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateSaveAsParameters=function(t){var e=O.Validators.saveAsParametersValidator.validate(t);return e?e.map(ot):void 0},e.validateLoadQnaConfiguration=function(t){var e=O.Validators.loadQnaValidator.validate(t);return e?e.map(ot):void 0},e.validateQnaInterpretInputData=function(t){var e=O.Validators.qnaInterpretInputDataValidator.validate(t);return e?e.map(ot):void 0},e.validateExportDataRequest=function(t){var e=O.Validators.exportDataRequestValidator.validate(t);return e?e.map(ot):void 0},e.validateVisualHeader=function(t){var e=O.Validators.visualHeaderValidator.validate(t);return e?e.map(ot):void 0},e.validateVisualSettings=function(t){var e=O.Validators.visualSettingsValidator.validate(t);return e?e.map(ot):void 0},e.validateCommandsSettings=function(t){var e=O.Validators.commandsSettingsValidator.validate(t);return e?e.map(ot):void 0},e.validateCustomTheme=function(t){var e=O.Validators.customThemeValidator.validate(t);return e?e.map(ot):void 0},e.validateZoomLevel=function(t){var e=O.Validators.zoomLevelValidator.validate(t);return e?e.map(ot):void 0},e.validatePrintSettings=function(t){var e=O.Validators.printSettingsValidator.validate(t);return e?e.map(ot):void 0}},(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Validators=void 0;var i=r(2),a=r(5),o=r(6),n=r(7),l=r(8),s=r(9),u=r(10),d=r(11),c=r(12),p=r(13),f=r(14),h=r(15),v=r(16),y=r(17),m=r(18),V=r(19),g=r(20),b=r(21),w=r(22),P=r(23),S=r(24),O=r(25),_=r(26),T=r(27),E=r(28),F=r(29),C=r(4),R=r(30),k=r(31),x=r(32),A=r(33);e.Validators={addBookmarkRequestValidator:new a.AddBookmarkRequestValidator,advancedFilterTypeValidator:new C.EnumValidator([0]),advancedFilterValidator:new c.AdvancedFilterValidator,anyArrayValidator:new C.ArrayValidator([new _.AnyOfValidator([new C.StringValidator,new C.NumberValidator,new C.BooleanValidator])]),anyFilterValidator:new _.AnyOfValidator([new c.BasicFilterValidator,new c.AdvancedFilterValidator,new c.IncludeExcludeFilterValidator,new c.NotSupportedFilterValidator,new c.RelativeDateFilterValidator,new c.TopNFilterValidator,new c.RelativeTimeFilterValidator,new c.HierarchyFilterValidator]),anyValueValidator:new _.AnyOfValidator([new C.StringValidator,new C.NumberValidator,new C.BooleanValidator]),actionBarValidator:new i.ActionBarValidator,statusBarValidator:new i.StatusBarValidator,applyBookmarkByNameRequestValidator:new a.ApplyBookmarkByNameRequestValidator,applyBookmarkStateRequestValidator:new a.ApplyBookmarkStateRequestValidator,applyBookmarkValidator:new _.AnyOfValidator([new a.ApplyBookmarkByNameRequestValidator,new a.ApplyBookmarkStateRequestValidator]),backgroundValidator:new C.EnumValidator([0,1]),basicFilterTypeValidator:new C.EnumValidator([1]),basicFilterValidator:new c.BasicFilterValidator,booleanArrayValidator:new C.BooleanArrayValidator,booleanValidator:new C.BooleanValidator,bookmarksPaneValidator:new h.BookmarksPaneValidator,captureBookmarkOptionsValidator:new a.CaptureBookmarkOptionsValidator,captureBookmarkRequestValidator:new a.CaptureBookmarkRequestValidator,columnSchemaArrayValidator:new C.ArrayValidator([new k.ColumnSchemaValidator]),commandDisplayOptionValidator:new C.EnumValidator([0,1,2]),commandExtensionSelectorValidator:new _.AnyOfValidator([new b.VisualSelectorValidator,new b.VisualTypeSelectorValidator]),commandExtensionArrayValidator:new C.ArrayValidator([new d.CommandExtensionValidator]),commandExtensionValidator:new d.CommandExtensionValidator,commandsSettingsArrayValidator:new C.ArrayValidator([new o.CommandsSettingsValidator]),commandsSettingsValidator:new o.CommandsSettingsValidator,conditionItemValidator:new c.ConditionItemValidator,contrastModeValidator:new C.EnumValidator([0,1,2,3,4]),credentialDetailsValidator:new F.MapValidator([new C.StringValidator],[new C.StringValidator]),credentialsValidator:new k.CredentialsValidator,credentialTypeValidator:new C.EnumValidator([0,1,2]),customLayoutDisplayOptionValidator:new C.EnumValidator([0,1,2]),customLayoutValidator:new p.CustomLayoutValidator,customPageSizeValidator:new f.CustomPageSizeValidator,customThemeValidator:new n.CustomThemeValidator,dashboardLoadValidator:new l.DashboardLoadValidator,dataCacheModeValidator:new C.EnumValidator([0,1]),datasetBindingValidator:new s.DatasetBindingValidator,datasetCreateConfigValidator:new k.DatasetCreateConfigValidator,datasourceConnectionConfigValidator:new k.DatasourceConnectionConfigValidator,displayStateModeValidator:new C.EnumValidator([0,1]),displayStateValidator:new p.DisplayStateValidator,exportDataRequestValidator:new u.ExportDataRequestValidator,extensionArrayValidator:new C.ArrayValidator([new d.ExtensionValidator]),extensionsValidator:new _.AnyOfValidator([new C.ArrayValidator([new d.ExtensionValidator]),new d.ExtensionsValidator]),extensionPointsValidator:new d.ExtensionPointsValidator,extensionValidator:new d.ExtensionValidator,fieldForbiddenValidator:new T.FieldForbiddenValidator,fieldRequiredValidator:new E.FieldRequiredValidator,fieldsPaneValidator:new h.FieldsPaneValidator,filterColumnTargetValidator:new c.FilterColumnTargetValidator,filterDisplaySettingsValidator:new c.FilterDisplaySettingsValidator,filterConditionsValidator:new C.ArrayValidator([new c.ConditionItemValidator]),filterHierarchyTargetValidator:new c.FilterHierarchyTargetValidator,filterMeasureTargetValidator:new c.FilterMeasureTargetValidator,filterTargetValidator:new _.AnyOfValidator([new c.FilterColumnTargetValidator,new c.FilterHierarchyTargetValidator,new c.FilterMeasureTargetValidator,new C.ArrayValidator([new _.AnyOfValidator([new c.FilterColumnTargetValidator,new c.FilterHierarchyTargetValidator,new c.FilterMeasureTargetValidator,new c.FilterKeyColumnsTargetValidator,new c.FilterKeyHierarchyTargetValidator])])]),filterValidator:new c.FilterValidator,filterTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6,7,9]),filtersArrayValidator:new C.ArrayValidator([new c.FilterValidator]),filtersOperationsUpdateValidator:new C.EnumValidator([1,2,3]),filtersOperationsRemoveAllValidator:new C.EnumValidator([0]),filtersPaneValidator:new h.FiltersPaneValidator,hyperlinkClickBehaviorValidator:new C.EnumValidator([0,1,2]),includeExcludeFilterValidator:new c.IncludeExcludeFilterValidator,includeExludeFilterTypeValidator:new C.EnumValidator([3]),hierarchyFilterTypeValidator:new C.EnumValidator([9]),hierarchyFilterValuesValidator:new C.ArrayValidator([new c.HierarchyFilterNodeValidator]),layoutTypeValidator:new C.EnumValidator([0,1,2,3]),loadQnaValidator:new v.LoadQnaValidator,menuExtensionValidator:new _.AnyOfValidator([new d.FlatMenuExtensionValidator,new d.GroupedMenuExtensionValidator]),menuGroupExtensionArrayValidator:new C.ArrayValidator([new d.MenuGroupExtensionValidator]),menuGroupExtensionValidator:new d.MenuGroupExtensionValidator,menuLocationValidator:new C.EnumValidator([0,1]),notSupportedFilterTypeValidator:new C.EnumValidator([2]),notSupportedFilterValidator:new c.NotSupportedFilterValidator,numberArrayValidator:new C.NumberArrayValidator,numberValidator:new C.NumberValidator,onLoadFiltersBaseValidator:new _.AnyOfValidator([new c.OnLoadFiltersBaseValidator,new c.OnLoadFiltersBaseRemoveOperationValidator]),pageLayoutValidator:new F.MapValidator([new C.StringValidator],[new p.VisualLayoutValidator]),pageNavigationPaneValidator:new h.PageNavigationPaneValidator,pageNavigationPositionValidator:new C.EnumValidator([0,1]),pageSizeTypeValidator:new C.EnumValidator([0,1,2,3,4,5]),pageSizeValidator:new f.PageSizeValidator,pageValidator:new f.PageValidator,pageViewFieldValidator:new f.PageViewFieldValidator,pagesLayoutValidator:new F.MapValidator([new C.StringValidator],[new p.PageLayoutValidator]),paginatedReportCommandsValidator:new o.PaginatedReportCommandsValidator,paginatedReportLoadValidator:new V.PaginatedReportLoadValidator,paginatedReportsettingsValidator:new w.PaginatedReportSettingsValidator,parameterValuesArrayValidator:new C.ArrayValidator([new V.ReportParameterFieldsValidator]),parametersPanelValidator:new R.ParametersPanelValidator,permissionsValidator:new C.EnumValidator([0,1,2,4,7]),playBookmarkRequestValidator:new a.PlayBookmarkRequestValidator,printSettingsValidator:new A.PrintSettingsValidator,qnaInterpretInputDataValidator:new v.QnaInterpretInputDataValidator,qnaPanesValidator:new h.QnaPanesValidator,qnaSettingValidator:new v.QnaSettingsValidator,quickCreateValidator:new x.QuickCreateValidator,rawDataValidator:new C.ArrayValidator([new C.ArrayValidator([new C.StringValidator])]),relativeDateFilterOperatorValidator:new C.EnumValidator([0,1,2]),relativeDateFilterTimeUnitTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6]),relativeDateFilterTypeValidator:new C.EnumValidator([4]),relativeDateFilterValidator:new c.RelativeDateFilterValidator,relativeDateTimeFilterTypeValidator:new C.EnumValidator([4,7]),relativeDateTimeFilterUnitTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6,7,8]),relativeTimeFilterTimeUnitTypeValidator:new C.EnumValidator([7,8]),relativeTimeFilterTypeValidator:new C.EnumValidator([7]),relativeTimeFilterValidator:new c.RelativeTimeFilterValidator,reportBarsValidator:new i.ReportBarsValidator,reportCreateValidator:new y.ReportCreateValidator,reportLoadFiltersValidator:new _.AnyOfValidator([new C.ArrayValidator([new c.FilterValidator]),new c.OnLoadFiltersValidator]),reportLoadValidator:new m.ReportLoadValidator,reportPanesValidator:new h.ReportPanesValidator,saveAsParametersValidator:new g.SaveAsParametersValidator,selectionPaneValidator:new h.SelectionPaneValidator,settingsValidator:new w.SettingsValidator,singleCommandSettingsValidator:new o.SingleCommandSettingsValidator,slicerSelectorValidator:new _.AnyOfValidator([new b.VisualSelectorValidator,new b.SlicerTargetSelectorValidator]),slicerStateValidator:new P.SlicerStateValidator,slicerTargetValidator:new _.AnyOfValidator([new c.FilterColumnTargetValidator,new c.FilterHierarchyTargetValidator,new c.FilterMeasureTargetValidator,new c.FilterKeyColumnsTargetValidator,new c.FilterKeyHierarchyTargetValidator]),slicerValidator:new P.SlicerValidator,stringArrayValidator:new C.StringArrayValidator,stringValidator:new C.StringValidator,syncSlicersPaneValidator:new h.SyncSlicersPaneValidator,tableDataArrayValidator:new C.ArrayValidator([new k.TableDataValidator]),tableSchemaListValidator:new C.ArrayValidator([new k.TableSchemaValidator]),tileLoadValidator:new S.TileLoadValidator,tokenTypeValidator:new C.EnumValidator([0,1]),topNFilterTypeValidator:new C.EnumValidator([5]),topNFilterValidator:new c.TopNFilterValidator,updateFiltersRequestValidator:new _.AnyOfValidator([new c.UpdateFiltersRequestValidator,new c.RemoveFiltersRequestValidator]),viewModeValidator:new C.EnumValidator([0,1]),visualCommandSelectorValidator:new _.AnyOfValidator([new b.VisualSelectorValidator,new b.VisualTypeSelectorValidator]),visualHeaderSelectorValidator:new _.AnyOfValidator([new b.VisualSelectorValidator,new b.VisualTypeSelectorValidator]),visualHeaderSettingsValidator:new O.VisualHeaderSettingsValidator,visualHeaderValidator:new O.VisualHeaderValidator,visualHeadersValidator:new C.ArrayValidator([new O.VisualHeaderValidator]),visualizationsPaneValidator:new h.VisualizationsPaneValidator,visualLayoutValidator:new p.VisualLayoutValidator,visualSelectorValidator:new b.VisualSelectorValidator,visualSettingsValidator:new O.VisualSettingsValidator,visualTypeSelectorValidator:new b.VisualTypeSelectorValidator,zoomLevelValidator:new C.RangeValidator(.25,4)}},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.StatusBarValidator=e.ActionBarValidator=e.ReportBarsValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"actionBar",validators:[l.Validators.actionBarValidator]},{field:"statusBar",validators:[l.Validators.statusBarValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ReportBarsValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ActionBarValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.StatusBarValidator=d},(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultipleFieldsValidator=void 0;var r=function(){function t(t){this.fieldValidatorsPairs=t}return t.prototype.validate=function(t,e,r){if(!this.fieldValidatorsPairs)return null;for(var i=e?e+"."+r:r,a=0,o=this.fieldValidatorsPairs;a<o.length;a++)for(var n=o[a],l=0,s=n.validators;l<s.length;l++){var u=s[l].validate(t[n.field],i,n.field);if(u)return u}return null},t}();e.MultipleFieldsValidator=r},function(t,e){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0}),e.RangeValidator=e.NumberArrayValidator=e.BooleanArrayValidator=e.StringArrayValidator=e.EnumValidator=e.SchemaValidator=e.ValueValidator=e.NumberValidator=e.BooleanValidator=e.StringValidator=e.TypeValidator=e.ArrayValidator=e.ObjectValidator=void 0;var a=function(){function t(){}return t.prototype.validate=function(t,e,r){return null==t?null:"object"!=typeof t||Array.isArray(t)?[{message:void 0!==r?r+" must be an object":"input must be an object",path:e,keyword:"type"}]:null},t}();e.ObjectValidator=a;var o=function(){function t(t){this.itemValidators=t}return t.prototype.validate=function(t,e,r){if(null==t)return null;if(!Array.isArray(t))return[{message:r+" property is invalid",path:(e?e+".":"")+r,keyword:"type"}];for(var i=0;i<t.length;i++)for(var a=(e?e+".":"")+r+"."+i.toString(),o=0,n=this.itemValidators;o<n.length;o++)if(n[o].validate(t[i],a,r))return[{message:r+" property is invalid",path:(e?e+".":"")+r,keyword:"type"}];return null},t}();e.ArrayValidator=o;var n=function(){function t(t){this.expectedType=t}return t.prototype.validate=function(t,e,r){return null==t?null:typeof t!==this.expectedType?[{message:r+" must be a "+this.expectedType,path:(e?e+".":"")+r,keyword:"type"}]:null},t}();e.TypeValidator=n;var l=function(t){function e(){return t.call(this,"string")||this}return i(e,t),e}(n);e.StringValidator=l;var s=function(t){function e(){return t.call(this,"boolean")||this}return i(e,t),e}(n);e.BooleanValidator=s;var u=function(t){function e(){return t.call(this,"number")||this}return i(e,t),e}(n);e.NumberValidator=u;var d=function(){function t(t){this.possibleValues=t}return t.prototype.validate=function(t,e,r){return null==t?null:this.possibleValues.indexOf(t)<0?[{message:r+" property is invalid",path:(e?e+".":"")+r,keyword:"invalid"}]:null},t}();e.ValueValidator=d;var c=function(t){function e(e){var r=t.call(this,[e])||this;return r.schemaValue=e,r}return i(e,t),e.prototype.validate=function(e,r,i){return t.prototype.validate.call(this,e,r,i)},e}(d);e.SchemaValidator=c;var p=function(t){function e(e){var r=t.call(this)||this;return r.possibleValues=e,r}return i(e,t),e.prototype.validate=function(e,r,i){return null==e?null:t.prototype.validate.call(this,e,r,i)||new d(this.possibleValues).validate(e,r,i)},e}(u);e.EnumValidator=p;var f=function(t){function e(){return t.call(this,[new l])||this}return i(e,t),e.prototype.validate=function(e,r,i){return t.prototype.validate.call(this,e,r,i)?[{message:i+" must be an array of strings",path:(r?r+".":"")+i,keyword:"type"}]:null},e}(o);e.StringArrayValidator=f;var h=function(t){function e(){return t.call(this,[new s])||this}return i(e,t),e.prototype.validate=function(e,r,i){return t.prototype.validate.call(this,e,r,i)?[{message:i+" must be an array of booleans",path:(r?r+".":"")+i,keyword:"type"}]:null},e}(o);e.BooleanArrayValidator=h;var v=function(t){function e(){return t.call(this,[new u])||this}return i(e,t),e.prototype.validate=function(e,r,i){return t.prototype.validate.call(this,e,r,i)?[{message:i+" must be an array of numbers",path:(r?r+".":"")+i,keyword:"type"}]:null},e}(o);e.NumberArrayValidator=v;var y=function(t){function e(e,r){var i=t.call(this)||this;return i.minValue=e,i.maxValue=r,i}return i(e,t),e.prototype.validate=function(e,r,i){return null==e?null:t.prototype.validate.call(this,e,r,i)||(e>this.maxValue||e<this.minValue?[{message:i+" must be a number between "+this.minValue.toString()+" and "+this.maxValue.toString(),path:(r?r+".":"")+i,keyword:"range"}]:null)},e}(u);e.RangeValidator=y},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.CaptureBookmarkRequestValidator=e.CaptureBookmarkOptionsValidator=e.ApplyBookmarkStateRequestValidator=e.ApplyBookmarkByNameRequestValidator=e.AddBookmarkRequestValidator=e.PlayBookmarkRequestValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var s=[{field:"playMode",validators:[l.Validators.fieldRequiredValidator,new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(s).validate(e,r,i)},e}(n.ObjectValidator);e.PlayBookmarkRequestValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"state",validators:[l.Validators.stringValidator]},{field:"displayName",validators:[l.Validators.stringValidator]},{field:"apply",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.AddBookmarkRequestValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ApplyBookmarkByNameRequestValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"state",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ApplyBookmarkStateRequestValidator=c;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"personalizeVisuals",validators:[l.Validators.booleanValidator]},{field:"allPages",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.CaptureBookmarkOptionsValidator=p;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"options",validators:[l.Validators.fieldRequiredValidator,l.Validators.captureBookmarkOptionsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.CaptureBookmarkRequestValidator=f},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.PaginatedReportCommandsValidator=e.SingleCommandSettingsValidator=e.CommandsSettingsValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"copy",validators:[l.Validators.singleCommandSettingsValidator]},{field:"drill",validators:[l.Validators.singleCommandSettingsValidator]},{field:"drillthrough",validators:[l.Validators.singleCommandSettingsValidator]},{field:"expandCollapse",validators:[l.Validators.singleCommandSettingsValidator]},{field:"exportData",validators:[l.Validators.singleCommandSettingsValidator]},{field:"includeExclude",validators:[l.Validators.singleCommandSettingsValidator]},{field:"removeVisual",validators:[l.Validators.singleCommandSettingsValidator]},{field:"search",validators:[l.Validators.singleCommandSettingsValidator]},{field:"seeData",validators:[l.Validators.singleCommandSettingsValidator]},{field:"sort",validators:[l.Validators.singleCommandSettingsValidator]},{field:"spotlight",validators:[l.Validators.singleCommandSettingsValidator]},{field:"insightsAnalysis",validators:[l.Validators.singleCommandSettingsValidator]},{field:"addComment",validators:[l.Validators.singleCommandSettingsValidator]},{field:"groupVisualContainers",validators:[l.Validators.singleCommandSettingsValidator]},{field:"summarize",validators:[l.Validators.singleCommandSettingsValidator]},{field:"clearSelection",validators:[l.Validators.singleCommandSettingsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.CommandsSettingsValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"displayOption",validators:[l.Validators.fieldRequiredValidator,l.Validators.commandDisplayOptionValidator]},{field:"selector",validators:[l.Validators.visualCommandSelectorValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SingleCommandSettingsValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"parameterPanel",validators:[l.Validators.parametersPanelValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PaginatedReportCommandsValidator=d},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.CustomThemeValidator=void 0;var o=r(3),n=r(4),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var l=[{field:"themeJson",validators:[new n.ObjectValidator]}];return new o.MultipleFieldsValidator(l).validate(e,r,i)},e}(n.ObjectValidator);e.CustomThemeValidator=l},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.DashboardLoadValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"id",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"pageView",validators:[l.Validators.pageViewFieldValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"embedUrl",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.DashboardLoadValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.DatasetBindingValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"datasetId",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.DatasetBindingValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ExportDataRequestValidator=void 0;var o=r(3),n=r(4),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var l=[{field:"rows",validators:[new n.NumberValidator]},{field:"exportDataType",validators:[new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(l).validate(e,r,i)},e}(n.ObjectValidator);e.ExportDataRequestValidator=l},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ExtensionsValidator=e.MenuGroupExtensionValidator=e.ExtensionValidator=e.CommandExtensionValidator=e.ExtensionItemValidator=e.ExtensionPointsValidator=e.GroupedMenuExtensionValidator=e.FlatMenuExtensionValidator=e.MenuExtensionBaseValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"title",validators:[l.Validators.stringValidator]},{field:"icon",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.MenuExtensionBaseValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"menuLocation",validators:[l.Validators.menuLocationValidator]},{field:"groupName",validators:[l.Validators.fieldForbiddenValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(s);e.FlatMenuExtensionValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"groupName",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"menuLocation",validators:[l.Validators.fieldForbiddenValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(s);e.GroupedMenuExtensionValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visualContextMenu",validators:[l.Validators.menuExtensionValidator]},{field:"visualOptionsMenu",validators:[l.Validators.menuExtensionValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ExtensionPointsValidator=c;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"extend",validators:[l.Validators.fieldRequiredValidator,l.Validators.extensionPointsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ExtensionItemValidator=p;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"title",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"icon",validators:[l.Validators.stringValidator]},{field:"selector",validators:[l.Validators.commandExtensionSelectorValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(p);e.CommandExtensionValidator=f;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"command",validators:[l.Validators.commandExtensionValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ExtensionValidator=h;var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"title",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"menuLocation",validators:[l.Validators.menuLocationValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.MenuGroupExtensionValidator=v;var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"commands",validators:[l.Validators.fieldRequiredValidator,l.Validators.commandExtensionArrayValidator]},{field:"groups",validators:[l.Validators.menuGroupExtensionArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ExtensionsValidator=y},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.OnLoadFiltersValidator=e.OnLoadFiltersBaseRemoveOperationValidator=e.OnLoadFiltersBaseValidator=e.ConditionItemValidator=e.RemoveFiltersRequestValidator=e.UpdateFiltersRequestValidator=e.FilterValidator=e.HierarchyFilterNodeValidator=e.HierarchyFilterValidator=e.IncludeExcludeFilterValidator=e.NotSupportedFilterValidator=e.TopNFilterValidator=e.RelativeTimeFilterValidator=e.RelativeDateFilterValidator=e.RelativeDateTimeFilterValidator=e.AdvancedFilterValidator=e.BasicFilterValidator=e.FilterValidatorBase=e.FilterDisplaySettingsValidator=e.FilterMeasureTargetValidator=e.FilterKeyHierarchyTargetValidator=e.FilterHierarchyTargetValidator=e.FilterKeyColumnsTargetValidator=e.FilterColumnTargetValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"table",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"column",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FilterColumnTargetValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"keys",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(s);e.FilterKeyColumnsTargetValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"table",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"hierarchy",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"hierarchyLevel",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FilterHierarchyTargetValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"keys",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(d);e.FilterKeyHierarchyTargetValidator=c;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"table",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"measure",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FilterMeasureTargetValidator=p;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"isLockedInViewMode",validators:[l.Validators.booleanValidator]},{field:"isHiddenInViewMode",validators:[l.Validators.booleanValidator]},{field:"displayName",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FilterDisplaySettingsValidator=f;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"target",validators:[l.Validators.fieldRequiredValidator,l.Validators.filterTargetValidator]},{field:"$schema",validators:[l.Validators.stringValidator]},{field:"filterType",validators:[l.Validators.filterTypeValidator]},{field:"displaySettings",validators:[l.Validators.filterDisplaySettingsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FilterValidatorBase=h;var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"operator",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"values",validators:[l.Validators.fieldRequiredValidator,l.Validators.anyArrayValidator]},{field:"filterType",validators:[l.Validators.basicFilterTypeValidator]},{field:"requireSingleSelection",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.BasicFilterValidator=v;var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"logicalOperator",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"conditions",validators:[l.Validators.filterConditionsValidator]},{field:"filterType",validators:[l.Validators.advancedFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.AdvancedFilterValidator=y;var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"operator",validators:[l.Validators.fieldRequiredValidator,l.Validators.relativeDateFilterOperatorValidator]},{field:"timeUnitsCount",validators:[l.Validators.numberValidator]},{field:"timeUnitType",validators:[l.Validators.fieldRequiredValidator,l.Validators.relativeDateTimeFilterUnitTypeValidator]},{field:"filterType",validators:[l.Validators.relativeDateTimeFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.RelativeDateTimeFilterValidator=m;var V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"includeToday",validators:[l.Validators.fieldRequiredValidator,l.Validators.booleanValidator]},{field:"timeUnitType",validators:[l.Validators.fieldRequiredValidator,l.Validators.relativeDateFilterTimeUnitTypeValidator]},{field:"filterType",validators:[l.Validators.relativeDateFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(m);e.RelativeDateFilterValidator=V;var g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"timeUnitType",validators:[l.Validators.fieldRequiredValidator,l.Validators.relativeTimeFilterTimeUnitTypeValidator]},{field:"filterType",validators:[l.Validators.relativeTimeFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(m);e.RelativeTimeFilterValidator=g;var b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"operator",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"itemCount",validators:[l.Validators.fieldRequiredValidator,l.Validators.numberValidator]},{field:"filterType",validators:[l.Validators.topNFilterTypeValidator]},{field:"orderBy",validators:[l.Validators.fieldRequiredValidator,l.Validators.filterTargetValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.TopNFilterValidator=b;var w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"message",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"notSupportedTypeName",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"filterType",validators:[l.Validators.notSupportedFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.NotSupportedFilterValidator=w;var P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"isExclude",validators:[l.Validators.fieldRequiredValidator,l.Validators.booleanValidator]},{field:"values",validators:[l.Validators.fieldRequiredValidator,l.Validators.anyArrayValidator]},{field:"filterType",validators:[l.Validators.includeExludeFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.IncludeExcludeFilterValidator=P;var S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"hierarchyData",validators:[l.Validators.fieldRequiredValidator,l.Validators.hierarchyFilterValuesValidator]},{field:"filterType",validators:[l.Validators.hierarchyFilterTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(h);e.HierarchyFilterValidator=S;var O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"value",validators:[l.Validators.anyValueValidator]},{field:"keyValues",validators:[l.Validators.anyArrayValidator]},{field:"children",validators:[l.Validators.hierarchyFilterValuesValidator]},{field:"operator",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.HierarchyFilterNodeValidator=O;var _=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){return null==e?null:t.prototype.validate.call(this,e,r,i)||l.Validators.anyFilterValidator.validate(e,r,i)},e}(n.ObjectValidator);e.FilterValidator=_;var T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filtersOperation",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersOperationsUpdateValidator]},{field:"filters",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.UpdateFiltersRequestValidator=T;var E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filtersOperation",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersOperationsRemoveAllValidator]},{field:"filters",validators:[l.Validators.fieldForbiddenValidator,l.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.RemoveFiltersRequestValidator=E;var F=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"value",validators:[l.Validators.anyValueValidator]},{field:"operator",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ConditionItemValidator=F;var C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"operation",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersOperationsUpdateValidator]},{field:"filters",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.OnLoadFiltersBaseValidator=C;var R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"operation",validators:[l.Validators.fieldRequiredValidator,l.Validators.filtersOperationsRemoveAllValidator]},{field:"filters",validators:[l.Validators.fieldForbiddenValidator,l.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.OnLoadFiltersBaseRemoveOperationValidator=R;var k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"allPages",validators:[l.Validators.onLoadFiltersBaseValidator]},{field:"currentPage",validators:[l.Validators.onLoadFiltersBaseValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.OnLoadFiltersValidator=k},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.PageLayoutValidator=e.DisplayStateValidator=e.VisualLayoutValidator=e.CustomLayoutValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"pageSize",validators:[l.Validators.pageSizeValidator]},{field:"displayOption",validators:[l.Validators.customLayoutDisplayOptionValidator]},{field:"pagesLayout",validators:[l.Validators.pagesLayoutValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.CustomLayoutValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"x",validators:[l.Validators.numberValidator]},{field:"y",validators:[l.Validators.numberValidator]},{field:"z",validators:[l.Validators.numberValidator]},{field:"width",validators:[l.Validators.numberValidator]},{field:"height",validators:[l.Validators.numberValidator]},{field:"displayState",validators:[l.Validators.displayStateValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualLayoutValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"mode",validators:[l.Validators.displayStateModeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.DisplayStateValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visualsLayout",validators:[l.Validators.fieldRequiredValidator,l.Validators.pageLayoutValidator]},{field:"defaultLayout",validators:[l.Validators.visualLayoutValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PageLayoutValidator=c},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.PageViewFieldValidator=e.PageValidator=e.CustomPageSizeValidator=e.PageSizeValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"type",validators:[l.Validators.fieldRequiredValidator,l.Validators.pageSizeTypeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PageSizeValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"width",validators:[l.Validators.numberValidator]},{field:"height",validators:[l.Validators.numberValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(s);e.CustomPageSizeValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PageValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){return null==e?null:t.prototype.validate.call(this,e,r,i)||(["actualSize","fitToWidth","oneColumn"].indexOf(e)<0?[{message:'pageView must be a string with one of the following values: "actualSize", "fitToWidth", "oneColumn"'}]:null)},e}(n.StringValidator);e.PageViewFieldValidator=c},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.VisualizationsPaneValidator=e.SyncSlicersPaneValidator=e.SelectionPaneValidator=e.PageNavigationPaneValidator=e.FiltersPaneValidator=e.FieldsPaneValidator=e.BookmarksPaneValidator=e.QnaPanesValidator=e.ReportPanesValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"bookmarks",validators:[l.Validators.bookmarksPaneValidator]},{field:"fields",validators:[l.Validators.fieldsPaneValidator]},{field:"filters",validators:[l.Validators.filtersPaneValidator]},{field:"pageNavigation",validators:[l.Validators.pageNavigationPaneValidator]},{field:"selection",validators:[l.Validators.selectionPaneValidator]},{field:"syncSlicers",validators:[l.Validators.syncSlicersPaneValidator]},{field:"visualizations",validators:[l.Validators.visualizationsPaneValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ReportPanesValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filters",validators:[l.Validators.filtersPaneValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.QnaPanesValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.BookmarksPaneValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"expanded",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FieldsPaneValidator=c;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]},{field:"expanded",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.FiltersPaneValidator=p;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]},{field:"position",validators:[l.Validators.pageNavigationPositionValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PageNavigationPaneValidator=f;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SelectionPaneValidator=h;var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SyncSlicersPaneValidator=v;var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"expanded",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualizationsPaneValidator=y},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.QnaInterpretInputDataValidator=e.QnaSettingsValidator=e.LoadQnaValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"datasetIds",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringArrayValidator]},{field:"question",validators:[l.Validators.stringValidator]},{field:"viewMode",validators:[l.Validators.viewModeValidator]},{field:"settings",validators:[l.Validators.qnaSettingValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"groupId",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.LoadQnaValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filterPaneEnabled",validators:[l.Validators.booleanValidator]},{field:"hideErrors",validators:[l.Validators.booleanValidator]},{field:"panes",validators:[l.Validators.qnaPanesValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.QnaSettingsValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"datasetIds",validators:[l.Validators.stringArrayValidator]},{field:"question",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.QnaInterpretInputDataValidator=d},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ReportCreateValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"datasetId",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"theme",validators:[l.Validators.customThemeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ReportCreateValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ReportLoadValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"id",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"settings",validators:[l.Validators.settingsValidator]},{field:"pageName",validators:[l.Validators.stringValidator]},{field:"filters",validators:[l.Validators.reportLoadFiltersValidator]},{field:"permissions",validators:[l.Validators.permissionsValidator]},{field:"viewMode",validators:[l.Validators.viewModeValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"bookmark",validators:[l.Validators.applyBookmarkValidator]},{field:"theme",validators:[l.Validators.customThemeValidator]},{field:"embedUrl",validators:[l.Validators.stringValidator]},{field:"datasetBinding",validators:[l.Validators.datasetBindingValidator]},{field:"contrastMode",validators:[l.Validators.contrastModeValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ReportLoadValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ReportParameterFieldsValidator=e.PaginatedReportLoadValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"id",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"settings",validators:[l.Validators.paginatedReportsettingsValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"embedUrl",validators:[l.Validators.stringValidator]},{field:"type",validators:[l.Validators.stringValidator]},{field:"parameterValues",validators:[l.Validators.parameterValuesArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PaginatedReportLoadValidator=s;var u=function(){function t(){}return t.prototype.validate=function(t,e,r){if(null==t)return null;var i=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"value",validators:[l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,e,r)},t}();e.ReportParameterFieldsValidator=u},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.SaveAsParametersValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SaveAsParametersValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.SlicerTargetSelectorValidator=e.VisualTypeSelectorValidator=e.VisualSelectorValidator=void 0;var o=r(3),n=r(4),l=r(4),s=r(1),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"$schema",validators:[s.Validators.stringValidator,new l.SchemaValidator("http://powerbi.com/product/schema#visualSelector")]},{field:"visualName",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualSelectorValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"$schema",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator,new l.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")]},{field:"visualType",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualTypeSelectorValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"$schema",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator,new l.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")]},{field:"target",validators:[s.Validators.fieldRequiredValidator,s.Validators.slicerTargetValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SlicerTargetSelectorValidator=c},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.PaginatedReportSettingsValidator=e.SettingsValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filterPaneEnabled",validators:[l.Validators.booleanValidator]},{field:"navContentPaneEnabled",validators:[l.Validators.booleanValidator]},{field:"bookmarksPaneEnabled",validators:[l.Validators.booleanValidator]},{field:"useCustomSaveAsDialog",validators:[l.Validators.booleanValidator]},{field:"extensions",validators:[l.Validators.extensionsValidator]},{field:"layoutType",validators:[l.Validators.layoutTypeValidator]},{field:"customLayout",validators:[l.Validators.customLayoutValidator]},{field:"background",validators:[l.Validators.backgroundValidator]},{field:"visualSettings",validators:[l.Validators.visualSettingsValidator]},{field:"hideErrors",validators:[l.Validators.booleanValidator]},{field:"commands",validators:[l.Validators.commandsSettingsArrayValidator]},{field:"hyperlinkClickBehavior",validators:[l.Validators.hyperlinkClickBehaviorValidator]},{field:"bars",validators:[l.Validators.reportBarsValidator]},{field:"panes",validators:[l.Validators.reportPanesValidator]},{field:"personalBookmarksEnabled",validators:[l.Validators.booleanValidator]},{field:"persistentFiltersEnabled",validators:[l.Validators.booleanValidator]},{field:"visualRenderedEvents",validators:[l.Validators.booleanValidator]},{field:"authoringHintsEnabled",validators:[l.Validators.booleanValidator]},{field:"printSettings",validators:[l.Validators.printSettingsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SettingsValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"commands",validators:[l.Validators.paginatedReportCommandsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.PaginatedReportSettingsValidator=u},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.SlicerStateValidator=e.SlicerValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"selector",validators:[l.Validators.fieldRequiredValidator,l.Validators.slicerSelectorValidator]},{field:"state",validators:[l.Validators.fieldRequiredValidator,l.Validators.slicerStateValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SlicerValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"filters",validators:[l.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.SlicerStateValidator=u},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.TileLoadValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"id",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"dashboardId",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"pageView",validators:[l.Validators.stringValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"width",validators:[l.Validators.numberValidator]},{field:"height",validators:[l.Validators.numberValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.TileLoadValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.VisualHeaderValidator=e.VisualHeaderSettingsValidator=e.VisualSettingsValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visualHeaders",validators:[l.Validators.visualHeadersValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualSettingsValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"visible",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualHeaderSettingsValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"settings",validators:[l.Validators.fieldRequiredValidator,l.Validators.visualHeaderSettingsValidator]},{field:"selector",validators:[l.Validators.visualHeaderSelectorValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.VisualHeaderValidator=d},(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AnyOfValidator=void 0;var r=function(){function t(t){this.validators=t}return t.prototype.validate=function(t,e,r){if(null==t)return null;for(var i=!1,a=0,o=this.validators;a<o.length;a++)if(!o[a].validate(t,e,r)){i=!0;break}return i?null:[{message:r+" property is invalid",path:(e?e+".":"")+r,keyword:"invalid"}]},t}();e.AnyOfValidator=r},(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FieldForbiddenValidator=void 0;var r=function(){function t(){}return t.prototype.validate=function(t,e,r){return void 0!==t?[{message:r+" is forbidden",path:(e?e+".":"")+r,keyword:"forbidden"}]:null},t}();e.FieldForbiddenValidator=r},(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FieldRequiredValidator=void 0;var r=function(){function t(){}return t.prototype.validate=function(t,e,r){return null==t?[{message:r+" is required",path:(e?e+".":"")+r,keyword:"required"}]:null},t}();e.FieldRequiredValidator=r},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.MapValidator=void 0;var o=function(t){function e(e,r){var i=t.call(this)||this;return i.keyValidators=e,i.valueValidators=r,i}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;for(var o in e)if(e.hasOwnProperty(o)){for(var n=(r?r+".":"")+i+"."+o,l=0,s=this.keyValidators;l<s.length;l++)if(a=s[l].validate(o,n,i))return a;for(var u=0,d=this.valueValidators;u<d.length;u++)if(a=d[u].validate(e[o],n,i))return a}return null},e}(r(4).ObjectValidator);e.MapValidator=o},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ParametersPanelValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"expanded",validators:[l.Validators.booleanValidator]},{field:"enabled",validators:[l.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ParametersPanelValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.TableDataValidator=e.TableSchemaValidator=e.ColumnSchemaValidator=e.CredentialsValidator=e.DatasourceConnectionConfigValidator=e.DatasetCreateConfigValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"locale",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"mashupDocument",validators:[l.Validators.stringValidator]},{field:"datasourceConnectionConfig",validators:[l.Validators.datasourceConnectionConfigValidator]},{field:"tableSchemaList",validators:[l.Validators.tableSchemaListValidator]},{field:"data",validators:[l.Validators.tableDataArrayValidator]}];return(a=new o.MultipleFieldsValidator(n).validate(e,r,i))||(e.datasourceConnectionConfig&&null==e.mashupDocument?[{message:"mashupDocument cannot be empty when datasourceConnectionConfig is presented"}]:e.data&&null==e.tableSchemaList?[{message:"tableSchemaList cannot be empty when data is provided"}]:null==e.data&&null==e.mashupDocument?[{message:"At least one of data or mashupDocument must be provided"}]:void 0)},e}(n.ObjectValidator);e.DatasetCreateConfigValidator=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"dataCacheMode",validators:[l.Validators.dataCacheModeValidator]},{field:"credentials",validators:[l.Validators.credentialsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.DatasourceConnectionConfigValidator=u;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"credentialType",validators:[l.Validators.credentialTypeValidator]},{field:"credentialDetails",validators:[l.Validators.credentialDetailsValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.CredentialsValidator=d;var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"displayName",validators:[l.Validators.stringValidator]},{field:"dataType",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.ColumnSchemaValidator=c;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"columns",validators:[l.Validators.fieldRequiredValidator,l.Validators.columnSchemaArrayValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.TableSchemaValidator=p;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"name",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"rows",validators:[l.Validators.fieldRequiredValidator,l.Validators.rawDataValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.TableDataValidator=f},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.QuickCreateValidator=void 0;var o=r(3),n=r(4),l=r(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var n=[{field:"accessToken",validators:[l.Validators.fieldRequiredValidator,l.Validators.stringValidator]},{field:"groupId",validators:[l.Validators.stringValidator]},{field:"tokenType",validators:[l.Validators.tokenTypeValidator]},{field:"theme",validators:[l.Validators.customThemeValidator]},{field:"datasetCreateConfig",validators:[l.Validators.fieldRequiredValidator,l.Validators.datasetCreateConfigValidator]}];return new o.MultipleFieldsValidator(n).validate(e,r,i)},e}(n.ObjectValidator);e.QuickCreateValidator=s},function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.PrintSettingsValidator=void 0;var o=r(3),n=r(4),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.validate=function(e,r,i){if(null==e)return null;var a=t.prototype.validate.call(this,e,r,i);if(a)return a;var l=[{field:"browserPrintAdjustmentsMode",validators:[new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(l).validate(e,r,i)},e}(n.ObjectValidator);e.PrintSettingsValidator=l}],e={},r=function r(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}(0);return r})(),t.exports=e()},891:function(t){var e;e=function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var i=r(1),a=function(){function t(t){this.handlers=t,this.getRouteRecognizer=new i,this.patchRouteRecognizer=new i,this.postRouteRecognizer=new i,this.putRouteRecognizer=new i,this.deleteRouteRecognizer=new i}return t.prototype.get=function(t,e){return this.registerHandler(this.getRouteRecognizer,"GET",t,e),this},t.prototype.patch=function(t,e){return this.registerHandler(this.patchRouteRecognizer,"PATCH",t,e),this},t.prototype.post=function(t,e){return this.registerHandler(this.postRouteRecognizer,"POST",t,e),this},t.prototype.put=function(t,e){return this.registerHandler(this.putRouteRecognizer,"PUT",t,e),this},t.prototype.delete=function(t,e){return this.registerHandler(this.deleteRouteRecognizer,"DELETE",t,e),this},t.prototype.registerHandler=function(t,e,r,i){t.add([{path:r,handler:function(t){var e=new o;return Promise.resolve(i(t,e)).then((function(t){return e}))}}]);var a={test:function(r){if(r.method!==e)return!1;var i=t.recognize(r.url);if(void 0===i)return!1;var a=i[0];return r.params=a.params,r.queryParams=i.queryParams,r.handler=a.handler,!0},handle:function(t){return t.handler(t)}};this.handlers.addHandler(a)},t}();e.Router=a;var o=function(){function t(){this.statusCode=200,this.headers={},this.body=null}return t.prototype.send=function(t,e){this.statusCode=t,this.body=e},t}();e.Response=o},function(t,e,r){var i;(function(t){(function(){"use strict";function a(t,e,r){this.path=t,this.matcher=e,this.delegate=r}function o(t){this.routes={},this.children={},this.target=t}function n(t,e,r){return function(i,o){var l=t+i;if(!o)return new a(t+i,e,r);o(n(l,e,r))}}function l(t,e,r){for(var i=0,a=0;a<t.length;a++)i+=t[a].path.length;var o={path:e=e.substr(i),handler:r};t.push(o)}function s(t,e,r,i){var a=e.routes;for(var o in a)if(a.hasOwnProperty(o)){var n=t.slice();l(n,o,a[o]),e.children[o]?s(n,e.children[o],r,i):r.call(i,n)}}a.prototype={to:function(t,e){var r=this.delegate;if(r&&r.willAddRoute&&(t=r.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,t,e,this.delegate)}return this}},o.prototype={add:function(t,e){this.routes[t]=e},addChild:function(t,e,r,i){var a=new o(e);this.children[t]=a;var l=n(t,a,i);i&&i.contextEntered&&i.contextEntered(e,l),r(l)}};var u=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");function d(t){this.string=t}function c(t){this.name=t}function p(t){this.name=t}function f(){}function h(t,e,r){"/"===t.charAt(0)&&(t=t.substr(1));var i=t.split("/"),a=new Array(i.length);r.val="";for(var o=0;o<i.length;o++){var n,l=i[o];(n=l.match(/^:([^\/]+)$/))?(a[o]=new c(n[1]),e.push(n[1]),r.val+="3"):(n=l.match(/^\*([^\/]+)$/))?(a[o]=new p(n[1]),r.val+="1",e.push(n[1])):""===l?(a[o]=new f,r.val+="2"):(a[o]=new d(l),r.val+="4")}return r.val=+r.val,a}function v(t){this.charSpec=t,this.nextStates=[],this.charSpecs={},this.regex=void 0,this.handlers=void 0,this.specificity=void 0}function y(t,e){for(var r=[],i=0,a=t.length;i<a;i++){var o=t[i];r=r.concat(o.match(e))}return r}d.prototype={eachChar:function(t){for(var e,r=this.string,i=0;i<r.length;i++)e=r.charAt(i),t=t.put({invalidChars:void 0,repeat:!1,validChars:e});return t},regex:function(){return this.string.replace(u,"\\$1")},generate:function(){return this.string}},c.prototype={eachChar:function(t){return t.put({invalidChars:"/",repeat:!0,validChars:void 0})},regex:function(){return"([^/]+)"},generate:function(t){return t[this.name]}},p.prototype={eachChar:function(t){return t.put({invalidChars:"",repeat:!0,validChars:void 0})},regex:function(){return"(.+)"},generate:function(t){return t[this.name]}},f.prototype={eachChar:function(t){return t},regex:function(){return""},generate:function(){return""}},v.prototype={get:function(t){if(this.charSpecs[t.validChars])return this.charSpecs[t.validChars];for(var e=this.nextStates,r=0;r<e.length;r++){var i=e[r],a=i.charSpec.validChars===t.validChars;if(a=a&&i.charSpec.invalidChars===t.invalidChars)return this.charSpecs[t.validChars]=i,i}},put:function(t){var e;return(e=this.get(t))||(e=new v(t),this.nextStates.push(e),t.repeat&&e.nextStates.push(e)),e},match:function(t){for(var e,r,i,a=this.nextStates,o=[],n=0;n<a.length;n++)void 0!==(i=(r=(e=a[n]).charSpec).validChars)?-1!==i.indexOf(t)&&o.push(e):void 0!==(i=r.invalidChars)&&-1===i.indexOf(t)&&o.push(e);return o}};var m=Object.create||function(t){function e(){}return e.prototype=t,new e};function V(t){this.queryParams=t||{}}function g(t){var e;t=t.replace(/\+/gm,"%20");try{e=decodeURIComponent(t)}catch(t){e=""}return e}V.prototype=m({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var b=function(){this.rootState=new v,this.names={}};(b.prototype={add:function(t,e){for(var r,i=this.rootState,a="^",o={},n=new Array(t.length),l=[],s=!0,u=0;u<t.length;u++){var d=t[u],c=[],p=h(d.path,c,o);l=l.concat(p);for(var v=0;v<p.length;v++){var y=p[v];y instanceof f||(s=!1,i=i.put({invalidChars:void 0,repeat:!1,validChars:"/"}),a+="/",i=y.eachChar(i),a+=y.regex())}var m={handler:d.handler,names:c};n[u]=m}s&&(i=i.put({invalidChars:void 0,repeat:!1,validChars:"/"}),a+="/"),i.handlers=n,i.regex=new RegExp(a+"$"),i.specificity=o,(r=e&&e.as)&&(this.names[r]={segments:l,handlers:n})},handlersFor:function(t){var e=this.names[t];if(!e)throw new Error("There is no route named "+t);for(var r=new Array(e.handlers.length),i=0;i<e.handlers.length;i++)r[i]=e.handlers[i];return r},hasRoute:function(t){return!!this.names[t]},generate:function(t,e){var r=this.names[t],i="";if(!r)throw new Error("There is no route named "+t);for(var a=r.segments,o=0;o<a.length;o++){var n=a[o];n instanceof f||(i+="/",i+=n.generate(e))}return"/"!==i.charAt(0)&&(i="/"+i),e&&e.queryParams&&(i+=this.generateQueryString(e.queryParams,r.handlers)),i},generateQueryString:function(t,e){var r,i=[],a=[];for(var o in t)t.hasOwnProperty(o)&&a.push(o);a.sort();for(var n=0;n<a.length;n++){var l=t[o=a[n]];if(null!=l){var s=encodeURIComponent(o);if(r=l,"[object Array]"===Object.prototype.toString.call(r))for(var u=0;u<l.length;u++){var d=o+"[]="+encodeURIComponent(l[u]);i.push(d)}else s+="="+encodeURIComponent(l),i.push(s)}}return 0===i.length?"":"?"+i.join("&")},parseQueryString:function(t){for(var e=t.split("&"),r={},i=0;i<e.length;i++){var a,o=e[i].split("="),n=g(o[0]),l=n.length,s=!1;1===o.length?a="true":(l>2&&"[]"===n.slice(l-2)&&(s=!0,r[n=n.slice(0,l-2)]||(r[n]=[])),a=o[1]?g(o[1]):""),s?r[n].push(a):r[n]=a}return r},recognize:function(t){var e,r,i,a=[this.rootState],o={},n=!1;if(-1!==(i=t.indexOf("?"))){var l=t.substr(i+1,t.length);t=t.substr(0,i),o=this.parseQueryString(l)}for("/"!==(t=decodeURI(t)).charAt(0)&&(t="/"+t),(e=t.length)>1&&"/"===t.charAt(e-1)&&(t=t.substr(0,e-1),n=!0),r=0;r<t.length&&(a=y(a,t.charAt(r))).length;r++);var s=[];for(r=0;r<a.length;r++)a[r].handlers&&s.push(a[r]);a=function(t){return t.sort((function(t,e){return e.specificity.val-t.specificity.val}))}(s);var u=s[0];if(u&&u.handlers)return n&&"(.+)$"===u.regex.source.slice(-5)&&(t+="/"),function(t,e,r){var i=t.handlers,a=t.regex,o=e.match(a),n=1,l=new V(r);l.length=i.length;for(var s=0;s<i.length;s++){for(var u=i[s],d=u.names,c={},p=0;p<d.length;p++)c[d[p]]=o[n++];l[s]={handler:u.handler,params:c,isDynamic:!!d.length}}return l}(u,t,o)}}).map=function(t,e){var r=new o;t(n("",r,this.delegate)),s([],r,(function(t){e?e(this,t):this.add(t)}),this)},b.VERSION="0.1.11";var w=b;r(3).amd?void 0===(i=function(){return w}.call(e,r,e,t))||(t.exports=i):void 0!==t&&t.exports?t.exports=w:void 0!==this&&(this.RouteRecognizer=w)}).call(this)}).call(e,r(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}}])},t.exports=e()},674:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.AdvancedFilterBuilder=void 0;var o=r(149),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.conditions=[],e}return a(e,t),e.prototype.and=function(){return this.logicalOperator="And",this},e.prototype.or=function(){return this.logicalOperator="Or",this},e.prototype.addCondition=function(t,e){var r={operator:t,value:e};return this.conditions.push(r),this},e.prototype.build=function(){return new o.AdvancedFilter(this.target,this.logicalOperator,this.conditions)},e}(r(277).FilterBuilder);e.AdvancedFilterBuilder=n},153:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.BasicFilterBuilder=void 0;var o=r(149),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isRequireSingleSelection=!1,e}return a(e,t),e.prototype.in=function(t){return this.operator="In",this.values=t,this},e.prototype.notIn=function(t){return this.operator="NotIn",this.values=t,this},e.prototype.all=function(){return this.operator="All",this.values=[],this},e.prototype.requireSingleSelection=function(t){return void 0===t&&(t=!1),this.isRequireSingleSelection=t,this},e.prototype.build=function(){var t=new o.BasicFilter(this.target,this.operator,this.values);return t.requireSingleSelection=this.isRequireSingleSelection,t},e}(r(277).FilterBuilder);e.BasicFilterBuilder=n},277:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FilterBuilder=void 0;var r=function(){function t(){}return t.prototype.withTargetObject=function(t){return this.target=t,this},t.prototype.withColumnTarget=function(t,e){return this.target={table:t,column:e},this},t.prototype.withMeasureTarget=function(t,e){return this.target={table:t,measure:e},this},t.prototype.withHierarchyLevelTarget=function(t,e,r){return this.target={table:t,hierarchy:e,hierarchyLevel:r},this},t.prototype.withColumnAggregation=function(t,e,r){return this.target={table:t,column:e,aggregationFunction:r},this},t.prototype.withHierarchyLevelAggregationTarget=function(t,e,r,i){return this.target={table:t,hierarchy:e,hierarchyLevel:r,aggregationFunction:i},this},t}();e.FilterBuilder=r},567:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeTimeFilterBuilder=e.RelativeDateFilterBuilder=e.TopNFilterBuilder=e.AdvancedFilterBuilder=e.BasicFilterBuilder=void 0;var i=r(153);Object.defineProperty(e,"BasicFilterBuilder",{enumerable:!0,get:function(){return i.BasicFilterBuilder}});var a=r(674);Object.defineProperty(e,"AdvancedFilterBuilder",{enumerable:!0,get:function(){return a.AdvancedFilterBuilder}});var o=r(664);Object.defineProperty(e,"TopNFilterBuilder",{enumerable:!0,get:function(){return o.TopNFilterBuilder}});var n=r(844);Object.defineProperty(e,"RelativeDateFilterBuilder",{enumerable:!0,get:function(){return n.RelativeDateFilterBuilder}});var l=r(275);Object.defineProperty(e,"RelativeTimeFilterBuilder",{enumerable:!0,get:function(){return l.RelativeTimeFilterBuilder}})},844:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeDateFilterBuilder=void 0;var o=r(149),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isTodayIncluded=!0,e}return a(e,t),e.prototype.inLast=function(t,e){return this.operator=o.RelativeDateOperators.InLast,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.inThis=function(t,e){return this.operator=o.RelativeDateOperators.InThis,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.inNext=function(t,e){return this.operator=o.RelativeDateOperators.InNext,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.includeToday=function(t){return this.isTodayIncluded=t,this},e.prototype.build=function(){return new o.RelativeDateFilter(this.target,this.operator,this.timeUnitsCount,this.timeUnitType,this.isTodayIncluded)},e}(r(277).FilterBuilder);e.RelativeDateFilterBuilder=n},275:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeTimeFilterBuilder=void 0;var o=r(149),n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.inLast=function(t,e){return this.operator=o.RelativeDateOperators.InLast,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.inThis=function(t,e){return this.operator=o.RelativeDateOperators.InThis,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.inNext=function(t,e){return this.operator=o.RelativeDateOperators.InNext,this.timeUnitsCount=t,this.timeUnitType=e,this},e.prototype.build=function(){return new o.RelativeTimeFilter(this.target,this.operator,this.timeUnitsCount,this.timeUnitType)},e}(r(277).FilterBuilder);e.RelativeTimeFilterBuilder=n},664:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.TopNFilterBuilder=void 0;var o=r(149),n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.top=function(t){return this.operator="Top",this.itemCount=t,this},e.prototype.bottom=function(t){return this.operator="Bottom",this.itemCount=t,this},e.prototype.orderByTarget=function(t){return this.orderByTargetValue=t,this},e.prototype.build=function(){return new o.TopNFilter(this.target,this.operator,this.itemCount,this.orderByTargetValue)},e}(r(277).FilterBuilder);e.TopNFilterBuilder=n},460:function(t,e,r){var i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.BookmarksManager=void 0;var o=r(882),n=r(758),l=function(){function t(t,e,r){this.service=t,this.config=e,this.iframe=r}return t.prototype.getBookmarks=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:if((0,o.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(n.APINotSupportedForRDLError)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/bookmarks",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,t.sent().body];case 3:throw t.sent().body;case 4:return[2]}}))}))},t.prototype.apply=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if((0,o.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(n.APINotSupportedForRDLError)];e={name:t},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/bookmarks/applyByName",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},t.prototype.play=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if((0,o.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(n.APINotSupportedForRDLError)];e={playMode:t},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/bookmarks/play",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},t.prototype.capture=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if((0,o.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(n.APINotSupportedForRDLError)];e={options:t||{}},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/bookmarks/capture",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent().body];case 3:throw r.sent().body;case 4:return[2]}}))}))},t.prototype.applyState=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if((0,o.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(n.APINotSupportedForRDLError)];e={state:t},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/bookmarks/applyState",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},t}();e.BookmarksManager=l},913:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={version:"2.22.3",type:"js"}},536:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Create=void 0;var l=r(149),s=r(932),u=r(882),d=function(t){function e(e,r,i,a,o){return t.call(this,e,r,i,void 0,a,o)||this}return a(e,t),e.prototype.getId=function(){var t=this.createConfig&&this.createConfig.datasetId?this.createConfig.datasetId:e.findIdFromEmbedUrl(this.config.embedUrl);if("string"!=typeof t||0===t.length)throw new Error("Dataset id is required, but it was not found. You must provide an id either as part of embed configuration.");return t},e.prototype.validate=function(t){return(0,l.validateCreateReport)(t)},e.prototype.configChanged=function(t){if(!t){var e=this.config;this.createConfig={accessToken:e.accessToken,datasetId:e.datasetId||this.getId(),groupId:e.groupId,settings:e.settings,tokenType:e.tokenType,theme:e.theme}}},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"reportEmbed"},e.prototype.isSaved=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,u.isSavedInternal(this.service.hpm,this.config.uniqueId,this.iframe.contentWindow)];case 1:return[2,t.sent()]}}))}))},e.findIdFromEmbedUrl=function(t){var e,r=t.match(/datasetId="?([^&]+)"?/);return r&&(e=r[1]),e},e.prototype.create=function(){var t;return o(this,void 0,void 0,(function(){var e,r;return n(this,(function(i){switch(i.label){case 0:if(e=(0,l.validateCreateReport)(this.createConfig))throw e;i.label=1;case 1:return i.trys.push([1,3,,4]),r={uid:this.config.uniqueId,sdkSessionId:this.service.getSdkSessionId()},(null===(t=this.eventHooks)||void 0===t?void 0:t.accessTokenProvider)&&(r.tokenProviderSupplied=!0),[4,this.service.hpm.post("/report/create",this.createConfig,r,this.iframe.contentWindow)];case 2:return[2,i.sent().body];case 3:throw i.sent().body;case 4:return[2]}}))}))},e}(s.Embed);e.Create=d},365:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.Dashboard=void 0;var o=r(149),n=function(t){function e(r,i,a,o,n){var l=t.call(this,r,i,a,void 0,o,n)||this;return l.loadPath="/dashboard/load",l.phasedLoadPath="/dashboard/prepare",Array.prototype.push.apply(l.allowedEvents,e.allowedEvents),l}return a(e,t),e.findIdFromEmbedUrl=function(t){var e,r=t.match(/dashboardId="?([^&]+)"?/);return r&&(e=r[1]),e},e.prototype.getId=function(){var t=this.config,r=t.id||this.element.getAttribute(e.dashboardIdAttribute)||e.findIdFromEmbedUrl(t.embedUrl);if("string"!=typeof r||0===r.length)throw new Error("Dashboard id is required, but it was not found. You must provide an id either as part of embed configuration or as attribute '".concat(e.dashboardIdAttribute,"'."));return r},e.prototype.validate=function(t){var e=t;return(0,o.validateDashboardLoad)(e)||this.validatePageView(e.pageView)},e.prototype.configChanged=function(t){t||(this.config.id=this.getId())},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"dashboardEmbed"},e.prototype.validatePageView=function(t){if(t&&"fitToWidth"!==t&&"oneColumn"!==t&&"actualSize"!==t)return[{message:"pageView must be one of the followings: fitToWidth, oneColumn, actualSize"}]},e.allowedEvents=["tileClicked","error"],e.dashboardIdAttribute="powerbi-dashboard-id",e.typeAttribute="powerbi-type",e.type="Dashboard",e}(r(932).Embed);e.Dashboard=n},932:function(t,e,r){var i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Embed=void 0;var o=r(149),n=r(913),l=r(758),s=r(882),u=function(){function t(e,r,i,a,o,n){if(this.allowedEvents=[],(0,s.autoAuthInEmbedUrl)(i.embedUrl))throw new Error(l.EmbedUrlNotSupported);Array.prototype.push.apply(this.allowedEvents,t.allowedEvents),this.eventHandlers=[],this.service=e,this.element=r,this.iframe=a,this.iframeLoaded=!1,this.embedtype=i.type.toLowerCase(),this.commands=[],this.groups=[],this.populateConfig(i,n),(0,s.isCreate)(this.embedtype)?this.setIframe(!1,o,n):this.setIframe(!0,o,n)}return t.prototype.create=function(){throw new Error("no create support")},t.prototype.save=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.post("/report/save",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.saveAs=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.service.hpm.post("/report/saveAs",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,e.sent().body];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.getCorrelationId=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.get("/getCorrelationId",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.load=function(t){var e;return i(this,void 0,void 0,(function(){var r,i,o;return a(this,(function(a){switch(a.label){case 0:if(!this.config.accessToken)return console.debug("Power BI SDK iframe is loaded but powerbi.embed is not called yet."),[2];if(!this.iframeLoaded)return console.debug("Power BI SDK is trying to post /report/load before iframe is ready."),[2];if(r=t&&"report"===this.config.type?this.phasedLoadPath:this.loadPath,i={uid:this.config.uniqueId,sdkSessionId:this.service.getSdkSessionId(),bootstrapped:this.config.bootstrapped,sdkVersion:n.default.version},(null===(e=this.eventHooks)||void 0===e?void 0:e.accessTokenProvider)&&(i.tokenProviderSupplied=!0),o=new Date,this.lastLoadRequest&&(0,s.getTimeDiffInMilliseconds)(this.lastLoadRequest,o)<100)return console.debug("Power BI SDK sent more than two /report/load requests in the last 100ms interval."),[2];this.lastLoadRequest=o,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.service.hpm.post(r,this.config,i,this.iframe.contentWindow)];case 2:return[2,a.sent().body];case 3:throw a.sent().body;case 4:return[2]}}))}))},t.prototype.off=function(t,e){var r=this,i={name:t,type:null,id:null,value:null};e?((0,s.remove)((function(t){return t.test(i)&&t.handle===e}),this.eventHandlers),this.element.removeEventListener(t,e)):this.eventHandlers.filter((function(t){return t.test(i)})).forEach((function(e){(0,s.remove)((function(t){return t===e}),r.eventHandlers),r.element.removeEventListener(t,e.handle)}))},t.prototype.on=function(t,e){if(-1===this.allowedEvents.indexOf(t))throw new Error("eventName must be one of ".concat(this.allowedEvents,". You passed: ").concat(t));this.eventHandlers.push({test:function(e){return e.name===t},handle:e}),this.element.addEventListener(t,e)},t.prototype.reload=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return[2,t.sent()]}}))}))},t.prototype.setAccessToken=function(e){return i(this,void 0,void 0,(function(){var r,i;return a(this,(function(a){switch(a.label){case 0:if(!e)throw new Error("Access token cannot be empty");r="create"===(r=this.config.type)||"visual"===r||"qna"===r||"quickCreate"===r?"report":r,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.service.hpm.post("/"+r+"/token",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return i=a.sent(),this.config.accessToken=e,this.element.setAttribute(t.accessTokenAttribute,e),this.service.accessToken=e,[2,i.body];case 3:throw a.sent().body;case 4:return[2]}}))}))},t.prototype.getAccessToken=function(e){var r=this.config.accessToken||this.element.getAttribute(t.accessTokenAttribute)||e;if(!r)throw new Error("No access token was found for element. You must specify an access token directly on the element using attribute '".concat(t.accessTokenAttribute,"' or specify a global token at: powerbi.accessToken."));return r},t.prototype.populateConfig=function(t,e){var r,i,a,n,l,u,d,c,p,f=this;this.bootstrapConfig?(this.config=(0,s.assign)({},this.bootstrapConfig,t),this.bootstrapConfig=null):this.config=(0,s.assign)({},t),this.config.embedUrl=this.getEmbedUrl(e),this.config.groupId=this.getGroupId(),this.addLocaleToEmbedUrl(t),this.config.uniqueId=this.getUniqueId();var h=null===(i=null===(r=this.config)||void 0===r?void 0:r.settings)||void 0===i?void 0:i.extensions;this.commands=null!==(a=null==h?void 0:h.commands)&&void 0!==a?a:[],this.groups=null!==(n=null==h?void 0:h.groups)&&void 0!==n?n:[],this.initialLayoutType=null!==(d=null===(u=null===(l=this.config)||void 0===l?void 0:l.settings)||void 0===u?void 0:u.layoutType)&&void 0!==d?d:o.LayoutType.Master;var v=null===(p=null===(c=this.config)||void 0===c?void 0:c.settings)||void 0===p?void 0:p.extensions;Array.isArray(v)&&(this.commands=[],v.map((function(t){(null==t?void 0:t.command)&&f.commands.push(t.command)}))),e?(this.bootstrapConfig=this.config,this.bootstrapConfig.bootstrapped=!0):this.config.accessToken=this.getAccessToken(this.service.accessToken),this.eventHooks=this.config.eventHooks,this.validateEventHooks(this.eventHooks),delete this.config.eventHooks,this.configChanged(e)},t.prototype.validateEventHooks=function(t){if(t){for(var e in t)if(t.hasOwnProperty(e)&&"function"!=typeof t[e])throw new Error(e+" must be a function");if(t.applicationContextProvider){if("report"!==this.embedtype.toLowerCase())throw new Error("applicationContextProvider is only supported in report embed");this.config.embedUrl=(0,s.addParamToUrl)(this.config.embedUrl,"registerQueryCallback","true")}if(t.accessTokenProvider&&(-1===["create","quickcreate","report"].indexOf(this.embedtype.toLowerCase())||this.config.tokenType!==o.TokenType.Aad))throw new Error("accessTokenProvider is only supported in report SaaS embed")}},t.prototype.addLocaleToEmbedUrl=function(t){if(t.settings){var e=t.settings.localeSettings;e&&e.language&&(this.config.embedUrl=(0,s.addParamToUrl)(this.config.embedUrl,"language",e.language)),e&&e.formatLocale&&(this.config.embedUrl=(0,s.addParamToUrl)(this.config.embedUrl,"formatLocale",e.formatLocale))}},t.prototype.getEmbedUrl=function(e){var r=this.config.embedUrl||this.element.getAttribute(t.embedUrlAttribute);if(e&&!r&&(r=this.getDefaultEmbedUrl(this.config.hostname)),"string"!=typeof r||0===r.length)throw new Error("Embed Url is required, but it was not found. You must provide an embed url either as part of embed configuration or as attribute '".concat(t.embedUrlAttribute,"'."));return r},t.prototype.getDefaultEmbedUrl=function(e){e||(e=t.defaultEmbedHostName);var r=this.getDefaultEmbedUrlEndpoint();if(0===(e=e.toLowerCase().trim()).indexOf("http://"))throw new Error("HTTP is not allowed. HTTPS is required");return 0===e.indexOf("https://")?"".concat(e,"/").concat(r):"https://".concat(e,"/").concat(r)},t.prototype.getUniqueId=function(){return this.config.uniqueId||this.element.getAttribute(t.nameAttribute)||(0,s.createRandomString)()},t.prototype.getGroupId=function(){return this.config.groupId||t.findGroupIdFromEmbedUrl(this.config.embedUrl)},t.prototype.fullscreen=function(){(this.iframe.requestFullscreen||this.iframe.msRequestFullscreen||this.iframe.mozRequestFullScreen||this.iframe.webkitRequestFullscreen).call(this.iframe)},t.prototype.exitFullscreen=function(){this.isFullscreen(this.iframe)&&(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen).call(document)},t.prototype.isFullscreen=function(t){return["fullscreenElement","webkitFullscreenElement","mozFullscreenScreenElement","msFullscreenElement"].some((function(e){return document[e]===t}))},t.prototype.setIframe=function(e,r,i){var a=this;if(!this.iframe){var o=document.createElement("iframe"),n=this.config.uniqueId?(0,s.addParamToUrl)(this.config.embedUrl,"uid",this.config.uniqueId):this.config.embedUrl;o.style.width="100%",o.style.height="100%",o.setAttribute("src",n),o.setAttribute("scrolling","no"),o.setAttribute("allowfullscreen","true");for(var l=this.element;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(o),this.iframe=l.firstChild}if(e){if(!i){var u=this.validate(this.config);if(u)throw u}this.iframe.addEventListener("load",(function(){a.iframeLoaded=!0,a.load(r)}),!1),this.service.getNumberOfComponents()<=t.maxFrontLoadTimes&&(this.frontLoadHandler=function(){a.frontLoadSendConfig(a.config)},this.element.addEventListener("ready",this.frontLoadHandler,!1))}else this.iframe.addEventListener("load",(function(){return a.create()}),!1)},t.prototype.setComponentTitle=function(t){this.iframe&&(null==t?this.iframe.removeAttribute("title"):this.iframe.setAttribute("title",t))},t.prototype.setComponentTabIndex=function(t){this.element&&this.element.setAttribute("tabindex",null==t?"0":t.toString())},t.prototype.removeComponentTabIndex=function(t){this.element&&this.element.removeAttribute("tabindex")},t.findGroupIdFromEmbedUrl=function(t){var e,r=t.match(/groupId="?([^&]+)"?/);return r&&(e=r[1]),e},t.prototype.frontLoadSendConfig=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if(!t.accessToken)return[2];if(e=this.validate(t))throw e;if(null==this.iframe.contentWindow)return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/frontload/config",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent().body];case 3:throw r.sent().body;case 4:return[2]}}))}))},t.allowedEvents=["loaded","saved","rendered","saveAsTriggered","error","dataSelected","buttonClicked","info"],t.accessTokenAttribute="powerbi-access-token",t.embedUrlAttribute="powerbi-embed-url",t.nameAttribute="powerbi-name",t.typeAttribute="powerbi-type",t.defaultEmbedHostName="https://app.powerbi.com",t.maxFrontLoadTimes=2,t}();e.Embed=u},758:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.EmbedUrlNotSupported=e.APINotSupportedForRDLError=void 0,e.APINotSupportedForRDLError="This API is currently not supported for RDL reports",e.EmbedUrlNotSupported="Embed URL is invalid for this scenario. Please use Power BI REST APIs to get the valid URL"},357:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.routerFactory=e.wpmpFactory=e.hpmFactory=void 0;var i=r(903),a=r(615),o=r(891),n=r(913);e.hpmFactory=function(t,e,r,i,o){return void 0===r&&(r=n.default.version),void 0===i&&(i=n.default.type),new a.HttpPostMessage(t,{"x-sdk-type":i,"x-sdk-version":r,"x-sdk-wrapper-version":o},e)},e.wpmpFactory=function(t,e,r){return new i.WindowPostMessageProxy({processTrackingProperties:{addTrackingProperties:a.HttpPostMessage.addTrackingProperties,getTrackingProperties:a.HttpPostMessage.getTrackingProperties},isErrorMessage:a.HttpPostMessage.isErrorMessage,suppressWarnings:!0,name:t,logMessages:e,eventSourceOverrideWindow:r})},e.routerFactory=function(t){return new o.Router(t)}},220:function(t,e,r){var i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Page=void 0;var o=r(149),n=r(558),l=r(882),s=r(758),u=function(){function t(t,e,r,i,a,o,n,l,s,u){this.report=t,this.name=e,this.displayName=r,this.isActive=i,this.visibility=a,this.defaultSize=o,this.mobileSize=l,this.defaultDisplayOption=n,this.background=s,this.wallpaper=u}return t.prototype.getFilters=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.report.service.hpm.get("/report/pages/".concat(this.name,"/filters"),{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.updateFilters=function(t,e){return i(this,void 0,void 0,(function(){var r;return a(this,(function(i){switch(i.label){case 0:r={filtersOperation:t,filters:e},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.report.service.hpm.post("/report/pages/".concat(this.name,"/filters"),r,{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,i.sent()];case 3:throw i.sent().body;case 4:return[2]}}))}))},t.prototype.removeFilters=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.updateFilters(o.FiltersOperations.RemoveAll)];case 1:return[2,t.sent()]}}))}))},t.prototype.setFilters=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.report.service.hpm.put("/report/pages/".concat(this.name,"/filters"),t,{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 1:return[2,e.sent()];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.delete=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.report.service.hpm.delete("/report/pages/".concat(this.name),{},{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.setActive=function(){return i(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:t={name:this.name,displayName:null,isActive:!0},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.report.service.hpm.put("/report/pages/active",t,{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,e.sent()];case 3:throw e.sent().body;case 4:return[2]}}))}))},t.prototype.setDisplayName=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:e={name:this.name,displayName:t},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.report.service.hpm.put("/report/pages/".concat(this.name,"/name"),e,{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},t.prototype.getVisuals=function(){return i(this,void 0,void 0,(function(){var t=this;return a(this,(function(e){switch(e.label){case 0:if((0,l.isRDLEmbed)(this.report.config.embedUrl))return[2,Promise.reject(s.APINotSupportedForRDLError)];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.report.service.hpm.get("/report/pages/".concat(this.name,"/visuals"),{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,e.sent().body.map((function(e){return new n.VisualDescriptor(t,e.name,e.title,e.type,e.layout)}))];case 3:throw e.sent().body;case 4:return[2]}}))}))},t.prototype.getVisualByName=function(t){return i(this,void 0,void 0,(function(){var e,r;return a(this,(function(i){switch(i.label){case 0:if((0,l.isRDLEmbed)(this.report.config.embedUrl))return[2,Promise.reject(s.APINotSupportedForRDLError)];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.report.service.hpm.get("/report/pages/".concat(this.name,"/visuals"),{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return e=i.sent(),(r=e.body.find((function(e){return e.name===t})))?[2,new n.VisualDescriptor(this,r.name,r.title,r.type,r.layout)]:[2,Promise.reject(o.CommonErrorCodes.NotFound)];case 3:throw i.sent().body;case 4:return[2]}}))}))},t.prototype.setVisualDisplayState=function(t,e){return i(this,void 0,void 0,(function(){var r;return a(this,(function(i){return r=this.name,[2,this.report.setVisualDisplayState(r,t,e)]}))}))},t.prototype.moveVisual=function(t,e,r,o){return i(this,void 0,void 0,(function(){var i;return a(this,(function(a){return i=this.name,[2,this.report.moveVisual(i,t,e,r,o)]}))}))},t.prototype.resizeVisual=function(t,e,r){return i(this,void 0,void 0,(function(){var i;return a(this,(function(a){return i=this.name,[2,this.report.resizeVisual(i,t,e,r)]}))}))},t.prototype.resizePage=function(t,e,r){return i(this,void 0,void 0,(function(){return a(this,(function(i){return this.isActive?[2,this.report.resizeActivePage(t,e,r)]:[2,Promise.reject("Cannot resize the page. Only the active page can be resized")]}))}))},t.prototype.getSlicers=function(){return i(this,void 0,void 0,(function(){var t=this;return a(this,(function(e){switch(e.label){case 0:if((0,l.isRDLEmbed)(this.report.config.embedUrl))return[2,Promise.reject(s.APINotSupportedForRDLError)];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.report.service.hpm.get("/report/pages/".concat(this.name,"/visuals"),{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,e.sent().body.filter((function(t){return"slicer"===t.type})).map((function(e){return new n.VisualDescriptor(t,e.name,e.title,e.type,e.layout)}))];case 3:throw e.sent().body;case 4:return[2]}}))}))},t.prototype.hasLayout=function(t){return i(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:if((0,l.isRDLEmbed)(this.report.config.embedUrl))return[2,Promise.reject(s.APINotSupportedForRDLError)];e=o.LayoutType[t],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.report.service.hpm.get("/report/pages/".concat(this.name,"/layoutTypes/").concat(e),{uid:this.report.config.uniqueId},this.report.iframe.contentWindow)];case 2:return[2,r.sent().body];case 3:throw r.sent().body;case 4:return[2]}}))}))},t}();e.Page=u},148:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Qna=void 0;var l=r(149),s=function(t){function e(r,i,a,o,n){var l=t.call(this,r,i,a,void 0,o,n)||this;return l.loadPath="/qna/load",l.phasedLoadPath="/qna/prepare",Array.prototype.push.apply(l.allowedEvents,e.allowedEvents),l}return a(e,t),e.prototype.getId=function(){return null},e.prototype.setQuestion=function(t){return o(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:e={question:t},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/qna/interpret",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},e.prototype.configChanged=function(t){},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"qnaEmbed"},e.prototype.validate=function(t){return(0,l.validateLoadQnaConfiguration)(t)},e.type="Qna",e.allowedEvents=["loaded","visualRendered"],e}(r(932).Embed);e.Qna=s},714:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.QuickCreate=void 0;var l=r(149),s=function(t){function e(e,r,i,a,l){var s=t.call(this,e,r,i,void 0,a,l)||this;return e.router.post("/reports/".concat(s.config.uniqueId,"/eventHooks/:eventName"),(function(t,r){return o(s,void 0,void 0,(function(){var i;return n(this,(function(a){switch(a.label){case 0:return"newAccessToken"===t.params.eventName?[3,1]:[3,3];case 1:return t.body=t.body||{},t.body.report=this,[4,e.invokeSDKHook(null===(i=this.eventHooks)||void 0===i?void 0:i.accessTokenProvider,t,r)];case 2:return a.sent(),[3,4];case 3:return[3,4];case 4:return[2]}}))}))})),s}return a(e,t),e.prototype.getId=function(){return null},e.prototype.validate=function(t){return(0,l.validateQuickCreate)(t)},e.prototype.configChanged=function(t){t||(this.createConfig=this.config)},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"quickCreate"},e.prototype.create=function(){var t;return o(this,void 0,void 0,(function(){var e,r;return n(this,(function(i){switch(i.label){case 0:if(e=(0,l.validateQuickCreate)(this.createConfig))throw e;i.label=1;case 1:return i.trys.push([1,3,,4]),r={uid:this.config.uniqueId,sdkSessionId:this.service.getSdkSessionId()},(null===(t=this.eventHooks)||void 0===t?void 0:t.accessTokenProvider)&&(r.tokenProviderSupplied=!0),[4,this.service.hpm.post("/quickcreate",this.createConfig,r,this.iframe.contentWindow)];case 2:return[2,i.sent().body];case 3:throw i.sent().body;case 4:return[2]}}))}))},e}(r(932).Embed);e.QuickCreate=s},125:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},l=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var i,a=0,o=e.length;a<o;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.Report=void 0;var s=r(149),u=r(932),d=r(882),c=r(758),p=r(220),f=r(460),h=function(t){function e(r,i,a,l,s,u){var d=this,c=a;return(d=t.call(this,r,i,c,u,l,s)||this).loadPath="/report/load",d.phasedLoadPath="/report/prepare",Array.prototype.push.apply(d.allowedEvents,e.allowedEvents),d.bookmarksManager=new f.BookmarksManager(r,c,d.iframe),r.router.post("/reports/".concat(d.config.uniqueId,"/eventHooks/:eventName"),(function(t,e){return o(d,void 0,void 0,(function(){var i,a;return n(this,(function(o){switch(o.label){case 0:switch(t.params.eventName){case"preQuery":return[3,1];case"newAccessToken":return[3,3]}return[3,5];case 1:return t.body=t.body||{},t.body.report=this,[4,r.invokeSDKHook(null===(i=this.eventHooks)||void 0===i?void 0:i.applicationContextProvider,t,e)];case 2:case 4:return o.sent(),[3,6];case 3:return t.body=t.body||{},t.body.report=this,[4,r.invokeSDKHook(null===(a=this.eventHooks)||void 0===a?void 0:a.accessTokenProvider,t,e)];case 5:return[3,6];case 6:return[2]}}))}))})),d}return a(e,t),e.findIdFromEmbedUrl=function(t){var e,r=t.match(/reportId="?([^&]+)"?/);return r&&(e=r[1]),e},e.prototype.render=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.service.hpm.post("/report/render",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,e.sent().body];case 2:throw e.sent().body;case 3:return[2]}}))}))},e.prototype.addPage=function(t){return o(this,void 0,void 0,(function(){var e,r,i;return n(this,(function(a){switch(a.label){case 0:e={displayName:t},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/addPage",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return r=a.sent(),i=r.body,[2,new p.Page(this,i.name,i.displayName,i.isActive,i.visibility,i.defaultSize,i.defaultDisplayOption)];case 3:throw a.sent().body;case 4:return[2]}}))}))},e.prototype.deletePage=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.service.hpm.delete("/report/pages/".concat(t),{},{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,e.sent().body];case 2:throw e.sent().body;case 3:return[2]}}))}))},e.prototype.renamePage=function(t,e){return o(this,void 0,void 0,(function(){var r;return n(this,(function(i){switch(i.label){case 0:r={name:t,displayName:e},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.service.hpm.put("/report/pages/".concat(t,"/name"),r,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,i.sent().body];case 3:throw i.sent().body;case 4:return[2]}}))}))},e.prototype.getFilters=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/filters",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,t.sent().body];case 3:throw t.sent().body;case 4:return[2]}}))}))},e.prototype.updateFilters=function(t,e){return o(this,void 0,void 0,(function(){var r;return n(this,(function(i){switch(i.label){case 0:r={filtersOperation:t,filters:e},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/filters",r,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,i.sent()];case 3:throw i.sent().body;case 4:return[2]}}))}))},e.prototype.removeFilters=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:[2,this.updateFilters(s.FiltersOperations.RemoveAll)]}))}))},e.prototype.setFilters=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.service.hpm.put("/report/filters",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,e.sent()];case 3:throw e.sent().body;case 4:return[2]}}))}))},e.prototype.getId=function(){var t=this.config,r=t.id||this.element.getAttribute(e.reportIdAttribute)||e.findIdFromEmbedUrl(t.embedUrl);if("string"!=typeof r||0===r.length)throw new Error("Report id is required, but it was not found. You must provide an id either as part of embed configuration or as attribute '".concat(e.reportIdAttribute,"'."));return r},e.prototype.getPages=function(){return o(this,void 0,void 0,(function(){var t=this;return n(this,(function(e){switch(e.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/pages",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,e.sent().body.map((function(e){return new p.Page(t,e.name,e.displayName,e.isActive,e.visibility,e.defaultSize,e.defaultDisplayOption,e.mobileSize,e.background,e.wallpaper)}))];case 3:throw e.sent().body;case 4:return[2]}}))}))},e.prototype.getPageByName=function(t){return o(this,void 0,void 0,(function(){var e,r;return n(this,(function(i){switch(i.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/pages",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return e=i.sent(),(r=e.body.find((function(e){return e.name===t})))?[2,new p.Page(this,r.name,r.displayName,r.isActive,r.visibility,r.defaultSize,r.defaultDisplayOption,r.mobileSize,r.background,r.wallpaper)]:[2,Promise.reject(s.CommonErrorCodes.NotFound)];case 3:throw i.sent().body;case 4:return[2]}}))}))},e.prototype.getActivePage=function(){return o(this,void 0,void 0,(function(){var t,e;return n(this,(function(r){switch(r.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/pages",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return t=r.sent(),e=t.body.find((function(t){return t.isActive})),[2,new p.Page(this,e.name,e.displayName,e.isActive,e.visibility,e.defaultSize,e.defaultDisplayOption,e.mobileSize,e.background,e.wallpaper)];case 3:throw r.sent().body;case 4:return[2]}}))}))},e.prototype.page=function(t,e,r,i){return new p.Page(this,t,e,r,i)},e.prototype.print=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/print",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,t.sent().body];case 3:throw t.sent().body;case 4:return[2]}}))}))},e.prototype.setPage=function(t){return o(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];e={name:t,displayName:null,isActive:!0},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.put("/report/pages/active",e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent()];case 3:throw r.sent().body;case 4:return[2]}}))}))},e.prototype.updateSettings=function(t){var e,r;return o(this,void 0,void 0,(function(){var i,a,o,l=this;return n(this,(function(n){switch(n.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl)&&null!=t.customLayout)return[2,Promise.reject(c.APINotSupportedForRDLError)];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.service.hpm.patch("/report/settings",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return i=n.sent(),a=null==t?void 0:t.extensions,this.commands=null!==(e=null==a?void 0:a.commands)&&void 0!==e?e:this.commands,this.groups=null!==(r=null==a?void 0:a.groups)&&void 0!==r?r:this.groups,o=null==t?void 0:t.extensions,Array.isArray(o)&&(this.commands=[],o.map((function(t){(null==t?void 0:t.command)&&l.commands.push(t.command)}))),[2,i];case 3:throw n.sent().body;case 4:return[2]}}))}))},e.prototype.validate=function(t){return(0,d.isRDLEmbed)(this.config.embedUrl)?(0,s.validatePaginatedReportLoad)(t):(0,s.validateReportLoad)(t)},e.prototype.configChanged=function(t){var r=this.config;this.isMobileSettings(r.settings)&&(r.embedUrl=(0,d.addParamToUrl)(r.embedUrl,"isMobile","true"));var i=this.element.getAttribute(e.filterPaneEnabledAttribute),a=this.element.getAttribute(e.navContentPaneEnabledAttribute),o={filterPaneEnabled:null==i?void 0:"false"!==i,navContentPaneEnabled:null==a?void 0:"false"!==a};this.config.settings=(0,d.assign)({},o,r.settings),t||(r.id=this.getId())},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"reportEmbed"},e.prototype.switchMode=function(t){return o(this,void 0,void 0,(function(){var e,r;return n(this,(function(i){switch(i.label){case 0:e="string"==typeof t?t:this.viewModeToString(t),r="/report/switchMode/"+e,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.service.hpm.post(r,null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,i.sent().body];case 3:throw i.sent().body;case 4:return[2]}}))}))},e.prototype.refresh=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.post("/report/refresh",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},e.prototype.isSaved=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:[4,(0,d.isSavedInternal)(this.service.hpm,this.config.uniqueId,this.iframe.contentWindow)];case 1:return[2,t.sent()]}}))}))},e.prototype.applyTheme=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:[4,this.applyThemeInternal(t)];case 1:return[2,e.sent()]}}))}))},e.prototype.resetTheme=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:[4,this.applyThemeInternal({})];case 1:return[2,t.sent()]}}))}))},e.prototype.getTheme=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/theme",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,t.sent().body];case 3:throw t.sent().body;case 4:return[2]}}))}))},e.prototype.resetPersistentFilters=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.delete("/report/userState",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent()];case 2:throw t.sent().body;case 3:return[2]}}))}))},e.prototype.savePersistentFilters=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.post("/report/userState",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent()];case 2:throw t.sent().body;case 3:return[2]}}))}))},e.prototype.arePersistentFiltersApplied=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.get("/report/isUserStateApplied",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},e.prototype.removeContextMenuCommand=function(t,e){return o(this,void 0,void 0,(function(){var r,i,a;return n(this,(function(o){switch(o.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];if(r=JSON.parse(JSON.stringify(this.commands)),-1===(i=this.findCommandMenuIndex("visualContextMenu",r,t,e)))throw s.CommonErrorCodes.NotFound;return delete r[i].extend.visualContextMenu,a={extensions:{commands:r,groups:this.groups}},[4,this.updateSettings(a)];case 1:return[2,o.sent()]}}))}))},e.prototype.addContextMenuCommand=function(t,e,r,i,a,l,u){return void 0===r&&(r=e),void 0===i&&(i=s.MenuLocation.Bottom),void 0===a&&(a=void 0),void 0===u&&(u=void 0),o(this,void 0,void 0,(function(){var o,s;return n(this,(function(n){switch(n.label){case 0:return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:(o=this.createMenuCommand("visualContextMenu",t,e,r,i,a,l,u),s={extensions:{commands:o,groups:this.groups}},[4,this.updateSettings(s)]);case 1:return[2,n.sent()]}}))}))},e.prototype.removeOptionsMenuCommand=function(t,e){return o(this,void 0,void 0,(function(){var r,i,a;return n(this,(function(o){switch(o.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];if(r=JSON.parse(JSON.stringify(this.commands)),-1===(i=this.findCommandMenuIndex("visualOptionsMenu",r,t,e)))throw s.CommonErrorCodes.NotFound;return delete r[i].extend.visualOptionsMenu,delete r[i].icon,a={extensions:{commands:r,groups:this.groups}},[4,this.updateSettings(a)];case 1:return[2,o.sent()]}}))}))},e.prototype.addOptionsMenuCommand=function(t,e,r,i,a,l,u,p){return void 0===r&&(r=e),void 0===i&&(i=s.MenuLocation.Bottom),void 0===a&&(a=void 0),void 0===l&&(l=void 0),void 0===u&&(u=void 0),void 0===p&&(p=void 0),o(this,void 0,void 0,(function(){var o,s;return n(this,(function(n){switch(n.label){case 0:return(0,d.isRDLEmbed)(this.config.embedUrl)?[2,Promise.reject(c.APINotSupportedForRDLError)]:(o=this.createMenuCommand("visualOptionsMenu",t,e,r,i,a,l,u,p),s={extensions:{commands:o,groups:this.groups}},[4,this.updateSettings(s)]);case 1:return[2,n.sent()]}}))}))},e.prototype.setVisualDisplayState=function(t,e,r){return o(this,void 0,void 0,(function(){var i,a;return n(this,(function(o){switch(o.label){case 0:return[4,this.validateVisual(t,e)];case 1:return o.sent(),i={displayState:{mode:r}},a=this.buildLayoutSettingsObject(t,e,i),[2,this.updateSettings(a)]}}))}))},e.prototype.resizeVisual=function(t,e,r,i){return o(this,void 0,void 0,(function(){var a,o;return n(this,(function(n){switch(n.label){case 0:return[4,this.validateVisual(t,e)];case 1:return n.sent(),a={width:r,height:i},o=this.buildLayoutSettingsObject(t,e,a),[2,this.updateSettings(o)]}}))}))},e.prototype.resizeActivePage=function(t,e,r){return o(this,void 0,void 0,(function(){var i,a;return n(this,(function(o){return i={type:t,width:e,height:r},a={layoutType:s.LayoutType.Custom,customLayout:{pageSize:i}},[2,this.updateSettings(a)]}))}))},e.prototype.moveVisual=function(t,e,r,i,a){return o(this,void 0,void 0,(function(){var o,l;return n(this,(function(n){switch(n.label){case 0:return[4,this.validateVisual(t,e)];case 1:return n.sent(),o={x:r,y:i,z:a},l=this.buildLayoutSettingsObject(t,e,o),[2,this.updateSettings(l)]}}))}))},e.prototype.switchLayout=function(t){return o(this,void 0,void 0,(function(){var e,r,i,a;return n(this,(function(o){switch(o.label){case 0:if(e=this.isMobileSettings({layoutType:this.initialLayoutType}),r=this.isMobileSettings({layoutType:t}),e!==r)throw"Switching between mobile and desktop layouts is not supported. Please reset the embed container and re-embed with required layout.";return i={layoutType:t},[4,this.updateSettings(i)];case 1:return a=o.sent(),this.initialLayoutType=t,[2,a]}}))}))},e.prototype.createMenuCommand=function(t,e,r,i,a,o,n,s,u){var d={name:e,title:r,extend:{}};return d.extend[t]={title:i,menuLocation:a},"visualOptionsMenu"===t&&(d.icon=u),s&&(delete d.extend[t].menuLocation,d.extend[t].groupName=s),o&&(d.selector={$schema:"http://powerbi.com/product/schema#visualSelector",visualName:o}),n&&(d.selector={$schema:"http://powerbi.com/product/schema#visualTypeSelector",visualType:n}),l(l([],this.commands,!0),[d],!1)},e.prototype.findCommandMenuIndex=function(t,e,r,i){var a=-1;return e.some((function(e,o){return!(e.name!==r||!e.extend[t]||e.extend[t].title!==i||(a=o,0))})),a},e.prototype.buildLayoutSettingsObject=function(t,e,r){var i={layoutType:s.LayoutType.Custom,customLayout:{pagesLayout:{}}};return i.customLayout.pagesLayout[t]={visualsLayout:{}},i.customLayout.pagesLayout[t].visualsLayout[e]=r,i},e.prototype.validateVisual=function(t,e){return o(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,this.getPageByName(t)];case 1:return[4,r.sent().getVisualByName(e)];case 2:return[2,r.sent()]}}))}))},e.prototype.applyThemeInternal=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.service.hpm.put("/report/theme",t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,e.sent().body];case 2:throw e.sent().body;case 3:return[2]}}))}))},e.prototype.viewModeToString=function(t){var e;switch(t){case s.ViewMode.Edit:e="edit";break;case s.ViewMode.View:e="view"}return e},e.prototype.isMobileSettings=function(t){return t&&(t.layoutType===s.LayoutType.MobileLandscape||t.layoutType===s.LayoutType.MobilePortrait)},e.prototype.getZoom=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.service.hpm.get("/report/zoom",{uid:this.config.uniqueId},this.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},e.prototype.setZoom=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,this.updateSettings({zoomLevel:t})];case 1:return e.sent(),[2]}}))}))},e.prototype.closeAllOverlays=function(){return o(this,void 0,void 0,(function(){var t;return n(this,(function(e){switch(e.label){case 0:if((0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/closeAllOverlays",null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,e.sent().body];case 3:return t=e.sent(),[2,Promise.reject(t)];case 4:return[2]}}))}))},e.prototype.clearSelectedVisuals=function(t){return o(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:if(t=!0===t,(0,d.isRDLEmbed)(this.config.embedUrl))return[2,Promise.reject(c.APINotSupportedForRDLError)];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.post("/report/clearSelectedVisuals/".concat(t.toString()),null,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent().body];case 3:return e=r.sent(),[2,Promise.reject(e)];case 4:return[2]}}))}))},e.allowedEvents=["filtersApplied","pageChanged","commandTriggered","swipeStart","swipeEnd","bookmarkApplied","dataHyperlinkClicked","visualRendered","visualClicked","selectionChanged","renderingStarted","blur"],e.reportIdAttribute="powerbi-report-id",e.filterPaneEnabledAttribute="powerbi-settings-filter-pane-enabled",e.navContentPaneEnabledAttribute="powerbi-settings-nav-content-pane-enabled",e.typeAttribute="powerbi-type",e.type="Report",e}(u.Embed);e.Report=h},562:function(t,e,r){var i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)},a=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Service=void 0;var n=r(932),l=r(125),s=r(536),u=r(365),d=r(43),c=r(220),p=r(148),f=r(23),h=r(882),v=r(714),y=r(913),m=function(){function t(e,r,i,a){void 0===a&&(a={});var o=this;this.registeredComponents={},this.wpmp=r(a.wpmpName,a.logMessages),this.hpm=e(this.wpmp,null,a.version,a.type,a.sdkWrapperVersion),this.router=i(this.wpmp),this.uniqueSessionId=h.generateUUID(),this.router.post("/reports/:uniqueId/events/:eventName",(function(t,e){var r={type:"report",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/reports/:uniqueId/pages/:pageName/events/:eventName",(function(t,e){var r={type:"report",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/reports/:uniqueId/pages/:pageName/visuals/:visualName/events/:eventName",(function(t,e){var r={type:"report",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/dashboards/:uniqueId/events/:eventName",(function(t,e){var r={type:"dashboard",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/tile/:uniqueId/events/:eventName",(function(t,e){var r={type:"tile",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/qna/:uniqueId/events/:eventName",(function(t,e){var r={type:"qna",id:t.params.uniqueId,name:t.params.eventName,value:t.body};o.handleEvent(r)})),this.router.post("/ready/:uniqueId",(function(t,e){var r={type:"report",id:t.params.uniqueId,name:"ready",value:t.body};o.handleEvent(r)})),this.embeds=[],this.config=h.assign({},t.defaultConfig,a),this.config.autoEmbedOnContentLoaded&&this.enableAutoEmbed()}return t.prototype.createReport=function(t,e){e.type="create";var r=t,i=new s.Create(this,r,e);return r.powerBiEmbed=i,this.addOrOverwriteEmbed(i,t),i},t.prototype.quickCreate=function(t,e){e.type="quickCreate";var r=t,i=new v.QuickCreate(this,r,e);return r.powerBiEmbed=i,this.addOrOverwriteEmbed(i,t),i},t.prototype.init=function(t,e){var r=this;return void 0===e&&(e=void 0),t=t&&t instanceof HTMLElement?t:document.body,Array.prototype.slice.call(t.querySelectorAll("[".concat(n.Embed.embedUrlAttribute,"]"))).map((function(t){return r.embed(t,e)}))},t.prototype.embed=function(t,e){return void 0===e&&(e={}),this.embedInternal(t,e)},t.prototype.load=function(t,e){return void 0===e&&(e={}),this.embedInternal(t,e,!0,!1)},t.prototype.bootstrap=function(t,e){return this.embedInternal(t,e,!1,!0)},t.prototype.embedInternal=function(t,e,r,i){var a;void 0===e&&(e={});var o=t;if(o.powerBiEmbed){if(i)throw new Error("Attempted to bootstrap element ".concat(t.outerHTML,", but the element is already a powerbi element."));a=this.embedExisting(o,e,r)}else a=this.embedNew(o,e,r,i);return a},t.prototype.getNumberOfComponents=function(){return this.embeds?this.embeds.length:0},t.prototype.getSdkSessionId=function(){return this.uniqueSessionId},t.prototype.getSDKVersion=function(){return y.default.version},t.prototype.embedNew=function(t,e,r,a){var o=e.type||t.getAttribute(n.Embed.typeAttribute);if(!o){var s=i(i({},e),{accessToken:""});throw new Error("Attempted to embed using config ".concat(JSON.stringify(s)," on element ").concat(t.outerHTML,", but could not determine what type of component to embed. You must specify a type in the configuration or as an attribute such as '").concat(n.Embed.typeAttribute,'="').concat(l.Report.type.toLowerCase(),"\"'."))}e.type=o;var u=this.createEmbedComponent(o,t,e,r,a);return t.powerBiEmbed=u,this.addOrOverwriteEmbed(u,t),u},t.prototype.createEmbedComponent=function(e,r,i,a,o){var n=h.find((function(t){return e===t.type.toLowerCase()}),t.components);if(n)return new n(this,r,i,a,o);var l=h.find((function(t){return e.toLowerCase()===t.toLowerCase()}),Object.keys(this.registeredComponents));if(!l)throw new Error("Attempted to embed component of type: ".concat(e," but did not find any matching component.  Please verify the type you specified is intended."));return this.registeredComponents[l](this,r,i,a,o)},t.prototype.embedExisting=function(t,e,r){var a=h.find((function(e){return e.element===t}),this.embeds);if(!a){var o=i(i({},e),{accessToken:""});throw new Error("Attempted to embed using config ".concat(JSON.stringify(o)," on element ").concat(t.outerHTML," which already has embedded component associated, but could not find the existing component in the list of active components. This could indicate the embeds list is out of sync with the DOM, or the component is referencing the incorrect HTML element."))}if(e.type&&"qna"===e.type.toLowerCase())return this.embedNew(t,e);if("string"==typeof e.type&&e.type!==a.config.type){if("report"===e.type&&h.isCreate(a.config.type)){var n=new l.Report(this,t,e,!1,!1,t.powerBiEmbed.iframe);return a.populateConfig(e,!1),n.load(),t.powerBiEmbed=n,this.addOrOverwriteEmbed(a,t),n}throw o=i(i({},e),{accessToken:""}),new Error("Embedding on an existing element with a different type than the previous embed object is not supported.  Attempted to embed using config ".concat(JSON.stringify(o)," on element ").concat(t.outerHTML,", but the existing element contains an embed of type: ").concat(this.config.type," which does not match the new type: ").concat(e.type))}return a.populateConfig(e,!1),a.load(r),a},t.prototype.enableAutoEmbed=function(){var t=this;window.addEventListener("DOMContentLoaded",(function(e){return t.init(document.body)}),!1)},t.prototype.get=function(t){var e=t;if(!e.powerBiEmbed)throw new Error("You attempted to get an instance of powerbi component associated with element: ".concat(t.outerHTML," but there was no associated instance."));return e.powerBiEmbed},t.prototype.find=function(t){return h.find((function(e){return e.config.uniqueId===t}),this.embeds)},t.prototype.addOrOverwriteEmbed=function(t,e){this.embeds=this.embeds.filter((function(t){return t.element!==e})),this.embeds.push(t)},t.prototype.reset=function(t){var e=t;if(e.powerBiEmbed){var r=e.powerBiEmbed;r.frontLoadHandler&&r.element.removeEventListener("ready",r.frontLoadHandler,!1),r.allowedEvents.forEach((function(t){r.off(t)})),h.remove((function(t){return t===e.powerBiEmbed}),this.embeds),delete e.powerBiEmbed;var i=t.querySelector("iframe");i&&(void 0!==i.remove?i.remove():i.parentElement.removeChild(i))}},t.prototype.handleTileEvents=function(t){"tile"===t.type&&this.handleEvent(t)},t.prototype.invokeSDKHook=function(t,e,r){return a(this,void 0,void 0,(function(){var i,a;return o(this,(function(o){switch(o.label){case 0:if(!t)return r.send(404,null),[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t(e.body)];case 2:return i=o.sent(),r.send(200,i),[3,4];case 3:return a=o.sent(),r.send(400,null),console.error(a),[3,4];case 4:return[2]}}))}))},t.prototype.handleEvent=function(t){var e=h.find((function(e){return e.config.uniqueId===t.id}),this.embeds);if(e){var r=t.value;if("pageChanged"===t.name){var i="newPage",a=r[i];if(!a)throw new Error("Page model not found at 'event.value.".concat(i,"'."));r[i]=new c.Page(e,a.name,a.displayName,!0)}h.raiseCustomEvent(e.element,t.name,r)}},t.prototype.preload=function(t,e){var r=document.createElement("iframe");r.setAttribute("style","display:none;"),r.setAttribute("src",t.embedUrl),r.setAttribute("scrolling","no"),r.setAttribute("allowfullscreen","false");var i=e;return i||(i=document.getElementsByTagName("body")[0]),i.appendChild(r),r.onload=function(){h.raiseCustomEvent(r,"preloaded",{})},r},t.prototype.setSdkInfo=function(t,e){this.hpm.defaultHeaders["x-sdk-type"]=t,this.hpm.defaultHeaders["x-sdk-wrapper-version"]=e},t.prototype.register=function(e,r,i){var a=this;if(h.find((function(t){return e.toLowerCase()===t.type.toLowerCase()}),t.components))throw new Error("The component name is reserved. Cannot register a component with this name.");if(h.find((function(t){return e.toLowerCase()===t.toLowerCase()}),Object.keys(this.registeredComponents)))throw new Error("A component with this type is already registered.");this.registeredComponents[e]=r,i.forEach((function(t){if(!t.includes(":uniqueId")||!t.includes(":eventName"))throw new Error("Invalid router event URL");a.router.post(t,(function(t,r){var i={type:e,id:t.params.uniqueId,name:t.params.eventName,value:t.body};a.handleEvent(i)}))}))},t.components=[d.Tile,l.Report,u.Dashboard,p.Qna,f.Visual],t.defaultConfig={autoEmbedOnContentLoaded:!1,onError:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return console.log(t[0],t.slice(1))}},t}();e.Service=m},43:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.Tile=void 0;var o=r(149),n=function(t){function e(r,i,a,o,n){var l=this,s=a;return(l=t.call(this,r,i,s,void 0,o,n)||this).loadPath="/tile/load",Array.prototype.push.apply(l.allowedEvents,e.allowedEvents),l}return a(e,t),e.prototype.getId=function(){var t=this.config.id||e.findIdFromEmbedUrl(this.config.embedUrl);if("string"!=typeof t||0===t.length)throw new Error("Tile id is required, but it was not found. You must provide an id either as part of embed configuration.");return t},e.prototype.validate=function(t){var e=t;return(0,o.validateTileLoad)(e)},e.prototype.configChanged=function(t){t||(this.config.id=this.getId())},e.prototype.getDefaultEmbedUrlEndpoint=function(){return"tileEmbed"},e.findIdFromEmbedUrl=function(t){var e,r=t.match(/tileId="?([^&]+)"?/);return r&&(e=r[1]),e},e.type="Tile",e.allowedEvents=["tileClicked","tileLoaded"],e}(r(932).Embed);e.Tile=n},882:function(t,e){var r=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function a(t,e){if(!Array.isArray(e))throw new Error("You attempted to call find with second parameter that was not an array. You passed: ".concat(e));var r;return e.some((function(e,i){if(t(e))return r=i,!0})),r}function o(){var t=window.crypto||window.msCrypto,e=new Uint32Array(1);return t.getRandomValues(e),e[0]}Object.defineProperty(e,"__esModule",{value:!0}),e.isCreate=e.getTimeDiffInMilliseconds=e.getRandomValue=e.autoAuthInEmbedUrl=e.isRDLEmbed=e.isSavedInternal=e.addParamToUrl=e.generateUUID=e.createRandomString=e.assign=e.remove=e.find=e.findIndex=e.raiseCustomEvent=void 0,e.raiseCustomEvent=function(t,e,r){var i;"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:r,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,r),t.dispatchEvent(i)},e.findIndex=a,e.find=function(t,e){return e[a(t,e)]},e.remove=function(t,e){var r=a(t,e);e.splice(r,1)},e.assign=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[0];if(null==r)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(r),a=1;a<arguments.length;a++){var o=arguments[a];if(null!=o)for(var n in o)o.hasOwnProperty(n)&&(i[n]=o[n])}return i},e.createRandomString=function(){return o().toString(36).substring(1)},e.generateUUID=function(){return(new Date).getTime(),"undefined"!=typeof performance&&"function"==typeof performance.now&&performance.now(),"xxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){return(o()%16).toString(16)}))},e.addParamToUrl=function(t,e,r){var i=t.indexOf("?")>0?"&":"?";return t+(i+e+"=")+r},e.isSavedInternal=function(t,e,a){return r(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,t.get("/report/hasUnsavedChanges",{uid:e},a)];case 1:return[2,!r.sent().body];case 2:throw r.sent().body;case 3:return[2]}}))}))},e.isRDLEmbed=function(t){return t&&t.toLowerCase().indexOf("/rdlembed?")>=0},e.autoAuthInEmbedUrl=function(t){return t&&decodeURIComponent(t).toLowerCase().indexOf("autoauth=true")>=0},e.getRandomValue=o,e.getTimeDiffInMilliseconds=function(t,e){return Math.abs(t.getTime()-e.getTime())},e.isCreate=function(t){return"create"===t||"quickcreate"===t}},23:function(t,e,r){var i,a=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Visual=void 0;var l=r(149),s=r(125),u=r(558),d=function(t){function e(e,r,i,a,o,n){return t.call(this,e,r,i,a,o,n)||this}return a(e,t),e.prototype.load=function(e){var r=this.config;if(r.accessToken){if("string"!=typeof r.pageName||0===r.pageName.length)throw new Error("Page name is required when embedding a visual.");if("string"!=typeof r.visualName||0===r.visualName.length)throw new Error("Visual name is required, but it was not found. You must provide a visual name as part of embed configuration.");var i=r.width?r.width:this.iframe.offsetWidth,a=r.height?r.height:this.iframe.offsetHeight,o={type:l.PageSizeType.Custom,width:i,height:a},n={};return n[r.pageName]={defaultLayout:{displayState:{mode:l.VisualContainerDisplayMode.Hidden}},visualsLayout:{}},n[r.pageName].visualsLayout[r.visualName]={displayState:{mode:l.VisualContainerDisplayMode.Visible},x:1,y:1,z:1,width:o.width,height:o.height},r.settings=r.settings||{},r.settings.filterPaneEnabled=!1,r.settings.navContentPaneEnabled=!1,r.settings.layoutType=l.LayoutType.Custom,r.settings.customLayout={displayOption:l.DisplayOption.FitToPage,pageSize:o,pagesLayout:n},this.config=r,t.prototype.load.call(this,e)}},e.prototype.getPages=function(){throw e.GetPagesNotSupportedError},e.prototype.setPage=function(t){throw e.SetPageNotSupportedError},e.prototype.render=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(t){throw e.RenderNotSupportedError}))}))},e.prototype.getVisualDescriptor=function(){return o(this,void 0,void 0,(function(){var t,e,r,i,a;return n(this,(function(o){switch(o.label){case 0:t=this.config,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.service.hpm.get("/report/pages/".concat(t.pageName,"/visuals"),{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:if(e=o.sent(),0===(r=e.body.filter((function(e){return e.name===t.visualName}))).length)throw{message:"visualNotFound",detailedMessage:"Visual not found"};return i=r[0],a=this.page(t.pageName),[2,new u.VisualDescriptor(a,i.name,i.title,i.type,i.layout)];case 3:throw o.sent().body;case 4:return[2]}}))}))},e.prototype.getFilters=function(t){return o(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:e=this.getFiltersLevelUrl(t),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.service.hpm.get(e,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,r.sent().body];case 3:throw r.sent().body;case 4:return[2]}}))}))},e.prototype.updateFilters=function(t,e,r){return o(this,void 0,void 0,(function(){var i,a;return n(this,(function(o){switch(o.label){case 0:i={filtersOperation:t,filters:e},a=this.getFiltersLevelUrl(r),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.service.hpm.post(a,i,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,o.sent()];case 3:throw o.sent().body;case 4:return[2]}}))}))},e.prototype.setFilters=function(t,e){return o(this,void 0,void 0,(function(){var r;return n(this,(function(i){switch(i.label){case 0:r=this.getFiltersLevelUrl(e),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.service.hpm.put(r,t,{uid:this.config.uniqueId},this.iframe.contentWindow)];case 2:return[2,i.sent()];case 3:throw i.sent().body;case 4:return[2]}}))}))},e.prototype.removeFilters=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,this.updateFilters(l.FiltersOperations.RemoveAll,void 0,t)];case 1:return[2,e.sent()]}}))}))},e.prototype.getFiltersLevelUrl=function(t){var e=this.config;switch(t){case l.FiltersLevel.Report:return"/report/filters";case l.FiltersLevel.Page:return"/report/pages/".concat(e.pageName,"/filters");default:return"/report/pages/".concat(e.pageName,"/visuals/").concat(e.visualName,"/filters")}},e.type="visual",e.GetPagesNotSupportedError="Get pages is not supported while embedding a visual.",e.SetPageNotSupportedError="Set page is not supported while embedding a visual.",e.RenderNotSupportedError="render is not supported while embedding a visual.",e}(s.Report);e.Visual=d},558:function(t,e,r){var i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(a,o){function n(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,l)}s((i=i.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.VisualDescriptor=void 0;var o=r(149),n=function(){function t(t,e,r,i,a){this.name=e,this.title=r,this.type=i,this.layout=a,this.page=t}return t.prototype.getFilters=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.page.report.service.hpm.get("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/filters"),{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.updateFilters=function(t,e){return i(this,void 0,void 0,(function(){var r;return a(this,(function(i){switch(i.label){case 0:r={filtersOperation:t,filters:e},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.page.report.service.hpm.post("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/filters"),r,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 2:return[2,i.sent()];case 3:throw i.sent().body;case 4:return[2]}}))}))},t.prototype.removeFilters=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.updateFilters(o.FiltersOperations.RemoveAll)];case 1:return[2,t.sent()]}}))}))},t.prototype.setFilters=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.page.report.service.hpm.put("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/filters"),t,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,e.sent()];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.exportData=function(t,e){return i(this,void 0,void 0,(function(){var r;return a(this,(function(i){switch(i.label){case 0:r={rows:e,exportDataType:t},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.page.report.service.hpm.post("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/exportData"),r,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 2:return[2,i.sent().body];case 3:throw i.sent().body;case 4:return[2]}}))}))},t.prototype.setSlicerState=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.page.report.service.hpm.put("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/slicer"),t,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,e.sent()];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.getSlicerState=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.page.report.service.hpm.get("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/slicer"),{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,t.sent().body];case 2:throw t.sent().body;case 3:return[2]}}))}))},t.prototype.clone=function(t){return void 0===t&&(t={}),i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.page.report.service.hpm.post("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/clone"),t,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,e.sent().body];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.sortBy=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.page.report.service.hpm.put("/report/pages/".concat(this.page.name,"/visuals/").concat(this.name,"/sortBy"),t,{uid:this.page.report.config.uniqueId},this.page.report.iframe.contentWindow)];case 1:return[2,e.sent()];case 2:throw e.sent().body;case 3:return[2]}}))}))},t.prototype.moveVisual=function(t,e,r){return i(this,void 0,void 0,(function(){var i,o;return a(this,(function(a){return i=this.page.name,o=this.name,[2,this.page.report.moveVisual(i,o,t,e,r)]}))}))},t.prototype.setVisualDisplayState=function(t){return i(this,void 0,void 0,(function(){var e,r;return a(this,(function(i){return e=this.page.name,r=this.name,[2,this.page.report.setVisualDisplayState(e,r,t)]}))}))},t.prototype.resizeVisual=function(t,e){return i(this,void 0,void 0,(function(){var r,i;return a(this,(function(a){return r=this.page.name,i=this.name,[2,this.page.report.resizeVisual(r,i,t,e)]}))}))},t}();e.VisualDescriptor=n},903:function(t){var e;e=function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e){"use strict";var r=function(){function t(e){var r=this;void 0===e&&(e={processTrackingProperties:{addTrackingProperties:t.defaultAddTrackingProperties,getTrackingProperties:t.defaultGetTrackingProperties},isErrorMessage:t.defaultIsErrorMessage,receiveWindow:window,name:t.createRandomString()}),this.pendingRequestPromises={},this.addTrackingProperties=e.processTrackingProperties&&e.processTrackingProperties.addTrackingProperties||t.defaultAddTrackingProperties,this.getTrackingProperties=e.processTrackingProperties&&e.processTrackingProperties.getTrackingProperties||t.defaultGetTrackingProperties,this.isErrorMessage=e.isErrorMessage||t.defaultIsErrorMessage,this.receiveWindow=e.receiveWindow||window,this.name=e.name||t.createRandomString(),this.logMessages=e.logMessages||!1,this.eventSourceOverrideWindow=e.eventSourceOverrideWindow,this.suppressWarnings=e.suppressWarnings||!1,this.logMessages&&console.log("new WindowPostMessageProxy created with name: "+this.name+" receiving on window: "+this.receiveWindow.document.title),this.handlers=[],this.windowMessageHandler=function(t){return r.onMessageReceived(t)},this.start()}return t.defaultAddTrackingProperties=function(e,r){return e[t.messagePropertyName]=r,e},t.defaultGetTrackingProperties=function(e){return e[t.messagePropertyName]},t.defaultIsErrorMessage=function(t){return!!t.error},t.createDeferred=function(){var t={resolve:null,reject:null,promise:null},e=new Promise((function(e,r){t.resolve=e,t.reject=r}));return t.promise=e,t},t.createRandomString=function(){var t=window.crypto||window.msCrypto,e=new Uint32Array(1);return t.getRandomValues(e),e[0].toString(36).substring(1)},t.prototype.addHandler=function(t){this.handlers.push(t)},t.prototype.removeHandler=function(t){var e=this.handlers.indexOf(t);if(-1===e)throw new Error("You attempted to remove a handler but no matching handler was found.");this.handlers.splice(e,1)},t.prototype.start=function(){this.receiveWindow.addEventListener("message",this.windowMessageHandler)},t.prototype.stop=function(){this.receiveWindow.removeEventListener("message",this.windowMessageHandler)},t.prototype.postMessage=function(e,r){var i={id:t.createRandomString()};this.addTrackingProperties(r,i),this.logMessages&&(console.log(this.name+" Posting message:"),console.log(JSON.stringify(r,null,"  "))),e.postMessage(r,"*");var a=t.createDeferred();return this.pendingRequestPromises[i.id]=a,a.promise},t.prototype.sendResponse=function(t,e,r){this.addTrackingProperties(e,r),this.logMessages&&(console.log(this.name+" Sending response:"),console.log(JSON.stringify(e,null,"  "))),t.postMessage(e,"*")},t.prototype.onMessageReceived=function(t){var e=this;this.logMessages&&(console.log(this.name+" Received message:"),console.log("type: "+t.type),console.log(JSON.stringify(t.data,null,"  ")));var r=this.eventSourceOverrideWindow||t.source,i=t.data;if("object"==typeof i){var a,o;try{a=this.getTrackingProperties(i)}catch(t){this.suppressWarnings||console.warn("Proxy("+this.name+"): Error occurred when attempting to get tracking properties from incoming message:",JSON.stringify(i,null,"  "),"Error: ",t)}if(a&&(o=this.pendingRequestPromises[a.id]),o){var n=!0;try{n=this.isErrorMessage(i)}catch(t){console.warn("Proxy("+this.name+") Error occurred when trying to determine if message is consider an error response. Message: ",JSON.stringify(i,null,""),"Error: ",t)}n?o.reject(i):o.resolve(i),delete this.pendingRequestPromises[a.id]}else this.handlers.some((function(t){var o=!1;try{o=t.test(i)}catch(t){e.suppressWarnings||console.warn("Proxy("+e.name+"): Error occurred when handler was testing incoming message:",JSON.stringify(i,null,"  "),"Error: ",t)}if(o){var n=void 0;try{n=Promise.resolve(t.handle(i))}catch(t){e.suppressWarnings||console.warn("Proxy("+e.name+"): Error occurred when handler was processing incoming message:",JSON.stringify(i,null,"  "),"Error: ",t),n=Promise.resolve()}return n.then((function(t){if(!t){var o="Handler for message: "+JSON.stringify(i,null,"  ")+" did not return a response message. The default response message will be returned instead.";e.suppressWarnings||console.warn("Proxy("+e.name+"): "+o),t={warning:o}}e.sendResponse(r,t,a)})),!0}}))||this.suppressWarnings||console.warn("Proxy("+this.name+") did not handle message. Handlers: "+this.handlers.length+"  Message: "+JSON.stringify(i,null,"")+".")}else this.suppressWarnings||console.warn("Proxy("+this.name+"): Received message that was not an object. Discarding message")},t.messagePropertyName="windowPostMessageProxy",t}();e.WindowPostMessageProxy=r}])},t.exports=e()}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}var i={};return(()=>{var t=i;Object.defineProperty(t,"__esModule",{value:!0}),t.RelativeTimeFilterBuilder=t.RelativeDateFilterBuilder=t.TopNFilterBuilder=t.AdvancedFilterBuilder=t.BasicFilterBuilder=t.Create=t.QuickCreate=t.VisualDescriptor=t.Visual=t.Qna=t.Page=t.Embed=t.Tile=t.Dashboard=t.Report=t.models=t.factories=t.service=void 0;var e=r(149);t.models=e;var a=r(562);t.service=a;var o=r(357);t.factories=o;var n=r(125);Object.defineProperty(t,"Report",{enumerable:!0,get:function(){return n.Report}});var l=r(365);Object.defineProperty(t,"Dashboard",{enumerable:!0,get:function(){return l.Dashboard}});var s=r(43);Object.defineProperty(t,"Tile",{enumerable:!0,get:function(){return s.Tile}});var u=r(932);Object.defineProperty(t,"Embed",{enumerable:!0,get:function(){return u.Embed}});var d=r(220);Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return d.Page}});var c=r(148);Object.defineProperty(t,"Qna",{enumerable:!0,get:function(){return c.Qna}});var p=r(23);Object.defineProperty(t,"Visual",{enumerable:!0,get:function(){return p.Visual}});var f=r(558);Object.defineProperty(t,"VisualDescriptor",{enumerable:!0,get:function(){return f.VisualDescriptor}});var h=r(714);Object.defineProperty(t,"QuickCreate",{enumerable:!0,get:function(){return h.QuickCreate}});var v=r(536);Object.defineProperty(t,"Create",{enumerable:!0,get:function(){return v.Create}});var y=r(567);Object.defineProperty(t,"BasicFilterBuilder",{enumerable:!0,get:function(){return y.BasicFilterBuilder}}),Object.defineProperty(t,"AdvancedFilterBuilder",{enumerable:!0,get:function(){return y.AdvancedFilterBuilder}}),Object.defineProperty(t,"TopNFilterBuilder",{enumerable:!0,get:function(){return y.TopNFilterBuilder}}),Object.defineProperty(t,"RelativeDateFilterBuilder",{enumerable:!0,get:function(){return y.RelativeDateFilterBuilder}}),Object.defineProperty(t,"RelativeTimeFilterBuilder",{enumerable:!0,get:function(){return y.RelativeTimeFilterBuilder}});var m=new a.Service(o.hpmFactory,o.wpmpFactory,o.routerFactory);window.powerbi&&window.powerBISDKGlobalServiceInstanceName?window[window.powerBISDKGlobalServiceInstanceName]=m:window.powerbi=m})(),i})()));
// SIG // Begin signature block
// SIG // MIIrhgYJKoZIhvcNAQcCoIIrdzCCK3MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Yc8/Y0wqkLzpP6VMYoWI+HmdJE09MJ1Q8dRkGDVi0tyg
// SIG // ghF9MIIIjTCCB3WgAwIBAgITNgAAAclwIbGGt0CyHQAC
// SIG // AAAByTANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxa9UuxHcu4Pi
// SIG // Dk75ILwpx2fCBTvWGM+0I91ZlOLEXmJ8lnyRht4A8t/d
// SIG // eQNUUWAvFxoOLXEW+EOBvNYUY8ERwZ+QRhsp9dmokHvE
// SIG // XPqUA1Fn+QBmoFNuH0xmmqDLz0TKQ39mhAc0jn2BRZ2c
// SIG // UeCwC4pqCHbNWgYLazn4ADET+AGGKfrqHAAohxr1487s
// SIG // E+kber/brQ5b5r61Slpz/4mcBjXDRCz7SQ9BLk1GbpML
// SIG // +HLQ2m6yUE+t8V57y1Wx7hQ86WZEaKStW4JI1cLIZPaH
// SIG // J1NR59uolzXUrvuglYyrucwJ249JhDYqBEGDxubGDrNQ
// SIG // XYoOOnfQfby03srj54j/ZwIDAQABo4IFmTCCBZUwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUnVRygb7XvjwTW2HQ
// SIG // hPeoinHl2xwwDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys1MDAzNjEwggHmBgNVHR8EggHdMIIB2TCCAdWg
// SIG // ggHRoIIBzYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEo
// SIG // MikuY3JshjFodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMi5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMy5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsNC5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshoG9bGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEoMiksQ049QlkyUEtJQ1NDQTAxLENO
// SIG // PUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxD
// SIG // Tj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFN
// SIG // RSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlz
// SIG // dD9iYXNlP29iamVjdENsYXNzPWNSTERpc3RyaWJ1dGlv
// SIG // blBvaW50MB8GA1UdIwQYMBaAFJZRhOBrb3v+2Aarw/KF
// SIG // 5imuavnUMB8GA1UdJQQYMBYGCisGAQQBgjdbAQEGCCsG
// SIG // AQUFBwMDMA0GCSqGSIb3DQEBCwUAA4IBAQBBp4Ct6QxN
// SIG // gKxrkeWINdpmVzOwH+AT5LSCfeqaQXlGtRY8/OHQEJKk
// SIG // tcu7K5OnAjzH2mYyWi57EJQb6ygpGKSz+qog6t/j8nel
// SIG // skDr8IhhZh/1WOOOuczWTarBOwluPpxDJibTH3c/oFDo
// SIG // s5FnTT0MyjgcJrz37fvWPAoC8JvCAWu2Sx9yO3BosdYC
// SIG // PMcc89MPCVJyvr42ZNgeJK8fpEhJP/ctR2gwQtehnBG+
// SIG // B7CWyNb5GA9X+AgXPQoDM3XPDQweeX/NRjHU/cExC3j8
// SIG // WW12b2tnOmd2u+VrKO8Za09FN1lvaF+VUdPvEKm8Ovte
// SIG // v2ykVRq6wEiE+IdpXxPESDH/MIII6DCCBtCgAwIBAgIT
// SIG // HwAAAFHqj/accwyoOwAAAAAAUTANBgkqhkiG9w0BAQsF
// SIG // ADA8MRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRAwDgYDVQQDEwdhbWVyb290MB4X
// SIG // DTIxMDUyMTE4NDQxNFoXDTI2MDUyMTE4NTQxNFowQTET
// SIG // MBEGCgmSJomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixk
// SIG // ARkWA0FNRTEVMBMGA1UEAxMMQU1FIENTIENBIDAxMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyZpS
// SIG // CX0Bno1W1yqXMhT6BUlJZWpa4p3xFeiTHO4vm2Q6C/az
// SIG // R5xwxnyYHrkSGDtS2P9X+KDE64V20mmEQkubxnPNeOVn
// SIG // E2RvdPGxgwlq+BhS3ONdVsQPj79q7XgHM9HhzB9+qk0P
// SIG // C9KN1zm9p/seyiRS6JF1dbOqRf1pUl7FAVxmgiCFgV8h
// SIG // HIb/rDPXig7FDi3S0yEx2CUDVpIq8jEhG8anUFE1WYxM
// SIG // +ni0S5KHwwKPKV4qyGDoDO+9AmDoma3Chyu5WDlW5cdt
// SIG // qXTWsGPE3umtnX6AmlldUFLms4OVR4guKf+n5LIBCC6b
// SIG // TiocfXPomqYjYTKx7AGMfaVLaaXmhQIDAQABo4IE3DCC
// SIG // BNgwEgYJKwYBBAGCNxUBBAUCAwIAAjAjBgkrBgEEAYI3
// SIG // FQIEFgQUEmgkQiFHy9RrvjHPIKTACyN/P0cwHQYDVR0O
// SIG // BBYEFJZRhOBrb3v+2Aarw/KF5imuavnUMIIBBAYDVR0l
// SIG // BIH8MIH5BgcrBgEFAgMFBggrBgEFBQcDAQYIKwYBBQUH
// SIG // AwIGCisGAQQBgjcUAgEGCSsGAQQBgjcVBgYKKwYBBAGC
// SIG // NwoDDAYJKwYBBAGCNxUGBggrBgEFBQcDCQYIKwYBBQUI
// SIG // AgIGCisGAQQBgjdAAQEGCysGAQQBgjcKAwQBBgorBgEE
// SIG // AYI3CgMEBgkrBgEEAYI3FQUGCisGAQQBgjcUAgIGCisG
// SIG // AQQBgjcUAgMGCCsGAQUFBwMDBgorBgEEAYI3WwEBBgor
// SIG // BgEEAYI3WwIBBgorBgEEAYI3WwMBBgorBgEEAYI3WwUB
// SIG // BgorBgEEAYI3WwQBBgorBgEEAYI3WwQCMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAS
// SIG // BgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCle
// SIG // UV5krjS566ycDaeMdQHRCQsoMIIBaAYDVR0fBIIBXzCC
// SIG // AVswggFXoIIBU6CCAU+GMWh0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2lpbmZyYS9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwyLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIYjaHR0cDovL2NybDEuYW1lLmdibC9jcmwv
// SIG // YW1lcm9vdC5jcmyGgapsZGFwOi8vL0NOPWFtZXJvb3Qs
// SIG // Q049QU1FUm9vdCxDTj1DRFAsQ049UHVibGljJTIwS2V5
// SIG // JTIwU2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmln
// SIG // dXJhdGlvbixEQz1BTUUsREM9R0JMP2NlcnRpZmljYXRl
// SIG // UmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // UkxEaXN0cmlidXRpb25Qb2ludDCCAasGCCsGAQUFBwEB
// SIG // BIIBnTCCAZkwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcG
// SIG // CCsGAQUFBzAChitodHRwOi8vY3JsMS5hbWUuZ2JsL2Fp
// SIG // YS9BTUVSb290X2FtZXJvb3QuY3J0MIGiBggrBgEFBQcw
// SIG // AoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxDTj1BSUEsQ049
// SIG // UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
// SIG // ZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
// SIG // P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // ZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQBQECO3Tw/o317Rrd7yadqcswPx1LvIYymk
// SIG // aTN6KcmuRt6HKa0Xe73Ux2/AQ30TfgA9GBJngweRykKB
// SIG // usRzyOU17iIubJvy3gA21dwtqtB0DsoEv1U/ptVu2v++
// SIG // doTCJ/i+GbssVXkgaX8H+6EOGEmT4evp4GbwR4HwWlc+
// SIG // Dvf8HH8PdUA2Z04CvcwIfckSipbNm84jxJ8XjmTFTWsc
// SIG // ldL9edj2NsY6iGnyJFIyur2PS7VRYyV3p1VAJp91gj1j
// SIG // RQtWEyCB8P5g9nE3z8u0ANaU/hjwEQCrdGyravWgnf2J
// SIG // tG+bT26YAokbc8m+32zUtXRO+NK3tAjhOu2FdsG3qNrF
// SIG // 4sc7y37R/C+7Pcb/cFfhttqsirepZii4xStcjMODYuXz
// SIG // Gm3IJs0b0owHG6oKd7ZOGvHpmmh9K8/DLriD/sq8bURD
// SIG // 10qi/wuW8zM7IpLg1vcR9dIK2mc0pj44pc6UX0XbttP/
// SIG // VEJgu3lT2eI9VjWtaKjx38xE9woSMyekPRtzTwgfuysF
// SIG // 9DkJisr+yA4po/FPxpbBw9c/hBf32DH/GFxteS2pmjgK
// SIG // IbMP8sDukmEq3lVvuWNJsybrZwQvQpvaM49fv+JKpLK5
// SIG // YWYEfwksYRR9wU8Hh/ID9hRCEkbUoQ2W7mMpsp2Nbp/k
// SIG // cn4ivfolUy3Q9Yf0scsQ6WTLYpm+AoCUJTGCGWEwghld
// SIG // AgEBMFgwQTETMBEGCgmSJomT8ixkARkWA0dCTDETMBEG
// SIG // CgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMMQU1FIENT
// SIG // IENBIDAxAhM2AAAByXAhsYa3QLIdAAIAAAHJMA0GCWCG
// SIG // SAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMC8GCSqGSIb3DQEJBDEiBCDhEoJyyVh0HyHp9N3k
// SIG // EtjW0QzQvDHjJJNLFmbUyxNU2zBCBgorBgEEAYI3AgEM
// SIG // MTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAKP3YAorDylLiHmi5IyWk4X+1uamvX8N5Pky
// SIG // pwsjt/dACNYtkNwNotaKJPfplLYVcPj3b/tKJeqHTw0j
// SIG // 1GLFPvWbrxP/V9Oirj+PdcKZrQBQ79gacqmPMgLqmrc/
// SIG // ruW2yXmKrz/8ze4tp2eeL676PUmAdZuJMkdW1dh4uuUQ
// SIG // S6+hWYfKic+p1DMZgh+IK2/r6+tzWFBlvBsTdTN98btU
// SIG // s3q2JfgpNSOEugLJni5HlEZpMat2bUsvD2A/1caZ58cf
// SIG // 17pJgis2LhIQEzAZ5YLPjIuIG3h0pMHCJmw/9UWffq5R
// SIG // 6grQvrKX7pj35FJUUtKf0hzCwt1x+9DYXPanqgzIf8Wh
// SIG // ghcpMIIXJQYKKwYBBAGCNwMDATGCFxUwghcRBgkqhkiG
// SIG // 9w0BBwKgghcCMIIW/gIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWQYLKoZIhvcNAQkQAQSgggFIBIIBRDCCAUACAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQghWC7
// SIG // I91XXd5doGexj7kj3kDDQAvqs2C2tLo7EoDGkYYCBmQ/
// SIG // 0oWggBgTMjAyMzA1MTQxMDQ0MDcuMTQ4WjAEgAIB9KCB
// SIG // 2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UE
// SIG // CxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9ucyBM
// SIG // aW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjow
// SIG // ODQyLTRCRTYtQzI5QTElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZaCCEXgwggcnMIIFD6AD
// SIG // AgECAhMzAAABsm5AA39uqZSSAAEAAAGyMA0GCSqGSIb3
// SIG // DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MB4XDTIyMDkyMDIwMjIwMVoXDTIzMTIxNDIwMjIwMVow
// SIG // gdIxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1p
// SIG // Y3Jvc29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRl
// SIG // ZDEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046MDg0Mi00
// SIG // QkU2LUMyOUExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEBAQUA
// SIG // A4ICDwAwggIKAoICAQDKomUyHXv5UOKwvgZpeX/1rqv8
// SIG // Sk8a32xttx6H5kPqmQDeBsju9zxd8vTgH6be0H9o3JXV
// SIG // jhlAfh8wbsJZWMj938eDGPM77gLgd+xb6MrZzQtgyp1a
// SIG // 1ZRzlXBlC/Qp5oQzTANv57JIyH9iKIhvSdKi2K/Hbrx3
// SIG // UCfS4tj6vYLskm/Zr1C+tKILJQjvYJIehYhA8DK8FK/F
// SIG // o2uoxaVE58vLYNDdHJwjdsOHypKeamXG1GBWInC0m/+g
// SIG // O6RwrV+sZ46sIZiaIm975CiclcW7hS0YVV8R/eW9Cx3j
// SIG // YYn59476No/v+EFddIxKV1VvogvQbE7Uevcb041OdWYD
// SIG // +wUeGAxFquybMpUjr+QeUx0w10X9fOFEcxYU8m/DmUCm
// SIG // O5qjIe3PCfMNbBDOFw1BdlGTcvNvTVQsxtrX3RF2Wh8R
// SIG // fEZsaUGAccoWcGNa6LbiEvoHzdnqvoZAE94qRp/Pypg8
// SIG // A7cwG537l4wKYHmasIHGCfKQyfsv8VOqLsyc9Qb3uU04
// SIG // oZIgO8ELEHuketGZPXT3Tc8NDCuZ4kc7kGQLeBiPehYY
// SIG // 4ZVFnFGTgpL/yVzPzhrv64EqZWMHZjy883w7V8rsvxgl
// SIG // OSOJdPIOoon18qTIKGJJHHjgAM+L8dcdATp2VnyN30sK
// SIG // jVL6De53E0/jAeFab39UAaaYwQEFLr7ounghtDAlTQID
// SIG // AQABo4IBSTCCAUUwHQYDVR0OBBYEFJnyJ4Bc2RGZT5Iw
// SIG // zlZbgUgw2mpxMB8GA1UdIwQYMBaAFJ+nFV0AXmJdg/Tl
// SIG // 0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3JsL01p
// SIG // Y3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEw
// SIG // KDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYBBQUH
// SIG // MAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lv
// SIG // cHMvY2VydHMvTWljcm9zb2Z0JTIwVGltZS1TdGFtcCUy
// SIG // MFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4ICAQDcR7btxcyG
// SIG // m2g21qrMHSgZQISl0QjfuQkjIr9k2GuItkLliJvvfaYs
// SIG // AIQ4QA326qK9c8i4veWOhkJ7yFlIHXgu6C9WbWcnvds2
// SIG // CvhCH8GGZoUvgh+Ip3wM1L7HB2Rd8JayVHz1CAxlT9JQ
// SIG // mFbHvZoLrxtHapGOGskDxBzrybm4GWWjnYPzfHSJ3enx
// SIG // njnPtA6Bswfi4njmydkNALRLd1zd4l/AqevnWU1/McBP
// SIG // y74UcD6W//pyrITu01br3p8HU8Kgfy0+gjT2hJcBXisS
// SIG // q6kUzzGx3oPovipwS38JoRF7DINrNUF+ySMX70/epndH
// SIG // ojI4jBDtti2zs5izDXdyyDaMAJ0QQCbV/t/3t/dAfbDB
// SIG // jB6fmtVfoYLOtgKKQZdKf9NJYt9AzecBEOSH9+WZO2/0
// SIG // +qRMeqyVA2ArYu8wm4pIyk2pwZznPfcxjJXo+V/nwv5O
// SIG // RMVAqzrN/1cxkQmbeS71UEnVqqv0DM0xJopuLG8wEivY
// SIG // phJIzbWWcrwtQrFHA9b6BZLZXeJijIxPrgxFdyHXQ/g6
// SIG // 0ZPeJ1czT0rmV3sH1Tp1x0nqhu8TN1e35dmi+L9ToS9v
// SIG // icDtU8dwdIqztTvamzXSZN+eW57XdUUlSoDNtihQR56C
// SIG // +ybO6UYQYmiplU0BqDm/o9UGu6vnIsRqOPFYfZN+QQ7C
// SIG // Uvwy6FxUjw5eJjCCB3EwggVZoAMCAQICEzMAAAAVxedr
// SIG // ngKbSZkAAAAAABUwDQYJKoZIhvcNAQELBQAwgYgxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29m
// SIG // dCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDEw
// SIG // MB4XDTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIyNVow
// SIG // fDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggIiMA0G
// SIG // CSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM57Ry
// SIG // IQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/bErg
// SIG // 4r25PhdgM/9cT8dm95VTcVrifkpa/rg2Z4VGIwy1jRPP
// SIG // dzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzBRMhxXFEx
// SIG // N6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41JmTa
// SIG // mDu6GnszrYBbfowQHJ1S/rboYiXcag/PXfT+jlPP1uyF
// SIG // Vk3v3byNpOORj7I5LFGc6XBpDco2LXCOMcg1KL3jtIck
// SIG // w+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF50Zu
// SIG // yjLVwIYwXE8s4mKyzbnijYjklqwBSru+cakXW2dg3viS
// SIG // kR4dPf0gz3N9QZpGdc3EXzTdEonW/aUgfX782Z5F37Zy
// SIG // L9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0lBw0
// SIG // gg/wEPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlMjgK8
// SIG // QmguEOqEUUbi0b1qGFphAXPKZ6Je1yh2AuIzGHLXpyDw
// SIG // wvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJYfM2
// SIG // BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzFER1y
// SIG // 7435UsSFF5PAPBXbGjfHCBUYP3irRbb1Hode2o+eFnJp
// SIG // xq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYBBAGC
// SIG // NxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS/mTE
// SIG // mr6CkTxGNSnPEP8vBO4wHQYDVR0OBBYEFJ+nFV0AXmJd
// SIG // g/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYMKwYBBAGC
// SIG // N0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBvc2l0
// SIG // b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEFBQcDCDAZBgkr
// SIG // BgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMC
// SIG // AYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV
// SIG // 9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEug
// SIG // SaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUF
// SIG // BzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNy
// SIG // dDANBgkqhkiG9w0BAQsFAAOCAgEAnVV9/Cqt4SwfZwEx
// SIG // JFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518JxNj/a
// SIG // ZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6th54
// SIG // 2DYunKmCVgADsAW+iehp4LoJ7nvfam++Kctu2D9IdQHZ
// SIG // GN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2pFaq95W2
// SIG // KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBewVIVC
// SIG // s/wMnosZiefwC2qBwoEZQhlSdYo2wh3DYXMuLGt7bj8s
// SIG // CXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7T7uG+jIa2Zb0
// SIG // j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzHVG2d
// SIG // Y3RILLFORy3BFARxv2T5JL5zbcqOCb2zAVdJVGTZc9d/
// SIG // HltEAY5aGZFrDZ+kKNxnGSgkujhLmm77IVRrakURR6nx
// SIG // t67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+CrvsQWY9
// SIG // af3LwUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKiexcd
// SIG // FYmNcP7ntdAoGokLjzbaukz5m/8K6TT4JDVnK+ANuOaM
// SIG // mdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/OHBE
// SIG // 0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQdVTNY
// SIG // s6FwZvKhggLUMIICPQIBATCCAQChgdikgdUwgdIxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jvc29m
// SIG // dCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046MDg0Mi00QkU2LUMy
// SIG // OUExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiIwoBATAHBgUrDgMCGgMVAI4SfhHskkX5
// SIG // 9igjbI5/XBfQFEk6oIGDMIGApH4wfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDo
// SIG // CpxoMCIYDzIwMjMwNTE0MDczMTUyWhgPMjAyMzA1MTUw
// SIG // NzMxNTJaMHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOgK
// SIG // nGgCAQAwBwIBAAICD1MwBwIBAAICEekwCgIFAOgL7egC
// SIG // AQAwNgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoD
// SIG // AqAKMAgCAQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG
// SIG // 9w0BAQUFAAOBgQB5k5k1eiCgTihAx9A8zJjybEzIYRYd
// SIG // Tv4RqsLyTbwtkf3FBKgEuqSbLtpSABJGUsW9VB59ssAZ
// SIG // +RQkCNKqjBzG55JvKKQr0wrzYUVKIVQ0lGxR5aR60OOk
// SIG // zv38DGHyeoMf4YXANrbgQdBYgL+fXwHe/glR7Pw3k6C2
// SIG // bCytOJdABzGCBA0wggQJAgEBMIGTMHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwAhMzAAABsm5AA39uqZSSAAEA
// SIG // AAGyMA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0B
// SIG // CQMxDQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIE
// SIG // ICyn9YR8d7HH9WqL9VWqQzJd5yGaEAC1aLVKwF+2KgjK
// SIG // MIH6BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCBvQQgU3jO
// SIG // POfhPreDxFYnlKBSl+z1ci6P587vobSTwhtOPjUwgZgw
// SIG // gYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAIT
// SIG // MwAAAbJuQAN/bqmUkgABAAABsjAiBCA1i+lG/M8CxasJ
// SIG // 9k2HrmmGG+PqK0rkx8qR3SCLvfnzjzANBgkqhkiG9w0B
// SIG // AQsFAASCAgC9oJ66MBTaIw33ppNp8U56AoV+ilpRo4rY
// SIG // OSUorDGpzl0oZtx3LdHMRDjVXN0zlYdKXuM9LwbNYwjg
// SIG // Wj+rNtFAEzAZRm96N99wTHOeK274Fl6DUIxndVqEM9Kv
// SIG // +wt+Glg7jJExIvLDZdswqfI8OpcY7SqV5NpuNfAW4B6q
// SIG // ADjKn/9JG7Q88RWmOe28YY4DJkyvqrJlAhnEjJuTP/DZ
// SIG // nnvMuvHjURvXda+/a9G+DAfqydf7/TydknTut45b3ZV6
// SIG // PQLzLnyBlgACPlzA3HwsUJT9JzpVGARzYrO5a6xKI9tz
// SIG // NsGYxQnpZdbynCYQYQ1r69BpLJSZ2K9DK5Loua8638P6
// SIG // CrzHoq22iL1/5WHKIBWBA/+KFidwTrpDWmEtAkevmb9h
// SIG // Ay9WijcNaVA4zYS+dWYWgAR5l/intqu2oI453IjDTKBw
// SIG // 534pC1S0EJgnf4UNKjkLvs7oQGPyNSuoYmwT2Sp0PdWu
// SIG // Q5Cn8BQ8lnu6nm+osiWcDy3uFr+dYJm+4l5TFVOjy87f
// SIG // piS8vwrEBNSVyf5LH2LQEcxO4VEc4nAnxQQ+Zkjy4p1e
// SIG // n8UVSA9A3qxw8EotGJklU2MbjG0puTbdxPG05HRFOQfi
// SIG // Yps5YYj5z8Ee5n+ZIhIqn33AP8kyQmlzDMzMyHLsNClU
// SIG // Mw/SlZjyuPn+maFXKKKtpevIAwvfIuxiew==
// SIG // End signature block

;// powerbi-models v1.13.0
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
!function(t,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports["powerbi-models"]=a():t["powerbi-models"]=a()}(this,()=>{return i=[function(B,t,a){var i,o,e=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),r=(Object.defineProperty(t,"__esModule",{value:!0}),t.TextAlignment=t.CommonErrorCodes=t.BookmarksPlayMode=t.ExportDataType=t.QnaMode=t.PageNavigationPosition=t.BrowserPrintAdjustmentsMode=t.AggregateFunction=t.DataCacheMode=t.CredentialType=t.isPercentOfGrandTotal=t.isColumnAggr=t.isHierarchyLevelAggr=t.isHierarchyLevel=t.isColumn=t.isMeasure=t.getFilterType=t.isBasicFilterWithKeys=t.isFilterKeyColumnsTarget=t.HierarchyFilter=t.AdvancedFilter=t.TupleFilter=t.IdentityFilter=t.BasicFilterWithKeys=t.BasicFilter=t.RelativeTimeFilter=t.RelativeDateFilter=t.TopNFilter=t.IncludeExcludeFilter=t.NotSupportedFilter=t.Filter=t.RelativeDateOperators=t.RelativeDateFilterTimeUnit=t.FilterType=t.FiltersLevel=t.FiltersOperations=t.MenuLocation=t.ContrastMode=t.TokenType=t.ViewMode=t.Permissions=t.SectionVisibility=t.ReportAlignment=t.HyperlinkClickBehavior=t.LayoutType=t.VisualContainerDisplayMode=t.BackgroundType=t.DisplayOption=t.PageSizeType=t.TraceType=void 0,t.validateVisualHeader=t.validateExportDataRequest=t.validateQnaInterpretInputData=t.validateLoadQnaConfiguration=t.validateSaveAsParameters=t.validateUpdateFiltersRequest=t.validateFilter=t.validatePage=t.validateTileLoad=t.validateDashboardLoad=t.validateQuickCreate=t.validateCreateReport=t.validatePaginatedReportLoad=t.validateReportLoad=t.validateMenuGroupExtension=t.validateExtension=t.validateCustomPageSize=t.validateVisualizationsPane=t.validateSyncSlicersPane=t.validateSelectionPane=t.validatePageNavigationPane=t.validateFieldsPane=t.validateFiltersPane=t.validateBookmarksPane=t.validatePanes=t.validateSettings=t.validateCaptureBookmarkRequest=t.validateApplyBookmarkStateRequest=t.validateApplyBookmarkByNameRequest=t.validateAddBookmarkRequest=t.validatePlayBookmarkRequest=t.validateSlicerState=t.validateSlicer=t.validateVisualSelector=t.isIExtensionArray=t.isIExtensions=t.isGroupedMenuExtension=t.isFlatMenuExtension=t.isReportFiltersArray=t.isOnLoadFilters=t.VisualDataRoleKindPreference=t.VisualDataRoleKind=t.CommandDisplayOption=t.SlicerTargetSelector=t.VisualTypeSelector=t.VisualSelector=t.PageSelector=t.Selector=t.SortDirection=t.LegendPosition=void 0,t.validatePrintSettings=t.validateZoomLevel=t.validateCustomTheme=t.validateCommandsSettings=t.validateVisualSettings=void 0,a(1)),a=((a=t.TraceType||(t.TraceType={}))[a.Information=0]="Information",a[a.Verbose=1]="Verbose",a[a.Warning=2]="Warning",a[a.Error=3]="Error",a[a.ExpectedError=4]="ExpectedError",a[a.UnexpectedError=5]="UnexpectedError",a[a.Fatal=6]="Fatal",(a=t.PageSizeType||(t.PageSizeType={}))[a.Widescreen=0]="Widescreen",a[a.Standard=1]="Standard",a[a.Cortana=2]="Cortana",a[a.Letter=3]="Letter",a[a.Custom=4]="Custom",a[a.Mobile=5]="Mobile",(a=t.DisplayOption||(t.DisplayOption={}))[a.FitToPage=0]="FitToPage",a[a.FitToWidth=1]="FitToWidth",a[a.ActualSize=2]="ActualSize",(a=t.BackgroundType||(t.BackgroundType={}))[a.Default=0]="Default",a[a.Transparent=1]="Transparent",(a=t.VisualContainerDisplayMode||(t.VisualContainerDisplayMode={}))[a.Visible=0]="Visible",a[a.Hidden=1]="Hidden",(a=t.LayoutType||(t.LayoutType={}))[a.Master=0]="Master",a[a.Custom=1]="Custom",a[a.MobilePortrait=2]="MobilePortrait",a[a.MobileLandscape=3]="MobileLandscape",(a=t.HyperlinkClickBehavior||(t.HyperlinkClickBehavior={}))[a.Navigate=0]="Navigate",a[a.NavigateAndRaiseEvent=1]="NavigateAndRaiseEvent",a[a.RaiseEvent=2]="RaiseEvent",(a=t.ReportAlignment||(t.ReportAlignment={}))[a.Left=0]="Left",a[a.Center=1]="Center",a[a.Right=2]="Right",a[a.None=3]="None",(a=t.SectionVisibility||(t.SectionVisibility={}))[a.AlwaysVisible=0]="AlwaysVisible",a[a.HiddenInViewMode=1]="HiddenInViewMode",(a=t.Permissions||(t.Permissions={}))[a.Read=0]="Read",a[a.ReadWrite=1]="ReadWrite",a[a.Copy=2]="Copy",a[a.Create=4]="Create",a[a.All=7]="All",(a=t.ViewMode||(t.ViewMode={}))[a.View=0]="View",a[a.Edit=1]="Edit",(a=t.TokenType||(t.TokenType={}))[a.Aad=0]="Aad",a[a.Embed=1]="Embed",(a=t.ContrastMode||(t.ContrastMode={}))[a.None=0]="None",a[a.HighContrast1=1]="HighContrast1",a[a.HighContrast2=2]="HighContrast2",a[a.HighContrastBlack=3]="HighContrastBlack",a[a.HighContrastWhite=4]="HighContrastWhite",(a=t.MenuLocation||(t.MenuLocation={}))[a.Bottom=0]="Bottom",a[a.Top=1]="Top",(a=t.FiltersOperations||(t.FiltersOperations={}))[a.RemoveAll=0]="RemoveAll",a[a.ReplaceAll=1]="ReplaceAll",a[a.Add=2]="Add",a[a.Replace=3]="Replace",(a=t.FiltersLevel||(t.FiltersLevel={}))[a.Report=0]="Report",a[a.Page=1]="Page",a[a.Visual=2]="Visual",(a=o=t.FilterType||(t.FilterType={}))[a.Advanced=0]="Advanced",a[a.Basic=1]="Basic",a[a.Unknown=2]="Unknown",a[a.IncludeExclude=3]="IncludeExclude",a[a.RelativeDate=4]="RelativeDate",a[a.TopN=5]="TopN",a[a.Tuple=6]="Tuple",a[a.RelativeTime=7]="RelativeTime",a[a.Identity=8]="Identity",a[a.Hierarchy=9]="Hierarchy",(a=t.RelativeDateFilterTimeUnit||(t.RelativeDateFilterTimeUnit={}))[a.Days=0]="Days",a[a.Weeks=1]="Weeks",a[a.CalendarWeeks=2]="CalendarWeeks",a[a.Months=3]="Months",a[a.CalendarMonths=4]="CalendarMonths",a[a.Years=5]="Years",a[a.CalendarYears=6]="CalendarYears",a[a.Minutes=7]="Minutes",a[a.Hours=8]="Hours",(a=t.RelativeDateOperators||(t.RelativeDateOperators={}))[a.InLast=0]="InLast",a[a.InThis=1]="InThis",a[a.InNext=2]="InNext",q.prototype.toJSON=function(){var t={$schema:this.schemaUrl,target:this.target,filterType:this.filterType};return void 0!==this.displaySettings&&(t.displaySettings=this.displaySettings),t},q);function q(t,a){this.target=t,this.filterType=a}t.Filter=a;e(d,l=a),d.prototype.toJSON=function(){var t=l.prototype.toJSON.call(this);return t.message=this.message,t.notSupportedTypeName=this.notSupportedTypeName,t},d.schemaUrl="http://powerbi.com/product/schema#notSupported";var l,n=d;function d(t,a,e){t=l.call(this,t,o.Unknown)||this;return t.message=a,t.notSupportedTypeName=e,t.schemaUrl=d.schemaUrl,t}t.NotSupportedFilter=n;e(u,s=a),u.prototype.toJSON=function(){var t=s.prototype.toJSON.call(this);return t.isExclude=this.isExclude,t.values=this.values,t},u.schemaUrl="http://powerbi.com/product/schema#includeExclude";var s,n=u;function u(t,a,e){t=s.call(this,t,o.IncludeExclude)||this;return t.values=e,t.isExclude=a,t.schemaUrl=u.schemaUrl,t}t.IncludeExcludeFilter=n;e(V,p=a),V.prototype.toJSON=function(){var t=p.prototype.toJSON.call(this);return t.operator=this.operator,t.itemCount=this.itemCount,t.orderBy=this.orderBy,t},V.schemaUrl="http://powerbi.com/product/schema#topN";var p,n=V;function V(t,a,e,i){t=p.call(this,t,o.TopN)||this;return t.operator=a,t.itemCount=e,t.schemaUrl=V.schemaUrl,t.orderBy=i,t}t.TopNFilter=n;e(f,c=a),f.prototype.toJSON=function(){var t=c.prototype.toJSON.call(this);return t.operator=this.operator,t.timeUnitsCount=this.timeUnitsCount,t.timeUnitType=this.timeUnitType,t.includeToday=this.includeToday,t},f.schemaUrl="http://powerbi.com/product/schema#relativeDate";var c,n=f;function f(t,a,e,i,r){t=c.call(this,t,o.RelativeDate)||this;return t.operator=a,t.timeUnitsCount=e,t.timeUnitType=i,t.includeToday=r,t.schemaUrl=f.schemaUrl,t}t.RelativeDateFilter=n;e(y,v=a),y.prototype.toJSON=function(){var t=v.prototype.toJSON.call(this);return t.operator=this.operator,t.timeUnitsCount=this.timeUnitsCount,t.timeUnitType=this.timeUnitType,t},y.schemaUrl="http://powerbi.com/product/schema#relativeTime";var v,n=y;function y(t,a,e,i){t=v.call(this,t,o.RelativeTime)||this;return t.operator=a,t.timeUnitsCount=e,t.timeUnitType=i,t.schemaUrl=y.schemaUrl,t}t.RelativeTimeFilter=n;e(m,h=a),m.prototype.toJSON=function(){var t=h.prototype.toJSON.call(this);return t.operator=this.operator,t.values=this.values,t.requireSingleSelection=!!this.requireSingleSelection,t},m.schemaUrl="http://powerbi.com/product/schema#basic";var h,n=m;function m(t,a){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];var r=h.call(this,t,o.Basic)||this;if(r.operator=a,r.schemaUrl=m.schemaUrl,0===e.length&&"All"!==a)throw new Error('values must be a non-empty array unless your operator is "All".');return Array.isArray(e[0])?r.values=e[0]:r.values=e,r}t.BasicFilter=n;e(w,g=n),w.prototype.toJSON=function(){var t=g.prototype.toJSON.call(this);return t.keyValues=this.keyValues,t};var g,n=w;function w(t,a,e,i){var a=g.call(this,t,a,e)||this,r=(a.keyValues=i,(a.target=t).keys?t.keys.length:0);if(0<r&&!i)throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(r," keys"));if(0===r&&i&&0<i.length)throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");for(var l=0,o=a.keyValues;l<o.length;l++){var n=o[l];if(n){n=n.length;if(n!==r)throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(n," values and ").concat(r," keys"))}}return a}t.BasicFilterWithKeys=n;e(O,b=a),O.prototype.toJSON=function(){var t=b.prototype.toJSON.call(this);return t.operator=this.operator,t.target=this.target,t},O.schemaUrl="http://powerbi.com/product/schema#identity";var b,n=O;function O(t,a){t=b.call(this,t,o.Identity)||this;return t.operator=a,t.schemaUrl=O.schemaUrl,t}t.IdentityFilter=n;e(S,_=a),S.prototype.toJSON=function(){var t=_.prototype.toJSON.call(this);return t.operator=this.operator,t.values=this.values,t.target=this.target,t},S.schemaUrl="http://powerbi.com/product/schema#tuple";var _,n=S;function S(t,a,e){t=_.call(this,t,o.Tuple)||this;return t.operator=a,t.schemaUrl=S.schemaUrl,t.values=e,t}t.TupleFilter=n;e(T,F=a),T.prototype.toJSON=function(){var t=F.prototype.toJSON.call(this);return t.logicalOperator=this.logicalOperator,t.conditions=this.conditions,t},T.schemaUrl="http://powerbi.com/product/schema#advanced";var F,n=T;function T(t,a){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];var r,l=F.call(this,t,o.Advanced)||this;if(l.schemaUrl=T.schemaUrl,"string"!=typeof a||0===a.length)throw new Error("logicalOperator must be a valid operator, You passed: ".concat(a));if(l.logicalOperator=a,2<(r=Array.isArray(e[0])?e[0]:e).length)throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(e.length));if(1===r.length&&"And"!==a)throw new Error('Logical Operator must be "And" when there is only one condition provided');return l.conditions=r,l}t.AdvancedFilter=n;e(R,P=a),R.prototype.toJSON=function(){var t=P.prototype.toJSON.call(this);return t.hierarchyData=this.hierarchyData,t.target=this.target,t},R.schemaUrl="http://powerbi.com/product/schema#hierarchy";var P,n=R;function R(t,a){t=P.call(this,t,o.Hierarchy)||this;return t.schemaUrl=R.schemaUrl,t.hierarchyData=a,t}function D(t){if(t.filterType)return t.filterType;var a=t;return"string"==typeof t.operator&&Array.isArray(t.values)?o.Basic:"string"==typeof a.logicalOperator&&Array.isArray(a.conditions)?o.Advanced:o.Unknown}function L(t){return!(!t.table||!t.column||t.aggregationFunction)}t.HierarchyFilter=n,t.isFilterKeyColumnsTarget=function(t){return L(t)&&!!t.keys},t.isBasicFilterWithKeys=function(t){return D(t)===o.Basic&&!!t.keyValues},t.getFilterType=D,t.isMeasure=function(t){return void 0!==t.table&&void 0!==t.measure},t.isColumn=L,t.isHierarchyLevel=function(t){return!(!(t.table&&t.hierarchy&&t.hierarchyLevel)||t.aggregationFunction)},t.isHierarchyLevelAggr=function(t){return!!(t.table&&t.hierarchy&&t.hierarchyLevel&&t.aggregationFunction)},t.isColumnAggr=function(t){return!!(t.table&&t.column&&t.aggregationFunction)},t.isPercentOfGrandTotal=function(t){return!!t.percentOfGrandTotal},(a=t.CredentialType||(t.CredentialType={}))[a.NoConnection=0]="NoConnection",a[a.OnBehalfOf=1]="OnBehalfOf",a[a.Anonymous=2]="Anonymous",(n=t.DataCacheMode||(t.DataCacheMode={}))[n.Import=0]="Import",n[n.DirectQuery=1]="DirectQuery",(a=t.AggregateFunction||(t.AggregateFunction={}))[a.Default=1]="Default",a[a.None=2]="None",a[a.Sum=3]="Sum",a[a.Min=4]="Min",a[a.Max=5]="Max",a[a.Count=6]="Count",a[a.Average=7]="Average",a[a.DistinctCount=8]="DistinctCount",(n=t.BrowserPrintAdjustmentsMode||(t.BrowserPrintAdjustmentsMode={}))[n.Default=0]="Default",n[n.NoAdjustments=1]="NoAdjustments",(a=t.PageNavigationPosition||(t.PageNavigationPosition={}))[a.Bottom=0]="Bottom",a[a.Left=1]="Left",(n=t.QnaMode||(t.QnaMode={}))[n.Interactive=0]="Interactive",n[n.ResultOnly=1]="ResultOnly",(a=t.ExportDataType||(t.ExportDataType={}))[a.Summarized=0]="Summarized",a[a.Underlying=1]="Underlying",(n=t.BookmarksPlayMode||(t.BookmarksPlayMode={}))[n.Off=0]="Off",n[n.Presentation=1]="Presentation",t.CommonErrorCodes={TokenExpired:"TokenExpired",NotFound:"PowerBIEntityNotFound",InvalidParameters:"Invalid parameters",LoadReportFailed:"LoadReportFailed",NotAuthorized:"PowerBINotAuthorizedException",FailedToLoadModel:"ExplorationContainer_FailedToLoadModel_DefaultDetails"},t.TextAlignment={Left:"left",Center:"center",Right:"right"},t.LegendPosition={Top:"Top",Bottom:"Bottom",Right:"Right",Left:"Left",TopCenter:"TopCenter",BottomCenter:"BottomCenter",RightCenter:"RightCenter",LeftCenter:"LeftCenter"},(a=t.SortDirection||(t.SortDirection={}))[a.Ascending=1]="Ascending",a[a.Descending=2]="Descending";N.prototype.toJSON=function(){return{$schema:this.$schema}};n=N;function N(t){this.$schema=t}t.Selector=n;e(M,C=n),M.prototype.toJSON=function(){var t=C.prototype.toJSON.call(this);return t.pageName=this.pageName,t},M.schemaUrl="http://powerbi.com/product/schema#pageSelector";var C,a=M;function M(t){var a=C.call(this,M.schemaUrl)||this;return a.pageName=t,a}t.PageSelector=a;e(j,A=n),j.prototype.toJSON=function(){var t=A.prototype.toJSON.call(this);return t.visualName=this.visualName,t},j.schemaUrl="http://powerbi.com/product/schema#visualSelector";var A,U=j;function j(t){var a=A.call(this,j.schemaUrl)||this;return a.visualName=t,a}t.VisualSelector=U;e(k,I=n),k.prototype.toJSON=function(){var t=I.prototype.toJSON.call(this);return t.visualType=this.visualType,t},k.schemaUrl="http://powerbi.com/product/schema#visualTypeSelector";var I,a=k;function k(t){var a=I.call(this,U.schemaUrl)||this;return a.visualType=t,a}t.VisualTypeSelector=a;e(x,H=n),x.prototype.toJSON=function(){var t=H.prototype.toJSON.call(this);return t.target=this.target,t},x.schemaUrl="http://powerbi.com/product/schema#slicerTargetSelector";var H,a=x;function x(t){var a=H.call(this,U.schemaUrl)||this;return a.target=t,a}function z(t){return Array.isArray(t)}function J(t){return t&&!!t.groupName}function Q(t){return Array.isArray(t)}function E(t){return{message:t.message||"".concat(t.path," is invalid. Not meeting ").concat(t.keyword," constraint")}}t.SlicerTargetSelector=a,(e=t.CommandDisplayOption||(t.CommandDisplayOption={}))[e.Enabled=0]="Enabled",e[e.Disabled=1]="Disabled",e[e.Hidden=2]="Hidden",(n=t.VisualDataRoleKind||(t.VisualDataRoleKind={}))[n.Grouping=0]="Grouping",n[n.Measure=1]="Measure",n[n.GroupingOrMeasure=2]="GroupingOrMeasure",(a=t.VisualDataRoleKindPreference||(t.VisualDataRoleKindPreference={}))[a.Measure=0]="Measure",a[a.Grouping=1]="Grouping",t.isOnLoadFilters=function(t){return t&&!z(t)},t.isReportFiltersArray=z,t.isFlatMenuExtension=function(t){return t&&!J(t)},t.isGroupedMenuExtension=J,t.isIExtensions=function(t){return t&&!Q(t)},t.isIExtensionArray=Q,t.validateVisualSelector=function(t){return(t=r.Validators.visualSelectorValidator.validate(t))?t.map(E):void 0},t.validateSlicer=function(t){return(t=r.Validators.slicerValidator.validate(t))?t.map(E):void 0},t.validateSlicerState=function(t){return(t=r.Validators.slicerStateValidator.validate(t))?t.map(E):void 0},t.validatePlayBookmarkRequest=function(t){return(t=r.Validators.playBookmarkRequestValidator.validate(t))?t.map(E):void 0},t.validateAddBookmarkRequest=function(t){return(t=r.Validators.addBookmarkRequestValidator.validate(t))?t.map(E):void 0},t.validateApplyBookmarkByNameRequest=function(t){return(t=r.Validators.applyBookmarkByNameRequestValidator.validate(t))?t.map(E):void 0},t.validateApplyBookmarkStateRequest=function(t){return(t=r.Validators.applyBookmarkStateRequestValidator.validate(t))?t.map(E):void 0},t.validateCaptureBookmarkRequest=function(t){return(t=r.Validators.captureBookmarkRequestValidator.validate(t))?t.map(E):void 0},t.validateSettings=function(t){return(t=r.Validators.settingsValidator.validate(t))?t.map(E):void 0},t.validatePanes=function(t){return(t=r.Validators.reportPanesValidator.validate(t))?t.map(E):void 0},t.validateBookmarksPane=function(t){return(t=r.Validators.bookmarksPaneValidator.validate(t))?t.map(E):void 0},t.validateFiltersPane=function(t){return(t=r.Validators.filtersPaneValidator.validate(t))?t.map(E):void 0},t.validateFieldsPane=function(t){return(t=r.Validators.fieldsPaneValidator.validate(t))?t.map(E):void 0},t.validatePageNavigationPane=function(t){return(t=r.Validators.pageNavigationPaneValidator.validate(t))?t.map(E):void 0},t.validateSelectionPane=function(t){return(t=r.Validators.selectionPaneValidator.validate(t))?t.map(E):void 0},t.validateSyncSlicersPane=function(t){return(t=r.Validators.syncSlicersPaneValidator.validate(t))?t.map(E):void 0},t.validateVisualizationsPane=function(t){return(t=r.Validators.visualizationsPaneValidator.validate(t))?t.map(E):void 0},t.validateCustomPageSize=function(t){return(t=r.Validators.customPageSizeValidator.validate(t))?t.map(E):void 0},t.validateExtension=function(t){return(t=r.Validators.extensionValidator.validate(t))?t.map(E):void 0},t.validateMenuGroupExtension=function(t){return(t=r.Validators.menuGroupExtensionValidator.validate(t))?t.map(E):void 0},t.validateReportLoad=function(t){return(t=r.Validators.reportLoadValidator.validate(t))?t.map(E):void 0},t.validatePaginatedReportLoad=function(t){return(t=r.Validators.paginatedReportLoadValidator.validate(t))?t.map(E):void 0},t.validateCreateReport=function(t){return(t=r.Validators.reportCreateValidator.validate(t))?t.map(E):void 0},t.validateQuickCreate=function(t){return(t=r.Validators.quickCreateValidator.validate(t))?t.map(E):void 0},t.validateDashboardLoad=function(t){return(t=r.Validators.dashboardLoadValidator.validate(t))?t.map(E):void 0},t.validateTileLoad=function(t){return(t=r.Validators.tileLoadValidator.validate(t))?t.map(E):void 0},t.validatePage=function(t){return(t=r.Validators.pageValidator.validate(t))?t.map(E):void 0},t.validateFilter=function(t){return(t=r.Validators.filterValidator.validate(t))?t.map(E):void 0},t.validateUpdateFiltersRequest=function(t){return(t=r.Validators.updateFiltersRequestValidator.validate(t))?t.map(E):void 0},t.validateSaveAsParameters=function(t){return(t=r.Validators.saveAsParametersValidator.validate(t))?t.map(E):void 0},t.validateLoadQnaConfiguration=function(t){return(t=r.Validators.loadQnaValidator.validate(t))?t.map(E):void 0},t.validateQnaInterpretInputData=function(t){return(t=r.Validators.qnaInterpretInputDataValidator.validate(t))?t.map(E):void 0},t.validateExportDataRequest=function(t){return(t=r.Validators.exportDataRequestValidator.validate(t))?t.map(E):void 0},t.validateVisualHeader=function(t){return(t=r.Validators.visualHeaderValidator.validate(t))?t.map(E):void 0},t.validateVisualSettings=function(t){return(t=r.Validators.visualSettingsValidator.validate(t))?t.map(E):void 0},t.validateCommandsSettings=function(t){return(t=r.Validators.commandsSettingsValidator.validate(t))?t.map(E):void 0},t.validateCustomTheme=function(t){return(t=r.Validators.customThemeValidator.validate(t))?t.map(E):void 0},t.validateZoomLevel=function(t){return(t=r.Validators.zoomLevelValidator.validate(t))?t.map(E):void 0},t.validatePrintSettings=function(t){return(t=r.Validators.printSettingsValidator.validate(t))?t.map(E):void 0}},(t,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Validators=void 0;var i=e(2),r=e(5),l=e(6),o=e(7),n=e(8),d=e(9),s=e(10),u=e(11),p=e(12),V=e(13),c=e(14),f=e(15),v=e(16),y=e(17),h=e(18),m=e(19),g=e(20),w=e(21),b=e(22),O=e(23),_=e(24),S=e(25),F=e(26),T=e(27),P=e(28),R=e(29),C=e(4),M=e(30),A=e(31),j=e(32),k=e(33),e=e(34);a.Validators={addBookmarkRequestValidator:new r.AddBookmarkRequestValidator,advancedFilterTypeValidator:new C.EnumValidator([0]),advancedFilterValidator:new p.AdvancedFilterValidator,anyArrayValidator:new C.ArrayValidator([new F.AnyOfValidator([new C.StringValidator,new C.NumberValidator,new C.BooleanValidator])]),anyFilterValidator:new F.AnyOfValidator([new p.BasicFilterValidator,new p.AdvancedFilterValidator,new p.IncludeExcludeFilterValidator,new p.NotSupportedFilterValidator,new p.RelativeDateFilterValidator,new p.TopNFilterValidator,new p.RelativeTimeFilterValidator,new p.HierarchyFilterValidator]),anyValueValidator:new F.AnyOfValidator([new C.StringValidator,new C.NumberValidator,new C.BooleanValidator]),actionBarValidator:new i.ActionBarValidator,statusBarValidator:new i.StatusBarValidator,applyBookmarkByNameRequestValidator:new r.ApplyBookmarkByNameRequestValidator,applyBookmarkStateRequestValidator:new r.ApplyBookmarkStateRequestValidator,applyBookmarkValidator:new F.AnyOfValidator([new r.ApplyBookmarkByNameRequestValidator,new r.ApplyBookmarkStateRequestValidator]),backgroundValidator:new C.EnumValidator([0,1]),basicFilterTypeValidator:new C.EnumValidator([1]),basicFilterValidator:new p.BasicFilterValidator,booleanArrayValidator:new C.BooleanArrayValidator,booleanValidator:new C.BooleanValidator,bookmarksPaneValidator:new f.BookmarksPaneValidator,captureBookmarkOptionsValidator:new r.CaptureBookmarkOptionsValidator,captureBookmarkRequestValidator:new r.CaptureBookmarkRequestValidator,columnSchemaArrayValidator:new C.ArrayValidator([new A.ColumnSchemaValidator]),commandDisplayOptionValidator:new C.EnumValidator([0,1,2]),commandExtensionSelectorValidator:new F.AnyOfValidator([new w.VisualSelectorValidator,new w.VisualTypeSelectorValidator]),commandExtensionArrayValidator:new C.ArrayValidator([new u.CommandExtensionValidator]),commandExtensionValidator:new u.CommandExtensionValidator,commandsSettingsArrayValidator:new C.ArrayValidator([new l.CommandsSettingsValidator]),commandsSettingsValidator:new l.CommandsSettingsValidator,conditionItemValidator:new p.ConditionItemValidator,contrastModeValidator:new C.EnumValidator([0,1,2,3,4]),credentialDetailsValidator:new R.MapValidator([new C.StringValidator],[new C.StringValidator]),credentialsValidator:new A.CredentialsValidator,credentialTypeValidator:new C.EnumValidator([0,1,2]),customLayoutDisplayOptionValidator:new C.EnumValidator([0,1,2]),customLayoutValidator:new V.CustomLayoutValidator,customPageSizeValidator:new c.CustomPageSizeValidator,customThemeValidator:new o.CustomThemeValidator,dashboardLoadValidator:new n.DashboardLoadValidator,dataCacheModeValidator:new C.EnumValidator([0,1]),datasetBindingValidator:new d.DatasetBindingValidator,datasetCreateConfigValidator:new A.DatasetCreateConfigValidator,datasourceConnectionConfigValidator:new A.DatasourceConnectionConfigValidator,displayStateModeValidator:new C.EnumValidator([0,1]),displayStateValidator:new V.DisplayStateValidator,exportDataRequestValidator:new s.ExportDataRequestValidator,extensionArrayValidator:new C.ArrayValidator([new u.ExtensionValidator]),extensionsValidator:new F.AnyOfValidator([new C.ArrayValidator([new u.ExtensionValidator]),new u.ExtensionsValidator]),extensionPointsValidator:new u.ExtensionPointsValidator,extensionValidator:new u.ExtensionValidator,fieldForbiddenValidator:new T.FieldForbiddenValidator,fieldRequiredValidator:new P.FieldRequiredValidator,fieldsPaneValidator:new f.FieldsPaneValidator,filterColumnTargetValidator:new p.FilterColumnTargetValidator,filterDisplaySettingsValidator:new p.FilterDisplaySettingsValidator,filterConditionsValidator:new C.ArrayValidator([new p.ConditionItemValidator]),filterHierarchyTargetValidator:new p.FilterHierarchyTargetValidator,filterMeasureTargetValidator:new p.FilterMeasureTargetValidator,filterTargetValidator:new F.AnyOfValidator([new p.FilterColumnTargetValidator,new p.FilterHierarchyTargetValidator,new p.FilterMeasureTargetValidator,new C.ArrayValidator([new F.AnyOfValidator([new p.FilterColumnTargetValidator,new p.FilterHierarchyTargetValidator,new p.FilterMeasureTargetValidator,new p.FilterKeyColumnsTargetValidator,new p.FilterKeyHierarchyTargetValidator])])]),filterValidator:new p.FilterValidator,filterTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6,7,9]),filtersArrayValidator:new C.ArrayValidator([new p.FilterValidator]),filtersOperationsUpdateValidator:new C.EnumValidator([1,2,3]),filtersOperationsRemoveAllValidator:new C.EnumValidator([0]),filtersPaneValidator:new f.FiltersPaneValidator,hyperlinkClickBehaviorValidator:new C.EnumValidator([0,1,2]),includeExcludeFilterValidator:new p.IncludeExcludeFilterValidator,includeExludeFilterTypeValidator:new C.EnumValidator([3]),hierarchyFilterTypeValidator:new C.EnumValidator([9]),hierarchyFilterValuesValidator:new C.ArrayValidator([new p.HierarchyFilterNodeValidator]),layoutTypeValidator:new C.EnumValidator([0,1,2,3]),loadQnaValidator:new v.LoadQnaValidator,menuExtensionValidator:new F.AnyOfValidator([new u.FlatMenuExtensionValidator,new u.GroupedMenuExtensionValidator]),menuGroupExtensionArrayValidator:new C.ArrayValidator([new u.MenuGroupExtensionValidator]),menuGroupExtensionValidator:new u.MenuGroupExtensionValidator,menuLocationValidator:new C.EnumValidator([0,1]),notSupportedFilterTypeValidator:new C.EnumValidator([2]),notSupportedFilterValidator:new p.NotSupportedFilterValidator,numberArrayValidator:new C.NumberArrayValidator,numberValidator:new C.NumberValidator,onLoadFiltersBaseValidator:new F.AnyOfValidator([new p.OnLoadFiltersBaseValidator,new p.OnLoadFiltersBaseRemoveOperationValidator]),pageLayoutValidator:new R.MapValidator([new C.StringValidator],[new V.VisualLayoutValidator]),pageNavigationPaneValidator:new f.PageNavigationPaneValidator,pageNavigationPositionValidator:new C.EnumValidator([0,1]),pageSizeTypeValidator:new C.EnumValidator([0,1,2,3,4,5]),pageSizeValidator:new c.PageSizeValidator,pageValidator:new c.PageValidator,pageViewFieldValidator:new c.PageViewFieldValidator,pagesLayoutValidator:new R.MapValidator([new C.StringValidator],[new V.PageLayoutValidator]),paginatedReportCommandsValidator:new l.PaginatedReportCommandsValidator,paginatedReportDatasetBindingArrayValidator:new C.ArrayValidator([new e.PaginatedReportDatasetBindingValidator]),paginatedReportLoadValidator:new m.PaginatedReportLoadValidator,paginatedReportsettingsValidator:new b.PaginatedReportSettingsValidator,parameterValuesArrayValidator:new C.ArrayValidator([new m.ReportParameterFieldsValidator]),parametersPanelValidator:new M.ParametersPanelValidator,permissionsValidator:new C.EnumValidator([0,1,2,4,7]),playBookmarkRequestValidator:new r.PlayBookmarkRequestValidator,printSettingsValidator:new k.PrintSettingsValidator,qnaInterpretInputDataValidator:new v.QnaInterpretInputDataValidator,qnaPanesValidator:new f.QnaPanesValidator,qnaSettingValidator:new v.QnaSettingsValidator,quickCreateValidator:new j.QuickCreateValidator,rawDataValidator:new C.ArrayValidator([new C.ArrayValidator([new C.StringValidator])]),relativeDateFilterOperatorValidator:new C.EnumValidator([0,1,2]),relativeDateFilterTimeUnitTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6]),relativeDateFilterTypeValidator:new C.EnumValidator([4]),relativeDateFilterValidator:new p.RelativeDateFilterValidator,relativeDateTimeFilterTypeValidator:new C.EnumValidator([4,7]),relativeDateTimeFilterUnitTypeValidator:new C.EnumValidator([0,1,2,3,4,5,6,7,8]),relativeTimeFilterTimeUnitTypeValidator:new C.EnumValidator([7,8]),relativeTimeFilterTypeValidator:new C.EnumValidator([7]),relativeTimeFilterValidator:new p.RelativeTimeFilterValidator,reportBarsValidator:new i.ReportBarsValidator,reportCreateValidator:new y.ReportCreateValidator,reportLoadFiltersValidator:new F.AnyOfValidator([new C.ArrayValidator([new p.FilterValidator]),new p.OnLoadFiltersValidator]),reportLoadValidator:new h.ReportLoadValidator,reportPanesValidator:new f.ReportPanesValidator,saveAsParametersValidator:new g.SaveAsParametersValidator,selectionPaneValidator:new f.SelectionPaneValidator,settingsValidator:new b.SettingsValidator,singleCommandSettingsValidator:new l.SingleCommandSettingsValidator,slicerSelectorValidator:new F.AnyOfValidator([new w.VisualSelectorValidator,new w.SlicerTargetSelectorValidator]),slicerStateValidator:new O.SlicerStateValidator,slicerTargetValidator:new F.AnyOfValidator([new p.FilterColumnTargetValidator,new p.FilterHierarchyTargetValidator,new p.FilterMeasureTargetValidator,new p.FilterKeyColumnsTargetValidator,new p.FilterKeyHierarchyTargetValidator]),slicerValidator:new O.SlicerValidator,stringArrayValidator:new C.StringArrayValidator,stringValidator:new C.StringValidator,syncSlicersPaneValidator:new f.SyncSlicersPaneValidator,tableDataArrayValidator:new C.ArrayValidator([new A.TableDataValidator]),tableSchemaListValidator:new C.ArrayValidator([new A.TableSchemaValidator]),tileLoadValidator:new _.TileLoadValidator,tokenTypeValidator:new C.EnumValidator([0,1]),topNFilterTypeValidator:new C.EnumValidator([5]),topNFilterValidator:new p.TopNFilterValidator,updateFiltersRequestValidator:new F.AnyOfValidator([new p.UpdateFiltersRequestValidator,new p.RemoveFiltersRequestValidator]),viewModeValidator:new C.EnumValidator([0,1]),visualCommandSelectorValidator:new F.AnyOfValidator([new w.VisualSelectorValidator,new w.VisualTypeSelectorValidator]),visualHeaderSelectorValidator:new F.AnyOfValidator([new w.VisualSelectorValidator,new w.VisualTypeSelectorValidator]),visualHeaderSettingsValidator:new S.VisualHeaderSettingsValidator,visualHeaderValidator:new S.VisualHeaderValidator,visualHeadersValidator:new C.ArrayValidator([new S.VisualHeaderValidator]),visualizationsPaneValidator:new f.VisualizationsPaneValidator,visualLayoutValidator:new V.VisualLayoutValidator,visualSelectorValidator:new w.VisualSelectorValidator,visualSettingsValidator:new S.VisualSettingsValidator,visualTypeSelectorValidator:new w.VisualTypeSelectorValidator,zoomLevelValidator:new C.RangeValidator(.25,4)}},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.StatusBarValidator=a.ActionBarValidator=a.ReportBarsValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"actionBar",validators:[d.Validators.actionBarValidator]},{field:"statusBar",validators:[d.Validators.statusBarValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.ReportBarsValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.ActionBarValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.StatusBarValidator=e},(t,a)=>{function e(t){this.fieldValidatorsPairs=t}Object.defineProperty(a,"__esModule",{value:!0}),a.MultipleFieldsValidator=void 0,e.prototype.validate=function(t,a,e){if(!this.fieldValidatorsPairs)return null;for(var i=a?a+"."+e:e,r=0,l=this.fieldValidatorsPairs;r<l.length;r++)for(var o=l[r],n=0,d=o.validators;n<d.length;n++){var s=d[n].validate(t[o.field],i,o.field);if(s)return s}return null},a.MultipleFieldsValidator=e},function(t,a){var i,e=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),r=(Object.defineProperty(a,"__esModule",{value:!0}),a.RangeValidator=a.NumberArrayValidator=a.BooleanArrayValidator=a.StringArrayValidator=a.EnumValidator=a.SchemaValidator=a.ValueValidator=a.NumberValidator=a.BooleanValidator=a.StringValidator=a.TypeValidator=a.ArrayValidator=a.ObjectValidator=void 0,l.prototype.validate=function(t,a,e){return null!=t&&("object"!=typeof t||Array.isArray(t))?[{message:void 0!==e?e+" must be an object":"input must be an object",path:a,keyword:"type"}]:null},l);function l(){}a.ObjectValidator=r;o.prototype.validate=function(t,a,e){if(null==t)return null;if(!Array.isArray(t))return[{message:e+" property is invalid",path:(a?a+".":"")+e,keyword:"type"}];for(var i=0;i<t.length;i++)for(var r=(a?a+".":"")+e+"."+i.toString(),l=0,o=this.itemValidators;l<o.length;l++)if(o[l].validate(t[i],r,e))return[{message:e+" property is invalid",path:(a?a+".":"")+e,keyword:"type"}];return null};r=o;function o(t){this.itemValidators=t}a.ArrayValidator=r;d.prototype.validate=function(t,a,e){return null!=t&&typeof t!==this.expectedType?[{message:e+" must be a "+this.expectedType,path:(a?a+".":"")+e,keyword:"type"}]:null};var n=d;function d(t){this.expectedType=t}a.TypeValidator=n;e(p,s=n);var s,u=p;function p(){return s.call(this,"string")||this}a.StringValidator=u;e(f,V=n);var V,c=f;function f(){return V.call(this,"boolean")||this}a.BooleanValidator=c;e(h,v=n);var v,y=h;function h(){return v.call(this,"number")||this}a.NumberValidator=y;g.prototype.validate=function(t,a,e){return null!=t&&this.possibleValues.indexOf(t)<0?[{message:e+" property is invalid",path:(a?a+".":"")+e,keyword:"invalid"}]:null};var m=g;function g(t){this.possibleValues=t}a.ValueValidator=m;e(b,w=m),b.prototype.validate=function(t,a,e){return w.prototype.validate.call(this,t,a,e)};var w,n=b;function b(t){var a=w.call(this,[t])||this;return a.schemaValue=t,a}a.SchemaValidator=n;e(_,O=y),_.prototype.validate=function(t,a,e){if(null==t)return null;var i=O.prototype.validate.call(this,t,a,e);return i||new m(this.possibleValues).validate(t,a,e)};var O,n=_;function _(t){var a=O.call(this)||this;return a.possibleValues=t,a}a.EnumValidator=n;e(F,S=r),F.prototype.validate=function(t,a,e){return S.prototype.validate.call(this,t,a,e)?[{message:e+" must be an array of strings",path:(a?a+".":"")+e,keyword:"type"}]:null};var S,n=F;function F(){return S.call(this,[new u])||this}a.StringArrayValidator=n;e(P,T=r),P.prototype.validate=function(t,a,e){return T.prototype.validate.call(this,t,a,e)?[{message:e+" must be an array of booleans",path:(a?a+".":"")+e,keyword:"type"}]:null};var T,n=P;function P(){return T.call(this,[new c])||this}a.BooleanArrayValidator=n;e(C,R=r),C.prototype.validate=function(t,a,e){return R.prototype.validate.call(this,t,a,e)?[{message:e+" must be an array of numbers",path:(a?a+".":"")+e,keyword:"type"}]:null};var R,n=C;function C(){return R.call(this,[new y])||this}a.NumberArrayValidator=n;e(A,M=y),A.prototype.validate=function(t,a,e){if(null==t)return null;var i=M.prototype.validate.call(this,t,a,e);return i||(t>this.maxValue||t<this.minValue?[{message:e+" must be a number between "+this.minValue.toString()+" and "+this.maxValue.toString(),path:(a?a+".":"")+e,keyword:"range"}]:null)};var M,r=A;function A(t,a){var e=M.call(this)||this;return e.minValue=t,e.maxValue=a,e}a.RangeValidator=r},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.CaptureBookmarkRequestValidator=a.CaptureBookmarkOptionsValidator=a.ApplyBookmarkStateRequestValidator=a.ApplyBookmarkByNameRequestValidator=a.AddBookmarkRequestValidator=a.PlayBookmarkRequestValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"playMode",validators:[d.Validators.fieldRequiredValidator,new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.PlayBookmarkRequestValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"state",validators:[d.Validators.stringValidator]},{field:"displayName",validators:[d.Validators.stringValidator]},{field:"apply",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.AddBookmarkRequestValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.ApplyBookmarkByNameRequestValidator=e;f=n.ObjectValidator,l(v,f),v.prototype.validate=function(t,a,e){if(null==t)return null;var i=f.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"state",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var f,e=v;function v(){return null!==f&&f.apply(this,arguments)||this}a.ApplyBookmarkStateRequestValidator=e;y=n.ObjectValidator,l(h,y),h.prototype.validate=function(t,a,e){if(null==t)return null;var i=y.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"personalizeVisuals",validators:[d.Validators.booleanValidator]},{field:"allPages",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var y,e=h;function h(){return null!==y&&y.apply(this,arguments)||this}a.CaptureBookmarkOptionsValidator=e;m=n.ObjectValidator,l(g,m),g.prototype.validate=function(t,a,e){if(null==t)return null;var i=m.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"options",validators:[d.Validators.fieldRequiredValidator,d.Validators.captureBookmarkOptionsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var m,e=g;function g(){return null!==m&&m.apply(this,arguments)||this}a.CaptureBookmarkRequestValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PaginatedReportCommandsValidator=a.SingleCommandSettingsValidator=a.CommandsSettingsValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"copy",validators:[d.Validators.singleCommandSettingsValidator]},{field:"drill",validators:[d.Validators.singleCommandSettingsValidator]},{field:"drillthrough",validators:[d.Validators.singleCommandSettingsValidator]},{field:"expandCollapse",validators:[d.Validators.singleCommandSettingsValidator]},{field:"exportData",validators:[d.Validators.singleCommandSettingsValidator]},{field:"includeExclude",validators:[d.Validators.singleCommandSettingsValidator]},{field:"removeVisual",validators:[d.Validators.singleCommandSettingsValidator]},{field:"search",validators:[d.Validators.singleCommandSettingsValidator]},{field:"seeData",validators:[d.Validators.singleCommandSettingsValidator]},{field:"sort",validators:[d.Validators.singleCommandSettingsValidator]},{field:"spotlight",validators:[d.Validators.singleCommandSettingsValidator]},{field:"insightsAnalysis",validators:[d.Validators.singleCommandSettingsValidator]},{field:"addComment",validators:[d.Validators.singleCommandSettingsValidator]},{field:"groupVisualContainers",validators:[d.Validators.singleCommandSettingsValidator]},{field:"summarize",validators:[d.Validators.singleCommandSettingsValidator]},{field:"clearSelection",validators:[d.Validators.singleCommandSettingsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.CommandsSettingsValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"displayOption",validators:[d.Validators.fieldRequiredValidator,d.Validators.commandDisplayOptionValidator]},{field:"selector",validators:[d.Validators.visualCommandSelectorValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.SingleCommandSettingsValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"parameterPanel",validators:[d.Validators.parametersPanelValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.PaginatedReportCommandsValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.CustomThemeValidator=void 0,e(3)),n=e(4),e=(r=n.ObjectValidator,l(d,r),d.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"themeJson",validators:[new n.ObjectValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},d);function d(){return null!==r&&r.apply(this,arguments)||this}a.CustomThemeValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.DashboardLoadValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"id",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"pageView",validators:[d.Validators.pageViewFieldValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"embedUrl",validators:[d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.DashboardLoadValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.DatasetBindingValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;if(!t.datasetId&&!t.paginatedReportBindings)return[{message:"datasetBinding cannot be empty",path:(a?a+".":"")+e,keyword:"invalid"}];i=[{field:"datasetId",validators:[d.Validators.stringValidator]},{field:"paginatedReportBindings",validators:[d.Validators.paginatedReportDatasetBindingArrayValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.DatasetBindingValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ExportDataRequestValidator=void 0,e(3)),n=e(4),e=(r=n.ObjectValidator,l(d,r),d.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"rows",validators:[new n.NumberValidator]},{field:"exportDataType",validators:[new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},d);function d(){return null!==r&&r.apply(this,arguments)||this}a.ExportDataRequestValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ExtensionsValidator=a.MenuGroupExtensionValidator=a.ExtensionValidator=a.CommandExtensionValidator=a.ExtensionItemValidator=a.ExtensionPointsValidator=a.GroupedMenuExtensionValidator=a.FlatMenuExtensionValidator=a.MenuExtensionBaseValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"title",validators:[d.Validators.stringValidator]},{field:"icon",validators:[d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.MenuExtensionBaseValidator=e;l(V,u=e),V.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"menuLocation",validators:[d.Validators.menuLocationValidator]},{field:"groupName",validators:[d.Validators.fieldForbiddenValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,p=V;function V(){return null!==u&&u.apply(this,arguments)||this}a.FlatMenuExtensionValidator=p;l(f,c=e),f.prototype.validate=function(t,a,e){if(null==t)return null;var i=c.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"groupName",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"menuLocation",validators:[d.Validators.fieldForbiddenValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var c,p=f;function f(){return null!==c&&c.apply(this,arguments)||this}a.GroupedMenuExtensionValidator=p;v=n.ObjectValidator,l(y,v),y.prototype.validate=function(t,a,e){if(null==t)return null;var i=v.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visualContextMenu",validators:[d.Validators.menuExtensionValidator]},{field:"visualOptionsMenu",validators:[d.Validators.menuExtensionValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var v,e=y;function y(){return null!==v&&v.apply(this,arguments)||this}a.ExtensionPointsValidator=e;h=n.ObjectValidator,l(m,h),m.prototype.validate=function(t,a,e){if(null==t)return null;var i=h.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"extend",validators:[d.Validators.fieldRequiredValidator,d.Validators.extensionPointsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var h,p=m;function m(){return null!==h&&h.apply(this,arguments)||this}a.ExtensionItemValidator=p;l(w,g=p),w.prototype.validate=function(t,a,e){if(null==t)return null;var i=g.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"title",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"icon",validators:[d.Validators.stringValidator]},{field:"selector",validators:[d.Validators.commandExtensionSelectorValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var g,e=w;function w(){return null!==g&&g.apply(this,arguments)||this}a.CommandExtensionValidator=e;b=n.ObjectValidator,l(O,b),O.prototype.validate=function(t,a,e){if(null==t)return null;var i=b.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"command",validators:[d.Validators.commandExtensionValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var b,p=O;function O(){return null!==b&&b.apply(this,arguments)||this}a.ExtensionValidator=p;_=n.ObjectValidator,l(S,_),S.prototype.validate=function(t,a,e){if(null==t)return null;var i=_.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"title",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"menuLocation",validators:[d.Validators.menuLocationValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var _,e=S;function S(){return null!==_&&_.apply(this,arguments)||this}a.MenuGroupExtensionValidator=e;F=n.ObjectValidator,l(T,F),T.prototype.validate=function(t,a,e){if(null==t)return null;var i=F.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"commands",validators:[d.Validators.fieldRequiredValidator,d.Validators.commandExtensionArrayValidator]},{field:"groups",validators:[d.Validators.menuGroupExtensionArrayValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var F,p=T;function T(){return null!==F&&F.apply(this,arguments)||this}a.ExtensionsValidator=p},function(B,t,a){var i,r,e=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),l=(Object.defineProperty(t,"__esModule",{value:!0}),t.OnLoadFiltersValidator=t.OnLoadFiltersBaseRemoveOperationValidator=t.OnLoadFiltersBaseValidator=t.ConditionItemValidator=t.RemoveFiltersRequestValidator=t.UpdateFiltersRequestValidator=t.FilterValidator=t.HierarchyFilterNodeValidator=t.HierarchyFilterValidator=t.IncludeExcludeFilterValidator=t.NotSupportedFilterValidator=t.TopNFilterValidator=t.RelativeTimeFilterValidator=t.RelativeDateFilterValidator=t.RelativeDateTimeFilterValidator=t.AdvancedFilterValidator=t.BasicFilterValidator=t.FilterValidatorBase=t.FilterDisplaySettingsValidator=t.FilterMeasureTargetValidator=t.FilterKeyHierarchyTargetValidator=t.FilterHierarchyTargetValidator=t.FilterKeyColumnsTargetValidator=t.FilterColumnTargetValidator=void 0,a(3)),o=a(4),n=a(1),a=(r=o.ObjectValidator,e(d,r),d.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"table",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"column",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)},d);function d(){return null!==r&&r.apply(this,arguments)||this}t.FilterColumnTargetValidator=a;e(u,s=a),u.prototype.validate=function(t,a,e){if(null==t)return null;var i=s.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"keys",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var s,a=u;function u(){return null!==s&&s.apply(this,arguments)||this}t.FilterKeyColumnsTargetValidator=a;p=o.ObjectValidator,e(V,p),V.prototype.validate=function(t,a,e){if(null==t)return null;var i=p.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"table",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"hierarchy",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"hierarchyLevel",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var p,a=V;function V(){return null!==p&&p.apply(this,arguments)||this}t.FilterHierarchyTargetValidator=a;e(q,c=a),q.prototype.validate=function(t,a,e){if(null==t)return null;var i=c.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"keys",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var c,a=q;function q(){return null!==c&&c.apply(this,arguments)||this}t.FilterKeyHierarchyTargetValidator=a;f=o.ObjectValidator,e(D,f),D.prototype.validate=function(t,a,e){if(null==t)return null;var i=f.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"table",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"measure",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var f,a=D;function D(){return null!==f&&f.apply(this,arguments)||this}t.FilterMeasureTargetValidator=a;v=o.ObjectValidator,e(L,v),L.prototype.validate=function(t,a,e){if(null==t)return null;var i=v.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"isLockedInViewMode",validators:[n.Validators.booleanValidator]},{field:"isHiddenInViewMode",validators:[n.Validators.booleanValidator]},{field:"displayName",validators:[n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var v,a=L;function L(){return null!==v&&v.apply(this,arguments)||this}t.FilterDisplaySettingsValidator=a;y=o.ObjectValidator,e(N,y),N.prototype.validate=function(t,a,e){if(null==t)return null;var i=y.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"target",validators:[n.Validators.fieldRequiredValidator,n.Validators.filterTargetValidator]},{field:"$schema",validators:[n.Validators.stringValidator]},{field:"filterType",validators:[n.Validators.filterTypeValidator]},{field:"displaySettings",validators:[n.Validators.filterDisplaySettingsValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var y,a=N;function N(){return null!==y&&y.apply(this,arguments)||this}t.FilterValidatorBase=a;e(U,h=a),U.prototype.validate=function(t,a,e){if(null==t)return null;var i=h.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"operator",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"values",validators:[n.Validators.fieldRequiredValidator,n.Validators.anyArrayValidator]},{field:"filterType",validators:[n.Validators.basicFilterTypeValidator]},{field:"requireSingleSelection",validators:[n.Validators.booleanValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var h,m=U;function U(){return null!==h&&h.apply(this,arguments)||this}t.BasicFilterValidator=m;e(I,g=a),I.prototype.validate=function(t,a,e){if(null==t)return null;var i=g.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"logicalOperator",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"conditions",validators:[n.Validators.filterConditionsValidator]},{field:"filterType",validators:[n.Validators.advancedFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var g,m=I;function I(){return null!==g&&g.apply(this,arguments)||this}t.AdvancedFilterValidator=m;e(H,w=a),H.prototype.validate=function(t,a,e){if(null==t)return null;var i=w.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"operator",validators:[n.Validators.fieldRequiredValidator,n.Validators.relativeDateFilterOperatorValidator]},{field:"timeUnitsCount",validators:[n.Validators.numberValidator]},{field:"timeUnitType",validators:[n.Validators.fieldRequiredValidator,n.Validators.relativeDateTimeFilterUnitTypeValidator]},{field:"filterType",validators:[n.Validators.relativeDateTimeFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var w,m=H;function H(){return null!==w&&w.apply(this,arguments)||this}t.RelativeDateTimeFilterValidator=m;e(z,b=m),z.prototype.validate=function(t,a,e){if(null==t)return null;var i=b.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"includeToday",validators:[n.Validators.fieldRequiredValidator,n.Validators.booleanValidator]},{field:"timeUnitType",validators:[n.Validators.fieldRequiredValidator,n.Validators.relativeDateFilterTimeUnitTypeValidator]},{field:"filterType",validators:[n.Validators.relativeDateFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var b,O=z;function z(){return null!==b&&b.apply(this,arguments)||this}t.RelativeDateFilterValidator=O;e(J,_=m),J.prototype.validate=function(t,a,e){if(null==t)return null;var i=_.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"timeUnitType",validators:[n.Validators.fieldRequiredValidator,n.Validators.relativeTimeFilterTimeUnitTypeValidator]},{field:"filterType",validators:[n.Validators.relativeTimeFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var _,O=J;function J(){return null!==_&&_.apply(this,arguments)||this}t.RelativeTimeFilterValidator=O;e(Q,S=a),Q.prototype.validate=function(t,a,e){if(null==t)return null;var i=S.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"operator",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"itemCount",validators:[n.Validators.fieldRequiredValidator,n.Validators.numberValidator]},{field:"filterType",validators:[n.Validators.topNFilterTypeValidator]},{field:"orderBy",validators:[n.Validators.fieldRequiredValidator,n.Validators.filterTargetValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var S,m=Q;function Q(){return null!==S&&S.apply(this,arguments)||this}t.TopNFilterValidator=m;e(G,F=a),G.prototype.validate=function(t,a,e){if(null==t)return null;var i=F.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"message",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"notSupportedTypeName",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]},{field:"filterType",validators:[n.Validators.notSupportedFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var F,O=G;function G(){return null!==F&&F.apply(this,arguments)||this}t.NotSupportedFilterValidator=O;e(K,T=a),K.prototype.validate=function(t,a,e){if(null==t)return null;var i=T.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"isExclude",validators:[n.Validators.fieldRequiredValidator,n.Validators.booleanValidator]},{field:"values",validators:[n.Validators.fieldRequiredValidator,n.Validators.anyArrayValidator]},{field:"filterType",validators:[n.Validators.includeExludeFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var T,m=K;function K(){return null!==T&&T.apply(this,arguments)||this}t.IncludeExcludeFilterValidator=m;e(W,P=a),W.prototype.validate=function(t,a,e){if(null==t)return null;var i=P.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"hierarchyData",validators:[n.Validators.fieldRequiredValidator,n.Validators.hierarchyFilterValuesValidator]},{field:"filterType",validators:[n.Validators.hierarchyFilterTypeValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var P,O=W;function W(){return null!==P&&P.apply(this,arguments)||this}t.HierarchyFilterValidator=O;R=o.ObjectValidator,e(Y,R),Y.prototype.validate=function(t,a,e){if(null==t)return null;var i=R.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"value",validators:[n.Validators.anyValueValidator]},{field:"keyValues",validators:[n.Validators.anyArrayValidator]},{field:"children",validators:[n.Validators.hierarchyFilterValuesValidator]},{field:"operator",validators:[n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var R,m=Y;function Y(){return null!==R&&R.apply(this,arguments)||this}t.HierarchyFilterNodeValidator=m;C=o.ObjectValidator,e($,C),$.prototype.validate=function(t,a,e){if(null==t)return null;var i=C.prototype.validate.call(this,t,a,e);return i||n.Validators.anyFilterValidator.validate(t,a,e)};var C,a=$;function $(){return null!==C&&C.apply(this,arguments)||this}t.FilterValidator=a;M=o.ObjectValidator,e(Z,M),Z.prototype.validate=function(t,a,e){if(null==t)return null;var i=M.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filtersOperation",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersOperationsUpdateValidator]},{field:"filters",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var M,O=Z;function Z(){return null!==M&&M.apply(this,arguments)||this}t.UpdateFiltersRequestValidator=O;A=o.ObjectValidator,e(X,A),X.prototype.validate=function(t,a,e){if(null==t)return null;var i=A.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filtersOperation",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersOperationsRemoveAllValidator]},{field:"filters",validators:[n.Validators.fieldForbiddenValidator,n.Validators.filtersArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var A,m=X;function X(){return null!==A&&A.apply(this,arguments)||this}t.RemoveFiltersRequestValidator=m;j=o.ObjectValidator,e(tt,j),tt.prototype.validate=function(t,a,e){if(null==t)return null;var i=j.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"value",validators:[n.Validators.anyValueValidator]},{field:"operator",validators:[n.Validators.fieldRequiredValidator,n.Validators.stringValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var j,a=tt;function tt(){return null!==j&&j.apply(this,arguments)||this}t.ConditionItemValidator=a;k=o.ObjectValidator,e(at,k),at.prototype.validate=function(t,a,e){if(null==t)return null;var i=k.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"operation",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersOperationsUpdateValidator]},{field:"filters",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var k,O=at;function at(){return null!==k&&k.apply(this,arguments)||this}t.OnLoadFiltersBaseValidator=O;x=o.ObjectValidator,e(et,x),et.prototype.validate=function(t,a,e){if(null==t)return null;var i=x.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"operation",validators:[n.Validators.fieldRequiredValidator,n.Validators.filtersOperationsRemoveAllValidator]},{field:"filters",validators:[n.Validators.fieldForbiddenValidator,n.Validators.filtersArrayValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var x,m=et;function et(){return null!==x&&x.apply(this,arguments)||this}t.OnLoadFiltersBaseRemoveOperationValidator=m;E=o.ObjectValidator,e(it,E),it.prototype.validate=function(t,a,e){if(null==t)return null;var i=E.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"allPages",validators:[n.Validators.onLoadFiltersBaseValidator]},{field:"currentPage",validators:[n.Validators.onLoadFiltersBaseValidator]}];return new l.MultipleFieldsValidator(i).validate(t,a,e)};var E,a=it;function it(){return null!==E&&E.apply(this,arguments)||this}t.OnLoadFiltersValidator=a},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PageLayoutValidator=a.DisplayStateValidator=a.VisualLayoutValidator=a.CustomLayoutValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"pageSize",validators:[d.Validators.pageSizeValidator]},{field:"displayOption",validators:[d.Validators.customLayoutDisplayOptionValidator]},{field:"pagesLayout",validators:[d.Validators.pagesLayoutValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.CustomLayoutValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"x",validators:[d.Validators.numberValidator]},{field:"y",validators:[d.Validators.numberValidator]},{field:"z",validators:[d.Validators.numberValidator]},{field:"width",validators:[d.Validators.numberValidator]},{field:"height",validators:[d.Validators.numberValidator]},{field:"displayState",validators:[d.Validators.displayStateValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.VisualLayoutValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"mode",validators:[d.Validators.displayStateModeValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.DisplayStateValidator=e;f=n.ObjectValidator,l(v,f),v.prototype.validate=function(t,a,e){if(null==t)return null;var i=f.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visualsLayout",validators:[d.Validators.fieldRequiredValidator,d.Validators.pageLayoutValidator]},{field:"defaultLayout",validators:[d.Validators.visualLayoutValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var f,e=v;function v(){return null!==f&&f.apply(this,arguments)||this}a.PageLayoutValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PageViewFieldValidator=a.PageValidator=a.CustomPageSizeValidator=a.PageSizeValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"type",validators:[d.Validators.fieldRequiredValidator,d.Validators.pageSizeTypeValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.PageSizeValidator=e;l(p,u=e),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"width",validators:[d.Validators.numberValidator]},{field:"height",validators:[d.Validators.numberValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.CustomPageSizeValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.PageValidator=e;f=n.StringValidator,l(v,f),v.prototype.validate=function(t,a,e){if(null==t)return null;a=f.prototype.validate.call(this,t,a,e);if(a)return a;return["actualSize","fitToWidth","oneColumn"].indexOf(t)<0?[{message:'pageView must be a string with one of the following values: "actualSize", "fitToWidth", "oneColumn"'}]:null};var f,e=v;function v(){return null!==f&&f.apply(this,arguments)||this}a.PageViewFieldValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.VisualizationsPaneValidator=a.SyncSlicersPaneValidator=a.SelectionPaneValidator=a.PageNavigationPaneValidator=a.FiltersPaneValidator=a.FieldsPaneValidator=a.BookmarksPaneValidator=a.QnaPanesValidator=a.ReportPanesValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"bookmarks",validators:[d.Validators.bookmarksPaneValidator]},{field:"fields",validators:[d.Validators.fieldsPaneValidator]},{field:"filters",validators:[d.Validators.filtersPaneValidator]},{field:"pageNavigation",validators:[d.Validators.pageNavigationPaneValidator]},{field:"selection",validators:[d.Validators.selectionPaneValidator]},{field:"syncSlicers",validators:[d.Validators.syncSlicersPaneValidator]},{field:"visualizations",validators:[d.Validators.visualizationsPaneValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.ReportPanesValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filters",validators:[d.Validators.filtersPaneValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.QnaPanesValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.BookmarksPaneValidator=e;f=n.ObjectValidator,l(v,f),v.prototype.validate=function(t,a,e){if(null==t)return null;var i=f.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"expanded",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var f,e=v;function v(){return null!==f&&f.apply(this,arguments)||this}a.FieldsPaneValidator=e;y=n.ObjectValidator,l(h,y),h.prototype.validate=function(t,a,e){if(null==t)return null;var i=y.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]},{field:"expanded",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var y,e=h;function h(){return null!==y&&y.apply(this,arguments)||this}a.FiltersPaneValidator=e;m=n.ObjectValidator,l(g,m),g.prototype.validate=function(t,a,e){if(null==t)return null;var i=m.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]},{field:"position",validators:[d.Validators.pageNavigationPositionValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var m,e=g;function g(){return null!==m&&m.apply(this,arguments)||this}a.PageNavigationPaneValidator=e;w=n.ObjectValidator,l(b,w),b.prototype.validate=function(t,a,e){if(null==t)return null;var i=w.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var w,e=b;function b(){return null!==w&&w.apply(this,arguments)||this}a.SelectionPaneValidator=e;O=n.ObjectValidator,l(_,O),_.prototype.validate=function(t,a,e){if(null==t)return null;var i=O.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var O,e=_;function _(){return null!==O&&O.apply(this,arguments)||this}a.SyncSlicersPaneValidator=e;S=n.ObjectValidator,l(F,S),F.prototype.validate=function(t,a,e){if(null==t)return null;var i=S.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"expanded",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var S,e=F;function F(){return null!==S&&S.apply(this,arguments)||this}a.VisualizationsPaneValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.QnaInterpretInputDataValidator=a.QnaSettingsValidator=a.LoadQnaValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"datasetIds",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringArrayValidator]},{field:"question",validators:[d.Validators.stringValidator]},{field:"viewMode",validators:[d.Validators.viewModeValidator]},{field:"settings",validators:[d.Validators.qnaSettingValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"groupId",validators:[d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.LoadQnaValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filterPaneEnabled",validators:[d.Validators.booleanValidator]},{field:"hideErrors",validators:[d.Validators.booleanValidator]},{field:"panes",validators:[d.Validators.qnaPanesValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.QnaSettingsValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"datasetIds",validators:[d.Validators.stringArrayValidator]},{field:"question",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.QnaInterpretInputDataValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ReportCreateValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"datasetId",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"theme",validators:[d.Validators.customThemeValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.ReportCreateValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ReportLoadValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"id",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"settings",validators:[d.Validators.settingsValidator]},{field:"pageName",validators:[d.Validators.stringValidator]},{field:"filters",validators:[d.Validators.reportLoadFiltersValidator]},{field:"permissions",validators:[d.Validators.permissionsValidator]},{field:"viewMode",validators:[d.Validators.viewModeValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"bookmark",validators:[d.Validators.applyBookmarkValidator]},{field:"theme",validators:[d.Validators.customThemeValidator]},{field:"embedUrl",validators:[d.Validators.stringValidator]},{field:"datasetBinding",validators:[d.Validators.datasetBindingValidator]},{field:"contrastMode",validators:[d.Validators.contrastModeValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.ReportLoadValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ReportParameterFieldsValidator=a.PaginatedReportLoadValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"id",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"settings",validators:[d.Validators.paginatedReportsettingsValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"embedUrl",validators:[d.Validators.stringValidator]},{field:"type",validators:[d.Validators.stringValidator]},{field:"parameterValues",validators:[d.Validators.parameterValuesArrayValidator]},{field:"datasetBindings",validators:[d.Validators.paginatedReportDatasetBindingArrayValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}function u(){}a.PaginatedReportLoadValidator=e,u.prototype.validate=function(t,a,e){if(null==t)return null;var i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"value",validators:[d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},a.ReportParameterFieldsValidator=u},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.SaveAsParametersValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.SaveAsParametersValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.SlicerTargetSelectorValidator=a.VisualTypeSelectorValidator=a.VisualSelectorValidator=void 0,e(3)),n=e(4),d=e(4),s=e(1),e=(r=n.ObjectValidator,l(u,r),u.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"$schema",validators:[s.Validators.stringValidator,new d.SchemaValidator("http://powerbi.com/product/schema#visualSelector")]},{field:"visualName",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},u);function u(){return null!==r&&r.apply(this,arguments)||this}a.VisualSelectorValidator=e;p=n.ObjectValidator,l(V,p),V.prototype.validate=function(t,a,e){if(null==t)return null;var i=p.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"$schema",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator,new d.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")]},{field:"visualType",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var p,e=V;function V(){return null!==p&&p.apply(this,arguments)||this}a.VisualTypeSelectorValidator=e;c=n.ObjectValidator,l(f,c),f.prototype.validate=function(t,a,e){if(null==t)return null;var i=c.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"$schema",validators:[s.Validators.fieldRequiredValidator,s.Validators.stringValidator,new d.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")]},{field:"target",validators:[s.Validators.fieldRequiredValidator,s.Validators.slicerTargetValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var c,e=f;function f(){return null!==c&&c.apply(this,arguments)||this}a.SlicerTargetSelectorValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PaginatedReportSettingsValidator=a.SettingsValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filterPaneEnabled",validators:[d.Validators.booleanValidator]},{field:"navContentPaneEnabled",validators:[d.Validators.booleanValidator]},{field:"bookmarksPaneEnabled",validators:[d.Validators.booleanValidator]},{field:"useCustomSaveAsDialog",validators:[d.Validators.booleanValidator]},{field:"extensions",validators:[d.Validators.extensionsValidator]},{field:"layoutType",validators:[d.Validators.layoutTypeValidator]},{field:"customLayout",validators:[d.Validators.customLayoutValidator]},{field:"background",validators:[d.Validators.backgroundValidator]},{field:"visualSettings",validators:[d.Validators.visualSettingsValidator]},{field:"hideErrors",validators:[d.Validators.booleanValidator]},{field:"commands",validators:[d.Validators.commandsSettingsArrayValidator]},{field:"hyperlinkClickBehavior",validators:[d.Validators.hyperlinkClickBehaviorValidator]},{field:"bars",validators:[d.Validators.reportBarsValidator]},{field:"panes",validators:[d.Validators.reportPanesValidator]},{field:"personalBookmarksEnabled",validators:[d.Validators.booleanValidator]},{field:"persistentFiltersEnabled",validators:[d.Validators.booleanValidator]},{field:"visualRenderedEvents",validators:[d.Validators.booleanValidator]},{field:"authoringHintsEnabled",validators:[d.Validators.booleanValidator]},{field:"printSettings",validators:[d.Validators.printSettingsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.SettingsValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"commands",validators:[d.Validators.paginatedReportCommandsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.PaginatedReportSettingsValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.SlicerStateValidator=a.SlicerValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"selector",validators:[d.Validators.fieldRequiredValidator,d.Validators.slicerSelectorValidator]},{field:"state",validators:[d.Validators.fieldRequiredValidator,d.Validators.slicerStateValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.SlicerValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"filters",validators:[d.Validators.filtersArrayValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.SlicerStateValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.TileLoadValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"id",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"dashboardId",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"pageView",validators:[d.Validators.stringValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"width",validators:[d.Validators.numberValidator]},{field:"height",validators:[d.Validators.numberValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.TileLoadValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.VisualHeaderValidator=a.VisualHeaderSettingsValidator=a.VisualSettingsValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visualHeaders",validators:[d.Validators.visualHeadersValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.VisualSettingsValidator=e;u=n.ObjectValidator,l(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"visible",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.VisualHeaderSettingsValidator=e;V=n.ObjectValidator,l(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"settings",validators:[d.Validators.fieldRequiredValidator,d.Validators.visualHeaderSettingsValidator]},{field:"selector",validators:[d.Validators.visualHeaderSelectorValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.VisualHeaderValidator=e},(t,a)=>{function e(t){this.validators=t}Object.defineProperty(a,"__esModule",{value:!0}),a.AnyOfValidator=void 0,e.prototype.validate=function(t,a,e){if(null==t)return null;for(var i=!1,r=0,l=this.validators;r<l.length;r++)if(!l[r].validate(t,a,e)){i=!0;break}return i?null:[{message:e+" property is invalid",path:(a?a+".":"")+e,keyword:"invalid"}]},a.AnyOfValidator=e},(t,a)=>{function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a.FieldForbiddenValidator=void 0,e.prototype.validate=function(t,a,e){return void 0!==t?[{message:e+" is forbidden",path:(a?a+".":"")+e,keyword:"forbidden"}]:null},a.FieldForbiddenValidator=e},(t,a)=>{function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a.FieldRequiredValidator=void 0,e.prototype.validate=function(t,a,e){return null==t?[{message:e+" is required",path:(a?a+".":"")+e,keyword:"required"}]:null},a.FieldRequiredValidator=e},function(t,a,e){var i,u,r=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),e=(Object.defineProperty(a,"__esModule",{value:!0}),a.MapValidator=void 0,e(4)),e=(u=e.ObjectValidator,r(l,u),l.prototype.validate=function(t,a,e){if(null==t)return null;if(r=u.prototype.validate.call(this,t,a,e))return r;for(var i in t)if(t.hasOwnProperty(i)){for(var r,l=(a?a+".":"")+e+"."+i,o=0,n=this.keyValidators;o<n.length;o++)if(r=n[o].validate(i,l,e))return r;for(var d=0,s=this.valueValidators;d<s.length;d++)if(r=s[d].validate(t[i],l,e))return r}return null},l);function l(t,a){var e=u.call(this)||this;return e.keyValidators=t,e.valueValidators=a,e}a.MapValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.ParametersPanelValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"expanded",validators:[d.Validators.booleanValidator]},{field:"enabled",validators:[d.Validators.booleanValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.ParametersPanelValidator=e},function(t,a,e){var i,l,r=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.TableDataValidator=a.TableSchemaValidator=a.ColumnSchemaValidator=a.CredentialsValidator=a.DatasourceConnectionConfigValidator=a.DatasetCreateConfigValidator=void 0,e(3)),n=e(4),d=e(1),e=(l=n.ObjectValidator,r(s,l),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=l.prototype.validate.call(this,t,a,e);if(i)return i;var r=[{field:"locale",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"mashupDocument",validators:[d.Validators.stringValidator]},{field:"datasourceConnectionConfig",validators:[d.Validators.datasourceConnectionConfigValidator]},{field:"tableSchemaList",validators:[d.Validators.tableSchemaListValidator]},{field:"data",validators:[d.Validators.tableDataArrayValidator]}];return(i=new o.MultipleFieldsValidator(r).validate(t,a,e))?i:t.datasourceConnectionConfig&&null==t.mashupDocument?[{message:"mashupDocument cannot be empty when datasourceConnectionConfig is presented"}]:t.data&&null==t.tableSchemaList?[{message:"tableSchemaList cannot be empty when data is provided"}]:null==t.data&&null==t.mashupDocument?[{message:"At least one of data or mashupDocument must be provided"}]:void 0},s);function s(){return null!==l&&l.apply(this,arguments)||this}a.DatasetCreateConfigValidator=e;u=n.ObjectValidator,r(p,u),p.prototype.validate=function(t,a,e){if(null==t)return null;var i=u.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"dataCacheMode",validators:[d.Validators.dataCacheModeValidator]},{field:"credentials",validators:[d.Validators.credentialsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var u,e=p;function p(){return null!==u&&u.apply(this,arguments)||this}a.DatasourceConnectionConfigValidator=e;V=n.ObjectValidator,r(c,V),c.prototype.validate=function(t,a,e){if(null==t)return null;var i=V.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"credentialType",validators:[d.Validators.credentialTypeValidator]},{field:"credentialDetails",validators:[d.Validators.credentialDetailsValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var V,e=c;function c(){return null!==V&&V.apply(this,arguments)||this}a.CredentialsValidator=e;f=n.ObjectValidator,r(v,f),v.prototype.validate=function(t,a,e){if(null==t)return null;var i=f.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"displayName",validators:[d.Validators.stringValidator]},{field:"dataType",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var f,e=v;function v(){return null!==f&&f.apply(this,arguments)||this}a.ColumnSchemaValidator=e;y=n.ObjectValidator,r(h,y),h.prototype.validate=function(t,a,e){if(null==t)return null;var i=y.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"columns",validators:[d.Validators.fieldRequiredValidator,d.Validators.columnSchemaArrayValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var y,e=h;function h(){return null!==y&&y.apply(this,arguments)||this}a.TableSchemaValidator=e;m=n.ObjectValidator,r(g,m),g.prototype.validate=function(t,a,e){if(null==t)return null;var i=m.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"name",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"rows",validators:[d.Validators.fieldRequiredValidator,d.Validators.rawDataValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)};var m,e=g;function g(){return null!==m&&m.apply(this,arguments)||this}a.TableDataValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.QuickCreateValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"accessToken",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"groupId",validators:[d.Validators.stringValidator]},{field:"tokenType",validators:[d.Validators.tokenTypeValidator]},{field:"theme",validators:[d.Validators.customThemeValidator]},{field:"datasetCreateConfig",validators:[d.Validators.fieldRequiredValidator,d.Validators.datasetCreateConfigValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.QuickCreateValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PrintSettingsValidator=void 0,e(3)),n=e(4),e=(r=n.ObjectValidator,l(d,r),d.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"browserPrintAdjustmentsMode",validators:[new n.EnumValidator([0,1])]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},d);function d(){return null!==r&&r.apply(this,arguments)||this}a.PrintSettingsValidator=e},function(t,a,e){var i,r,l=this&&this.__extends||(i=function(t,a){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function e(){this.constructor=t}i(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.PaginatedReportDatasetBindingValidator=void 0,e(3)),n=e(4),d=e(1),e=(r=n.ObjectValidator,l(s,r),s.prototype.validate=function(t,a,e){if(null==t)return null;var i=r.prototype.validate.call(this,t,a,e);if(i)return i;i=[{field:"sourceDatasetId",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]},{field:"targetDatasetId",validators:[d.Validators.fieldRequiredValidator,d.Validators.stringValidator]}];return new o.MultipleFieldsValidator(i).validate(t,a,e)},s);function s(){return null!==r&&r.apply(this,arguments)||this}a.PaginatedReportDatasetBindingValidator=e}],r={},function t(a){var e=r[a];if(void 0!==e)return e.exports;e=r[a]={exports:{}};return i[a].call(e.exports,e,e.exports,t),e.exports}(0);var i,r});
// SIG // Begin signature block
// SIG // MIIrdgYJKoZIhvcNAQcCoIIrZzCCK2MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // rvs/1lkStFGwEzDcwhCuiMGUkZjz9IguGaBlVWTDqa+g
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGWAwghlcAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCD1C3IHloBBHoNA2Mks/+WL594yU/7GmMclH/tm
// SIG // qDnOeDBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBADOngZSvjHBi
// SIG // pQI5yurCBhjJJc4h9xkSMjIvfin7K6pz68aDJaEDeGpO
// SIG // hpbHGrpAsTqB2gsarRshMSN8PED309viP/bLe2DbWULG
// SIG // +Ui4/nRg6ZTkIF8YTMC7aWRIs3x4AuBm099i9ZM7us82
// SIG // 0l2nc/OrCHHHRNqHpe271zuKGtp21SpnSabeQxgtshUg
// SIG // IX6z/OVgsIrbtllaOJxGGQl/os7kcPnhmRAw1hhga7S1
// SIG // DAiuVLZLwTY/qQDxrruhvHnF9MUhEJCfzBw1XJ6znIpe
// SIG // nlYXNr+Gtp1crkIV/a5Pmf8cq2Us6Ssk2IGL0G3kXhe4
// SIG // 2I1CSxionN14DgB4UzPyuGWhghcoMIIXJAYKKwYBBAGC
// SIG // NwMDATGCFxQwghcQBgkqhkiG9w0BBwKgghcBMIIW/QIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBWAYLKoZIhvcNAQkQ
// SIG // AQSgggFHBIIBQzCCAT8CAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgivCapBPk+F76Zv9wb0JWuLYS
// SIG // wpj0lkGhckQ45YsUk34CBmTeUpQ4cBgSMjAyMzA4MzEy
// SIG // MjE2NDkuMzRaMASAAgH0oIHYpIHVMIHSMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJl
// SIG // bGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsT
// SIG // HVRoYWxlcyBUU1MgRVNOOjA4NDItNEJFNi1DMjlBMSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNloIIReDCCBycwggUPoAMCAQICEzMAAAGybkADf26p
// SIG // lJIAAQAAAbIwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgUENBIDIwMTAwHhcNMjIwOTIwMjAyMjAx
// SIG // WhcNMjMxMjE0MjAyMjAxWjCB0jELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjowODQyLTRCRTYtQzI5QTElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // AiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMqi
// SIG // ZTIde/lQ4rC+Bml5f/Wuq/xKTxrfbG23HofmQ+qZAN4G
// SIG // yO73PF3y9OAfpt7Qf2jcldWOGUB+HzBuwllYyP3fx4MY
// SIG // 8zvuAuB37FvoytnNC2DKnVrVlHOVcGUL9CnmhDNMA2/n
// SIG // skjIf2IoiG9J0qLYr8duvHdQJ9Li2Pq9guySb9mvUL60
// SIG // ogslCO9gkh6FiEDwMrwUr8Wja6jFpUTny8tg0N0cnCN2
// SIG // w4fKkp5qZcbUYFYicLSb/6A7pHCtX6xnjqwhmJoib3vk
// SIG // KJyVxbuFLRhVXxH95b0LHeNhifn3jvo2j+/4QV10jEpX
// SIG // VW+iC9BsTtR69xvTjU51ZgP7BR4YDEWq7JsylSOv5B5T
// SIG // HTDXRf184URzFhTyb8OZQKY7mqMh7c8J8w1sEM4XDUF2
// SIG // UZNy829NVCzG2tfdEXZaHxF8RmxpQYBxyhZwY1rotuIS
// SIG // +gfN2eq+hkAT3ipGn8/KmDwDtzAbnfuXjApgeZqwgcYJ
// SIG // 8pDJ+y/xU6ouzJz1Bve5TTihkiA7wQsQe6R60Zk9dPdN
// SIG // zw0MK5niRzuQZAt4GI96FhjhlUWcUZOCkv/JXM/OGu/r
// SIG // gSplYwdmPLzzfDtXyuy/GCU5I4l08g6iifXypMgoYkkc
// SIG // eOAAz4vx1x0BOnZWfI3fSwqNUvoN7ncTT+MB4Vpvf1QB
// SIG // ppjBAQUuvui6eCG0MCVNAgMBAAGjggFJMIIBRTAdBgNV
// SIG // HQ4EFgQUmfIngFzZEZlPkjDOVluBSDDaanEwHwYDVR0j
// SIG // BBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYDVR0f
// SIG // BFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIwVGltZS1T
// SIG // dGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsGAQUF
// SIG // BwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNyb3Nv
// SIG // ZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgxKS5j
// SIG // cnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAKBggr
// SIG // BgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4AwDQYJKoZIhvcN
// SIG // AQELBQADggIBANxHtu3FzIabaDbWqswdKBlAhKXRCN+5
// SIG // CSMiv2TYa4i2QuWIm+99piwAhDhADfbqor1zyLi95Y6G
// SIG // QnvIWUgdeC7oL1ZtZye92zYK+EIfwYZmhS+CH4infAzU
// SIG // vscHZF3wlrJUfPUIDGVP0lCYVse9mguvG0dqkY4ayQPE
// SIG // HOvJubgZZaOdg/N8dInd6fGeOc+0DoGzB+LieObJ2Q0A
// SIG // tEt3XN3iX8Cp6+dZTX8xwE/LvhRwPpb/+nKshO7TVuve
// SIG // nwdTwqB/LT6CNPaElwFeKxKrqRTPMbHeg+i+KnBLfwmh
// SIG // EXsMg2s1QX7JIxfvT96md0eiMjiMEO22LbOzmLMNd3LI
// SIG // NowAnRBAJtX+3/e390B9sMGMHp+a1V+hgs62AopBl0p/
// SIG // 00li30DN5wEQ5If35Zk7b/T6pEx6rJUDYCti7zCbikjK
// SIG // TanBnOc99zGMlej5X+fC/k5ExUCrOs3/VzGRCZt5LvVQ
// SIG // SdWqq/QMzTEmim4sbzASK9imEkjNtZZyvC1CsUcD1voF
// SIG // ktld4mKMjE+uDEV3IddD+DrRk94nVzNPSuZXewfVOnXH
// SIG // SeqG7xM3V7fl2aL4v1OhL2+JwO1Tx3B0irO1O9qbNdJk
// SIG // 355bntd1RSVKgM22KFBHnoL7Js7pRhBiaKmVTQGoOb+j
// SIG // 1Qa7q+cixGo48Vh9k35BDsJS/DLoXFSPDl4mMIIHcTCC
// SIG // BVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAAFTANBgkq
// SIG // hkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEy
// SIG // MDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5IDIwMTAwHhcNMjEwOTMwMTgyMjI1
// SIG // WhcNMzAwOTMwMTgzMjI1WjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDCCAiIwDQYJKoZIhvcNAQEBBQADggIP
// SIG // ADCCAgoCggIBAOThpkzntHIhC3miy9ckeb0O1YLT/e6c
// SIG // BwfSqWxOdcjKNVf2AX9sSuDivbk+F2Az/1xPx2b3lVNx
// SIG // WuJ+Slr+uDZnhUYjDLWNE893MsAQGOhgfWpSg0S3po5G
// SIG // awcU88V29YZQ3MFEyHFcUTE3oAo4bo3t1w/YJlN8OWEC
// SIG // esSq/XJprx2rrPY2vjUmZNqYO7oaezOtgFt+jBAcnVL+
// SIG // tuhiJdxqD89d9P6OU8/W7IVWTe/dvI2k45GPsjksUZzp
// SIG // cGkNyjYtcI4xyDUoveO0hyTD4MmPfrVUj9z6BVWYbWg7
// SIG // mka97aSueik3rMvrg0XnRm7KMtXAhjBcTyziYrLNueKN
// SIG // iOSWrAFKu75xqRdbZ2De+JKRHh09/SDPc31BmkZ1zcRf
// SIG // NN0Sidb9pSB9fvzZnkXftnIv231fgLrbqn427DZM9itu
// SIG // qBJR6L8FA6PRc6ZNN3SUHDSCD/AQ8rdHGO2n6Jl8P0zb
// SIG // r17C89XYcz1DTsEzOUyOArxCaC4Q6oRRRuLRvWoYWmEB
// SIG // c8pnol7XKHYC4jMYctenIPDC+hIK12NvDMk2ZItboKaD
// SIG // IV1fMHSRlJTYuVD5C4lh8zYGNRiER9vcG9H9stQcxWv2
// SIG // XFJRXRLbJbqvUAV6bMURHXLvjflSxIUXk8A8FdsaN8cI
// SIG // FRg/eKtFtvUeh17aj54WcmnGrnu3tz5q4i6tAgMBAAGj
// SIG // ggHdMIIB2TASBgkrBgEEAYI3FQEEBQIDAQABMCMGCSsG
// SIG // AQQBgjcVAgQWBBQqp1L+ZMSavoKRPEY1Kc8Q/y8E7jAd
// SIG // BgNVHQ4EFgQUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXAYD
// SIG // VR0gBFUwUzBRBgwrBgEEAYI3TIN9AQEwQTA/BggrBgEF
// SIG // BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aW9wcy9Eb2NzL1JlcG9zaXRvcnkuaHRtMBMGA1UdJQQM
// SIG // MAoGCCsGAQUFBwMIMBkGCSsGAQQBgjcUAgQMHgoAUwB1
// SIG // AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMBAf8EBTAD
// SIG // AQH/MB8GA1UdIwQYMBaAFNX2VsuP6KJcYmjRPZSQW9fO
// SIG // mhjEMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01p
// SIG // Y1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNybDBaBggrBgEF
// SIG // BQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2Vy
// SIG // QXV0XzIwMTAtMDYtMjMuY3J0MA0GCSqGSIb3DQEBCwUA
// SIG // A4ICAQCdVX38Kq3hLB9nATEkW+Geckv8qW/qXBS2Pk5H
// SIG // ZHixBpOXPTEztTnXwnE2P9pkbHzQdTltuw8x5MKP+2zR
// SIG // oZQYIu7pZmc6U03dmLq2HnjYNi6cqYJWAAOwBb6J6Gng
// SIG // ugnue99qb74py27YP0h1AdkY3m2CDPVtI1TkeFN1JFe5
// SIG // 3Z/zjj3G82jfZfakVqr3lbYoVSfQJL1AoL8ZthISEV09
// SIG // J+BAljis9/kpicO8F7BUhUKz/AyeixmJ5/ALaoHCgRlC
// SIG // GVJ1ijbCHcNhcy4sa3tuPywJeBTpkbKpW99Jo3QMvOyR
// SIG // gNI95ko+ZjtPu4b6MhrZlvSP9pEB9s7GdP32THJvEKt1
// SIG // MMU0sHrYUP4KWN1APMdUbZ1jdEgssU5HLcEUBHG/ZPkk
// SIG // vnNtyo4JvbMBV0lUZNlz138eW0QBjloZkWsNn6Qo3GcZ
// SIG // KCS6OEuabvshVGtqRRFHqfG3rsjoiV5PndLQTHa1V1QJ
// SIG // sWkBRH58oWFsc/4Ku+xBZj1p/cvBQUl+fpO+y/g75LcV
// SIG // v7TOPqUxUYS8vwLBgqJ7Fx0ViY1w/ue10CgaiQuPNtq6
// SIG // TPmb/wrpNPgkNWcr4A245oyZ1uEi6vAnQj0llOZ0dFtq
// SIG // 0Z4+7X6gMTN9vMvpe784cETRkPHIqzqKOghif9lwY1NN
// SIG // je6CbaUFEMFxBmoQtB1VM1izoXBm8qGCAtQwggI9AgEB
// SIG // MIIBAKGB2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEt
// SIG // MCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0
// SIG // aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNT
// SIG // IEVTTjowODQyLTRCRTYtQzI5QTElMCMGA1UEAxMcTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIjCgEBMAcG
// SIG // BSsOAwIaAxUAjhJ+EeySRfn2KCNsjn9cF9AUSTqggYMw
// SIG // gYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAN
// SIG // BgkqhkiG9w0BAQUFAAIFAOianCwwIhgPMjAyMzA4MzEx
// SIG // MjU3MTZaGA8yMDIzMDkwMTEyNTcxNlowdDA6BgorBgEE
// SIG // AYRZCgQBMSwwKjAKAgUA6JqcLAIBADAHAgEAAgIEGzAH
// SIG // AgEAAgJPLTAKAgUA6JvtrAIBADA2BgorBgEEAYRZCgQC
// SIG // MSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6EgoQow
// SIG // CAIBAAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAHcFr+bB
// SIG // DF2NhqeeFMV68bH71UK5Tw2g0HnT0LabvZgC8k3ldRyk
// SIG // RWKOrtaaZ/jBQte7qLCE5zZGl3AhlcGm3k3M/wGUYb5M
// SIG // cUol12YKnLFbYBNJ+42k0u8xrDDu5mZF8wi4WNRnFy9x
// SIG // CSaS+WsK9s6fMNlrXjCqBtwSpLWfR7YZMYIEDTCCBAkC
// SIG // AQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAC
// SIG // EzMAAAGybkADf26plJIAAQAAAbIwDQYJYIZIAWUDBAIB
// SIG // BQCgggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRAB
// SIG // BDAvBgkqhkiG9w0BCQQxIgQgk8cxpQxWLCAWt8wSjfaK
// SIG // d5795Hf4+DQvhRwczXAzO4cwgfoGCyqGSIb3DQEJEAIv
// SIG // MYHqMIHnMIHkMIG9BCBTeM485+E+t4PEVieUoFKX7PVy
// SIG // Lo/nzu+htJPCG04+NTCBmDCBgKR+MHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwAhMzAAABsm5AA39uqZSSAAEA
// SIG // AAGyMCIEIIgsw3ZBr1WMIFVwGdH2wLaLHWuj2na6wHHR
// SIG // cZMfdhN0MA0GCSqGSIb3DQEBCwUABIICAF9T0LV/Cfn7
// SIG // AuuPZ0j6YJtj4rGQVSqTHnlXSUNsgMu/W8NpZWL7Zh6H
// SIG // 4M8UBqboCAYG/G10iCEn5RZmAYET9Z1jfW782gvXKhzI
// SIG // JLRdYusA/794+Si8xxLdcjXcdTjVr/Xw8fphlhIeaZGl
// SIG // E7hcrj32GVYQr7b6pcUVF0gZvkJXqgw68VRC8/E+8Fyl
// SIG // QfiJC6xhQHy+396zRvMOgfOaDuZHViz6cVwELyHGIprb
// SIG // OkO3kEvzk3b5NsmbAjBytj+A1uHSViHTfu1aeIYV4w5K
// SIG // b03YAxQho1ifNW7adSqsZ/BdVv62jm5jOZWVD81sUJKh
// SIG // lJUsij+dFSCjdwFacukTCqAK82QrcCrPEuQK9PX0tNgv
// SIG // oq3QpvZSaq2MhTziNpijyuaLKMSh4BCjJisQpQ63NBdq
// SIG // CREgVid2FFru8PLlAUrkXVNzotC3Yuvjj2UpJWkailgW
// SIG // VqauyCRMFUubgNRrk9Re7kAKSetmEVKqCsDNxipvMSUn
// SIG // vFpoeaskOweajX6GAWucTYhgTI8kBDyVy1zsXDMXbn9p
// SIG // xHkaMGRA3jHaG81Rsvh4xLyh7sJsGpldhjyw2bMcUFhA
// SIG // mbsdbBJYZhIbK3OMlfMFW5Jnp/hKLWEhW31bHTHIN18t
// SIG // hPNdjzGUV0SU+iylne3LqMVCGvVLrC75lZtLDqf1faFf
// SIG // n8b17v5Bewnp
// SIG // End signature block

;
//# sourceMappingURL=scripts.bundle.js.map