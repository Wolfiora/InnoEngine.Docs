---
title: "UiEvent"
description: "Reference for UiEvent in Inno.UI."
uid: api.inno.ui.ab2f4ff6598192b6
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiEvent`

This reference describes `UiEvent` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-77ff5700e2212972) | Method |
| [`document`](#api-ce1c0ce79c3345e1) | Property |
| [`targetId`](#api-3fa1238af92f36be) | Property |
| [`type`](#api-a6012dc4a0c5d268) | Property |

## Type declaration

<a id="api-ab2f4ff6598192b6"></a>
<!-- api: T:Inno.UI.UiEvent 0829b459c57246567cce4905861bc0564a53b899ab655782a9b065ef3c6aec0e -->

```csharp
public sealed class Inno.UI.UiEvent : Inno.Core.Events.Event
```

Describes one queued document event after a context update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L229).

## `#ctor`

<a id="api-77ff5700e2212972"></a>
<!-- api: M:Inno.UI.UiEvent.#ctor(Inno.UI.UiEventType,Inno.UI.UiDocumentHandle,System.String) f757314660e86ab7803732c9de664b42517e207c8e525027503c311f32a030ae -->

```csharp
public Inno.UI.UiEvent.UiEvent(Inno.UI.UiEventType type, Inno.UI.UiDocumentHandle document, string targetId)
```

Creates a document event with its source document and target element.

**Parameter `type`:** The kind of document interaction.

**Parameter `document`:** The document that produced the event.

**Parameter `targetId`:** The target element identifier, which can be empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L243).

## `document`

<a id="api-ce1c0ce79c3345e1"></a>
<!-- api: P:Inno.UI.UiEvent.document 827d982baec2ec60d27122256cab4f94daf4fc3f70bbf0b3cc231d2a127ce9eb -->

```csharp
public Inno.UI.UiDocumentHandle Inno.UI.UiEvent.document { get; }
```

Gets the source document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L261).

## `targetId`

<a id="api-3fa1238af92f36be"></a>
<!-- api: P:Inno.UI.UiEvent.targetId c621927bc28ff1144f7203f7e657ec04203d28ddc2109c18f3f33d4825e4814f -->

```csharp
public string Inno.UI.UiEvent.targetId { get; }
```

Gets the target element identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L266).

## `type`

<a id="api-a6012dc4a0c5d268"></a>
<!-- api: P:Inno.UI.UiEvent.type 81eeb008559ce6b61a177e7865c4a201850c334dafef7386d73e07f2e4063d71 -->

```csharp
public Inno.UI.UiEventType Inno.UI.UiEvent.type { get; }
```

Gets the kind of document interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L256).
