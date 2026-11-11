---
title: "AssetCreationMenuAttribute"
description: "Reference for AssetCreationMenuAttribute in Inno.Editor.Assets."
uid: api.inno.editor.assets.fbdd5a649b6ec91c
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetCreationMenuAttribute`

This reference describes `AssetCreationMenuAttribute` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-762c7b79b6d33359) | Method |
| [`defaultName`](#api-60e3d5b4c2e448a4) | Property |
| [`extension`](#api-cc25f639e96f1bb3) | Property |
| [`groupOrder`](#api-8d2386a0d63fa904) | Property |
| [`id`](#api-19d9b5902aaf8326) | Property |
| [`itemOrder`](#api-9a7a0f4eb6662e1a) | Property |
| [`menuPath`](#api-b486f7196cb4e58f) | Property |
| [`separatorBeforeGroup`](#api-2186832ddf917cf6) | Property |

## Type declaration

<a id="api-fbdd5a649b6ec91c"></a>
<!-- api: T:Inno.Editor.Assets.AssetCreationMenuAttribute 995d5d6ca4d9148fdc9e0882c22d536f97febedf34ac179f40c1ca7a1d802ed1 -->

```csharp
public sealed class Inno.Editor.Assets.AssetCreationMenuAttribute : System.Attribute
```

Declares the source name, extension, and menu placement that cannot be inferred from an
`Inno.Assets.AssetObject` type alone.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L13).

## `#ctor`

<a id="api-762c7b79b6d33359"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationMenuAttribute.#ctor(System.String,System.String,System.String,System.String,System.Int32,System.Int32,System.Boolean) 40d1b7173d7c21946a366ccff24a46ed25eb6be7fe755b190b1d3d786eec4e40 -->

```csharp
public Inno.Editor.Assets.AssetCreationMenuAttribute.AssetCreationMenuAttribute(string id, string menuPath, string extension, string defaultName, int groupOrder = 0, int itemOrder = 0, bool separatorBeforeGroup = false)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L42).

## `defaultName`

<a id="api-60e3d5b4c2e448a4"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.defaultName fb51fb2582dbc1b4621880ed7d6ffb5578875f6ab73730d40ff71f8ff3a86be7 -->

```csharp
public string Inno.Editor.Assets.AssetCreationMenuAttribute.defaultName { get; }
```

Gets the default source name without an extension or numeric suffix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L99).

## `extension`

<a id="api-cc25f639e96f1bb3"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.extension d1e9c4f8425f01c701727a4041b5ba6a07ff9ee609a06f43e23872bd6c7c17b7 -->

```csharp
public string Inno.Editor.Assets.AssetCreationMenuAttribute.extension { get; }
```

Gets the native source extension, including its leading dot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L94).

## `groupOrder`

<a id="api-8d2386a0d63fa904"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.groupOrder 6a9e9d7cdf852de20fc1fe25f98f935b78fe8a85ef2dbc4a213c30749796aef3 -->

```csharp
public int Inno.Editor.Assets.AssetCreationMenuAttribute.groupOrder { get; }
```

Gets the stable order of the top-level category below Create.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L104).

## `id`

<a id="api-19d9b5902aaf8326"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.id 9c8b6939c9319c6cbc0ae7577efde36ed19e78fd5650cc41d6430ac27ee64e54 -->

```csharp
public string Inno.Editor.Assets.AssetCreationMenuAttribute.id { get; }
```

Gets the globally stable template identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L84).

## `itemOrder`

<a id="api-9a7a0f4eb6662e1a"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.itemOrder ca252a154ad3498ae95dd6fd731f221fd7dbe6cc93d36ee06f7003df9288d323 -->

```csharp
public int Inno.Editor.Assets.AssetCreationMenuAttribute.itemOrder { get; }
```

Gets the stable order of the leaf within its immediate category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L109).

## `menuPath`

<a id="api-b486f7196cb4e58f"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.menuPath b11c8d6ecc208b16197c824855c5da581dab890f0ccb5c89b1f7ac2bdef81c9a -->

```csharp
public string Inno.Editor.Assets.AssetCreationMenuAttribute.menuPath { get; }
```

Gets the slash-delimited path below the File Browser Create menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L89).

## `separatorBeforeGroup`

<a id="api-2186832ddf917cf6"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationMenuAttribute.separatorBeforeGroup 70cb0225e932b7e83e6e39f4163d4e0253cbdb56f907c85784d556b581999014 -->

```csharp
public bool Inno.Editor.Assets.AssetCreationMenuAttribute.separatorBeforeGroup { get; }
```

Gets whether the top-level category starts after a separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L114).
