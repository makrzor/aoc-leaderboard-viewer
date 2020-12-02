(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.b7.I === region.br.I)
	{
		return 'on line ' + region.b7.I;
	}
	return 'on lines ' + region.b7.I + ' through ' + region.br.I;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bJ,
		impl.co,
		impl.cc,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		s: func(record.s),
		ae: record.ae,
		ac: record.ac
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.s;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.ae;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ac) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bJ,
		impl.co,
		impl.cc,
		function(sendToApp, initialModel) {
			var view = impl.cr;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bJ,
		impl.co,
		impl.cc,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.ad && impl.ad(sendToApp)
			var view = impl.cr;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.bd);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.cg) && (_VirtualDom_doc.title = title = doc.cg);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.bX;
	var onUrlRequest = impl.bY;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		ad: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.aL === next.aL
							&& curr.au === next.au
							&& curr.aH.a === next.aH.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		bJ: function(flags)
		{
			return A3(impl.bJ, flags, _Browser_getUrl(), key);
		},
		cr: impl.cr,
		co: impl.co,
		cc: impl.cc
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { bA: 'hidden', bg: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { bA: 'mozHidden', bg: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { bA: 'msHidden', bg: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { bA: 'webkitHidden', bg: 'webkitvisibilitychange' }
		: { bA: 'hidden', bg: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		aU: _Browser_getScene(),
		a1: {
			cu: _Browser_window.pageXOffset,
			cx: _Browser_window.pageYOffset,
			P: _Browser_doc.documentElement.clientWidth,
			bz: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		P: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bz: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			aU: {
				P: node.scrollWidth,
				bz: node.scrollHeight
			},
			a1: {
				cu: node.scrollLeft,
				cx: node.scrollTop,
				P: node.clientWidth,
				bz: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			aU: _Browser_getScene(),
			a1: {
				cu: x,
				cx: y,
				P: _Browser_doc.documentElement.clientWidth,
				bz: _Browser_doc.documentElement.clientHeight
			},
			bq: {
				cu: x + rect.left,
				cx: y + rect.top,
				P: rect.width,
				bz: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.bs.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.bs.b, xhr)); });
		$elm$core$Maybe$isJust(request.a$) && _Http_track(router, xhr, request.a$.a);

		try {
			xhr.open(request.bS, request.cp, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.cp));
		}

		_Http_configureRequest(xhr, request);

		request.bd.a && xhr.setRequestHeader('Content-Type', request.bd.a);
		xhr.send(request.bd.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.as; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.cf.a || 0;
	xhr.responseType = request.bs.d;
	xhr.withCredentials = request.a8;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		cp: xhr.responseURL,
		b8: xhr.status,
		b9: xhr.statusText,
		as: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			b4: event.loaded,
			aX: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			b0: event.loaded,
			aX: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.bT) { flags += 'm'; }
	if (options.bf) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.e) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.g),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.g);
		} else {
			var treeLen = builder.e * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.h) : builder.h;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.e);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.g) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.g);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{h: nodeList, e: (len / $elm$core$Array$branchFactor) | 0, g: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {aq: fragment, au: host, aE: path, aH: port_, aL: protocol, aM: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 0};
var $author$project$Types$OneForEachMember = 0;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Types$AllInOne = 1;
var $author$project$View$Plot$fromString = function (string) {
	switch (string) {
		case 'OneForEachMember':
			return $elm$core$Result$Ok(0);
		case 'AllInOne':
			return $elm$core$Result$Ok(1);
		default:
			return $elm$core$Result$Err('wrong plot type snapshot: ' + string);
	}
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Update$init = function (_v0) {
	var currentTime = _v0.bk;
	var snapshot = _v0.b5;
	return _Utils_Tuple2(
		A2(
			$elm$core$Maybe$withDefault,
			{
				bj: '',
				bm: $krisajenkins$remotedata$RemoteData$NotAsked,
				bF: $elm$core$Maybe$Nothing,
				b_: 0,
				ce: $elm$time$Time$millisToPosix(currentTime),
				cp: '',
				cA: $elm$time$Time$utc
			},
			A2(
				$elm$core$Maybe$andThen,
				function (_v1) {
					var url = _v1.cp;
					var cookie = _v1.bj;
					var plot = _v1.b_;
					return A2(
						$elm$core$Maybe$map,
						function (plot_) {
							return {
								bj: cookie,
								bm: $krisajenkins$remotedata$RemoteData$NotAsked,
								bF: $elm$core$Maybe$Nothing,
								b_: plot_,
								ce: $elm$time$Time$millisToPosix(currentTime),
								cp: url,
								cA: $elm$time$Time$utc
							};
						},
						$elm$core$Result$toMaybe(
							$author$project$View$Plot$fromString(plot)));
				},
				snapshot)),
		$elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Update$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $krisajenkins$remotedata$RemoteData$Loading = {$: 1};
var $author$project$Types$CurrentTime = function (a) {
	return {$: 4, a: a};
};
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Update$getCurrentTime = A2($elm$core$Task$perform, $author$project$Types$CurrentTime, $elm$time$Time$now);
var $author$project$Types$FetchResult = function (a) {
	return {$: 3, a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $author$project$Types$Member = F6(
	function (name, id, localScore, globalScore, stars, completionTimes) {
		return {bh: completionTimes, bw: globalScore, bG: id, bP: localScore, bU: name, b6: stars};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$Json$posixDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (string) {
		var _v0 = $elm$core$String$toInt(string);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('bad timestamp format: ' + string);
		} else {
			var _int = _v0.a;
			return $elm$json$Json$Decode$succeed(
				$elm$time$Time$millisToPosix(_int * 1000));
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Json$completionTimesDecoder = A2(
	$elm$json$Json$Decode$map,
	function (days) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var day = _v0.a;
				var stars = _v0.b;
				return A2(
					$elm$core$List$filterMap,
					function (_v1) {
						var star = _v1.a;
						var posix = _v1.b;
						return A3(
							$elm$core$Maybe$map2,
							F2(
								function (d, s) {
									return _Utils_Tuple3(d, s, posix);
								}),
							$elm$core$String$toInt(day),
							$elm$core$String$toInt(star));
					},
					stars);
			},
			days);
	},
	$elm$json$Json$Decode$keyValuePairs(
		$elm$json$Json$Decode$keyValuePairs(
			A2($elm$json$Json$Decode$field, 'get_star_ts', $author$project$Json$posixDecoder))));
var $elm$json$Json$Decode$map6 = _Json_map6;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Json$memberDecoder = A7(
	$elm$json$Json$Decode$map6,
	$author$project$Types$Member,
	A2(
		$elm$json$Json$Decode$field,
		'name',
		$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'local_score', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'global_score', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'stars', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'completion_day_level', $author$project$Json$completionTimesDecoder));
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Json$dataDecoder = A2(
	$elm$json$Json$Decode$map,
	function (data) {
		return A2(
			$elm$core$List$filter,
			function (member) {
				return member.b6 > 0;
			},
			data);
	},
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$List$map($elm$core$Tuple$second),
		A2(
			$elm$json$Json$Decode$field,
			'members',
			$elm$json$Json$Decode$keyValuePairs($author$project$Json$memberDecoder))));
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.b8));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {$: 2, a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 3, a: a};
};
var $krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	if (result.$ === 1) {
		var e = result.a;
		return $krisajenkins$remotedata$RemoteData$Failure(e);
	} else {
		var x = result.a;
		return $krisajenkins$remotedata$RemoteData$Success(x);
	}
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {aP: reqs, aZ: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.a$;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.aP));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.aZ)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					a8: r.a8,
					bd: r.bd,
					bs: A2(_Http_mapExpect, func, r.bs),
					as: r.as,
					bS: r.bS,
					cf: r.cf,
					a$: r.a$,
					cp: r.cp
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{a8: false, bd: r.bd, bs: r.bs, as: r.as, bS: r.bS, cf: r.cf, a$: r.a$, cp: r.cp}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{bd: $elm$http$Http$emptyBody, bs: r.bs, as: _List_Nil, bS: 'GET', cf: $elm$core$Maybe$Nothing, a$: $elm$core$Maybe$Nothing, cp: r.cp});
};
var $author$project$Update$proxyUrl = F2(
	function (url, cookie) {
		return 'https://aoc-leaderboard-json-proxy.herokuapp.com/' + (('?url=' + url) + ('&cookie=' + cookie));
	});
var $author$project$Update$getData = F2(
	function (url, cookie) {
		return $elm$http$Http$get(
			{
				bs: A2(
					$elm$http$Http$expectJson,
					A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, $author$project$Types$FetchResult),
					$author$project$Json$dataDecoder),
				cp: A2($author$project$Update$proxyUrl, url, cookie)
			});
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Update$saveSnapshot = _Platform_outgoingPort(
	'saveSnapshot',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'cookie',
					$elm$json$Json$Encode$string($.bj)),
					_Utils_Tuple2(
					'plot',
					$elm$json$Json$Encode$string($.b_)),
					_Utils_Tuple2(
					'url',
					$elm$json$Json$Encode$string($.cp))
				]));
	});
var $author$project$View$Plot$toString = function (plot_) {
	if (!plot_) {
		return 'OneForEachMember';
	} else {
		return 'AllInOne';
	}
};
var $author$project$Update$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var url = msg.a;
				var newModel = _Utils_update(
					model,
					{cp: url});
				return _Utils_Tuple2(
					newModel,
					$author$project$Update$saveSnapshot(
						{
							bj: model.bj,
							b_: $author$project$View$Plot$toString(model.b_),
							cp: url
						}));
			case 1:
				var cookie = msg.a;
				var newModel = _Utils_update(
					model,
					{bj: cookie});
				return _Utils_Tuple2(
					newModel,
					$author$project$Update$saveSnapshot(
						{
							bj: cookie,
							b_: $author$project$View$Plot$toString(model.b_),
							cp: model.cp
						}));
			case 2:
				var url = msg.a;
				var cookie = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bm: $krisajenkins$remotedata$RemoteData$Loading}),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$Update$getCurrentTime,
								A2($author$project$Update$getData, model.cp, model.bj)
							])));
			case 3:
				var data = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bm: data}),
					$elm$core$Platform$Cmd$none);
			case 4:
				var time = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ce: time}),
					$elm$core$Platform$Cmd$none);
			case 5:
				var zone = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cA: zone}),
					$elm$core$Platform$Cmd$none);
			case 6:
				var hover = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bF: hover}),
					$elm$core$Platform$Cmd$none);
			default:
				var plot = msg.a;
				var newModel = _Utils_update(
					model,
					{b_: plot});
				return _Utils_Tuple2(
					newModel,
					$author$project$Update$saveSnapshot(
						{
							bj: model.bj,
							b_: $author$project$View$Plot$toString(plot),
							cp: model.cp
						}));
		}
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $author$project$View$exampleWarningText = 'This is just an example plot, paste your own URL and cookie.';
var $author$project$Example$shouldShow = function (model) {
	return _Utils_eq(model.bm, $krisajenkins$remotedata$RemoteData$NotAsked) && ((model.cp === '') && (model.bj === ''));
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$View$exampleWarning = function (model) {
	return $author$project$Example$shouldShow(model) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('alert alert-info'),
				A2($elm$html$Html$Attributes$attribute, 'role', 'alert')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text($author$project$View$exampleWarningText)
			])) : $elm$html$Html$text('');
};
var $author$project$Types$SetCookie = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$Example$somethingLike = function (string) {
	return 'Something like: ' + string;
};
var $author$project$Example$cookie = $author$project$Example$somethingLike('83a1ac74a8a48f8f208b18c4c2d027883c128a28dba4172cb814aa083382832a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$View$cookieInput = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-3 col-form-label')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Session cookie '),
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$target('_blank'),
								$elm$html$Html$Attributes$href('https://i.imgur.com/75BC9zU.png')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('(what?!)')
							])),
						$elm$html$Html$text(':')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-9')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$placeholder($author$project$Example$cookie),
								$elm$html$Html$Attributes$value(model.bj),
								$elm$html$Html$Attributes$class('form-control'),
								$elm$html$Html$Events$onInput($author$project$Types$SetCookie)
							]),
						_List_Nil)
					]))
			]));
};
var $author$project$Types$Fetch = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$time$Time$Jan = 0;
var $justinmimbs$date$Date$RD = $elm$core$Basics$identity;
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$neq = _Utils_notEqual;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m) {
			case 0:
				return 31;
			case 1:
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		case 9:
			return 8;
		case 10:
			return 9;
		case 11:
			return 10;
		default:
			return 11;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {U: d, aB: m, a5: y};
			}
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0;
	var y = $justinmimbs$date$Date$year(rd);
	return {
		ab: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		a5: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0;
	var date = $justinmimbs$date$Date$toOrdinalDate(rd);
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.a5, 0, date.ab);
};
var $justinmimbs$date$Date$day = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.U;
	});
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.aB;
	});
var $justinmimbs$date$Date$monthNumber = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToNumber);
var $justinmimbs$date$Date$ordinalDay = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toOrdinalDate,
	function ($) {
		return $.ab;
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $justinmimbs$date$Date$padSignedInt = F2(
	function (length, _int) {
		return _Utils_ap(
			(_int < 0) ? '-' : '',
			A3(
				$elm$core$String$padLeft,
				length,
				'0',
				$elm$core$String$fromInt(
					$elm$core$Basics$abs(_int))));
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$daysBeforeWeekYear = function (y) {
	var jan4 = $justinmimbs$date$Date$daysBeforeYear(y) + 4;
	return jan4 - $justinmimbs$date$Date$weekdayNumber(jan4);
};
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
var $justinmimbs$date$Date$numberToWeekday = function (wdn) {
	var _v0 = A2($elm$core$Basics$max, 1, wdn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		default:
			return 6;
	}
};
var $justinmimbs$date$Date$toWeekDate = function (_v0) {
	var rd = _v0;
	var wdn = $justinmimbs$date$Date$weekdayNumber(rd);
	var wy = $justinmimbs$date$Date$year(rd + (4 - wdn));
	var week1Day1 = $justinmimbs$date$Date$daysBeforeWeekYear(wy) + 1;
	return {
		a3: 1 + (((rd - week1Day1) / 7) | 0),
		a4: wy,
		cs: $justinmimbs$date$Date$numberToWeekday(wdn)
	};
};
var $justinmimbs$date$Date$weekNumber = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.a3;
	});
var $justinmimbs$date$Date$weekYear = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.a4;
	});
var $justinmimbs$date$Date$weekday = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$weekdayNumber, $justinmimbs$date$Date$numberToWeekday);
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $justinmimbs$date$Date$ordinalSuffix = function (n) {
	var nn = A2($elm$core$Basics$modBy, 100, n);
	var _v0 = A2(
		$elm$core$Basics$min,
		(nn < 20) ? nn : A2($elm$core$Basics$modBy, 10, nn),
		4);
	switch (_v0) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};
var $justinmimbs$date$Date$withOrdinalSuffix = function (n) {
	return _Utils_ap(
		$elm$core$String$fromInt(n),
		$justinmimbs$date$Date$ordinalSuffix(n));
};
var $justinmimbs$date$Date$formatField = F4(
	function (language, _char, length, date) {
		switch (_char) {
			case 'y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$year(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$year(date));
				}
			case 'Y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekYear(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$weekYear(date));
				}
			case 'Q':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 3:
						return 'Q' + $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 4:
						return $justinmimbs$date$Date$withOrdinalSuffix(
							$justinmimbs$date$Date$quarter(date));
					case 5:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					default:
						return '';
				}
			case 'M':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$monthNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$monthNumber(date)));
					case 3:
						return language.R(
							$justinmimbs$date$Date$month(date));
					case 4:
						return language._(
							$justinmimbs$date$Date$month(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.R(
								$justinmimbs$date$Date$month(date)));
					default:
						return '';
				}
			case 'w':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekNumber(date)));
					default:
						return '';
				}
			case 'd':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$day(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$day(date)));
					case 3:
						return language.V(
							$justinmimbs$date$Date$day(date));
					default:
						return '';
				}
			case 'D':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$ordinalDay(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					case 3:
						return A3(
							$elm$core$String$padLeft,
							3,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					default:
						return '';
				}
			case 'E':
				switch (length) {
					case 1:
						return language.B(
							$justinmimbs$date$Date$weekday(date));
					case 2:
						return language.B(
							$justinmimbs$date$Date$weekday(date));
					case 3:
						return language.B(
							$justinmimbs$date$Date$weekday(date));
					case 4:
						return language.af(
							$justinmimbs$date$Date$weekday(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.B(
								$justinmimbs$date$Date$weekday(date)));
					case 6:
						return A2(
							$elm$core$String$left,
							2,
							language.B(
								$justinmimbs$date$Date$weekday(date)));
					default:
						return '';
				}
			case 'e':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					default:
						return A4($justinmimbs$date$Date$formatField, language, 'E', length, date);
				}
			default:
				return '';
		}
	});
var $justinmimbs$date$Date$formatWithTokens = F3(
	function (language, tokens, date) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (token, formatted) {
					if (!token.$) {
						var _char = token.a;
						var length = token.b;
						return _Utils_ap(
							A4($justinmimbs$date$Date$formatField, language, _char, length, date),
							formatted);
					} else {
						var str = token.a;
						return _Utils_ap(str, formatted);
					}
				}),
			'',
			tokens);
	});
var $justinmimbs$date$Pattern$Literal = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {al: col, bi: contextStack, aI: problem, aT: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.aT, s.al, x, s.c));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.b, s.aT, s.al, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{al: newCol, c: s.c, d: s.d, b: newOffset, aT: newRow, a: s.a});
	};
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $justinmimbs$date$Pattern$escapedQuote = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(
		$justinmimbs$date$Pattern$Literal('\'')),
	$elm$parser$Parser$token('\'\''));
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{al: 1, c: s.c, d: s.d, b: s.b + 1, aT: s.aT + 1, a: s.a}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{al: s.al + 1, c: s.c, d: s.d, b: newOffset, aT: s.aT, a: s.a}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $justinmimbs$date$Pattern$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{al: col, c: s0.c, d: s0.d, b: offset, aT: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.aT, s.al, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $justinmimbs$date$Pattern$fieldRepeats = function (str) {
	var _v0 = $elm$core$String$toList(str);
	if (_v0.b && (!_v0.b.b)) {
		var _char = _v0.a;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, y) {
							return A2($justinmimbs$date$Pattern$Field, _char, 1 + (y - x));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(_char)))),
			$elm$parser$Parser$getOffset);
	} else {
		return $elm$parser$Parser$problem('expected exactly one char');
	}
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $justinmimbs$date$Pattern$field = A2(
	$elm$parser$Parser$andThen,
	$justinmimbs$date$Pattern$fieldRepeats,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompIf($elm$core$Char$isAlpha)));
var $justinmimbs$date$Pattern$finalize = A2(
	$elm$core$List$foldl,
	F2(
		function (token, tokens) {
			var _v0 = _Utils_Tuple2(token, tokens);
			if (((_v0.a.$ === 1) && _v0.b.b) && (_v0.b.a.$ === 1)) {
				var x = _v0.a.a;
				var _v1 = _v0.b;
				var y = _v1.a.a;
				var rest = _v1.b;
				return A2(
					$elm$core$List$cons,
					$justinmimbs$date$Pattern$Literal(
						_Utils_ap(x, y)),
					rest);
			} else {
				return A2($elm$core$List$cons, token, tokens);
			}
		}),
	_List_Nil);
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $justinmimbs$date$Pattern$isLiteralChar = function (_char) {
	return (_char !== '\'') && (!$elm$core$Char$isAlpha(_char));
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $justinmimbs$date$Pattern$literal = A2(
	$elm$parser$Parser$map,
	$justinmimbs$date$Pattern$Literal,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($justinmimbs$date$Pattern$isLiteralChar)),
			$elm$parser$Parser$chompWhile($justinmimbs$date$Pattern$isLiteralChar))));
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.b) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $justinmimbs$date$Pattern$quotedHelp = function (result) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (str) {
					return $justinmimbs$date$Pattern$quotedHelp(
						_Utils_ap(result, str));
				},
				$elm$parser$Parser$getChompedString(
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(0),
							$elm$parser$Parser$chompIf(
								$elm$core$Basics$neq('\''))),
						$elm$parser$Parser$chompWhile(
							$elm$core$Basics$neq('\''))))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v0) {
					return $justinmimbs$date$Pattern$quotedHelp(result + '\'');
				},
				$elm$parser$Parser$token('\'\'')),
				$elm$parser$Parser$succeed(result)
			]));
};
var $justinmimbs$date$Pattern$quoted = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($justinmimbs$date$Pattern$Literal),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq('\''))),
	A2(
		$elm$parser$Parser$ignorer,
		$justinmimbs$date$Pattern$quotedHelp(''),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq('\'')),
					$elm$parser$Parser$end
				]))));
var $justinmimbs$date$Pattern$patternHelp = function (tokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (token) {
					return $justinmimbs$date$Pattern$patternHelp(
						A2($elm$core$List$cons, token, tokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$justinmimbs$date$Pattern$field, $justinmimbs$date$Pattern$literal, $justinmimbs$date$Pattern$escapedQuote, $justinmimbs$date$Pattern$quoted]))),
				$elm$parser$Parser$lazy(
				function (_v0) {
					return $elm$parser$Parser$succeed(
						$justinmimbs$date$Pattern$finalize(tokens));
				})
			]));
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {al: col, aI: problem, aT: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.aT, p.al, p.aI);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{al: 1, c: _List_Nil, d: 1, b: 0, aT: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $justinmimbs$date$Pattern$fromString = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_fromArray(
			[
				$justinmimbs$date$Pattern$Literal(str)
			]),
		A2(
			$elm$parser$Parser$run,
			$justinmimbs$date$Pattern$patternHelp(_List_Nil),
			str));
};
var $justinmimbs$date$Date$formatWithLanguage = F2(
	function (language, pattern) {
		var tokens = $elm$core$List$reverse(
			$justinmimbs$date$Pattern$fromString(pattern));
		return A2($justinmimbs$date$Date$formatWithTokens, language, tokens);
	});
var $justinmimbs$date$Date$monthToName = function (m) {
	switch (m) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $justinmimbs$date$Date$weekdayToName = function (wd) {
	switch (wd) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $justinmimbs$date$Date$language_en = {
	V: $justinmimbs$date$Date$withOrdinalSuffix,
	_: $justinmimbs$date$Date$monthToName,
	R: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$monthToName,
		$elm$core$String$left(3)),
	af: $justinmimbs$date$Date$weekdayToName,
	B: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$weekdayToName,
		$elm$core$String$left(3))
};
var $justinmimbs$date$Date$format = function (pattern) {
	return A2($justinmimbs$date$Date$formatWithLanguage, $justinmimbs$date$Date$language_en, pattern);
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m) {
			case 0:
				return 0;
			case 1:
				return 31;
			case 2:
				return 59 + leapDays;
			case 3:
				return 90 + leapDays;
			case 4:
				return 120 + leapDays;
			case 5:
				return 151 + leapDays;
			case 6:
				return 181 + leapDays;
			case 7:
				return 212 + leapDays;
			case 8:
				return 243 + leapDays;
			case 9:
				return 273 + leapDays;
			case 10:
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return ($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
			$elm$core$Basics$clamp,
			1,
			A2($justinmimbs$date$Date$daysInMonth, y, m),
			d);
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.b7, posixMinutes) < 0) {
					return posixMinutes + era.b;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		U: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		aB: month,
		a5: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).U;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).aB;
		switch (_v0) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
			case 9:
				return 8;
			case 10:
				return 9;
			case 11:
				return 10;
			default:
				return 11;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).a5;
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$View$fetchButton = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-9')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								A2($author$project$Types$Fetch, model.cp, model.bj)),
								$elm$html$Html$Attributes$disabled(
								_Utils_eq(model.bm, $krisajenkins$remotedata$RemoteData$Loading)),
								$elm$html$Html$Attributes$class('btn btn-primary'),
								$elm$html$Html$Attributes$type_('submit')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Fetch! '),
								function () {
								var _v0 = model.bm;
								if (_v0.$ === 3) {
									return (!$author$project$Example$shouldShow(model)) ? A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('badge badge-light')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												'Last fetch at ' + A2(
													$justinmimbs$date$Date$format,
													'yyyy/MM/dd\', \'HH:mm:ss',
													A2($justinmimbs$date$Date$fromPosix, model.cA, model.ce)))
											])) : $elm$html$Html$text('');
								} else {
									return $elm$html$Html$text('');
								}
							}()
							]))
					]))
			]));
};
var $author$project$Types$ShowPlot = function (a) {
	return {$: 7, a: a};
};
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $author$project$View$plotLabel = function (plot) {
	if (plot === 1) {
		return 'all members in one plot';
	} else {
		return 'one plot for each member';
	}
};
var $author$project$View$plotButton = F2(
	function (plot, currentlySelectedPlot) {
		var isActive = _Utils_eq(plot, currentlySelectedPlot);
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('btn', true),
							_Utils_Tuple2('btn-secondary', true),
							_Utils_Tuple2('active', isActive)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('radio'),
							$elm$html$Html$Attributes$name('plot-type'),
							A2($elm$html$Html$Attributes$attribute, 'autocomplete', 'off'),
							$elm$html$Html$Attributes$checked(isActive),
							$elm$html$Html$Events$onClick(
							$author$project$Types$ShowPlot(plot))
						]),
					_List_Nil),
					$elm$html$Html$text(
					$author$project$View$plotLabel(plot))
				]));
	});
var $author$project$View$radioButtons = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-3 col-form-label')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Show plot:')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-9')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('btn-group'),
								A2($elm$html$Html$Attributes$attribute, 'data-toggle', 'buttons'),
								A2($elm$html$Html$Attributes$attribute, 'role', 'group'),
								A2($elm$html$Html$Attributes$attribute, 'aria-label', 'Show plot')
							]),
						_List_fromArray(
							[
								A2($author$project$View$plotButton, 0, model.b_),
								A2($author$project$View$plotButton, 1, model.b_)
							]))
					]))
			]));
};
var $author$project$Types$SetUrl = function (a) {
	return {$: 0, a: a};
};
var $author$project$Example$url = $author$project$Example$somethingLike('https://adventofcode.com/2017/leaderboard/private/view/201025.json');
var $author$project$View$urlInput = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-3 col-form-label')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Leaderboard JSON URL:')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('col-lg-9')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$placeholder($author$project$Example$url),
								$elm$html$Html$Attributes$value(model.cp),
								$elm$html$Html$Attributes$class('form-control'),
								$elm$html$Html$Events$onInput($author$project$Types$SetUrl)
							]),
						_List_Nil)
					]))
			]));
};
var $author$project$View$warning = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('alert alert-warning'),
			A2($elm$html$Html$Attributes$attribute, 'role', 'alert')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('WARNING: clicking the \"Fetch!\" button sends your session cookie to my CORS proxy. I promise not to use it in any way, but... yeah, not ideal.')
		]));
var $author$project$View$form = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				$author$project$View$urlInput(model),
				$author$project$View$cookieInput(model),
				$author$project$View$fetchButton(model),
				$author$project$View$warning,
				$author$project$View$radioButtons(model)
			]));
};
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $author$project$View$heading = A2(
	$elm$html$Html$h1,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('my-4')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('AoC private leaderboard viewer')
		]));
var $author$project$Example$decode = function (json_) {
	return A2($elm$json$Json$Decode$decodeString, $author$project$Json$dataDecoder, json_);
};
var $author$project$Example$json = '{"members":{"201076":{"stars":8,"global_score":0,"local_score":11,"id":"201076","last_star_ts":"2017-12-07T01:26:24-0500","name":"schod","completion_day_level":{"4":{"1":{"get_star_ts":"2017-12-05T14:58:54-0500"},"2":{"get_star_ts":"2017-12-05T15:58:15-0500"}},"1":{"2":{"get_star_ts":"2017-12-05T09:29:03-0500"},"1":{"get_star_ts":"2017-12-01T02:26:43-0500"}},"5":{"1":{"get_star_ts":"2017-12-06T10:50:05-0500"},"2":{"get_star_ts":"2017-12-07T01:26:24-0500"}},"2":{"1":{"get_star_ts":"2017-12-05T09:53:14-0500"},"2":{"get_star_ts":"2017-12-05T10:17:24-0500"}}}},"201735":{"name":"Jaroslav Bazala","completion_day_level":{"4":{"1":{"get_star_ts":"2017-12-04T04:26:53-0500"},"2":{"get_star_ts":"2017-12-04T04:29:41-0500"}},"3":{"1":{"get_star_ts":"2017-12-03T11:13:04-0500"},"2":{"get_star_ts":"2017-12-03T13:48:26-0500"}},"6":{"2":{"get_star_ts":"2017-12-06T04:33:33-0500"},"1":{"get_star_ts":"2017-12-06T04:31:16-0500"}},"2":{"1":{"get_star_ts":"2017-12-02T12:53:19-0500"},"2":{"get_star_ts":"2017-12-02T13:35:20-0500"}},"5":{"2":{"get_star_ts":"2017-12-05T13:17:13-0500"},"1":{"get_star_ts":"2017-12-05T12:44:58-0500"}},"1":{"1":{"get_star_ts":"2017-12-01T15:07:25-0500"},"2":{"get_star_ts":"2017-12-01T15:25:55-0500"}}},"id":"201735","last_star_ts":"2017-12-06T04:33:33-0500","local_score":31,"global_score":0,"stars":12},"1114":{"local_score":60,"global_score":0,"stars":14,"name":"Martin Janiczek","completion_day_level":{"1":{"2":{"get_star_ts":"2017-12-01T00:30:53-0500"},"1":{"get_star_ts":"2017-12-01T00:17:23-0500"}},"2":{"2":{"get_star_ts":"2017-12-02T00:26:01-0500"},"1":{"get_star_ts":"2017-12-02T00:10:38-0500"}},"5":{"2":{"get_star_ts":"2017-12-05T00:20:50-0500"},"1":{"get_star_ts":"2017-12-05T00:18:25-0500"}},"6":{"1":{"get_star_ts":"2017-12-06T00:43:30-0500"},"2":{"get_star_ts":"2017-12-06T00:51:49-0500"}},"3":{"2":{"get_star_ts":"2017-12-03T01:33:07-0500"},"1":{"get_star_ts":"2017-12-03T00:50:52-0500"}},"7":{"1":{"get_star_ts":"2017-12-07T00:31:35-0500"},"2":{"get_star_ts":"2017-12-07T01:12:00-0500"}},"4":{"2":{"get_star_ts":"2017-12-04T00:43:56-0500"},"1":{"get_star_ts":"2017-12-04T00:38:41-0500"}}},"id":"1114","last_star_ts":"2017-12-07T01:12:00-0500"},"247429":{"name":"porubsky","completion_day_level":{"6":{"1":{"get_star_ts":"2017-12-06T00:13:09-0500"},"2":{"get_star_ts":"2017-12-06T00:18:04-0500"}},"3":{"1":{"get_star_ts":"2017-12-04T05:58:16-0500"},"2":{"get_star_ts":"2017-12-04T05:58:37-0500"}},"7":{"2":{"get_star_ts":"2017-12-07T01:26:42-0500"},"1":{"get_star_ts":"2017-12-07T00:39:51-0500"}},"4":{"2":{"get_star_ts":"2017-12-04T05:54:28-0500"},"1":{"get_star_ts":"2017-12-04T05:51:38-0500"}},"1":{"1":{"get_star_ts":"2017-12-04T04:22:15-0500"},"2":{"get_star_ts":"2017-12-04T05:56:03-0500"}},"2":{"1":{"get_star_ts":"2017-12-04T04:36:47-0500"},"2":{"get_star_ts":"2017-12-04T04:48:28-0500"}},"5":{"2":{"get_star_ts":"2017-12-05T00:18:38-0500"},"1":{"get_star_ts":"2017-12-05T00:15:57-0500"}}},"id":"247429","last_star_ts":"2017-12-07T01:26:42-0500","local_score":41,"stars":14,"global_score":0},"201025":{"name":"Martin Stříž","completion_day_level":{"2":{"1":{"get_star_ts":"2017-12-02T11:11:56-0500"},"2":{"get_star_ts":"2017-12-02T12:15:29-0500"}},"5":{"2":{"get_star_ts":"2017-12-05T01:50:50-0500"},"1":{"get_star_ts":"2017-12-05T01:45:35-0500"}},"1":{"1":{"get_star_ts":"2017-12-01T02:44:40-0500"},"2":{"get_star_ts":"2017-12-01T02:51:31-0500"}},"4":{"1":{"get_star_ts":"2017-12-04T00:29:11-0500"},"2":{"get_star_ts":"2017-12-04T00:36:09-0500"}},"3":{"2":{"get_star_ts":"2017-12-03T10:50:54-0500"},"1":{"get_star_ts":"2017-12-03T10:04:18-0500"}},"6":{"2":{"get_star_ts":"2017-12-06T00:20:48-0500"},"1":{"get_star_ts":"2017-12-06T00:15:21-0500"}},"7":{"1":{"get_star_ts":"2017-12-07T00:21:05-0500"},"2":{"get_star_ts":"2017-12-07T00:51:44-0500"}}},"id":"201025","last_star_ts":"2017-12-07T00:51:44-0500","local_score":57,"global_score":0,"stars":14}},"owner_id":"201025","event":"2017"}';
var $author$project$Example$data = function () {
	var _v0 = $author$project$Example$decode($author$project$Example$json);
	if (!_v0.$) {
		var data_ = _v0.a;
		return data_;
	} else {
		return _List_Nil;
	}
}();
var $author$project$Day$day = 86400000;
var $NoRedInk$elm_plot_19$Plot$junk = F3(
	function (title, x, y) {
		return {cr: title, cu: x, cx: y};
	});
var $author$project$Day$findComfortableRange = F2(
	function (dataMax, current) {
		findComfortableRange:
		while (true) {
			var newTime = current + $author$project$Day$day;
			if (_Utils_cmp(newTime, dataMax) < 0) {
				var $temp$dataMax = dataMax,
					$temp$current = newTime;
				dataMax = $temp$dataMax;
				current = $temp$current;
				continue findComfortableRange;
			} else {
				return current;
			}
		}
	});
var $author$project$Day$startOfAoC = 1606798800000;
var $author$project$Day$comfortableRange = function (dataMax) {
	return _Utils_Tuple2(
		$author$project$Day$startOfAoC,
		A2($author$project$Day$findComfortableRange, dataMax + $author$project$Day$day, $author$project$Day$startOfAoC));
};
var $author$project$Day$endOfAoC = $author$project$Day$startOfAoC + ($author$project$Day$day * 26);
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$View$Date$max = function (data) {
	return $author$project$Day$comfortableRange(
		A2(
			$elm$core$Maybe$withDefault,
			$author$project$Day$endOfAoC,
			$elm$core$List$maximum(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var time = _v0.c;
						return $elm$time$Time$posixToMillis(time);
					},
					A2(
						$elm$core$List$concatMap,
						function ($) {
							return $.bh;
						},
						data))))).b;
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Colors$semitransparent = function (color) {
	return 'rgba(' + (color + ',0.5)');
};
var $author$project$Colors$colors = {
	ah: $author$project$Colors$semitransparent('0,197,197'),
	aj: $author$project$Colors$semitransparent('0,191,245'),
	am: $author$project$Colors$semitransparent('146,173,255'),
	bl: '#a3a3a3',
	ar: $author$project$Colors$semitransparent('0,205,50'),
	bx: '#e3e3e3',
	aD: $author$project$Colors$semitransparent('255,149,57'),
	aG: $author$project$Colors$semitransparent('255,139,178'),
	aN: $author$project$Colors$semitransparent('255,146,112'),
	cn: 'transparent',
	a2: $author$project$Colors$semitransparent('233,140,255'),
	a6: $author$project$Colors$semitransparent('161,188,0')
};
var $author$project$Colors$seriesColors = _List_fromArray(
	[$author$project$Colors$colors.aN, $author$project$Colors$colors.a6, $author$project$Colors$colors.ah, $author$project$Colors$colors.am, $author$project$Colors$colors.aG, $author$project$Colors$colors.aD, $author$project$Colors$colors.ar, $author$project$Colors$colors.aj, $author$project$Colors$colors.a2]);
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Colors$colorsList = function (count) {
	var repeats = $elm$core$Basics$ceiling(
		count / $elm$core$List$length($author$project$Colors$seriesColors));
	return A2(
		$elm$core$List$take,
		count,
		$elm$core$List$concat(
			A2($elm$core$List$repeat, repeats, $author$project$Colors$seriesColors)));
};
var $author$project$View$Name$name = function (member) {
	return A2($elm$core$Maybe$withDefault, 'Anonymous #' + member.bG, member.bU);
};
var $author$project$View$Member$description = function (member) {
	return $author$project$View$Name$name(member) + ((' (stars: ' + $elm$core$String$fromInt(member.b6)) + ((', local score: ' + $elm$core$String$fromInt(member.bP)) + ')'));
};
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$core$List$map3 = _List_map3;
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $author$project$View$Plot$Text$attributes = _List_fromArray(
	[
		$elm$svg$Svg$Attributes$fill($author$project$Colors$colors.bl),
		$elm$svg$Svg$Attributes$fontSize('10px')
	]);
var $author$project$View$Plot$Text$color = function (colorString) {
	return 'fill: ' + colorString;
};
var $author$project$View$Plot$Text$italic = 'font-style: italic';
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $author$project$View$Plot$Text$styles = function (s) {
	return $elm$svg$Svg$Attributes$style(
		A2($elm$core$String$join, ';', s));
};
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$tspan = $elm$svg$Svg$trustedNode('tspan');
var $NoRedInk$elm_plot_19$Plot$viewLabel = F2(
	function (attributes, string) {
		return A2(
			$elm$svg$Svg$text_,
			attributes,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$tspan,
					_List_Nil,
					_List_fromArray(
						[
							$elm$svg$Svg$text(string)
						]))
				]));
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $author$project$View$Plot$Text$yOffset = function (offset) {
	return $elm$svg$Svg$Attributes$y(
		$elm$core$String$fromFloat(offset) + 'px');
};
var $author$project$View$Plot$Junk$Legend$memberSvg = F3(
	function (memberString, yOffset_, color) {
		return A2(
			$NoRedInk$elm_plot_19$Plot$viewLabel,
			A2(
				$elm$core$List$cons,
				$author$project$View$Plot$Text$styles(
					_List_fromArray(
						[
							$author$project$View$Plot$Text$italic,
							$author$project$View$Plot$Text$color(color)
						])),
				A2(
					$elm$core$List$cons,
					$author$project$View$Plot$Text$yOffset(yOffset_),
					$author$project$View$Plot$Text$attributes)),
			memberString);
	});
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$View$Plot$Junk$Legend$yOffset = F2(
	function (position, _v0) {
		return position * 13.5;
	});
var $author$project$View$Plot$Junk$Legend$svg = function (data) {
	var sortedData = A2(
		$elm$core$List$sortBy,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.bP;
			},
			$elm$core$Basics$negate),
		data);
	return A2(
		$elm$svg$Svg$g,
		_List_Nil,
		A4(
			$elm$core$List$map3,
			$author$project$View$Plot$Junk$Legend$memberSvg,
			A2($elm$core$List$map, $author$project$View$Member$description, sortedData),
			A2($elm$core$List$indexedMap, $author$project$View$Plot$Junk$Legend$yOffset, sortedData),
			$author$project$Colors$colorsList(
				$elm$core$List$length(data))));
};
var $author$project$View$Plot$Junk$Legend$legend = function (data) {
	return A3(
		$NoRedInk$elm_plot_19$Plot$junk,
		$author$project$View$Plot$Junk$Legend$svg(data),
		1.1,
		$author$project$View$Date$max(data) - (0.76 * $author$project$Day$day));
};
var $author$project$View$Plot$Type$AllInOne$junk = F2(
	function (data, _v0) {
		return _List_fromArray(
			[
				$author$project$View$Plot$Junk$Legend$legend(data)
			]);
	});
var $author$project$Types$Hover = function (a) {
	return {$: 6, a: a};
};
var $author$project$View$Plot$Hint$containerInner = F2(
	function (isLeft, hints) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('container hint')
				]),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('row row--header')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('col-sm col--member')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Member')
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('col-sm col--solved')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Solved')
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('col-sm col--score')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Score')
								]))
						])),
				hints));
	});
var $NoRedInk$elm_plot_19$Plot$Grid = function (a) {
	return {$: 0, a: a};
};
var $NoRedInk$elm_plot_19$Plot$customGrid = $NoRedInk$elm_plot_19$Plot$Grid;
var $elm_community$list_extra$List$Extra$iterateHelp = F3(
	function (f, x, acc) {
		iterateHelp:
		while (true) {
			var _v0 = f(x);
			if (!_v0.$) {
				var x_ = _v0.a;
				var $temp$f = f,
					$temp$x = x_,
					$temp$acc = A2($elm$core$List$cons, x, acc);
				f = $temp$f;
				x = $temp$x;
				acc = $temp$acc;
				continue iterateHelp;
			} else {
				return A2($elm$core$List$cons, x, acc);
			}
		}
	});
var $elm_community$list_extra$List$Extra$iterate = F2(
	function (f, x) {
		return $elm$core$List$reverse(
			A3($elm_community$list_extra$List$Extra$iterateHelp, f, x, _List_Nil));
	});
var $author$project$Day$findTicks = F3(
	function (min, max, delta) {
		return _Utils_ap(
			A2(
				$elm_community$list_extra$List$Extra$iterate,
				function (val) {
					var newVal = val + delta;
					return (_Utils_cmp(newVal, max) < 0) ? $elm$core$Maybe$Just(newVal) : $elm$core$Maybe$Nothing;
				},
				min),
			_List_fromArray(
				[max]));
	});
var $author$project$View$Plot$Grid$grid = F4(
	function (gridLineFn, min, max, delta) {
		return $NoRedInk$elm_plot_19$Plot$customGrid(
			function (summary) {
				return A2(
					$elm$core$List$map,
					gridLineFn,
					A3($author$project$Day$findTicks, min, max, delta));
			});
	});
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $author$project$View$Plot$Grid$gridLineY = function (tick) {
	return {
		ba: _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke($author$project$Colors$colors.bx)
			]),
		b$: tick
	};
};
var $author$project$View$Plot$Grid$gridY = F3(
	function (min, max, delta) {
		return A4($author$project$View$Plot$Grid$grid, $author$project$View$Plot$Grid$gridLineY, min, max, delta);
	});
var $author$project$View$Plot$Grid$date = function (maxDate) {
	return A3($author$project$View$Plot$Grid$gridY, $author$project$Day$startOfAoC, maxDate, $author$project$Day$day);
};
var $author$project$View$Plot$Grid$isHovering = F2(
	function (tick, hover) {
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var x = _v0.cu;
					var y = _v0.cx;
					return _Utils_eq(x, tick);
				},
				hover));
	});
var $author$project$View$Plot$Grid$gridLineX = F2(
	function (hover, tick) {
		return {
			ba: _List_fromArray(
				[
					$elm$svg$Svg$Attributes$stroke(
					A2($author$project$View$Plot$Grid$isHovering, tick, hover) ? $author$project$Colors$colors.bl : $author$project$Colors$colors.bx)
				]),
			b$: tick
		};
	});
var $author$project$View$Plot$Grid$gridX = F4(
	function (hover, min, max, delta) {
		return A4(
			$author$project$View$Plot$Grid$grid,
			$author$project$View$Plot$Grid$gridLineX(hover),
			min,
			max,
			delta);
	});
var $author$project$View$Plot$Grid$dayStar = F2(
	function (hover, maxDayStar) {
		return A4($author$project$View$Plot$Grid$gridX, hover, 1.0, maxDayStar, 0.5);
	});
var $NoRedInk$elm_plot_19$Plot$YeahGridsAreTotallyLame = {$: 1};
var $NoRedInk$elm_plot_19$Plot$clearGrid = $NoRedInk$elm_plot_19$Plot$YeahGridsAreTotallyLame;
var $NoRedInk$elm_plot_19$Plot$closestToZero = F2(
	function (min, max) {
		return A3($elm$core$Basics$clamp, min, max, 0);
	});
var $NoRedInk$elm_plot_19$Plot$Axis = function (a) {
	return {$: 0, a: a};
};
var $NoRedInk$elm_plot_19$Plot$customAxis = $NoRedInk$elm_plot_19$Plot$Axis;
var $NoRedInk$elm_plot_19$Plot$count = F4(
	function (delta, lowest, range, firstValue_) {
		return $elm$core$Basics$floor(
			(range - ($elm$core$Basics$abs(lowest) - $elm$core$Basics$abs(firstValue_))) / delta);
	});
var $NoRedInk$elm_plot_19$Plot$ceilToNearest = F2(
	function (precision, value) {
		return $elm$core$Basics$ceiling(value / precision) * precision;
	});
var $NoRedInk$elm_plot_19$Plot$firstValue = F2(
	function (delta, lowest) {
		return A2($NoRedInk$elm_plot_19$Plot$ceilToNearest, delta, lowest);
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {bI: index, bR: match, bV: number, cb: submatches};
	});
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{bf: false, bT: false},
		string);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$regex$Regex$never = _Regex_never;
var $NoRedInk$elm_plot_19$Plot$deltaPrecision = function (delta) {
	return $elm$core$Basics$abs(
		A2(
			$elm$core$Basics$min,
			0,
			1 - $elm$core$String$length(
				A2(
					$elm$core$Maybe$withDefault,
					'',
					$elm$core$List$head(
						A2(
							$elm$core$List$map,
							function ($) {
								return $.bR;
							},
							A2(
								$elm$regex$Regex$find,
								A2(
									$elm$core$Maybe$withDefault,
									$elm$regex$Regex$never,
									$elm$regex$Regex$fromString('\\.[0-9]*')),
								$elm$core$String$fromFloat(delta))))))));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (c !== '0') && (c !== '.');
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (head === '9') {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 1) {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				'0',
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$String$reverse = _String_reverse;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3($elm$core$String$padRight, e + 1, '0', total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					'0',
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3($elm$core$String$padRight, s, '0', after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 1) {
				return false;
			} else {
				if ('5' === _v0.a.a) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $elm$core$String$toFloat = _String_toFloat;
var $NoRedInk$elm_plot_19$Plot$tickPosition = F3(
	function (delta, firstValue_, index) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$String$toFloat(
				A2(
					$myrho$elm_round$Round$round,
					$NoRedInk$elm_plot_19$Plot$deltaPrecision(delta),
					firstValue_ + (index * delta))));
	});
var $NoRedInk$elm_plot_19$Plot$interval = F3(
	function (offset, delta, _v0) {
		var min = _v0.x;
		var max = _v0.J;
		var value = A2($NoRedInk$elm_plot_19$Plot$firstValue, delta, min) + offset;
		var range = $elm$core$Basics$abs(min - max);
		var indexes = A2(
			$elm$core$List$range,
			0,
			A4($NoRedInk$elm_plot_19$Plot$count, delta, min, range, value));
		return A2(
			$elm$core$List$map,
			A2($NoRedInk$elm_plot_19$Plot$tickPosition, delta, value),
			indexes);
	});
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$round = _Basics_round;
var $NoRedInk$elm_plot_19$Plot$niceInterval = F3(
	function (min, max, total) {
		var range = $elm$core$Basics$abs(max - min);
		var delta0 = range / total;
		var mag = $elm$core$Basics$floor(
			A2($elm$core$Basics$logBase, 10, delta0));
		var magPow = A2($elm$core$Basics$pow, 10, mag);
		var magMsd = $elm$core$Basics$round(delta0 / magPow);
		var magMsdFinal = (magMsd > 5) ? 10 : ((magMsd > 2) ? 5 : ((magMsd > 1) ? 1 : magMsd));
		return magMsdFinal * magPow;
	});
var $NoRedInk$elm_plot_19$Plot$decentPositions = function (summary) {
	return (summary.az > 600) ? A3(
		$NoRedInk$elm_plot_19$Plot$interval,
		0,
		A3($NoRedInk$elm_plot_19$Plot$niceInterval, summary.x, summary.J, 10),
		summary) : A3(
		$NoRedInk$elm_plot_19$Plot$interval,
		0,
		A3($NoRedInk$elm_plot_19$Plot$niceInterval, summary.x, summary.J, 5),
		summary);
};
var $NoRedInk$elm_plot_19$Plot$remove = F2(
	function (banned, values) {
		return A2(
			$elm$core$List$filter,
			function (v) {
				return !_Utils_eq(v, banned);
			},
			values);
	});
var $NoRedInk$elm_plot_19$Plot$simpleLabel = function (position) {
	return {
		b$: position,
		cr: A2(
			$NoRedInk$elm_plot_19$Plot$viewLabel,
			_List_Nil,
			$elm$core$String$fromFloat(position))
	};
};
var $NoRedInk$elm_plot_19$Internal$Colors$darkGrey = '#a3a3a3';
var $NoRedInk$elm_plot_19$Plot$fullLine = F2(
	function (attributes, summary) {
		return {
			ba: A2(
				$elm$core$List$cons,
				$elm$svg$Svg$Attributes$style('pointer-events: none;'),
				attributes),
			br: summary.J,
			b7: summary.x
		};
	});
var $NoRedInk$elm_plot_19$Plot$simpleLine = function (summary) {
	return A2(
		$NoRedInk$elm_plot_19$Plot$fullLine,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke($NoRedInk$elm_plot_19$Internal$Colors$darkGrey)
			]),
		summary);
};
var $NoRedInk$elm_plot_19$Plot$simpleTick = function (position) {
	return {
		ba: _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke($NoRedInk$elm_plot_19$Internal$Colors$darkGrey)
			]),
		az: 5,
		b$: position
	};
};
var $NoRedInk$elm_plot_19$Plot$normalAxis = $NoRedInk$elm_plot_19$Plot$customAxis(
	function (summary) {
		return {
			bc: $elm$core$Maybe$Just(
				$NoRedInk$elm_plot_19$Plot$simpleLine(summary)),
			bu: false,
			bN: A2(
				$elm$core$List$map,
				$NoRedInk$elm_plot_19$Plot$simpleLabel,
				A2(
					$NoRedInk$elm_plot_19$Plot$remove,
					0,
					$NoRedInk$elm_plot_19$Plot$decentPositions(summary))),
			b$: $NoRedInk$elm_plot_19$Plot$closestToZero,
			cd: A2(
				$elm$core$List$map,
				$NoRedInk$elm_plot_19$Plot$simpleTick,
				A2(
					$NoRedInk$elm_plot_19$Plot$remove,
					0,
					$NoRedInk$elm_plot_19$Plot$decentPositions(summary)))
		};
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $NoRedInk$elm_plot_19$Plot$normalHintContainer = function (summary) {
	return $elm$html$Html$div(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'margin-left',
				$elm$core$String$fromFloat(summary.cu.E) + 'px')
			]));
};
var $NoRedInk$elm_plot_19$Plot$defaultSeriesPlotCustomizations = {
	ba: _List_Nil,
	W: _List_Nil,
	by: {bD: $NoRedInk$elm_plot_19$Plot$clearGrid, cq: $NoRedInk$elm_plot_19$Plot$clearGrid},
	bz: 440,
	bC: $NoRedInk$elm_plot_19$Plot$normalHintContainer,
	bE: $NoRedInk$elm_plot_19$Plot$normalAxis,
	bG: 'elm-plot',
	bM: $elm$core$Basics$always(_List_Nil),
	bQ: {be: 20, bO: 40, b3: 40, cm: 20},
	bW: $elm$core$Maybe$Nothing,
	ci: $elm$core$Basics$identity,
	cj: $elm$core$Basics$identity,
	ck: $elm$core$Basics$identity,
	cl: $elm$core$Basics$identity,
	P: 647
};
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $NoRedInk$elm_plot_19$Internal$Draw$range = function (axis) {
	return (!(!(axis.J - axis.x))) ? (axis.J - axis.x) : 1;
};
var $NoRedInk$elm_plot_19$Internal$Draw$length = function (axis) {
	return (axis.az - axis.E) - axis.aA;
};
var $NoRedInk$elm_plot_19$Internal$Draw$scaleValue = F2(
	function (axis, value) {
		return (value * $NoRedInk$elm_plot_19$Internal$Draw$length(axis)) / $NoRedInk$elm_plot_19$Internal$Draw$range(axis);
	});
var $NoRedInk$elm_plot_19$Internal$Draw$toSVGX = F2(
	function (_v0, value) {
		var x = _v0.cu;
		return A2($NoRedInk$elm_plot_19$Internal$Draw$scaleValue, x, value - x.x) + x.E;
	});
var $NoRedInk$elm_plot_19$Plot$viewFlyingHintContainer = F4(
	function (inner, _v0, summary, hints) {
		var x = _v0.cu;
		var xOffset = (A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, summary, x) * 100) / summary.cu.az;
		var isLeft = _Utils_cmp(
			x - summary.cu.x,
			$NoRedInk$elm_plot_19$Internal$Draw$range(summary.cu) / 2) > 0;
		var pos = isLeft ? _Utils_Tuple2(
			'right',
			$elm$core$String$fromFloat(100 - xOffset) + '%') : _Utils_Tuple2(
			'left',
			$elm$core$String$fromFloat(xOffset) + '%');
		var attributes = A2(
			$elm$core$List$cons,
			$elm$svg$Svg$Attributes$class('elm-plot__hint'),
			A2(
				$elm$core$List$map,
				function (_v1) {
					var p = _v1.a;
					var v = _v1.b;
					return A2($elm$html$Html$Attributes$style, p, v);
				},
				_List_fromArray(
					[
						_Utils_Tuple2('position', 'absolute'),
						_Utils_Tuple2('top', '25%'),
						pos,
						_Utils_Tuple2('pointer-events', 'none')
					])));
		return A2(
			$elm$html$Html$div,
			attributes,
			_List_fromArray(
				[
					A2(inner, isLeft, hints)
				]));
	});
var $NoRedInk$elm_plot_19$Plot$flyingHintContainer = F4(
	function (inner, hovering, summary, hints) {
		if (hovering.$ === 1) {
			return $elm$svg$Svg$text('');
		} else {
			var point_ = hovering.a;
			return A4($NoRedInk$elm_plot_19$Plot$viewFlyingHintContainer, inner, point_, summary, hints);
		}
	});
var $author$project$View$Plot$Axis$hoveredOrTicks = F4(
	function (hover, toValue, makeStuff, ticks) {
		return A2(
			$elm$core$Maybe$withDefault,
			A2($elm$core$List$map, makeStuff, ticks),
			A2(
				$elm$core$Maybe$map,
				function (p) {
					return _List_fromArray(
						[
							makeStuff(
							toValue(p))
						]);
				},
				hover));
	});
var $author$project$View$Plot$Axis$axis = F6(
	function (showOnlyOneOnHover, hover, _v0, toValue, makeString, toTicks) {
		var min = _v0.a;
		var max = _v0.b;
		return $NoRedInk$elm_plot_19$Plot$customAxis(
			function (summary) {
				var ticks = toTicks(summary);
				var makeLabel = function (position) {
					return {
						b$: position,
						cr: A2(
							$NoRedInk$elm_plot_19$Plot$viewLabel,
							$author$project$View$Plot$Text$attributes,
							makeString(position))
					};
				};
				return {
					bc: $elm$core$Maybe$Just(
						{
							ba: _List_fromArray(
								[
									$elm$svg$Svg$Attributes$stroke($author$project$Colors$colors.bl)
								]),
							br: A2(
								$elm$core$Maybe$withDefault,
								max,
								$elm$core$List$head(
									$elm$core$List$reverse(ticks))),
							b7: min
						}),
					bu: false,
					bN: showOnlyOneOnHover ? A4($author$project$View$Plot$Axis$hoveredOrTicks, hover, toValue, makeLabel, ticks) : A2($elm$core$List$map, makeLabel, ticks),
					b$: $NoRedInk$elm_plot_19$Plot$closestToZero,
					cd: showOnlyOneOnHover ? A4($author$project$View$Plot$Axis$hoveredOrTicks, hover, toValue, $NoRedInk$elm_plot_19$Plot$simpleTick, ticks) : A2($elm$core$List$map, $NoRedInk$elm_plot_19$Plot$simpleTick, ticks)
				};
			});
	});
var $author$project$View$DayStar$format = function (_v0) {
	var day = _v0.a;
	var star = _v0.b;
	return $elm$core$String$fromInt(day) + ('-' + $elm$core$String$fromInt(star));
};
var $author$project$DayStar$fromFloat = function (_float) {
	var day = $elm$core$Basics$floor(_float);
	var star = $elm$core$Basics$floor(((_float - day) * 2) + 1);
	return _Utils_Tuple2(day, star);
};
var $author$project$View$Plot$Axis$horizontalAxis = F2(
	function (hover, maxDayStar) {
		return A6(
			$author$project$View$Plot$Axis$axis,
			true,
			hover,
			_Utils_Tuple2(1.0, maxDayStar),
			function ($) {
				return $.cu;
			},
			A2($elm$core$Basics$composeR, $author$project$DayStar$fromFloat, $author$project$View$DayStar$format),
			$elm$core$Basics$always(
				A3($author$project$Day$findTicks, 1.0, maxDayStar, 1.0)));
	});
var $author$project$DayStar$toFloat = F2(
	function (day, star) {
		return day + ((star - 1) / 2);
	});
var $author$project$DayStar$max = function (data) {
	return A2(
		$elm$core$Maybe$withDefault,
		25.5,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var day = _v0.a;
					var star = _v0.b;
					return A2($author$project$DayStar$toFloat, day, star);
				},
				A2(
					$elm$core$List$concatMap,
					function ($) {
						return $.bh;
					},
					data))));
};
var $author$project$View$Plot$PlotCustomizations$withGlobalJunk = F2(
	function (customJunk, summary) {
		return customJunk(summary);
	});
var $author$project$View$Plot$PlotCustomizations$plotCustomizations = F3(
	function (model, data, junk) {
		var maxDayStar = $author$project$DayStar$max(data);
		var maxDate = $author$project$View$Date$max(data);
		return _Utils_update(
			$NoRedInk$elm_plot_19$Plot$defaultSeriesPlotCustomizations,
			{
				by: {
					bD: $author$project$View$Plot$Grid$date(maxDate),
					cq: A2($author$project$View$Plot$Grid$dayStar, model.bF, maxDayStar)
				},
				bz: 300,
				bC: A2($NoRedInk$elm_plot_19$Plot$flyingHintContainer, $author$project$View$Plot$Hint$containerInner, model.bF),
				bE: A2($author$project$View$Plot$Axis$horizontalAxis, model.bF, maxDayStar),
				bM: $author$project$View$Plot$PlotCustomizations$withGlobalJunk(junk),
				bQ: {be: 30, bO: 80, b3: 30, cm: 20},
				bW: $elm$core$Maybe$Just($author$project$Types$Hover),
				ci: $elm$core$Basics$always(maxDate),
				cj: $elm$core$Basics$always($author$project$Day$startOfAoC - ($author$project$Day$day / 2)),
				ck: $elm$core$Basics$always(maxDayStar),
				cl: $elm$core$Basics$always(1.0 - 0.2)
			});
	});
var $author$project$View$Plot$Type$AllInOne$dotOptions = {ca: true, cv: true, cw: true, cy: true, cz: true};
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $author$project$View$Plot$Dot$flashyLine = F3(
	function (x, y, hover) {
		return (_Utils_eq(hover.cu, x) && _Utils_eq(hover.cx, y)) ? $elm$core$Maybe$Just(
			$NoRedInk$elm_plot_19$Plot$fullLine(
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$stroke($author$project$Colors$colors.bl),
						$elm$svg$Svg$Attributes$strokeDasharray('3, 10')
					]))) : $elm$core$Maybe$Nothing;
	});
var $author$project$View$Plot$Dot$flashyTick = F3(
	function (correctValue, toValue, hover) {
		return _Utils_eq(
			toValue(hover),
			correctValue) ? $elm$core$Maybe$Just(
			$NoRedInk$elm_plot_19$Plot$simpleTick(correctValue)) : $elm$core$Maybe$Nothing;
	});
var $author$project$View$Score$pts = function (score) {
	return (score > 1) ? 'pts' : 'pt';
};
var $author$project$View$Score$format = F2(
	function (maybeScore, maxScore) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (score) {
					return $elm$core$String$fromInt(score) + (' ' + ($author$project$View$Score$pts(score) + (' out of ' + $elm$core$String$fromInt(maxScore))));
				},
				maybeScore));
	});
var $elm$core$String$pad = F3(
	function (n, _char, string) {
		var half = (n - $elm$core$String$length(string)) / 2;
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				$elm$core$Basics$ceiling(half),
				$elm$core$String$fromChar(_char)),
			_Utils_ap(
				string,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$floor(half),
					$elm$core$String$fromChar(_char))));
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $author$project$View$Date$parseDate = F2(
	function (zone, date) {
		return {
			U: $elm$core$String$fromInt(
				A2($elm$time$Time$toDay, zone, date)),
			X: A3(
				$elm$core$String$pad,
				2,
				'0',
				$elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, date))),
			Z: A3(
				$elm$core$String$pad,
				2,
				'0',
				$elm$core$String$fromInt(
					A2($elm$time$Time$toMinute, zone, date))),
			aV: A3(
				$elm$core$String$pad,
				2,
				'0',
				$elm$core$String$fromInt(
					A2($elm$time$Time$toSecond, zone, date)))
		};
	});
var $author$project$View$Date$formatWithSeconds = F2(
	function (zone, posix) {
		var _v0 = A2($author$project$View$Date$parseDate, zone, posix);
		var day = _v0.U;
		var hour = _v0.X;
		var minute = _v0.Z;
		var second = _v0.aV;
		return 'Dec ' + (day + (', ' + (hour + (':' + (minute + (':' + second))))));
	});
var $elm_community$html_extra$Html$Attributes$Extra$empty = $elm$html$Html$Attributes$classList(_List_Nil);
var $elm_community$html_extra$Html$Attributes$Extra$attributeIf = F2(
	function (condition, attr) {
		return condition ? attr : $elm_community$html_extra$Html$Attributes$Extra$empty;
	});
var $author$project$View$Score$style = F3(
	function (striped, maybeScore, maxScore) {
		return A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (score) {
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'order',
							$elm$core$String$fromInt(score)),
							A2(
							$elm_community$html_extra$Html$Attributes$Extra$attributeIf,
							striped && (A2($elm$core$Basics$modBy, 2, score) === 1),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(0,0,0,.05)'))
						]);
				},
				A2(
					$elm$core$Maybe$map,
					function (score) {
						return (maxScore - score) + 1;
					},
					maybeScore)));
	});
var $author$project$View$Plot$Hint$hint = F7(
	function (striped, name, zone, solutionDate, dayStarFloat, maybeScore, maxScore) {
		var solutionDatePosix = $elm$time$Time$millisToPosix(
			$elm$core$Basics$round(solutionDate));
		return A2(
			$elm$html$Html$div,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('row'),
				A3($author$project$View$Score$style, striped, maybeScore, maxScore)),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('col-sm col--member')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('col-sm col--solved')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($author$project$View$Date$formatWithSeconds, zone, solutionDatePosix))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('col-sm col--score')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($author$project$View$Score$format, maybeScore, maxScore))
						]))
				]));
	});
var $author$project$View$Plot$Dot$onHovering = F3(
	function (stuff, hover, x) {
		return A2(
			$elm$core$Maybe$andThen,
			function (p) {
				return _Utils_eq(p.cu, x) ? $elm$core$Maybe$Just(stuff) : $elm$core$Maybe$Nothing;
			},
			hover);
	});
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $author$project$View$Plot$Dot$square = F4(
	function (memberName, color, x, y) {
		var width = 5.0;
		return A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(width)),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(width)),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromFloat((-width) / 2)),
					$elm$svg$Svg$Attributes$y(
					$elm$core$String$fromFloat((-width) / 2)),
					$elm$svg$Svg$Attributes$stroke($author$project$Colors$colors.cn),
					$elm$svg$Svg$Attributes$strokeWidth('3px'),
					$elm$svg$Svg$Attributes$fill(color)
				]),
			_List_Nil);
	});
var $author$project$View$Plot$Dot$dot = F8(
	function (zone, dotOptions, hover, memberName, color, _v0, maybeScore, maxScore) {
		var x = _v0.a;
		var y = _v0.b;
		return {
			bB: A3(
				$author$project$View$Plot$Dot$onHovering,
				A7($author$project$View$Plot$Hint$hint, dotOptions.ca, memberName, zone, y, x, maybeScore, maxScore),
				hover,
				x),
			cr: $elm$core$Maybe$Just(
				A4($author$project$View$Plot$Dot$square, memberName, color, x, y)),
			cu: x,
			cv: dotOptions.cv ? A2(
				$elm$core$Maybe$andThen,
				A2($author$project$View$Plot$Dot$flashyLine, x, y),
				hover) : $elm$core$Maybe$Nothing,
			cw: dotOptions.cw ? A2(
				$elm$core$Maybe$andThen,
				A2(
					$author$project$View$Plot$Dot$flashyTick,
					x,
					function ($) {
						return $.cu;
					}),
				hover) : $elm$core$Maybe$Nothing,
			cx: y,
			cy: dotOptions.cy ? A2(
				$elm$core$Maybe$andThen,
				A2($author$project$View$Plot$Dot$flashyLine, x, y),
				hover) : $elm$core$Maybe$Nothing,
			cz: dotOptions.cz ? A2(
				$elm$core$Maybe$andThen,
				A2(
					$author$project$View$Plot$Dot$flashyTick,
					y,
					function ($) {
						return $.cx;
					}),
				hover) : $elm$core$Maybe$Nothing
		};
	});
var $author$project$Score$maxScore = function (data) {
	return $elm$core$List$length(data);
};
var $elm_community$dict_extra$Dict$Extra$groupBy = F2(
	function (keyfn, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A3(
						$elm$core$Dict$update,
						keyfn(x),
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$map(
								$elm$core$List$cons(x)),
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(
									_List_fromArray(
										[x])),
								$elm$core$Maybe$Just)),
						acc);
				}),
			$elm$core$Dict$empty,
			list);
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Score$groupedTimes = function (data) {
	return A2(
		$elm$core$Dict$map,
		F2(
			function (_v3, list) {
				return A2(
					$elm$core$List$map,
					function (_v4) {
						var name = _v4.a;
						var _v5 = _v4.b;
						var day = _v5.a;
						var star = _v5.b;
						var time = _v5.c;
						return _Utils_Tuple2(name, time);
					},
					list);
			}),
		A2(
			$elm_community$dict_extra$Dict$Extra$groupBy,
			function (_v1) {
				var name = _v1.a;
				var _v2 = _v1.b;
				var day = _v2.a;
				var star = _v2.b;
				var time = _v2.c;
				return _Utils_Tuple2(day, star);
			},
			A2(
				$elm$core$List$concatMap,
				function (_v0) {
					var name = _v0.a;
					var times = _v0.b;
					return A2(
						$elm$core$List$map,
						$elm$core$Tuple$pair(name),
						times);
				},
				A2(
					$elm$core$List$map,
					function (member) {
						return _Utils_Tuple2(
							$author$project$View$Name$name(member),
							member.bh);
					},
					data))));
};
var $author$project$Score$score = F3(
	function (data, _v0, wantedName) {
		var day = _v0.a;
		var star = _v0.b;
		var maxSolutionPoints = $elm$core$List$length(data);
		var allSolutions = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Dict$get,
				_Utils_Tuple2(day, star),
				$author$project$Score$groupedTimes(data)));
		return A2(
			$elm$core$Maybe$map,
			function (_v3) {
				var i = _v3.a;
				var _v4 = _v3.b;
				var name = _v4.a;
				var date = _v4.b;
				return maxSolutionPoints - i;
			},
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v1) {
						var i = _v1.a;
						var _v2 = _v1.b;
						var name = _v2.a;
						var date = _v2.b;
						return _Utils_eq(name, wantedName);
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						A2(
							$elm$core$List$sortBy,
							A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm$time$Time$posixToMillis),
							allSolutions)))));
	});
var $author$project$View$Plot$Series$toXY = function (_v0) {
	var day = _v0.a;
	var star = _v0.b;
	var time = _v0.c;
	return _Utils_Tuple2(
		A2($author$project$DayStar$toFloat, day, star),
		$elm$time$Time$posixToMillis(time));
};
var $author$project$View$Plot$Series$toDataPoint = F7(
	function (zone, hover, color, member, data, dotOptions, completionTime) {
		var day = completionTime.a;
		var star = completionTime.b;
		var time = completionTime.c;
		var name = $author$project$View$Name$name(member);
		return A8(
			$author$project$View$Plot$Dot$dot,
			zone,
			dotOptions,
			hover,
			name,
			color,
			$author$project$View$Plot$Series$toXY(completionTime),
			A3(
				$author$project$Score$score,
				data,
				_Utils_Tuple2(day, star),
				name),
			$author$project$Score$maxScore(data));
	});
var $author$project$View$Plot$Series$dataPoints = F6(
	function (zone, hover, color, member, dotOptions, data) {
		return A2(
			$elm$core$List$map,
			A6($author$project$View$Plot$Series$toDataPoint, zone, hover, color, member, data, dotOptions),
			member.bh);
	});
var $NoRedInk$elm_plot_19$Plot$Linear = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$View$Plot$Series$interpolation = function (color) {
	return A2(
		$NoRedInk$elm_plot_19$Plot$Linear,
		$elm$core$Maybe$Nothing,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke(color)
			]));
};
var $NoRedInk$elm_plot_19$Plot$SometimesYouDoNotHaveAnAxis = {$: 1};
var $NoRedInk$elm_plot_19$Plot$sometimesYouDoNotHaveAnAxis = $NoRedInk$elm_plot_19$Plot$SometimesYouDoNotHaveAnAxis;
var $author$project$View$Date$format = F2(
	function (zone, posix) {
		var _v0 = A2($author$project$View$Date$parseDate, zone, posix);
		var day = _v0.U;
		var hour = _v0.X;
		var minute = _v0.Z;
		return 'Dec ' + (day + (', ' + (hour + (':' + minute))));
	});
var $author$project$View$Plot$Axis$verticalAxis = F4(
	function (zone, showOnlyOneOnHover, hover, maxDate) {
		return A6(
			$author$project$View$Plot$Axis$axis,
			showOnlyOneOnHover,
			hover,
			_Utils_Tuple2($author$project$Day$startOfAoC, maxDate),
			function ($) {
				return $.cx;
			},
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Basics$round,
				A2(
					$elm$core$Basics$composeR,
					$elm$time$Time$millisToPosix,
					$author$project$View$Date$format(zone))),
			$elm$core$Basics$always(
				A3($author$project$Day$findTicks, $author$project$Day$startOfAoC, maxDate, 2 * $author$project$Day$day)));
	});
var $author$project$View$Plot$Series$series = F6(
	function (model, data, dotOptions, hasAxis, color, member) {
		return {
			bb: hasAxis ? A4(
				$author$project$View$Plot$Axis$verticalAxis,
				model.cA,
				dotOptions.cz,
				model.bF,
				$author$project$View$Date$max(data)) : $NoRedInk$elm_plot_19$Plot$sometimesYouDoNotHaveAnAxis,
			bK: $author$project$View$Plot$Series$interpolation(color),
			ch: A5($author$project$View$Plot$Series$dataPoints, model.cA, model.bF, color, member, dotOptions)
		};
	});
var $author$project$View$Plot$Type$AllInOne$seriesList = F2(
	function (model, data) {
		return A4(
			$elm$core$List$map3,
			A3($author$project$View$Plot$Series$series, model, data, $author$project$View$Plot$Type$AllInOne$dotOptions),
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (i, _v0) {
						return !i;
					}),
				data),
			$author$project$Colors$colorsList(
				$elm$core$List$length(data)),
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bP;
					},
					$elm$core$Basics$negate),
				data));
	});
var $NoRedInk$elm_plot_19$Plot$addNiceReachForArea = F2(
	function (area_, summary) {
		var y = summary.cx;
		var x = summary.cu;
		if (area_.$ === 1) {
			return summary;
		} else {
			return _Utils_update(
				summary,
				{
					cu: x,
					cx: _Utils_update(
						y,
						{
							J: y.J,
							x: A2($elm$core$Basics$min, y.x, 0)
						})
				});
		}
	});
var $NoRedInk$elm_plot_19$Plot$addNiceReachForSeries = function (series) {
	var _v0 = series.bK;
	switch (_v0.$) {
		case 0:
			return $elm$core$Basics$identity;
		case 1:
			var fill = _v0.a;
			return $NoRedInk$elm_plot_19$Plot$addNiceReachForArea(fill);
		default:
			var fill = _v0.a;
			return $NoRedInk$elm_plot_19$Plot$addNiceReachForArea(fill);
	}
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					'offsetParent',
					$elm$json$Json$Decode$null(x)),
					A2($elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollLeft = A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollTop = A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				var x_ = _v0.a;
				var y_ = _v0.b;
				return A2(
					$debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2($debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				$elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				$debois$elm_dom$DOM$scrollLeft,
				$debois$elm_dom$DOM$scrollTop,
				$debois$elm_dom$DOM$offsetLeft,
				$debois$elm_dom$DOM$offsetTop));
	});
var $debois$elm_dom$DOM$boundingClientRect = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (_v0, width, height) {
			var x = _v0.a;
			var y = _v0.b;
			return {bz: height, bO: x, cm: y, P: width};
		}),
	A2($debois$elm_dom$DOM$position, 0, 0),
	$debois$elm_dom$DOM$offsetWidth,
	$debois$elm_dom$DOM$offsetHeight);
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(0));
};
var $debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
function $NoRedInk$elm_plot_19$Plot$cyclic$plotPosition() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$debois$elm_dom$DOM$boundingClientRect,
				$elm$json$Json$Decode$lazy(
				function (_v0) {
					return $debois$elm_dom$DOM$parentElement(
						$NoRedInk$elm_plot_19$Plot$cyclic$plotPosition());
				})
			]));
}
var $NoRedInk$elm_plot_19$Plot$plotPosition = $NoRedInk$elm_plot_19$Plot$cyclic$plotPosition();
$NoRedInk$elm_plot_19$Plot$cyclic$plotPosition = function () {
	return $NoRedInk$elm_plot_19$Plot$plotPosition;
};
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $NoRedInk$elm_plot_19$Plot$diff = F2(
	function (a, b) {
		return $elm$core$Basics$abs(a - b);
	});
var $NoRedInk$elm_plot_19$Plot$toNearestX = F2(
	function (summary, exactX) {
		var updateIfCloser = F2(
			function (closest, x) {
				return (_Utils_cmp(
					A2($NoRedInk$elm_plot_19$Plot$diff, x, exactX),
					A2($NoRedInk$elm_plot_19$Plot$diff, closest, exactX)) > 0) ? closest : x;
			});
		var _default = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$head(summary.cu.a7));
		return A3($elm$core$List$foldl, updateIfCloser, _default, summary.cu.a7);
	});
var $NoRedInk$elm_plot_19$Internal$Draw$unScaleValue = F2(
	function (axis, v) {
		return (v * $NoRedInk$elm_plot_19$Internal$Draw$range(axis)) / $NoRedInk$elm_plot_19$Internal$Draw$length(axis);
	});
var $NoRedInk$elm_plot_19$Internal$Draw$toUnSVGX = F2(
	function (_v0, value) {
		var x = _v0.cu;
		return A2($NoRedInk$elm_plot_19$Internal$Draw$unScaleValue, x, value - x.E) + x.x;
	});
var $NoRedInk$elm_plot_19$Internal$Draw$toUnSVGY = F2(
	function (_v0, value) {
		var y = _v0.cx;
		return ($NoRedInk$elm_plot_19$Internal$Draw$range(y) - A2($NoRedInk$elm_plot_19$Internal$Draw$unScaleValue, y, value - y.E)) + y.x;
	});
var $NoRedInk$elm_plot_19$Plot$unScalePoint = F4(
	function (summary, mouseX, mouseY, _v0) {
		var left = _v0.bO;
		var top = _v0.cm;
		var width = _v0.P;
		var height = _v0.bz;
		return $elm$core$Maybe$Just(
			{
				cu: A2(
					$NoRedInk$elm_plot_19$Plot$toNearestX,
					summary,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toUnSVGX, summary, (summary.cu.az * (mouseX - left)) / width)),
				cx: A3(
					$elm$core$Basics$clamp,
					summary.cx.x,
					summary.cx.J,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toUnSVGY, summary, (summary.cx.az * (mouseY - top)) / height))
			});
	});
var $NoRedInk$elm_plot_19$Plot$handleHint = F2(
	function (summary, toMsg) {
		return A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, r) {
					return toMsg(
						A4($NoRedInk$elm_plot_19$Plot$unScalePoint, summary, x, y, r));
				}),
			A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float),
			$debois$elm_dom$DOM$target($NoRedInk$elm_plot_19$Plot$plotPosition));
	});
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $NoRedInk$elm_plot_19$Plot$containerAttributes = F2(
	function (customizations, summary) {
		var styles = A2(
			$elm$core$List$map,
			function (_v1) {
				var p = _v1.a;
				var v = _v1.b;
				return A2($elm$html$Html$Attributes$style, p, v);
			},
			_List_fromArray(
				[
					_Utils_Tuple2('position', 'relative'),
					_Utils_Tuple2('margin', '0 auto')
				]));
		var _v0 = customizations.bW;
		if (!_v0.$) {
			var toMsg = _v0.a;
			return _Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Events$on,
						'mousemove',
						A2($NoRedInk$elm_plot_19$Plot$handleHint, summary, toMsg)),
						$elm$html$Html$Events$onMouseLeave(
						toMsg($elm$core$Maybe$Nothing)),
						$elm$svg$Svg$Attributes$id(customizations.bG)
					]),
				styles);
		} else {
			return _Utils_ap(
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$id(customizations.bG)
					]),
				styles);
		}
	});
var $elm$svg$Svg$clipPath = $elm$svg$Svg$trustedNode('clipPath');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $NoRedInk$elm_plot_19$Plot$toClipPathId = function (_v0) {
	var id = _v0.bG;
	return 'elm-plot__clip-path__' + id;
};
var $NoRedInk$elm_plot_19$Plot$defineClipPath = F2(
	function (customizations, summary) {
		return A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			A2(
				$elm$core$List$cons,
				A2(
					$elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id(
							$NoRedInk$elm_plot_19$Plot$toClipPathId(customizations))
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$rect,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$x(
									$elm$core$String$fromFloat(summary.cu.E)),
									$elm$svg$Svg$Attributes$y(
									$elm$core$String$fromFloat(summary.cx.E)),
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(
										$NoRedInk$elm_plot_19$Internal$Draw$length(summary.cu))),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(
										$NoRedInk$elm_plot_19$Internal$Draw$length(summary.cx)))
								]),
							_List_Nil)
						])),
				customizations.W));
	});
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $NoRedInk$elm_plot_19$Plot$innerAttributes = function (customizations) {
	return _Utils_ap(
		customizations.ba,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox(
				'0 0 ' + ($elm$core$String$fromInt(customizations.P) + (' ' + $elm$core$String$fromInt(customizations.bz))))
			]));
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $NoRedInk$elm_plot_19$Plot$defaultPlotSummary = {
	cu: {a7: _List_Nil, J: 1.0, x: 0.0},
	cx: {a7: _List_Nil, J: 1.0, x: 0.0}
};
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $NoRedInk$elm_plot_19$Plot$toPlotSummary = F3(
	function (customizations, toNiceReach, points_) {
		var foldAxis = F2(
			function (summary, v) {
				return {
					a7: A2($elm$core$List$cons, v, summary.a7),
					J: A2($elm$core$Basics$max, summary.J, v),
					x: A2($elm$core$Basics$min, summary.x, v)
				};
			});
		var foldPlot = F2(
			function (_v1, result) {
				var x = _v1.cu;
				var y = _v1.cx;
				if (result.$ === 1) {
					return $elm$core$Maybe$Just(
						{
							cu: {
								a7: _List_fromArray(
									[x]),
								J: x,
								x: x
							},
							cx: {
								a7: _List_fromArray(
									[y]),
								J: y,
								x: y
							}
						});
				} else {
					var summary = result.a;
					return $elm$core$Maybe$Just(
						{
							cu: A2(foldAxis, summary.cu, x),
							cx: A2(foldAxis, summary.cx, y)
						});
				}
			});
		var plotSummary = toNiceReach(
			A2(
				$elm$core$Maybe$withDefault,
				$NoRedInk$elm_plot_19$Plot$defaultPlotSummary,
				A3($elm$core$List$foldl, foldPlot, $elm$core$Maybe$Nothing, points_)));
		return {
			cu: {
				a7: $elm$core$List$sort(plotSummary.cu.a7),
				bn: plotSummary.cu.J,
				bo: plotSummary.cu.x,
				az: customizations.P,
				E: customizations.bQ.bO,
				aA: customizations.bQ.b3,
				J: customizations.ck(plotSummary.cu.J),
				x: customizations.cl(plotSummary.cu.x)
			},
			cx: {
				a7: plotSummary.cx.a7,
				bn: plotSummary.cx.J,
				bo: plotSummary.cx.x,
				az: customizations.bz,
				E: customizations.bQ.cm,
				aA: customizations.bQ.be,
				J: customizations.ci(plotSummary.cx.J),
				x: customizations.cj(plotSummary.cx.x)
			}
		};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$toSVGY = F2(
	function (_v0, value) {
		var y = _v0.cx;
		return A2($NoRedInk$elm_plot_19$Internal$Draw$scaleValue, y, y.J - value) + y.E;
	});
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $NoRedInk$elm_plot_19$Internal$Draw$place = F4(
	function (plot, _v0, offsetX, offsetY) {
		var x = _v0.cu;
		var y = _v0.cx;
		return $elm$svg$Svg$Attributes$transform(
			'translate(' + ($elm$core$String$fromFloat(
				A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x) + offsetX) + (',' + ($elm$core$String$fromFloat(
				A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y) + offsetY) + ')'))));
	});
var $NoRedInk$elm_plot_19$Plot$viewDataPoint = F2(
	function (plotSummary, _v0) {
		var x = _v0.cu;
		var y = _v0.cx;
		var view = _v0.cr;
		if (view.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var svgView = view.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							A4(
							$NoRedInk$elm_plot_19$Internal$Draw$place,
							plotSummary,
							{cu: x, cx: y},
							0,
							0)
						]),
					_List_fromArray(
						[svgView])));
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewDataPoints = F2(
	function (plotSummary, dataPoints) {
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__series__points')
				]),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				A2(
					$elm$core$List$map,
					$NoRedInk$elm_plot_19$Plot$viewDataPoint(plotSummary),
					dataPoints)));
	});
var $NoRedInk$elm_plot_19$Internal$Draw$Move = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$lineBegin = F2(
	function (plot, points) {
		if (points.b) {
			var x = points.a.cu;
			var y = points.a.cx;
			var rest = points.b;
			return _List_fromArray(
				[
					A2($NoRedInk$elm_plot_19$Internal$Draw$Move, x, y)
				]);
		} else {
			return _List_Nil;
		}
	});
var $NoRedInk$elm_plot_19$Internal$Draw$Line = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$lineCommand = function (_v0) {
	var x = _v0.cu;
	var y = _v0.cx;
	return A2($NoRedInk$elm_plot_19$Internal$Draw$Line, x, y);
};
var $NoRedInk$elm_plot_19$Internal$Draw$Arc = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 8, a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$Close = {$: 9};
var $NoRedInk$elm_plot_19$Internal$Draw$CubicBeziers = F6(
	function (a, b, c, d, e, f) {
		return {$: 4, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$CubicBeziersShort = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$HorizontalLine = function (a) {
	return {$: 2, a: a};
};
var $NoRedInk$elm_plot_19$Internal$Draw$QuadraticBeziers = F4(
	function (a, b, c, d) {
		return {$: 6, a: a, b: b, c: c, d: d};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$QuadraticBeziersShort = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$VerticalLine = function (a) {
	return {$: 3, a: a};
};
var $NoRedInk$elm_plot_19$Internal$Draw$translateCommand = F2(
	function (plot, command) {
		switch (command.$) {
			case 0:
				var x = command.a;
				var y = command.b;
				return A2(
					$NoRedInk$elm_plot_19$Internal$Draw$Move,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 1:
				var x = command.a;
				var y = command.b;
				return A2(
					$NoRedInk$elm_plot_19$Internal$Draw$Line,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 2:
				var x = command.a;
				return $NoRedInk$elm_plot_19$Internal$Draw$HorizontalLine(
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x));
			case 3:
				var y = command.a;
				return $NoRedInk$elm_plot_19$Internal$Draw$VerticalLine(
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 4:
				var cx1 = command.a;
				var cy1 = command.b;
				var cx2 = command.c;
				var cy2 = command.d;
				var x = command.e;
				var y = command.f;
				return A6(
					$NoRedInk$elm_plot_19$Internal$Draw$CubicBeziers,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, cx1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, cy1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, cx2),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, cy2),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 5:
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$NoRedInk$elm_plot_19$Internal$Draw$CubicBeziersShort,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, cx1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, cy1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 6:
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$NoRedInk$elm_plot_19$Internal$Draw$QuadraticBeziers,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, cx1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, cy1),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 7:
				var x = command.a;
				var y = command.b;
				return A2(
					$NoRedInk$elm_plot_19$Internal$Draw$QuadraticBeziersShort,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			case 8:
				var rx = command.a;
				var ry = command.b;
				var xAxisRotation = command.c;
				var largeArcFlag = command.d;
				var sweepFlag = command.e;
				var x = command.f;
				var y = command.g;
				return A7(
					$NoRedInk$elm_plot_19$Internal$Draw$Arc,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, rx),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, ry),
					xAxisRotation,
					largeArcFlag,
					sweepFlag,
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGX, plot, x),
					A2($NoRedInk$elm_plot_19$Internal$Draw$toSVGY, plot, y));
			default:
				return $NoRedInk$elm_plot_19$Internal$Draw$Close;
		}
	});
var $NoRedInk$elm_plot_19$Internal$Draw$linear = F2(
	function (plot, points) {
		return A2(
			$elm$core$List$map,
			$NoRedInk$elm_plot_19$Internal$Draw$translateCommand(plot),
			_Utils_ap(
				A2($NoRedInk$elm_plot_19$Internal$Draw$lineBegin, plot, points),
				A2($elm$core$List$map, $NoRedInk$elm_plot_19$Internal$Draw$lineCommand, points)));
	});
var $NoRedInk$elm_plot_19$Internal$Draw$yClosestToZero = function (_v0) {
	var y = _v0.cx;
	return A3($elm$core$Basics$clamp, y.x, y.J, 0);
};
var $NoRedInk$elm_plot_19$Internal$Draw$areaBegin = F2(
	function (plot, points) {
		if (points.b) {
			var x = points.a.cu;
			var y = points.a.cx;
			var rest = points.b;
			return _List_fromArray(
				[
					A2(
					$NoRedInk$elm_plot_19$Internal$Draw$Move,
					x,
					$NoRedInk$elm_plot_19$Internal$Draw$yClosestToZero(plot)),
					A2($NoRedInk$elm_plot_19$Internal$Draw$Line, x, y)
				]);
		} else {
			return _List_Nil;
		}
	});
var $NoRedInk$elm_plot_19$Internal$Draw$areaEnd = F2(
	function (plot, points) {
		var _v0 = $elm$core$List$head(
			$elm$core$List$reverse(points));
		if (!_v0.$) {
			var x = _v0.a.cu;
			var y = _v0.a.cx;
			return _List_fromArray(
				[
					A2(
					$NoRedInk$elm_plot_19$Internal$Draw$Line,
					x,
					$NoRedInk$elm_plot_19$Internal$Draw$yClosestToZero(plot))
				]);
		} else {
			return _List_Nil;
		}
	});
var $NoRedInk$elm_plot_19$Internal$Draw$linearArea = F2(
	function (plot, points) {
		return A2(
			$elm$core$List$map,
			$NoRedInk$elm_plot_19$Internal$Draw$translateCommand(plot),
			_Utils_ap(
				A2($NoRedInk$elm_plot_19$Internal$Draw$areaBegin, plot, points),
				_Utils_ap(
					A2($elm$core$List$map, $NoRedInk$elm_plot_19$Internal$Draw$lineCommand, points),
					A2($NoRedInk$elm_plot_19$Internal$Draw$areaEnd, plot, points))));
	});
var $NoRedInk$elm_plot_19$Internal$Draw$monotoneXCurve = F4(
	function (point0, point1, tangent0, tangent1) {
		var dx = (point1.cu - point0.cu) / 3;
		return _List_fromArray(
			[
				A6($NoRedInk$elm_plot_19$Internal$Draw$CubicBeziers, point0.cu + dx, point0.cx + (dx * tangent0), point1.cu - dx, point1.cx - (dx * tangent1), point1.cu, point1.cx)
			]);
	});
var $NoRedInk$elm_plot_19$Internal$Draw$sign = function (x) {
	return (x < 0) ? (-1) : 1;
};
var $NoRedInk$elm_plot_19$Internal$Draw$toH = F2(
	function (h0, h1) {
		return (!h0) ? ((h1 < 0) ? (0 * (-1)) : h1) : h0;
	});
var $NoRedInk$elm_plot_19$Internal$Draw$slope3 = F3(
	function (point0, point1, point2) {
		var h1 = point2.cu - point1.cu;
		var h0 = point1.cu - point0.cu;
		var s0h = A2($NoRedInk$elm_plot_19$Internal$Draw$toH, h0, h1);
		var s0 = (point1.cx - point0.cx) / s0h;
		var s1h = A2($NoRedInk$elm_plot_19$Internal$Draw$toH, h1, h0);
		var s1 = (point2.cx - point1.cx) / s1h;
		var p = ((s0 * h1) + (s1 * h0)) / (h0 + h1);
		var slope = ($NoRedInk$elm_plot_19$Internal$Draw$sign(s0) + $NoRedInk$elm_plot_19$Internal$Draw$sign(s1)) * A2(
			$elm$core$Basics$min,
			A2(
				$elm$core$Basics$min,
				$elm$core$Basics$abs(s0),
				$elm$core$Basics$abs(s1)),
			0.5 * $elm$core$Basics$abs(p));
		return $elm$core$Basics$isNaN(slope) ? 0 : slope;
	});
var $NoRedInk$elm_plot_19$Internal$Draw$monotoneXNext = F3(
	function (points, tangent0, commands) {
		monotoneXNext:
		while (true) {
			if (points.b && points.b.b) {
				if (points.b.b.b) {
					var p0 = points.a;
					var _v1 = points.b;
					var p1 = _v1.a;
					var _v2 = _v1.b;
					var p2 = _v2.a;
					var rest = _v2.b;
					var tangent1 = A3($NoRedInk$elm_plot_19$Internal$Draw$slope3, p0, p1, p2);
					var nextCommands = _Utils_ap(
						commands,
						A4($NoRedInk$elm_plot_19$Internal$Draw$monotoneXCurve, p0, p1, tangent0, tangent1));
					var $temp$points = A2(
						$elm$core$List$cons,
						p1,
						A2($elm$core$List$cons, p2, rest)),
						$temp$tangent0 = tangent1,
						$temp$commands = nextCommands;
					points = $temp$points;
					tangent0 = $temp$tangent0;
					commands = $temp$commands;
					continue monotoneXNext;
				} else {
					var p1 = points.a;
					var _v3 = points.b;
					var p2 = _v3.a;
					var tangent1 = A3($NoRedInk$elm_plot_19$Internal$Draw$slope3, p1, p2, p2);
					return _Utils_ap(
						commands,
						A4($NoRedInk$elm_plot_19$Internal$Draw$monotoneXCurve, p1, p2, tangent0, tangent1));
				}
			} else {
				return commands;
			}
		}
	});
var $NoRedInk$elm_plot_19$Internal$Draw$slope2 = F3(
	function (point0, point1, t) {
		var h = point1.cu - point0.cu;
		return (!(!h)) ? ((((3 * (point1.cx - point0.cx)) / h) - t) / 2) : t;
	});
var $NoRedInk$elm_plot_19$Internal$Draw$monotoneXBegin = function (points) {
	if ((points.b && points.b.b) && points.b.b.b) {
		var p0 = points.a;
		var _v1 = points.b;
		var p1 = _v1.a;
		var _v2 = _v1.b;
		var p2 = _v2.a;
		var rest = _v2.b;
		var tangent1 = A3($NoRedInk$elm_plot_19$Internal$Draw$slope3, p0, p1, p2);
		var tangent0 = A3($NoRedInk$elm_plot_19$Internal$Draw$slope2, p0, p1, tangent1);
		return _Utils_ap(
			A4($NoRedInk$elm_plot_19$Internal$Draw$monotoneXCurve, p0, p1, tangent0, tangent1),
			A3(
				$NoRedInk$elm_plot_19$Internal$Draw$monotoneXNext,
				A2(
					$elm$core$List$cons,
					p1,
					A2($elm$core$List$cons, p2, rest)),
				tangent1,
				_List_Nil));
	} else {
		return _List_Nil;
	}
};
var $NoRedInk$elm_plot_19$Internal$Draw$monotoneX = F2(
	function (plot, points) {
		return A2(
			$elm$core$List$map,
			$NoRedInk$elm_plot_19$Internal$Draw$translateCommand(plot),
			_Utils_ap(
				A2($NoRedInk$elm_plot_19$Internal$Draw$lineBegin, plot, points),
				$NoRedInk$elm_plot_19$Internal$Draw$monotoneXBegin(points)));
	});
var $NoRedInk$elm_plot_19$Internal$Draw$monotoneXArea = F2(
	function (plot, points) {
		return A2(
			$elm$core$List$map,
			$NoRedInk$elm_plot_19$Internal$Draw$translateCommand(plot),
			_Utils_ap(
				A2($NoRedInk$elm_plot_19$Internal$Draw$areaBegin, plot, points),
				_Utils_ap(
					$NoRedInk$elm_plot_19$Internal$Draw$monotoneXBegin(points),
					A2($NoRedInk$elm_plot_19$Internal$Draw$areaEnd, plot, points))));
	});
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $NoRedInk$elm_plot_19$Internal$Draw$joinCommands = function (commands) {
	return A2($elm$core$String$join, ' ', commands);
};
var $NoRedInk$elm_plot_19$Internal$Draw$Point = F2(
	function (x, y) {
		return {cu: x, cx: y};
	});
var $NoRedInk$elm_plot_19$Internal$Draw$boolToIntString = function (bool) {
	return bool ? '0' : '1';
};
var $NoRedInk$elm_plot_19$Internal$Draw$boolToString = function (bool) {
	return bool ? 'True' : 'False';
};
var $NoRedInk$elm_plot_19$Internal$Draw$pointToString = function (_v0) {
	var x = _v0.cu;
	var y = _v0.cx;
	return $elm$core$String$fromFloat(x) + (' ' + $elm$core$String$fromFloat(y));
};
var $NoRedInk$elm_plot_19$Internal$Draw$pointsToString = function (points) {
	return A2(
		$elm$core$String$join,
		',',
		A2($elm$core$List$map, $NoRedInk$elm_plot_19$Internal$Draw$pointToString, points));
};
var $NoRedInk$elm_plot_19$Internal$Draw$stringifyCommand = function (command) {
	switch (command.$) {
		case 0:
			var x = command.a;
			var y = command.b;
			return 'M' + $NoRedInk$elm_plot_19$Internal$Draw$pointToString(
				A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y));
		case 1:
			var x = command.a;
			var y = command.b;
			return 'L' + $NoRedInk$elm_plot_19$Internal$Draw$pointToString(
				A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y));
		case 2:
			var x = command.a;
			return 'H' + $elm$core$String$fromFloat(x);
		case 3:
			var y = command.a;
			return 'V' + $elm$core$String$fromFloat(y);
		case 4:
			var cx1 = command.a;
			var cy1 = command.b;
			var cx2 = command.c;
			var cy2 = command.d;
			var x = command.e;
			var y = command.f;
			return 'C' + $NoRedInk$elm_plot_19$Internal$Draw$pointsToString(
				_List_fromArray(
					[
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, cx1, cy1),
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, cx2, cy2),
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y)
					]));
		case 5:
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $NoRedInk$elm_plot_19$Internal$Draw$pointsToString(
				_List_fromArray(
					[
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, cx1, cy1),
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y)
					]));
		case 6:
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $NoRedInk$elm_plot_19$Internal$Draw$pointsToString(
				_List_fromArray(
					[
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, cx1, cy1),
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y)
					]));
		case 7:
			var x = command.a;
			var y = command.b;
			return 'T' + $NoRedInk$elm_plot_19$Internal$Draw$pointToString(
				A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y));
		case 8:
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var x = command.f;
			var y = command.g;
			return 'A' + $NoRedInk$elm_plot_19$Internal$Draw$joinCommands(
				_List_fromArray(
					[
						$NoRedInk$elm_plot_19$Internal$Draw$pointToString(
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, rx, ry)),
						$NoRedInk$elm_plot_19$Internal$Draw$boolToString(xAxisRotation),
						$NoRedInk$elm_plot_19$Internal$Draw$boolToIntString(largeArcFlag),
						$NoRedInk$elm_plot_19$Internal$Draw$boolToIntString(sweepFlag),
						$NoRedInk$elm_plot_19$Internal$Draw$pointToString(
						A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y))
					]));
		default:
			return 'Z';
	}
};
var $NoRedInk$elm_plot_19$Internal$Draw$draw = F2(
	function (attributes, commands) {
		return A2(
			$elm$svg$Svg$path,
			A2(
				$elm$core$List$cons,
				$elm$svg$Svg$Attributes$d(
					$NoRedInk$elm_plot_19$Internal$Draw$joinCommands(
						A2($elm$core$List$map, $NoRedInk$elm_plot_19$Internal$Draw$stringifyCommand, commands))),
				attributes),
			_List_Nil);
	});
var $NoRedInk$elm_plot_19$Internal$Colors$pinkStroke = '#ff9edf';
var $NoRedInk$elm_plot_19$Plot$point = function (_v0) {
	var x = _v0.cu;
	var y = _v0.cx;
	return A2($NoRedInk$elm_plot_19$Internal$Draw$Point, x, y);
};
var $NoRedInk$elm_plot_19$Plot$points = $elm$core$List$map($NoRedInk$elm_plot_19$Plot$point);
var $NoRedInk$elm_plot_19$Internal$Colors$transparent = 'transparent';
var $NoRedInk$elm_plot_19$Plot$viewInterpolation = F7(
	function (customizations, summary, toLine, toArea, area_, attributes, dataPoints) {
		if (area_.$ === 1) {
			return A2(
				$NoRedInk$elm_plot_19$Internal$Draw$draw,
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$fill($NoRedInk$elm_plot_19$Internal$Colors$transparent),
					A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$stroke($NoRedInk$elm_plot_19$Internal$Colors$pinkStroke),
						A2(
							$elm$core$List$cons,
							$elm$svg$Svg$Attributes$class('elm-plot__series__interpolation'),
							A2(
								$elm$core$List$cons,
								$elm$svg$Svg$Attributes$clipPath(
									'url(#' + ($NoRedInk$elm_plot_19$Plot$toClipPathId(customizations) + ')')),
								attributes)))),
				A2(
					toLine,
					summary,
					$NoRedInk$elm_plot_19$Plot$points(dataPoints)));
		} else {
			var color = area_.a;
			return A2(
				$NoRedInk$elm_plot_19$Internal$Draw$draw,
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$fill(color),
					A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$stroke($NoRedInk$elm_plot_19$Internal$Colors$pinkStroke),
						A2(
							$elm$core$List$cons,
							$elm$svg$Svg$Attributes$class('elm-plot__series__interpolation'),
							A2(
								$elm$core$List$cons,
								$elm$svg$Svg$Attributes$clipPath(
									'url(#' + ($NoRedInk$elm_plot_19$Plot$toClipPathId(customizations) + ')')),
								attributes)))),
				A2(
					toArea,
					summary,
					$NoRedInk$elm_plot_19$Plot$points(dataPoints)));
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewPath = F4(
	function (customizations, plotSummary, interpolation, dataPoints) {
		switch (interpolation.$) {
			case 0:
				return A2($elm$svg$Svg$path, _List_Nil, _List_Nil);
			case 1:
				var fill = interpolation.a;
				var attributes = interpolation.b;
				return A7($NoRedInk$elm_plot_19$Plot$viewInterpolation, customizations, plotSummary, $NoRedInk$elm_plot_19$Internal$Draw$linear, $NoRedInk$elm_plot_19$Internal$Draw$linearArea, fill, attributes, dataPoints);
			default:
				var fill = interpolation.a;
				var attributes = interpolation.b;
				return A7($NoRedInk$elm_plot_19$Plot$viewInterpolation, customizations, plotSummary, $NoRedInk$elm_plot_19$Internal$Draw$monotoneX, $NoRedInk$elm_plot_19$Internal$Draw$monotoneXArea, fill, attributes, dataPoints);
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewASeries = F4(
	function (customizations, plotSummary, _v0, dataPoints) {
		var axis = _v0.bb;
		var interpolation = _v0.bK;
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__series')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A4($NoRedInk$elm_plot_19$Plot$viewPath, customizations, plotSummary, interpolation, dataPoints)),
					A2($NoRedInk$elm_plot_19$Plot$viewDataPoints, plotSummary, dataPoints)
				]));
	});
var $NoRedInk$elm_plot_19$Plot$viewActualJunk = F2(
	function (summary, _v0) {
		var x = _v0.cu;
		var y = _v0.cx;
		var view = _v0.cr;
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					A4(
					$NoRedInk$elm_plot_19$Internal$Draw$place,
					summary,
					{cu: x, cx: y},
					0,
					0)
				]),
			_List_fromArray(
				[view]));
	});
var $NoRedInk$elm_plot_19$Plot$viewAxisLine = F3(
	function (summary, at, axisLine) {
		if (!axisLine.$) {
			var attributes = axisLine.a.ba;
			var start = axisLine.a.b7;
			var end = axisLine.a.br;
			return A2(
				$NoRedInk$elm_plot_19$Internal$Draw$draw,
				attributes,
				A2(
					$NoRedInk$elm_plot_19$Internal$Draw$linear,
					summary,
					_List_fromArray(
						[
							at(start),
							at(end)
						])));
		} else {
			return $elm$svg$Svg$text('');
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewGlitterLines = F2(
	function (summary, _v0) {
		var xLine = _v0.cv;
		var yLine = _v0.cy;
		var x = _v0.cu;
		var y = _v0.cx;
		return _List_fromArray(
			[
				A3(
				$NoRedInk$elm_plot_19$Plot$viewAxisLine,
				summary,
				function (y_) {
					return {cu: x, cx: y_};
				},
				A2(
					$elm$core$Maybe$map,
					function (toLine) {
						return toLine(summary.cx);
					},
					xLine)),
				A3(
				$NoRedInk$elm_plot_19$Plot$viewAxisLine,
				summary,
				function (x_) {
					return {cu: x_, cx: y};
				},
				A2(
					$elm$core$Maybe$map,
					function (toLine) {
						return toLine(summary.cu);
					},
					yLine))
			]);
	});
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $NoRedInk$elm_plot_19$Plot$viewTickInner = F3(
	function (attributes, width, height) {
		return A2(
			$elm$svg$Svg$line,
			A2(
				$elm$core$List$cons,
				$elm$svg$Svg$Attributes$x2(
					$elm$core$String$fromFloat(width)),
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$y2(
						$elm$core$String$fromFloat(height)),
					attributes)),
			_List_Nil);
	});
var $NoRedInk$elm_plot_19$Plot$viewActualHorizontalAxis = F4(
	function (summary, _v0, glitterLabels, glitterTicks) {
		var position = _v0.b$;
		var axisLine = _v0.bc;
		var ticks = _v0.cd;
		var labels = _v0.bN;
		var flipAnchor = _v0.bu;
		var positionOfLabel = flipAnchor ? (-10) : 20;
		var lengthOfTick = function (length) {
			return flipAnchor ? (-length) : length;
		};
		var at = function (x) {
			return {
				cu: x,
				cx: A2(position, summary.cx.x, summary.cx.J)
			};
		};
		var viewLabel_ = function (labelAttr) {
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						A4(
						$NoRedInk$elm_plot_19$Internal$Draw$place,
						summary,
						at(labelAttr.b$),
						0,
						positionOfLabel),
						$elm$svg$Svg$Attributes$style('text-anchor: middle;')
					]),
				_List_fromArray(
					[labelAttr.cr]));
		};
		var viewTickLine = function (lineAttr) {
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						A4(
						$NoRedInk$elm_plot_19$Internal$Draw$place,
						summary,
						at(lineAttr.b$),
						0,
						0)
					]),
				_List_fromArray(
					[
						A3(
						$NoRedInk$elm_plot_19$Plot$viewTickInner,
						lineAttr.ba,
						0,
						lengthOfTick(lineAttr.az))
					]));
		};
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__horizontal-axis')
				]),
			_List_fromArray(
				[
					A3($NoRedInk$elm_plot_19$Plot$viewAxisLine, summary, at, axisLine),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-plot__ticks')
						]),
					A2(
						$elm$core$List$map,
						viewTickLine,
						_Utils_ap(ticks, glitterTicks))),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-plot__labels')
						]),
					A2(
						$elm$core$List$map,
						viewLabel_,
						_Utils_ap(labels, glitterLabels)))
				]));
	});
var $NoRedInk$elm_plot_19$Plot$viewHorizontalAxis = F4(
	function (summary, axis, moreLabels, moreTicks) {
		if (!axis.$) {
			var toCustomizations = axis.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A4(
						$NoRedInk$elm_plot_19$Plot$viewActualHorizontalAxis,
						summary,
						toCustomizations(summary.cu),
						moreLabels,
						moreTicks)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewActualHorizontalGrid = F2(
	function (summary, gridLines) {
		var viewGridLine = function (_v0) {
			var attributes = _v0.ba;
			var position = _v0.b$;
			return A2(
				$NoRedInk$elm_plot_19$Internal$Draw$draw,
				attributes,
				A2(
					$NoRedInk$elm_plot_19$Internal$Draw$linear,
					summary,
					_List_fromArray(
						[
							{cu: summary.cu.x, cx: position},
							{cu: summary.cu.J, cx: position}
						])));
		};
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__vertical-grid')
				]),
			A2($elm$core$List$map, viewGridLine, gridLines));
	});
var $NoRedInk$elm_plot_19$Plot$viewHorizontalGrid = F2(
	function (summary, grid) {
		if (!grid.$) {
			var toCustomizations = grid.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A2(
						$NoRedInk$elm_plot_19$Plot$viewActualHorizontalGrid,
						summary,
						toCustomizations(summary.cx))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewActualVerticalAxis = F3(
	function (summary, _v0, glitterTicks) {
		var position = _v0.b$;
		var axisLine = _v0.bc;
		var ticks = _v0.cd;
		var labels = _v0.bN;
		var flipAnchor = _v0.bu;
		var positionOfLabel = flipAnchor ? 10 : (-10);
		var lengthOfTick = function (length) {
			return flipAnchor ? length : (-length);
		};
		var at = function (y) {
			return {
				cu: A2(position, summary.cu.x, summary.cu.J),
				cx: y
			};
		};
		var viewTickLine = function (lineAttr) {
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						A4(
						$NoRedInk$elm_plot_19$Internal$Draw$place,
						summary,
						at(lineAttr.b$),
						0,
						0)
					]),
				_List_fromArray(
					[
						A3(
						$NoRedInk$elm_plot_19$Plot$viewTickInner,
						lineAttr.ba,
						lengthOfTick(lineAttr.az),
						0)
					]));
		};
		var anchorOfLabel = flipAnchor ? 'text-anchor: start;' : 'text-anchor: end;';
		var viewLabel_ = function (labelAttr) {
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						A4(
						$NoRedInk$elm_plot_19$Internal$Draw$place,
						summary,
						at(labelAttr.b$),
						positionOfLabel,
						5),
						$elm$svg$Svg$Attributes$style(anchorOfLabel)
					]),
				_List_fromArray(
					[labelAttr.cr]));
		};
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__vertical-axis')
				]),
			_List_fromArray(
				[
					A3($NoRedInk$elm_plot_19$Plot$viewAxisLine, summary, at, axisLine),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-plot__ticks')
						]),
					A2(
						$elm$core$List$map,
						viewTickLine,
						_Utils_ap(ticks, glitterTicks))),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-plot__labels')
						]),
					A2($elm$core$List$map, viewLabel_, labels))
				]));
	});
var $NoRedInk$elm_plot_19$Plot$viewVerticalAxis = F3(
	function (summary, axis, moreTicks) {
		if (!axis.$) {
			var toCustomizations = axis.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A3(
						$NoRedInk$elm_plot_19$Plot$viewActualVerticalAxis,
						summary,
						toCustomizations(summary.cx),
						moreTicks)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewActualVerticalGrid = F2(
	function (summary, gridLines) {
		var viewGridLine = function (_v0) {
			var attributes = _v0.ba;
			var position = _v0.b$;
			return A2(
				$NoRedInk$elm_plot_19$Internal$Draw$draw,
				attributes,
				A2(
					$NoRedInk$elm_plot_19$Internal$Draw$linear,
					summary,
					_List_fromArray(
						[
							{cu: position, cx: summary.cx.x},
							{cu: position, cx: summary.cx.J}
						])));
		};
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-plot__horizontal-grid')
				]),
			A2($elm$core$List$map, viewGridLine, gridLines));
	});
var $NoRedInk$elm_plot_19$Plot$viewVerticalGrid = F2(
	function (summary, grid) {
		if (!grid.$) {
			var toCustomizations = grid.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A2(
						$NoRedInk$elm_plot_19$Plot$viewActualVerticalGrid,
						summary,
						toCustomizations(summary.cu))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $NoRedInk$elm_plot_19$Plot$viewSeriesCustom = F3(
	function (customizations, series, data) {
		var dataPoints = A2(
			$elm$core$List$map,
			function (_v1) {
				var toDataPoints = _v1.ch;
				return toDataPoints(data);
			},
			series);
		var allDataPoints = $elm$core$List$concat(dataPoints);
		var addNiceReach = function (summary_) {
			return A3($elm$core$List$foldl, $NoRedInk$elm_plot_19$Plot$addNiceReachForSeries, summary_, series);
		};
		var summary = A3($NoRedInk$elm_plot_19$Plot$toPlotSummary, customizations, addNiceReach, allDataPoints);
		var viewActualSeries = $elm$core$Maybe$Just(
			A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-plot__all-series')
					]),
				A3(
					$elm$core$List$map2,
					A2($NoRedInk$elm_plot_19$Plot$viewASeries, customizations, summary),
					series,
					dataPoints)));
		var viewGlitter = $elm$core$Maybe$Just(
			A2(
				$elm$svg$Svg$map,
				$elm$core$Basics$never,
				A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-plot__glitter')
						]),
					A2(
						$elm$core$List$concatMap,
						$NoRedInk$elm_plot_19$Plot$viewGlitterLines(summary),
						allDataPoints))));
		var viewHint = function () {
			var _v0 = A2(
				$elm$core$List$filterMap,
				function ($) {
					return $.bB;
				},
				allDataPoints);
			if (!_v0.b) {
				return $elm$svg$Svg$text('');
			} else {
				var views = _v0;
				return A2(
					$elm$html$Html$map,
					$elm$core$Basics$never,
					A2(customizations.bC, summary, views));
			}
		}();
		var viewHorizontalAxes = A4(
			$NoRedInk$elm_plot_19$Plot$viewHorizontalAxis,
			summary,
			customizations.bE,
			_List_Nil,
			A2(
				$elm$core$List$filterMap,
				function ($) {
					return $.cw;
				},
				allDataPoints));
		var viewJunks = $elm$core$Maybe$Just(
			A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-plot__junk')
					]),
				A2(
					$elm$core$List$map,
					$NoRedInk$elm_plot_19$Plot$viewActualJunk(summary),
					customizations.bM(summary))));
		var viewVerticalAxes = $elm$core$Maybe$Just(
			A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-plot__vertical-axes')
					]),
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					A3(
						$elm$core$List$map2,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.bb;
							},
							$NoRedInk$elm_plot_19$Plot$viewVerticalAxis(summary)),
						series,
						A2(
							$elm$core$List$map,
							$elm$core$List$filterMap(
								function ($) {
									return $.cz;
								}),
							dataPoints)))));
		var children = A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$core$Maybe$Just(
					A2($NoRedInk$elm_plot_19$Plot$defineClipPath, customizations, summary)),
					A2($NoRedInk$elm_plot_19$Plot$viewHorizontalGrid, summary, customizations.by.bD),
					A2($NoRedInk$elm_plot_19$Plot$viewVerticalGrid, summary, customizations.by.cq),
					viewActualSeries,
					viewHorizontalAxes,
					viewVerticalAxes,
					viewGlitter,
					viewJunks
				]));
		return A2(
			$elm$html$Html$div,
			A2($NoRedInk$elm_plot_19$Plot$containerAttributes, customizations, summary),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$svg,
					$NoRedInk$elm_plot_19$Plot$innerAttributes(customizations),
					children),
					viewHint
				]));
	});
var $author$project$View$Plot$Type$AllInOne$allInOne = F2(
	function (model, data) {
		return _List_fromArray(
			[
				A3(
				$NoRedInk$elm_plot_19$Plot$viewSeriesCustom,
				A3(
					$author$project$View$Plot$PlotCustomizations$plotCustomizations,
					model,
					data,
					$author$project$View$Plot$Type$AllInOne$junk(data)),
				A2($author$project$View$Plot$Type$AllInOne$seriesList, model, data),
				data)
			]);
	});
var $author$project$View$Plot$Junk$Title$svg = function (titleString) {
	return A2(
		$NoRedInk$elm_plot_19$Plot$viewLabel,
		A2(
			$elm$core$List$cons,
			$author$project$View$Plot$Text$styles(
				_List_fromArray(
					[$author$project$View$Plot$Text$italic])),
			$author$project$View$Plot$Text$attributes),
		titleString);
};
var $author$project$View$Plot$Junk$Title$title = F2(
	function (titleString, y) {
		return A3(
			$NoRedInk$elm_plot_19$Plot$junk,
			$author$project$View$Plot$Junk$Title$svg(titleString),
			1.1,
			y + (0.3 * $author$project$Day$day));
	});
var $author$project$View$Plot$Type$OneForEachMember$junk = F3(
	function (data, member, _v0) {
		return _List_fromArray(
			[
				A2(
				$author$project$View$Plot$Junk$Title$title,
				$author$project$View$Member$description(member),
				$author$project$View$Date$max(data))
			]);
	});
var $author$project$View$Plot$Type$OneForEachMember$dotOptions = {ca: false, cv: true, cw: true, cy: true, cz: true};
var $author$project$View$Plot$Type$OneForEachMember$seriesList = F4(
	function (model, data, color, member) {
		return A2(
			$elm$core$List$map,
			A5($author$project$View$Plot$Series$series, model, data, $author$project$View$Plot$Type$OneForEachMember$dotOptions, true, color),
			A2(
				$elm$core$List$filter,
				function (m) {
					return _Utils_eq(m.bG, member.bG);
				},
				data));
	});
var $author$project$View$Plot$Type$OneForEachMember$onePlot = F4(
	function (model, data, color, member) {
		return A3(
			$NoRedInk$elm_plot_19$Plot$viewSeriesCustom,
			A3(
				$author$project$View$Plot$PlotCustomizations$plotCustomizations,
				model,
				data,
				A2($author$project$View$Plot$Type$OneForEachMember$junk, data, member)),
			A4($author$project$View$Plot$Type$OneForEachMember$seriesList, model, data, color, member),
			data);
	});
var $author$project$View$Plot$Type$OneForEachMember$oneForEachMember = F2(
	function (model, data) {
		return A3(
			$elm$core$List$map2,
			A2($author$project$View$Plot$Type$OneForEachMember$onePlot, model, data),
			$author$project$Colors$colorsList(
				$elm$core$List$length(data)),
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bP;
					},
					$elm$core$Basics$negate),
				data));
	});
var $author$project$View$Plot$plotView = F2(
	function (model, data) {
		var _v0 = model.b_;
		if (_v0 === 1) {
			return A2($author$project$View$Plot$Type$AllInOne$allInOne, model, data);
		} else {
			return A2($author$project$View$Plot$Type$OneForEachMember$oneForEachMember, model, data);
		}
	});
var $author$project$View$Plot$httpErrorToString = function (err) {
	switch (err.$) {
		case 1:
			return 'Timeout exceeded';
		case 2:
			return 'Network error';
		case 3:
			var code = err.a;
			return 'Bad status: ' + $elm$core$String$fromInt(code);
		case 4:
			var e = err.a;
			return 'Bad body: ' + e;
		default:
			var url = err.a;
			return 'Bad URL: ' + url;
	}
};
var $author$project$View$Plot$viewFailure = function (err) {
	return $elm$html$Html$text(
		'Error: ' + $author$project$View$Plot$httpErrorToString(err));
};
var $author$project$View$Plot$viewLoading = $elm$html$Html$text('Loading from the AoC site...');
var $author$project$View$Plot$plot = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		function () {
			var _v0 = model.bm;
			switch (_v0.$) {
				case 0:
					return $author$project$Example$shouldShow(model) ? A2(
						$author$project$View$Plot$plotView,
						_Utils_update(
							model,
							{
								bm: $krisajenkins$remotedata$RemoteData$Success($author$project$Example$data)
							}),
						$author$project$Example$data) : _List_fromArray(
						[
							$elm$html$Html$text('')
						]);
				case 1:
					return _List_fromArray(
						[$author$project$View$Plot$viewLoading]);
				case 2:
					var err = _v0.a;
					return _List_fromArray(
						[
							$author$project$View$Plot$viewFailure(err)
						]);
				default:
					var realData = _v0.a;
					return A2($author$project$View$Plot$plotView, model, realData);
			}
		}());
};
var $author$project$View$view = function (model) {
	return {
		bd: _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$author$project$View$heading,
								$author$project$View$form(model)
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$author$project$View$exampleWarning(model),
								$author$project$View$Plot$plot(model)
							]))
					]))
			]),
		cg: 'AoC Leaderboard Viewer'
	};
};
var $author$project$Main$main = $elm$browser$Browser$document(
	{bJ: $author$project$Update$init, cc: $author$project$Update$subscriptions, co: $author$project$Update$update, cr: $author$project$View$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (snapshot) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (currentTime) {
					return $elm$json$Json$Decode$succeed(
						{bk: currentTime, b5: snapshot});
				},
				A2($elm$json$Json$Decode$field, 'currentTime', $elm$json$Json$Decode$int));
		},
		A2(
			$elm$json$Json$Decode$field,
			'snapshot',
			$elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
						A2(
						$elm$json$Json$Decode$map,
						$elm$core$Maybe$Just,
						A2(
							$elm$json$Json$Decode$andThen,
							function (url) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (plot) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (cookie) {
												return $elm$json$Json$Decode$succeed(
													{bj: cookie, b_: plot, cp: url});
											},
											A2($elm$json$Json$Decode$field, 'cookie', $elm$json$Json$Decode$string));
									},
									A2($elm$json$Json$Decode$field, 'plot', $elm$json$Json$Decode$string));
							},
							A2($elm$json$Json$Decode$field, 'url', $elm$json$Json$Decode$string)))
					])))))(0)}});}(this));