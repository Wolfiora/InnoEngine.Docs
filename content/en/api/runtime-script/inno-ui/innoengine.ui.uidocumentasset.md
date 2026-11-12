---
title: "UiDocumentAsset"
description: "Reference for UiDocumentAsset in Inno.UI."
uid: api.inno.ui.runtime-script.b945f8272b6a8665
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentAsset`

This reference describes `UiDocumentAsset` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d8368e37a25ab120) | Method |
| [`CreateRuntimePayload`](#api-e8e9d5f782737724) | Method |
| [`OnRuntimePayloadChanged`](#api-50ef4e41510a3465) | Method |
| [`fonts`](#api-d07acaa7d78a79f4) | Property |
| [`implementationId`](#api-6d8b4b0bb7336f67) | Property |
| [`source`](#api-bee5072e3f636c98) | Property |

## Type declaration

<a id="api-b945f8272b6a8665"></a>
<!-- api: T:InnoEngine.UI.UiDocumentAsset 5bb69214e58261f411732f5913c03e414f8d40be548d1971c1d40db9ed90392d -->

```csharp
public sealed class InnoEngine.UI.UiDocumentAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents one imported, language-tagged UI document source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L17).

## `#ctor`

<a id="api-d8368e37a25ab120"></a>
<!-- api: M:InnoEngine.UI.UiDocumentAsset.#ctor 65d7b69c454e7285cab42dc4e4674a64b3f831fb50927a23b366f7a5a6866d6b -->

```csharp
public InnoEngine.UI.UiDocumentAsset.UiDocumentAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L17).

## `CreateRuntimePayload`

<a id="api-e8e9d5f782737724"></a>
<!-- api: M:InnoEngine.UI.UiDocumentAsset.CreateRuntimePayload(System.String,InnoEngine.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{InnoEngine.UI.UiDocumentFontFace}) 24593dfb513cf425982fd799715dc015a379b5c3fa5e5dd1ee1f19cca6d89b80 -->

```csharp
public static byte[] InnoEngine.UI.UiDocumentAsset.CreateRuntimePayload(string implementationId, InnoEngine.UI.UiDocumentSource source, System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiDocumentFontFace>? fonts = null)
```

Encodes an importer-owned runtime payload without exposing an implementation-specific format.

**Parameter `implementationId`:** Stable backend implementation identity.

**Parameter `source`:** Validated frozen document source.

**Parameter `fonts`:** Imported font asset dependencies.

**Returns:** Complete deterministic runtime payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L53).

## `OnRuntimePayloadChanged`

<a id="api-50ef4e41510a3465"></a>
<!-- api: M:InnoEngine.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 708694f454aedb9acff645bf7725154a80b2b03323bc0a391ba012fa3ab46715 -->

```csharp
protected override void InnoEngine.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L90).

## `fonts`

<a id="api-d07acaa7d78a79f4"></a>
<!-- api: P:InnoEngine.UI.UiDocumentAsset.fonts 9496ba60b9f017b1c1e9632fca413f06aade5fda06c1cfb7263618b4ff0c0877 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiDocumentFontFace> InnoEngine.UI.UiDocumentAsset.fonts { get; }
```

Gets font dependencies declared by this document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L31).

## `implementationId`

<a id="api-6d8b4b0bb7336f67"></a>
<!-- api: P:InnoEngine.UI.UiDocumentAsset.implementationId 92d28c09e385a72d46e3e751193fdeb482225371c1f73f11bf687173de3a181a -->

```csharp
public string InnoEngine.UI.UiDocumentAsset.implementationId { get; }
```

Gets the exact backend implementation selected when the source was imported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L36).

## `source`

<a id="api-bee5072e3f636c98"></a>
<!-- api: P:InnoEngine.UI.UiDocumentAsset.source 462899be419c729653ba596aab8358c37909a913dc2cf9c41ecf982b90030924 -->

```csharp
public InnoEngine.UI.UiDocumentSource? InnoEngine.UI.UiDocumentAsset.source { get; }
```

Gets the frozen source, or null before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiDocumentAsset.cs#L27).
