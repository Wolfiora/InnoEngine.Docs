---
title: "NativeAssetSourceSerialization"
description: "Reference for NativeAssetSourceSerialization in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.68234213f2a1341a
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `NativeAssetSourceSerialization`

This reference describes `NativeAssetSourceSerialization` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Export``1```](#api-73671be88f69ff71) | Method |
| [```Import``1```](#api-15aeb77c4241d9be) | Method |

## Type declaration

<a id="api-68234213f2a1341a"></a>
<!-- api: T:InnoEditor.Assets.NativeAssetSourceSerialization cd49c8891ba58624a41980f06cc28dab286f858e1449ebe20a29fa77f5831cf8 -->

```csharp
public static class InnoEditor.Assets.NativeAssetSourceSerialization
```

Imports and exports editable asset source state through the common native serializer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L13).

## ```Export``1```

<a id="api-73671be88f69ff71"></a>
<!-- api: M:InnoEditor.Assets.NativeAssetSourceSerialization.Export``1(``0,InnoEditor.Assets.AssetSerializationServices) 5c035ffa02b04a4ffda1b051e3f70bbd61f0a05120003673ffb5d9d4ce0bda40 -->

```csharp
public static byte[] InnoEditor.Assets.NativeAssetSourceSerialization.Export<TAsset>(TAsset asset, InnoEditor.Assets.AssetSerializationServices services) where TAsset : InnoEngine.Assets.AssetObject
```

Serializes one asset's editable properties and direct asset dependencies.

**Type parameter `TAsset`:** Concrete asset source type.

**Parameter `asset`:** Unsaved or loaded asset whose editable state should be captured.

**Parameter `services`:** The generation-bound serialization services supplied by the export context.

**Returns:** Deterministic native source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L30).

## ```Import``1```

<a id="api-15aeb77c4241d9be"></a>
<!-- api: M:InnoEditor.Assets.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},InnoEditor.Assets.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}@) 5312ebd41154ee86e758bf44feb987cf8ce03eb18ad4485348f964615d3766a4 -->

```csharp
public static TAsset InnoEditor.Assets.NativeAssetSourceSerialization.Import<TAsset>(System.ReadOnlySpan<byte> bytes, InnoEditor.Assets.AssetSerializationServices services, out System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetDependency> dependencies) where TAsset : InnoEngine.Assets.AssetObject
```

Restores one concrete asset and its declared direct dependencies.

**Type parameter `TAsset`:** Concrete asset source type.

**Parameter `bytes`:** Native source bytes.

**Parameter `dependencies`:** Receives persistent dependencies discovered during export.

**Parameter `services`:** The generation-bound serialization and reference services supplied by the import context.

**Returns:** A detached asset ready for an import transaction.

**Throws `System.InvalidOperationException`:** Thrown when the source type identity is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L73).
