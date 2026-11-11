---
title: "UiDocumentAsset"
description: "Reference for UiDocumentAsset in Inno.UI."
uid: api.inno.ui.0a6d478fc3d7dc43
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentAsset`

This reference describes `UiDocumentAsset` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4c19f6f7c0258afd) | Method |
| [`CreateRuntimePayload`](#api-9515919ac755f2cc) | Method |
| [`OnRuntimePayloadChanged`](#api-0b311bd490bd89be) | Method |
| [`fonts`](#api-dcfb6fc1cd17c96b) | Property |
| [`implementationId`](#api-4dae5531559a0815) | Property |
| [`source`](#api-5b58dd2159033e9d) | Property |

## Type declaration

<a id="api-0a6d478fc3d7dc43"></a>
<!-- api: T:Inno.UI.UiDocumentAsset ef88f54bc5bf7c02c986811a9a89b4f760a8d1006277c44f4db3f1cd6258bdbb -->

```csharp
public sealed class Inno.UI.UiDocumentAsset : Inno.Assets.AssetObject
```

Represents one imported, language-tagged UI document source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L17).

## `#ctor`

<a id="api-4c19f6f7c0258afd"></a>
<!-- api: M:Inno.UI.UiDocumentAsset.#ctor 5df6a0bd779a7365aaabba972c29c0666420ec4165b874f332e2748b4bc0ef3e -->

```csharp
public Inno.UI.UiDocumentAsset.UiDocumentAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L17).

## `CreateRuntimePayload`

<a id="api-9515919ac755f2cc"></a>
<!-- api: M:Inno.UI.UiDocumentAsset.CreateRuntimePayload(System.String,Inno.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{Inno.UI.UiDocumentFontFace}) ceb8cae356074aa71a3e3e6b7f5bdaad97214ded5bc654a3df339b6ff9e31932 -->

```csharp
public static byte[] Inno.UI.UiDocumentAsset.CreateRuntimePayload(string implementationId, Inno.UI.UiDocumentSource source, System.Collections.Generic.IReadOnlyList<Inno.UI.UiDocumentFontFace>? fonts = null)
```

Encodes an importer-owned runtime payload without exposing an implementation-specific format.

**Parameter `implementationId`:** Stable backend implementation identity.

**Parameter `source`:** Validated frozen document source.

**Parameter `fonts`:** Imported font asset dependencies.

**Returns:** Complete deterministic runtime payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L53).

## `OnRuntimePayloadChanged`

<a id="api-0b311bd490bd89be"></a>
<!-- api: M:Inno.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) f99effc614b8bd3c8dfbd78562faf76318037e1244f87ed7e7066d1f38f0131f -->

```csharp
protected override void Inno.UI.UiDocumentAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L90).

## `fonts`

<a id="api-dcfb6fc1cd17c96b"></a>
<!-- api: P:Inno.UI.UiDocumentAsset.fonts 110eeb4167482d61f116b835dbd58d9aa93e97d3f0a887c055aa93c6db1f7db1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiDocumentFontFace> Inno.UI.UiDocumentAsset.fonts { get; }
```

Gets font dependencies declared by this document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L31).

## `implementationId`

<a id="api-4dae5531559a0815"></a>
<!-- api: P:Inno.UI.UiDocumentAsset.implementationId 1ab85b214ab9a6f636b228c61152cc867b35029115ba89728097bdef4335df58 -->

```csharp
public string Inno.UI.UiDocumentAsset.implementationId { get; }
```

Gets the exact backend implementation selected when the source was imported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L36).

## `source`

<a id="api-5b58dd2159033e9d"></a>
<!-- api: P:Inno.UI.UiDocumentAsset.source 0647be106353fe2567a17c3a378f4586393fac31ebcd86cf2e9c743d9e5ee6fb -->

```csharp
public Inno.UI.UiDocumentSource? Inno.UI.UiDocumentAsset.source { get; }
```

Gets the frozen source, or null before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentAsset.cs#L27).
