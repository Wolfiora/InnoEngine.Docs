---
title: "AssetCreationMenuAttribute"
description: "Reference for AssetCreationMenuAttribute in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.79cc3077e1717272
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetCreationMenuAttribute`

This reference describes `AssetCreationMenuAttribute` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a42efb354840a07d) | Method |
| [`defaultName`](#api-d6e442bab6c355bf) | Property |
| [`extension`](#api-75770c8b481b7354) | Property |
| [`groupOrder`](#api-17dc307daeded40a) | Property |
| [`id`](#api-11029ac2b0468734) | Property |
| [`itemOrder`](#api-f460a1a90b67cbc5) | Property |
| [`menuPath`](#api-a6c6a4b1aa16015d) | Property |
| [`separatorBeforeGroup`](#api-6a5be2c8084fb258) | Property |

## Type declaration

<a id="api-79cc3077e1717272"></a>
<!-- api: T:InnoEditor.Assets.AssetCreationMenuAttribute 03f0f3065dc9e4fff9e657271cc0ff220caa6098e7b3f01c44b332e40123f08f -->

```csharp
public sealed class InnoEditor.Assets.AssetCreationMenuAttribute : System.Attribute
```

Declares the source name, extension, and menu placement that cannot be inferred from an
`InnoEngine.Assets.AssetObject` type alone.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L13).

## `#ctor`

<a id="api-a42efb354840a07d"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationMenuAttribute.#ctor(System.String,System.String,System.String,System.String,System.Int32,System.Int32,System.Boolean) ed16e9bdaf9242c936a8d7f8b63706de229975c3de36f4254adffca98d7ff07b -->

```csharp
public InnoEditor.Assets.AssetCreationMenuAttribute.AssetCreationMenuAttribute(string id, string menuPath, string extension, string defaultName, int groupOrder = 0, int itemOrder = 0, bool separatorBeforeGroup = false)
```

Creates one asset creation menu declaration.

**Parameter `id`:** Globally stable template identifier.

**Parameter `menuPath`:** Slash-delimited path below the File Browser Create menu.

**Parameter `extension`:** Native source extension, including its leading dot.

**Parameter `defaultName`:** Default source name without an extension or numeric suffix.

**Parameter `groupOrder`:** Stable order of the top-level category below Create.

**Parameter `itemOrder`:** Stable order of the leaf within its immediate category.

**Parameter `separatorBeforeGroup`:** Whether the top-level category starts after a separator.

**Throws `System.ArgumentException`:** Thrown when an identifier, path, source name, or native extension is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L42).

## `defaultName`

<a id="api-d6e442bab6c355bf"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.defaultName b962a94a097ded2624f7a790ae12879387784a89bcfc8324176cabbd95c606bf -->

```csharp
public string InnoEditor.Assets.AssetCreationMenuAttribute.defaultName { get; }
```

Gets the default source name without an extension or numeric suffix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L99).

## `extension`

<a id="api-75770c8b481b7354"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.extension 7fa49e4d120cbee31ea74e25e747b1915a7c4e0f472fc98e384ffcddc0961da3 -->

```csharp
public string InnoEditor.Assets.AssetCreationMenuAttribute.extension { get; }
```

Gets the native source extension, including its leading dot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L94).

## `groupOrder`

<a id="api-17dc307daeded40a"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.groupOrder f4d4015bf0886eb6637b1a8ead6484f4ba9cbdab5f62aadf26b668c5d861692d -->

```csharp
public int InnoEditor.Assets.AssetCreationMenuAttribute.groupOrder { get; }
```

Gets the stable order of the top-level category below Create.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L104).

## `id`

<a id="api-11029ac2b0468734"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.id ebb847cea96a611007e97008d57f2f5eca4a7dc3d5e6a40ee0d81c6144618de1 -->

```csharp
public string InnoEditor.Assets.AssetCreationMenuAttribute.id { get; }
```

Gets the globally stable template identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L84).

## `itemOrder`

<a id="api-f460a1a90b67cbc5"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.itemOrder 9c0e6c0343065d2a9a37def7d29f9f1d6804b82be7e2e61448ce6f082a023a5b -->

```csharp
public int InnoEditor.Assets.AssetCreationMenuAttribute.itemOrder { get; }
```

Gets the stable order of the leaf within its immediate category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L109).

## `menuPath`

<a id="api-a6c6a4b1aa16015d"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.menuPath 65c51be8290830d6291fd98a608df5df9391df75694be262787fdb6fb5dd15d7 -->

```csharp
public string InnoEditor.Assets.AssetCreationMenuAttribute.menuPath { get; }
```

Gets the slash-delimited path below the File Browser Create menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L89).

## `separatorBeforeGroup`

<a id="api-6a5be2c8084fb258"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationMenuAttribute.separatorBeforeGroup 401a93f580445438833d8a517a6f13a087559abfab2a2fe44b0673e9d272b468 -->

```csharp
public bool InnoEditor.Assets.AssetCreationMenuAttribute.separatorBeforeGroup { get; }
```

Gets whether the top-level category starts after a separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L114).
