![](./svenne-loader-logo.png)

A Webpack loader for working with Javascript in Swedish

## Benefits

- Highly educational √
- Complicated √
- Perfect for children wanting to get into development √
- Perfect for children wanting to get into trouble when developing in English √
- Breaks all your syntax highlighting √
- Looks cool with åäö in your code √
- Makes it harder for international developers to understand you √

## Installation

`npm install --save svenne-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
const js = require('svenne!./svenne-file.js') // returns regular Javascript from your svenne js
```

### Implemented translations

_Translations in paranthesis are working alternatives_

Javascript | Swedish Javascript
------------ | -------------
this | denna _(detta)_
class | klass
extends | utökar
constructor | borrgranne
super | toppen
static | statisk
new | ny _(nytt)_
import | importera
export | exportera
window | fönster
alert | utropa
console | kontrollpanel
console.log | kontrollpanel.logga
console.warn | kontrollpanel.varna
console.error | kontrollpanel.fela
try | försök
catch | knasigt _(fånga)_
finally | slutligen
const | konstant
var | variabel
let | låt
for | för
in | inuti
of | av
continue | fortsätt
delete | förinta
function | funktion
return | återsänd
if | om
else if | annars om
else | annars
instanceof | instansav
typeof | typav
switch | växla
break | bryt
default | förval
throw | kasta
Error | Knas _(Fel)_
void | tom
do | gör
while | medan
with | med
yield | utdela
Map | Karta
Set | Uppsättning
Object | Pryl _(Objekt, Grunka, Föremål, Grej, Sak, Moj)_
Object.keys | Pryl.nycklar
Array | Lista
Array.pop | Lista.poppa
Array.push | Lista.tryck
Array.reverse | Lista.spegelvänd
Array.shift | Lista.snurra
Array.unshift | Lista.avsnurra
Array.sort | Lista.sortera
Array.slice | Lista.skär
Array.splice | Lista.skarva
Array.concat | Lista.konkatenera
Array.join | Lista.slåIhop
Array.indexOf | Lista.positionAv
Array.forEach | Lista.förVarje
Array.every | Lista.varje
Array.some | Lista.några
Array.filter | Lista.filtrera
Array.map | Lista.planera
Array.reduce | Lista.förminska
toString | tillSträng
prototype | prototyp
length | längd

### Basic Example

```javascript
klass Djur {
  borrgranne () {
    kontrollpanel.logga('Jag är ett djur!')
  }

  statisk formateraDjurNamn (djur) {
    återsänd `Djur: ${djur}`
  }
}

klass Häst utökar Djur {
  borrgranne () {
    toppen()

    detta.djur = 'Häst'
  }

  efterfrågaRidlektion (lektion) {
    växla (lektion) {
      utifall 'lektion-1':
        återsänd 'Du är välkommen'
        bryt
      utifall 'lektion-2':
      förval:
        kasta nytt Knas('Lektion 2 är ännu inte implementerad!')
    }
  }

  sättRyttare (ryttare) {
    denna.ryttare = ryttare
  }

  hämtaRyttare () {
    om (denna.ryttare) {
      försök {
        återsänd Pryl.nycklar(denna.ryttare)
      } knasigt (e) {
        återsänd 'Du har skickat in dina ryttare lite knasigt'
      }
    }

    återsänd 'Inga ryttare funna'
  }

  statisk formateraDjurNamn (djur) {
    återsänd `Häst: ${djur}`
  }
}
```
