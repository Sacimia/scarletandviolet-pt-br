/*!
*jQuery Java Biblioteca v1.10
*http://jquery.com/
*
*Inclui Sizzle.js
*http://sizzle.js.com/
*
*http://jquery.org/license
*
*/

const { ready } = require("jquery");

(function( window, undefined){

// Não pode fazer isso por causa de vários apps incluindo ASP.NET  
//s
//
//Support: Firefox +18
//"use strict";
var 
       //
       readyList,

       //Uma referencia central paraa o root Jquery(documento)
       rootjQuery, 

       //Support: IE<10
       // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
       core_strundefined = typeof undefined, 

       //Usa o documento correto de acordo com window argument (sandbox)
       location =  window.location, 
       document = window.document,
       docElem = document.documentElement, 

       //
       _jQuery = window._jQuery, 
       
       //
       _$ = window.$, 

       //
       class2type = {},

       //Lista de dados do cahe ids deletados, nós podemos reusar eles,
       core_deletedIds= [], 

       core_version = "1.10.1",

       //Sava uma referencia para alguns metodos de core
       core_concat = core_deletedIds.concat,
	   core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	   core_indexOf = core_deletedIds.indexOf,
	   core_toString = class2type.toString,
	   core_hasOwn = class2type.hasOwnProperty,
	   core_trim = core_version.trim,

       //Defina um local para copia do JQUERY
       jQuery = function(selector , context){
           return new jQuery.fn.init(selector, context, rootjQuery);
       }, 

       //Usou para encontros de numeros
       core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        
       //Usou para
       core_rnotwhite = /\S+/g, 

       //Safari 5 e IE 
       rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

       //Simples para Strings Html 
       rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

       //Encontro de uma tag standalone 
       rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, 

       //JSON RegExp
       rvalidchars = /^[\],:{}\s]*$/,
	   rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	   rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	   rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
       
       
       //string 
       rmsPrefix = /^-ms-/,
       rdashAlpha = /-([\da-z])/gi,

       //Usado pelo jquery 
       fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},
       
       completed = function(event){
           // readyState ===="complete" é bom  para nós chamar o fom pronto
           if ( document.addEventListener || event.type === "load" || document.readyState === "complete"){
               detach();
               jQuery.ready();
           }
       }, 
       //Limpa metodo para eventos prontos dom
       detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};
    
    jQuery.fn = jQuery.prototype = {
        //Versao de jquery sendo usada
        jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;
        
        
        if(!selector ){
            ready.this;
        }

        //HTML STRINGS 
        if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

            ///faz certeza sem contexto especificado para #id
            if ( match && (match[1] || !context) ) {
            }// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

                    jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

                    // HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Propriedades de contexto sao chamados como metodos se possivel
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );
                            }else{
                                this.attr( match, context[ match ] );
                             } 
                        }
                    }
                    return this;
            }else{
                // HANDLE: $(#id)
                elem = document.getElementById( match[2] );
                if ( elem && elem.parentNode ) {
                    if(element.id !== match[2]){
                        return rootjQuery.find(selector);
                    }
                    
                    //
                    this.length = 1;
                    this[0] = elem;
                }
                
                this.content = document;
                this.selector = selector;
                return this;
            }
//HANDLE: $(expr, $(...))
        }else if(!context || context,jquery ){
            return(context || rootjQuery).find(selector);
           
            // HANDLE: $(expr, context)
        }else{
            return this.constructor(context).find(selector);
        }

        // HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

    
    }}}}})
