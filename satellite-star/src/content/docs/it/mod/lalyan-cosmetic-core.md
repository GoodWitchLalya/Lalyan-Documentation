---
title: Lalyan Cosmetic Core
---

Un'API per registrare e personalizzare cosmetici senza usare gli slot dell'armatura

Modello e texture del Custom Wardrobe sono fatti da [EtherealShigure](https://www.curseforge.com/members/etherealshigure).

## <span style="color:#3598db">Introduzione</span>

Questo plugin permette ai giocatori di personalizzare quale cosmetico hanno equipaggiato, senza dover usare i loro slot dell'armatura

Permette anche ai creatori di plugin di creare i loro cosmetici personalizzati, senza aver bisogno di alcun codice Java!

Il plugin fornisce una GUI per personalizzare i cosmetici, che può essere aperta tramite comando o, in un modo più immersivo, interagendo con il Guardaroba Cosmetico

Il Guardaroba Cosmetico può essere craftato in una Builder's Workbench con 4 di qualsiasi Hardwood

La GUI fornisce un modo semplice per selezionare cosmetici e varianti di cosmetici. Fai clic con il pulsante sinistro su un cosmetico per equipaggiarlo, se il cosmetico ha l'icona della variante, fai clic con il pulsante destro per aprire il menu delle varianti!

## <span style="color:#3598db">Comandi</span>

Il plugin ha alcuni comandi che sono principalmente a scopo di test:

*   `/cosmetic apply <CosmeticId> [override]` applica manualmente un certo cosmetico definito da `CosmeticId`, `override` è opzionale, il valore predefinito è `yes [l'altro valore è no]`, determina se tutti gli altri cosmetici del suo tipo devono essere rimossi. Richiede OP

*   `/cosmetic change` apre manualmente l'interfaccia utente di personalizzazione dei cosmetici. Non richiede permessi

*   `/cosmetic list` stampa in chat tutti gli ID dei cosmetici caricati. Richiede OP

*   `/cosmetic reload` ricarica manualmente tutti i cosmetici. Richiede OP

*   `/cosmetic clear` rimuove tutti i cosmetici personalizzati e ripristina la skin predefinita. Richiede OP


## <span style="color:#3598db">Registrazione dei cosmetici</span>

<span style="color:#e03e2d">!Attenzione! Ricordati che il nome che dai ad i files è importante!</span>

Registrare un cosmetico è abbastanza semplice. Dovrai creare un pacchetto di risorse (ovviamente), e avrai bisogno di 3 file essenziali:

*   Il file .blockymodel del cosmetico
*   La texture .png del cosmetico
*   L'icona .png del cosmetico, che è la stessa icona che useresti per l'oggetto!

Questi file devono essere nominati allo stesso modo, ovvero CustomID.extension

Ogni cosmetico avrà la sua cartella, con questa struttura

```
CustomID/
├── CustomID.blockymodel
├── CustomID.png
└── Icon/
    └── CustomID.png
```

La cartella del cosmetico andrà messa all'interno di una certa cartella, a seconda del tipo di cosmetico:

### <span style="color:#236fa1">Cosmetici</span>

(cose come magliette, cappelli, pantaloni ecc..)

Il percorso base per i cosmetici è `Common/Resources/Cosmetics`, seguito dalla cartella basata sullo slot, che può essere:

*   `Capes`
*   `Ears_Accessories`
*   `Face_Accessories`
*   `Gloves`
*   `Head`
*   `Overpants`
*   `Overtops`
*   `Pants`
*   `Shoes`
*   `Undertops`
*   `Underwears`

Scegli quale di questi slots deve occupare il tuo cosmetico e inserisci la cartella che hai creato prima.

Quindi, per un cosmetico chiamato `Custom_Cape`, che si trova nello slot `Capes`, il percorso sarà questo:

`Common/Resources/Cosmetics/Capes/Custom_Cape`, e all'interno della cartella `Custom_Cape`:

```
Custom_Cape/
├── Custom_Cape.blockymodel
├── Custom_Cape.png
└── Icon/
    └── Custom_Cape.png
```

### <span style="color:#236fa1">Parti del Personaggio</span>

(cose come bocca, orecchie, occhi ecc..)

Il percorso base per i cosmetici del personaggio è `Common/Resources/Characters`, seguito dalla cartella basata sullo slot, che può essere:

*   `Beards`
*   `Ears`
*   `Eyebrows`
*   `Eyes`
*   `Faces`
*   `Mouth`
*   `Haircuts`
*   `Hair_Extension`
*   `Wings`
*   `Tails`
*   `Horns`
*   `Face_Details`

Scegli quale di questi slots deve occupare la tua parte per il personaggio e inserisci la cartella che hai creato prima.

Quindi, per un cosmetico del personaggio chiamato `Custom_Eyes`, che si trova nello slot `Eyes`, il percorso sarà questo:

`Common/Resources/Characters/Eyes/Custom_Eyes`, e all'interno della cartella `Custom_Eyes`:

```
Custom_Eyes/
├── Custom_Eyes.blockymodel
├── Custom_Eyes.png
└── Icon/
    └── Custom_Eyes.png
```

Lo slot Hair\_Extension prende automaticamente il gradiente del'acconciatura.

## <span style="color:#3598db">Varianti (opzionale)</span>

<span style="color:#e03e2d">!Attenzione! Varianti e colori si escludono a vicenda!</span>

<span style="color:#e03e2d">!Attenzione! Le estensioni per i capelli (Hair_Extension) non possono avere varianti ne colori, cambiano a seconda del taglio di capelli!</span>

Questa API ti consente anche di aggiungere delle varianti.

Per aggiungerle le varianti dovrai aggiungere le textures e le icone delle varianti all'interno della cartella del tuo cosmetico.

Le textures delle varianti devono essere messe nella cartella del cosmetico (CustomID) nominate come segue:

```
CustomID_Variant_NomeVariante.png
```

Le icone delle varianti devono avere lo stesso nome che abbiamo dato alla texture della variante ma a differenza di essa andranno messe dentro la cartella `Icon/`.

Facendo un esempio con il Propeller\_Hat:

```
Propeller_Hat/
├── Propeller_Hat.blockymodel
├── Propeller_Hat.png
├── Propeller_Hat_Variant_Circo.png
├── Propeller_Hat_Variant_Arcobaleno.png
└── Icon/
    ├── Propeller_Hat.png
    ├── Propeller_Hat_Variant_Circo.png
    └── Propeller_Hat_Variant_Arcobaleno.png
```

Facendo così l'API caricherà: **Propeller\_Hat**, **Propeller\_Hat\_Variant\_Circo**, \* _Propeller\_Hat\_Variant\_Arcobaleno_\*.

Saranno viste dall'API come varianti dello stesso cosmetico quindi implicitamente useranno `Propeller_Hat.blockymodel` come modello.

## <span style="color:#3598db">Colori (opzionale)</span>

<span style="color:#e03e2d">!Attenzione! Varianti e colori si escludono a vicenda!</span>

<span style="color:#e03e2d">!Attenzione! Le estensioni per i capelli (Hair_Extension) non possono avere varianti ne colori, cambiano a seconda del taglio di capelli!</span>

Questa API ti permette anche di aggiungere più colori a un cosmetico!

Per aggiungere colori devi cambiare la cartella del tuo cosmetico così: `Cosmetic_Id_Colors_GRADIENTSET`

La texture dev'essere una scala di grigi (completamente desaturata)

ecco una lista di tutti i set di gradienti disponibili:

*   `Colored_Cotton`
*   `Eyes_Gradient`
*   `Faded_Leather`
*   `Fantasy_Cotton`
*   `Fantasy_Cotton_Dark`
*   `Flashy_Synthetic`
*   `Hair`
*   `Jean_Generic`
*   `Ornamented_Metal`
*   `Pastel_Cotton`
*   `Rotten_Fabric`
*   `Shiny_Fabric`
*   `Skin`

Ecco un esempio:

Nome oggetto: `Sample_Shirt`  
Alternativa: `Colors`  
Set Gradiente: `Colored_Cotton`

Il nome cartella è: `Sample_Shirt_Colors_Colored_Cotton`

La struttura delle cartelle è:

```
Sample_Shirt_Colors_Colored_Cotton/
├── Sample_Shirt.blockymodel
├── Sample_Shirt.png
└── Icon/
    └── Sample_Shirt.png
```

I nomi di modello, texture e icona devono essere solo il nome senza `_Colors_GRADIENTSET`

## <span style="color:#3598db">Cosmetici Avanzati (opzionale)</span>

All'interno della cartella del tuo cosmetico, puoi aggiungere un file `CustomID.json` (in cui CustomID è l'ID del tuo cosmetico). Questo file ti permetterà di personalizzare ancora di più i tuoi cosmetici.

All'interno del file JSON puoi cambiare il nome e il percorso del modello, della texture e dell'icona del tuo cosmetico. E non è tutto, potrai anche definire varianti o colorazioni del tuo cosmetico e decidere se occupa SLOT MULTIPLI!

Qui la formattazione corretta del cosmetico di esempio

```
{
    "model": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat.blockymodel",
    "texture": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat.png",
    "icon": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat_Icon.png",
    "slot_overrides": [
        //Inserisci gli slot qui, per esempio "Head", "Capes" ecc...
    ],
    "alternatives": {
        //QUESTI 2 SONO MUTUALMENTE ESCLUSIVI, O USI LE VARIANTI O I COLORI!!!
        //Scelta 1 (Colori)
        "gradient_set": "Hair",
        //Scelta 2 (Varianti)
        "variants": {
            "Variant": {
              "texture": "Resources/Cosmetics/Head/Propeller_Hat/Variant/Variant.png",
              "icon": "Resources/Cosmetics/Head/Propeller_Hat/Variant/Variant_Icon.png"
            }
        }
    }
}
```

***

**"model"** È il percorso del modello di cosmetico base ed eventuali varianti.

**"texture"** È il percorso della texture di cosmetico base ed eventuali varianti.

**"icon"** È il percorso dell'icona del cosmetico base.

**"alternatives"** Definisce che il cosmetico ha 1 di 2 stili di alternative

### <span style="color:#236fa1">Alternativa di Variante</span>

**"alternatives" >"variants"** Annuncia la presenza di varianti che saranno elencate.

**"alternatives" >"variants" > "variant1Name"** Andrà sostituito con il nome della prima variante.

**"alternatives" >"variants" > "variant2Name"** Andrà sostituito con il nome della seconda variante.

Dentro i nomi delle varianti qui sopra citati ci sono le definizioni dei componenti della variante.

**"alternatives" >"variants" > "variantName" > "texture"** È il percorso della texture della variante in questione.

**"alternatives" >"variants" > "variantName" > "icon"** È il percorso dell'icona della variante in questione.

### <span style="color:#236fa1">Alternativa di Colorazione</span>

**"alternatives" > "gradient\_set"** Il gradiente di colorazioni da usare

Lista dei gradienti:

*   `Colored_Cotton`
*   `Eyes_Gradient`
*   `Faded_Leather`
*   `Fantasy_Cotton`
*   `Fantasy_Cotton_Dark`
*   `Flashy_Synthetic`
*   `Hair`
*   `Jean_Generic`
*   `Ornamented_Metal`
*   `Pastel_Cotton`
*   `Rotten_Fabric`
*   `Shiny_Fabric`
*   `Skin`