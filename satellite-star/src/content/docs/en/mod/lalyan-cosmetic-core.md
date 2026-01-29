---
title: Lalyan Cosmetic Core
---

An API to register and customize cosmetics without using armor slots

Custom Wardrobe model and texture are made by [EtherealShigure](https://www.curseforge.com/members/etherealshigure).

## <span style="color:#3598db">Introduction</span>

This plugin allows players to customize which cosmetic they have equipped, without having to use up their armor slots

It also allows plugin makers to create their custom cosmetics, without needing any java code!

The plugin features a custom GUI to customize cosmetics, which can be opened by command or, in a more immersive way, by crafting the Cosmetic Wardrobe

The Cosmetic Wardrobe can be crafted in the Builder's Workbench using 4 of any Hardwood

The GUI provides an easy way to select cosmetics and cosmetic variants. Left-click on a cosmetic to equip it, if the cosmetic has the variant icon, right-click it to open the variant menu!

## <span style="color:#3598db">Commands</span>

The plugin has some commands that are mainly for testing purposes:

*   `/cosmetic apply <CosmeticId> [override]` manually applies a certain cosmetic defined by `CosmeticId`, `override` is optional, default is `yes [other value is no]`, determines whether all other cosmetics of its type should be removed. Requires OP

*   `/cosmetic change` manually opens the Cosmetic Customization UI. Does not require permissions

*   `/cosmetic list` prints in chat all loaded cosmetic ids. Requires OP

*   `/cosmetic reload` manually reloads all cosmetics. Requires OP

*   `/cosmetic clear` removes all custom cosmetics and resets the default skin. Requires OP


## <span style="color:#3598db">Registering cosmetics</span>

<span style="color:#e03e2d">!Warning! Remember that the name you give to the files is important!</span>

Registering a cosmetic is quite simple. You'll need to make an asset pack (obviously), and will need 3 files:

*   The cosmetic's .blockymodel
*   The cosmetic's .png texture
*   The cosmetic's .png icon, which is the same icon you would use for the item!

These files must be named in the same way, that being CustomID.extension

Each cosmetic will be its own folder, with this structure

```
CustomID/
├── CustomID.blockymodel
├── CustomID.png
└── Icon/
    └── CustomID.png
```

Then the cosmetic will go in a certain folder, depending on the type:

### <span style="color:#236fa1">Cosmetics</span>

(things like shirts, caps, pants etc..)

The base path for cosmetics is `Common/Resources/Cosmetics`, then the folder based on the slot, which can be:

*   `Capes`
*   `Ears_Accessories`
*   `Gloves`
*   `Head`
*   `Face_Accessories`
*   `Overpants`
*   `Overtops`
*   `Pants`
*   `Shoes`
*   `Undertops`
*   `Underwears`

Then the folder you made before.

So, for a cosmetic called Custom\_Cape, which is in the cape slot it would be like this:

`Common/Resources/Cosmetics/Capes/Custom_Cape` and inside the Custom\_Cape folder:

```
Custom_Cape/
├── Custom_Cape.blockymodel
├── Custom_Cape.png
└── Icon/
    └── Custom_Cape.png
```

### <span style="color:#236fa1">Characters</span>

(things like mouth, ears, eyes etc..)

The base path for character cosmetics is `Common/Resources/Characters`, then the folder based on the slot, which can be:

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

Then the folder you made before.

So, for a character cosmetic called Custom\_Eyes, which is in the cape slot it would be like this:

`Common/Resources/Cosmetics/Capes/Custom_Eyes` and inside the Custom\_Eyes folder:

```
Custom_Eyes/
├── Custom_Eyes.blockymodel
├── Custom_Eyes.png
└── Icon/
    └── Custom_Eyes.png
```

The Hair\_Extension slot automatically takes the same gradient as the Hairstyle.

## <span style="color:#3598db">Variants (optional)</span>

<span style="color:#e03e2d">!Warning! Variants and colors are mutually exclusive!</span>

<span style="color:#e03e2d">!Warning! Hair extensions cannot have variants nor colors, they changes according to the hairstyle!</span>

This API also allows you to add variants.

To add variants, you will need to add the variant texture and icon inside your cosmetic's folder.

The variant textures must be placed in the cosmetic folder (CustomID) and named as follows:

```
CustomID_Variant_VariantName.png
```

The variant icons must have the same name given to the variant texture, but unlike the texture, they must be placed inside the `Icon/` folder.

Taking the Propeller\_Hat as an example:

```
Propeller_Hat/
├── Propeller_Hat.blockymodel
├── Propeller_Hat.png
├── Propeller_Hat_Variant_Circus.png
├── Propeller_Hat_Variant_Rainbow.png
└── Icon/
    ├── Propeller_Hat.png
    ├── Propeller_Hat_Variant_Circus.png
    └── Propeller_Hat_Variant_Rainbow.png
```

Doing so, the API will load: **Propeller\_Hat**, **Propeller\_Hat\_Variant\_Circus**, **Propeller\_Hat\_Variant\_Rainbow**.

They will be seen by the API as variants of the same cosmetic, so they will implicitly use `Propeller_Hat.blockymodel`

## <span style="color:#3598db">Colors (optional)</span>

<span style="color:#e03e2d">!Warning! Variants and colors are mutually exclusive!</span>

<span style="color:#e03e2d">!Warning! Hair extensions cannot have variants nor colors, they changes according to the hairstyle!</span>

This API also allows you to add multiple colors to a cosmetic!

To add colors you need to change the folder of your cosmetic like this: `Cosmetic_Id_Colors_GRADIENTSET`

The texture has to be grayscale (completely desaturated).

here's a list of all aviable gradient sets:

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

Here's an example:  
Item name: `Sample_Shirt`  
Alternative: `Colors`  
Gradient Set: `Colored_Cotton`

The folder name is: `Sample_Shirt_Colors_Colored_Cotton`

The folder structure is:

```
Sample_Shirt_Colors_Colored_Cotton/
├── Sample_Shirt.blockymodel
├── Sample_Shirt.png
└── Icon/
    └── Sample_Shirt.png
```

model, texture and icon's names have to be just the name without `_Colors_GRADIENTSET`

## <span style="color:#3598db">Advanced Cosmetics (optional)</span>

Inside your cosmetic folder, you can add a `Cosmetic_Id.json` file. This file allows you to customize even more your cosmetics.

Within the JSON file, you are able to change the name and path of the model, texture and icon of your cosmetic. And that's not all, you'll also be able to define variants and color gradients of your cosmetic and if the cosmetic occupies MORE THAN ONE SLOT!

```
{
    "model": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat.blockymodel",
    "texture": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat.png",
    "icon": "Resources/Cosmetics/Head/Propeller_Hat/Propeller_Hat_Icon.png",
    "slot_overrides": [
        //Insert slots here, for example "Head", "Capes" etc
    ],
    "alternatives": {
        //THESE 2 ARE MUTUALLY EXCLUSIVE, YOU EITHER HAVE VARIANTS OR COLORS!!!
        //Choice 1 (Colors)
        "gradient_set": "Hair",
        //Choice 2 (Variants)
        "variants": {
            "Variant": {
              "texture": "Resources/Cosmetics/Head/Propeller_Hat/Variant/Variant.png",
              "icon": "Resources/Cosmetics/Head/Propeller_Hat/Variant/Variant_Icon.png"
            }
        }
    }
}
```

**"model"** Is the path of the base cosmetic model and any variants.

**"texture"** Is the path of the base cosmetic texture and any variants.

**"icon"** Is the path of the base cosmetic icon.

**"alternatives"** Defines that the cosmetic has 1 of 2 alternative styles

### <span style="color:#236fa1">Variant Alternative</span>

**"alternatives" > "variants"** Announces the presence of variants that will be listed.

**"alternatives" > "variants" > "variant1Name"** Will be replaced with the name of the first variant.

**"alternatives" > "variants" > "variant2Name"** Will be replaced with the name of the second variant.

Inside the variant names mentioned above are the definitions of the variant components.

**"alternatives" > "variants" > "variantName" > "texture"** Is the path of the texture of the variant in question.

**"alternatives" > "variants" > "variantName" > "icon"** Is the path of the icon of the variant in question.

### <span style="color:#236fa1">Color Alternative</span>

**"alternatives" > "gradient\_set"** Tells the game which gradient set to use

Gradient List:

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
