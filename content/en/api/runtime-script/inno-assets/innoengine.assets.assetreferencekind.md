---
title: "AssetReferenceKind"
description: "Reference for AssetReferenceKind in Inno.Assets."
uid: api.inno.assets.runtime-script.56863874a0d36b42
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetReferenceKind`

This reference describes `AssetReferenceKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AssetDependency`](#api-822d4c25cd41503e) | Field |
| [`Editor`](#api-16ecda9d9344b83c) | Field |
| [`PrefabSource`](#api-63e276606634f500) | Field |
| [`RuntimeSubsystem`](#api-424cbe83f7a0903f) | Field |
| [`SceneResource`](#api-2a41659ccad7044d) | Field |
| [`SerializedProperty`](#api-e978878591f1723f) | Field |

## Type declaration

<a id="api-56863874a0d36b42"></a>
<!-- api: T:InnoEngine.Assets.AssetReferenceKind c5556afddb489972458939c3dd7516f41a42197f25545aaecc9b0e24e63d8fc0 -->

```csharp
public enum InnoEngine.Assets.AssetReferenceKind : int
```

Identifies a reference source known to the asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L7).

## `AssetDependency`

<a id="api-822d4c25cd41503e"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.AssetDependency 900b3bfd5c91a9382433d0059b79b1348ad3dcdc51e1e82e83a41b58f6567d55 -->

```csharp
InnoEngine.Assets.AssetReferenceKind.AssetDependency = 0
```

The reference originates from another asset's runtime dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L12).

## `Editor`

<a id="api-16ecda9d9344b83c"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.Editor c3ef8ff18641f624d02f462a92d2627d7a0dcd1c868e1428f625ae7893ea373f -->

```csharp
InnoEngine.Assets.AssetReferenceKind.Editor = 4
```

The reference originates from an editor-only view or selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L28).

## `PrefabSource`

<a id="api-63e276606634f500"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.PrefabSource 06264098d1a903a95591a3cd0d36155ffe675241566026886025fce781e9f2e6 -->

```csharp
InnoEngine.Assets.AssetReferenceKind.PrefabSource = 3
```

The reference originates from a prefab source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L24).

## `RuntimeSubsystem`

<a id="api-424cbe83f7a0903f"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.RuntimeSubsystem 6cd5ecbc06fe83d06d3fd567a16b0d9560801ee508a1418ea3d257c5fb53c39f -->

```csharp
InnoEngine.Assets.AssetReferenceKind.RuntimeSubsystem = 5
```

The reference originates from a runtime subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L32).

## `SceneResource`

<a id="api-2a41659ccad7044d"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.SceneResource 5962cef4b0f3b5d62bc67c0b62a82d29a2ead18e9887fbedf6e38782e7454b5e -->

```csharp
InnoEngine.Assets.AssetReferenceKind.SceneResource = 2
```

The reference originates from a scene resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L20).

## `SerializedProperty`

<a id="api-e978878591f1723f"></a>
<!-- api: F:InnoEngine.Assets.AssetReferenceKind.SerializedProperty bb53041c105bfa50c64abbf6a38ff0f3afac59739eba50e7f42c3c4c7725450d -->

```csharp
InnoEngine.Assets.AssetReferenceKind.SerializedProperty = 1
```

The reference originates from a serialized property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L16).
