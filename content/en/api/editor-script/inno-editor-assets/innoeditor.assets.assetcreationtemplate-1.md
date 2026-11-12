---
title: "AssetCreationTemplate`1"
description: "Reference for AssetCreationTemplate`1 in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.5ce2c4ef19493b78
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# ``AssetCreationTemplate`1``

This reference describes ``AssetCreationTemplate`1`` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Assets.AssetCreationTemplate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3edf04069851a53c) | Method |
| [`Create`](#api-d73d78a1443be417) | Method |
| [`CreateAsset`](#api-27f1607944b13c14) | Method |
| [`assetType`](#api-7fbbafe0318a31b5) | Property |

## Type declaration

<a id="api-5ce2c4ef19493b78"></a>
<!-- api: T:InnoEditor.Assets.AssetCreationTemplate`1 9afec34eade3e25bfd5f07089e77b79a2f4177563bae7da9a615694be4d186fd -->

```csharp
public abstract class InnoEditor.Assets.AssetCreationTemplate<TAsset> where TAsset : InnoEngine.Assets.AssetObject, new() : InnoEditor.Assets.AssetCreationTemplate
```

Creates a default-constructed native source for an authorable asset type.

**Type parameter `TAsset`:** Concrete serializable asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L204).

## `#ctor`

<a id="api-3edf04069851a53c"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate`1.#ctor 86074ec1ceb45d8bcb954589957c8f2821dd25324980052a566214e6f4e43cf2 -->

```csharp
protected InnoEditor.Assets.AssetCreationTemplate<TAsset>.AssetCreationTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L204).

## `Create`

<a id="api-d73d78a1443be417"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate`1.Create b02aeb5bbbff1babda71b267ff28d297145ece7978fb31fb19d42def7f60fd9d -->

```csharp
public override InnoEngine.Assets.AssetObject InnoEditor.Assets.AssetCreationTemplate<TAsset>.Create()
```

Creates a value using this implementation's validated inputs.

**Returns:** The validated asset object that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L218).

## `CreateAsset`

<a id="api-27f1607944b13c14"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationTemplate`1.CreateAsset 08c52fcf43e29c0c41efef1df004bf7f32af5c5b8386c92036675edcb1212c41 -->

```csharp
protected virtual TAsset InnoEditor.Assets.AssetCreationTemplate<TAsset>.CreateAsset()
```

Creates the initial detached value, allowing specialized deterministic defaults.

**Returns:** A new asset value owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L226).

## `assetType`

<a id="api-7fbbafe0318a31b5"></a>
<!-- api: P:InnoEditor.Assets.AssetCreationTemplate`1.assetType cd6ddfa46d8ad98a415be72f37188ea57463ea34d02e5c5202799ead0a0ee4c7 -->

```csharp
public override sealed System.Type InnoEditor.Assets.AssetCreationTemplate<TAsset>.assetType { get; }
```

Gets the asset type created by this Editor template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L210).
