---
title: "AssetCreationTemplate"
description: "Reference for AssetCreationTemplate in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.835fd3bbaf34d4af
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetCreationTemplate`

This reference describes `AssetCreationTemplate` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2cbc0fc82847eaaf) | Method |
| [`Create`](#api-b71d0fe57a60e53f) | Method |
| [`Encode`](#api-13b49985fedd9f34) | Method |
| [`assetType`](#api-21cdb2c9be83d9f2) | Property |

## Type declaration

<a id="api-835fd3bbaf34d4af"></a>
<!-- api: T:InnoEditor.Assets.AssetCreationTemplate 0391be7d195954c6ce5b20589a27131434009f15788b5ce6de7aab4cb6e43816 -->

```csharp
public abstract class InnoEditor.Assets.AssetCreationTemplate
```

Produces the detached initial value for one authorable native asset source.

**Constraints:** Derivation is the discovery contract. `InnoEditor.Assets.AssetCreationMenuAttribute` supplies only
source-format and presentation data that the asset inheritance hierarchy cannot express.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L124).

## `#ctor`

<a id="api-2cbc0fc82847eaaf"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate.#ctor 8fd96033f69f5ca4f39f9eae02e30c633c5df6eb863a87686b8f24f543e38655 -->

```csharp
protected InnoEditor.Assets.AssetCreationTemplate.AssetCreationTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L124).

## `Create`

<a id="api-b71d0fe57a60e53f"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate.Create 71f0501a8a67eab6d84545c9f78664cd201548a45e170409ab1cbe0d606816c8 -->

```csharp
public abstract InnoEngine.Assets.AssetObject InnoEditor.Assets.AssetCreationTemplate.Create()
```

Creates a detached default value that has not been imported or published.

**Returns:** A new asset value owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L137).

## `Encode`

<a id="api-13b49985fedd9f34"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate.Encode(InnoEditor.Assets.AssetCreationContext,InnoEngine.Assets.AssetObject) a3b3751a1bb876d6d2652e2738f834a232d7fcb3347b6c25cd0e027b52edb20b -->

```csharp
public virtual byte[] InnoEditor.Assets.AssetCreationTemplate.Encode(InnoEditor.Assets.AssetCreationContext context, InnoEngine.Assets.AssetObject asset)
```

Encodes the detached initial value into the source representation owned by this template.

**Parameter `context`:** Creation services scoped to the current Asset source pipeline.

**Parameter `asset`:** The exact value returned by `InnoEditor.Assets.AssetCreationTemplate.Create`.

**Returns:** Complete source bytes ready for an atomic File Browser create operation.

**Constraints:** The default implementation uses native structured Asset serialization. Templates paired
with a textual or custom binary importer can override this method without changing the
File Browser or registering a second creation protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L156).

## `assetType`

<a id="api-21cdb2c9be83d9f2"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationTemplate.assetType e074bd9b7469a0fe308ad6f201235cff02c993b52a438788c72b42dd2c1e4ce9 -->

```csharp
public abstract System.Type InnoEditor.Assets.AssetCreationTemplate.assetType { get; }
```

Gets the concrete asset type produced by this template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L129).
