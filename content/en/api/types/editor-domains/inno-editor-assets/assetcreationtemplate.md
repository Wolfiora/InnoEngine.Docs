---
title: "AssetCreationTemplate"
description: "Reference for AssetCreationTemplate in Inno.Editor.Assets."
uid: api.inno.editor.assets.689e3945d5e5c369
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetCreationTemplate`

This reference describes `AssetCreationTemplate` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b0d192e9ee7fcc32) | Method |
| [`Create`](#api-fd0e8e7637fbcb40) | Method |
| [`Encode`](#api-68fda62e88f5779b) | Method |
| [`assetType`](#api-cb95e8fd13be7458) | Property |

## Type declaration

<a id="api-689e3945d5e5c369"></a>
<!-- api: T:Inno.Editor.Assets.AssetCreationTemplate f76fcac4ee2d5d3bc9013b771d2fae5f01a4475d2b2304b3bdaec37c33d54f4c -->

```csharp
public abstract class Inno.Editor.Assets.AssetCreationTemplate
```

Produces the detached initial value for one authorable native asset source.

**Constraints:** Derivation is the discovery contract. `Inno.Editor.Assets.AssetCreationMenuAttribute` supplies only
source-format and presentation data that the asset inheritance hierarchy cannot express.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L124).

## `#ctor`

<a id="api-b0d192e9ee7fcc32"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate.#ctor 48f4b104630428904ab26fba132218fd5fc74c030e19bd6e627c1f9459134025 -->

```csharp
protected Inno.Editor.Assets.AssetCreationTemplate.AssetCreationTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L124).

## `Create`

<a id="api-fd0e8e7637fbcb40"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate.Create 4695ed9b778798d43578c56c7cf81239b100ce1a7d0a430edd8a4fce898afb2a -->

```csharp
public abstract Inno.Assets.AssetObject Inno.Editor.Assets.AssetCreationTemplate.Create()
```

Creates a detached default value that has not been imported or published.

**Returns:** A new asset value owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L137).

## `Encode`

<a id="api-68fda62e88f5779b"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate.Encode(Inno.Editor.Assets.AssetCreationContext,Inno.Assets.AssetObject) 5ce86f0d0303db3ef531ca9fade97820c5b465f5c1e5c9e8dca9210bc0204237 -->

```csharp
public virtual byte[] Inno.Editor.Assets.AssetCreationTemplate.Encode(Inno.Editor.Assets.AssetCreationContext context, Inno.Assets.AssetObject asset)
```

Encodes the detached initial value into the source representation owned by this template.

**Parameter `context`:** Creation services scoped to the current Asset source pipeline.

**Parameter `asset`:** The exact value returned by `Inno.Editor.Assets.AssetCreationTemplate.Create`.

**Returns:** Complete source bytes ready for an atomic File Browser create operation.

**Constraints:** The default implementation uses native structured Asset serialization. Templates paired
with a textual or custom binary importer can override this method without changing the
File Browser or registering a second creation protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L156).

## `assetType`

<a id="api-cb95e8fd13be7458"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationTemplate.assetType 12b29a03d38df90006287ccbd80c9bb62a10fdf54d24df6edb881771defb3b72 -->

```csharp
public abstract System.Type Inno.Editor.Assets.AssetCreationTemplate.assetType { get; }
```

Gets the concrete asset type produced by this template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L129).
