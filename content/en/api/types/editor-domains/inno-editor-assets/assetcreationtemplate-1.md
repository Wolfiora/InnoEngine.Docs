---
title: "AssetCreationTemplate`1"
description: "Reference for AssetCreationTemplate`1 in Inno.Editor.Assets."
uid: api.inno.editor.assets.aa8e1b491243d8a2
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# ``AssetCreationTemplate`1``

This reference describes ``AssetCreationTemplate`1`` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Assets.AssetCreationTemplate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-29021c5db7e2daee) | Method |
| [`Create`](#api-04bf0386a8194175) | Method |
| [`CreateAsset`](#api-fa8c7adc3a1c89e3) | Method |
| [`assetType`](#api-427b91599020e97e) | Property |

## Type declaration

<a id="api-aa8e1b491243d8a2"></a>
<!-- api: T:Inno.Editor.Assets.AssetCreationTemplate`1 3e57bb39feb155aec3f9a717563ffeccf80f7fda1e0ae74d4e6ea96654162a4d -->

```csharp
public abstract class Inno.Editor.Assets.AssetCreationTemplate<TAsset> where TAsset : Inno.Assets.AssetObject, new() : Inno.Editor.Assets.AssetCreationTemplate
```

Creates a default-constructed native source for an authorable asset type.

**Type parameter `TAsset`:** Concrete serializable asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L204).

## `#ctor`

<a id="api-29021c5db7e2daee"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate`1.#ctor f24f39b18e735c68f5d37bf82600648f60acfaba5e2766b3a8f61d33ada6dd59 -->

```csharp
protected Inno.Editor.Assets.AssetCreationTemplate<TAsset>.AssetCreationTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L204).

## `Create`

<a id="api-04bf0386a8194175"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate`1.Create 9e7bd0e285ec73bf9cb1217507e734cc9e60b0fbfc5827365633cec080383503 -->

```csharp
public override Inno.Assets.AssetObject Inno.Editor.Assets.AssetCreationTemplate<TAsset>.Create()
```

Creates a value using this implementation's validated inputs.

**Returns:** The validated asset object that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L218).

## `CreateAsset`

<a id="api-fa8c7adc3a1c89e3"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationTemplate`1.CreateAsset c1b92988ec54aa596ecb95077c467cb2d0173737cc3184a57af6a2320a70b7f4 -->

```csharp
protected virtual TAsset Inno.Editor.Assets.AssetCreationTemplate<TAsset>.CreateAsset()
```

Creates the initial detached value, allowing specialized deterministic defaults.

**Returns:** A new asset value owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L226).

## `assetType`

<a id="api-427b91599020e97e"></a>
<!-- api: P:Inno.Editor.Assets.AssetCreationTemplate`1.assetType 5f23ca9106522b5521749a5b69b31e68f2bb0af19c5d88a3b9fb470184d2dae0 -->

```csharp
public override sealed System.Type Inno.Editor.Assets.AssetCreationTemplate<TAsset>.assetType { get; }
```

Gets the asset type created by this Editor template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L210).
