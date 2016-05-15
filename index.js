module.exports = function (innehåll) {
  [
    [/detta|denna/g, 'this'],                                  // this
    [/klass\s+/g, 'class '],                                   // class
    [/\s+utökar\s+/g, ' extends '],                            // extends
    [/byggherre(\s+|\()/g, 'constructor$1'],                   // constructor
    [/toppen\s*\(/g, 'super('],                                // super
    [/statisk(\s+|\()/g, 'static$1'],                          // static
    [/importera\s+/g, 'import '],                              // import
    [/exportera\s+/g, 'export '],                              // export
    [/fönster\.\s*\(/g, 'window.'],                            // window
    [/utropa\s*\(/g, 'alert('],                                // alert
    [/kontrollpanel\.logga\s*\(/g, 'console.log('],            // console.log
    [/kontrollpanel\.varna\s*\(/g, 'console.warn('],           // console.warn
    [/kontrollpanel\.fela\s*\(/g, 'console.error('],           // console.error
    [/kontrollpanel\./g, 'console.'],                          // console
    [/försök(\s+|\s*{)/g, 'try$1'],                            // try
    [/fånga\s*\(/g, 'catch('],                                 // catch
    [/knasigt\s*\(/g, 'catch('],                               // catch
    [/slutligen(\s+|\{)/g, 'finally$1'],                       // finally
    [/variabel?\s+/g, 'var '],                                 // var
    [/låt\s+/g, 'let '],                                       // let
    [/konstant?\s+/g, 'const '],                               // const
    [/för(\s*\()/g, 'for ('],                                  // for
    [/\s+av\s+/g, ' of '],                                     // of
    [/\s+inuti\s+/g, ' in '],                                  // in
    [/fortsätt(;|\s+)/g, 'continue$1'],                        // continue
    [/förinta\s+/g, 'delete '],                                // delete
    [/funktion(\s+|\()/g, 'function$1'],                       // function
    [/om\s*\(/g, 'if ('],                                      // if
    [/annars(\s+|\{)/g, 'else$1'],                             // else
    [/\s+instansav(\s+|\()/g, ' instanceof$1'],                // instanceof
    [/(ny|nytt)\s+/g, 'new '],                                 // new
    [/återsänd\s+/g, 'return '],                               // return
    [/växla\s*\(/g, 'switch ('],                               // switch
    [/utifall\s+/g, 'case '],                                  // case
    [/bryt(;|\s+)/g, 'break$1'],                               // break
    [/förval\s*:/g, 'default:'],                               // default
    [/kasta\s+/g, 'throw '],                                   // throw
    [/Fel(\s+|\()/g, 'Error$1'],                               // Error
    [/Knas(\s+|\()/g, 'Error$1'],                              // Error
    [/typav(\s+|\s*\()/g, 'typeof$1'],                         // typeof
    [/tom\s*\(/g, 'void('],                                    // void
    [/gör(\s*{|\s+)/g, 'do$1'],                                // do
    [/medan\s*\(/g, 'while ('],                                // while
    [/med\s*\(/g, 'with ('],                                   // with
    [/utdela\s+/g, 'yield '],                                  // yield
    [/Karta(\s+|\()/g, 'Map$1'],                               // Map
    [/Uppsättning(\s+|\()/g, 'Set$1'],                         // Set
    [/Objekt(\.|\s+|\()/g, 'Object$1'],                        // Object
    [/Grunka(\.|\s+|\()/g, 'Object$1'],                        // Object
    [/Pryl(\.|\s+|\()/g, 'Object$1'],                          // Object
    [/Sak(\.|\s+|\()/g, 'Object$1'],                           // Object
    [/Föremål(\.|\s+|\()/g, 'Object$1'],                       // Object
    [/Grej(\.|\s+|\()/g, 'Object$1'],                          // Object
    [/Moj(\.|\s+|\()/g, 'Object$1'],                           // Object
    [/\.nycklar\(/g, '.keys('],                                // keys
    [/Lista(\.|\s+|\()/g, 'Array$1'],                          // Array
    [/\.poppa\(\)/g, '.pop()'],                                // pop
    [/\.tryck\(/g, '.push('],                                  // push
    [/\.spegelvänd\(\)/g, '.reverse()'],                       // reverse
    [/\.snurra\(\)/g, '.shift()'],                             // shift
    [/\.sortera\(/g, '.sort('],                                // sort
    [/\.skarva\(/g, '.splice('],                               // splice
    [/\.avsnurra\(/g, '.unshift('],                            // unshift
    [/\.konkatenera\(/g, '.concat('],                          // concat
    [/\.slåIhop\(/g, '.join('],                                // join
    [/\.skär\(/g, '.slice('],                                  // slice
    [/\.tillSträng\(\)/g, '.toString()'],                      // toString
    [/\.positionAv\(/g, '.indexOf('],                          // indexOf
    [/\.förVarje\(/g, '.forEach('],                            // forEach
    [/\.varje\(/g, '.every('],                                 // every
    [/\.några\(/g, '.some('],                                  // some
    [/\.filtrera\(/g, '.filter('],                             // filter
    [/\.planera\(/g, '.map('],                                 // map
    [/\.förminska\(/g, '.reduce('],                            // reduce
    [/\.prototyp(\.|\s+)/g, '.prototype$1'],                   // prototype
    [/\.längd/g, '.length']                                    // length
  ].forEach(function (språk) {
    innehåll = innehåll.replace(språk[0], språk[1])
  })

  return innehåll
}
