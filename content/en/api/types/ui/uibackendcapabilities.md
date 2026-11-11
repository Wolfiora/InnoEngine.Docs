---
title: "UiBackendCapabilities"
description: "Reference for UiBackendCapabilities in Inno.UI."
uid: api.inno.ui.9b4b0a0a92c590ee
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiBackendCapabilities`

This reference describes `UiBackendCapabilities` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-46bca0c223b20d33) | Method |
| [`Supports`](#api-285969b36662cfc5) | Method |
| [`documentLanguages`](#api-3a8867905a639cfe) | Property |
| [`supportsFontCollectionFaces`](#api-43f9686b17731314) | Property |

## Type declaration

<a id="api-9b4b0a0a92c590ee"></a>
<!-- api: T:Inno.UI.UiBackendCapabilities c954dd9e015696bf3806095fa6228b6b15bf435719a000727d829ad54d1951ee -->

```csharp
public sealed class Inno.UI.UiBackendCapabilities
```

Describes optional behavior implemented by one UI backend generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L11).

## `#ctor`

<a id="api-46bca0c223b20d33"></a>
<!-- api: M:Inno.UI.UiBackendCapabilities.#ctor(System.Collections.Generic.IEnumerable{Inno.UI.UiDocumentLanguageId},System.Boolean) 970afd9a5df80de3e5a0f9812847a24d521d14dd7f85ea96bc8b262065865eeb -->

```csharp
public Inno.UI.UiBackendCapabilities.UiBackendCapabilities(System.Collections.Generic.IEnumerable<Inno.UI.UiDocumentLanguageId> documentLanguages, bool supportsFontCollectionFaces)
```

Creates an immutable capability description.

**Parameter `documentLanguages`:** Explicit source languages accepted by the backend.

**Parameter `supportsFontCollectionFaces`:** Whether nonzero font collection face indices can be selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L24).

## `Supports`

<a id="api-285969b36662cfc5"></a>
<!-- api: M:Inno.UI.UiBackendCapabilities.Supports(Inno.UI.UiDocumentLanguageId) 94547ecabb8876b077309d82d807d78c4c16e1086f173f553dc4afbe57c0200d -->

```csharp
public bool Inno.UI.UiBackendCapabilities.Supports(Inno.UI.UiDocumentLanguageId language)
```

Determines whether an exact source language is supported.

**Parameter `language`:** Language to test.

**Returns:** True when the language is registered by this backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L55).

## `documentLanguages`

<a id="api-3a8867905a639cfe"></a>
<!-- api: P:Inno.UI.UiBackendCapabilities.documentLanguages 3684b53da0fde915b293cd835873de38220b4f3298e2e59c9d54f9ced35674b9 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiDocumentLanguageId> Inno.UI.UiBackendCapabilities.documentLanguages { get; }
```

Gets source languages accepted by the backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L39).

## `supportsFontCollectionFaces`

<a id="api-43f9686b17731314"></a>
<!-- api: P:Inno.UI.UiBackendCapabilities.supportsFontCollectionFaces 0374a849ec047c644188a00fd90237bb6d3607e2626c737c49cf6aad29ce9d3f -->

```csharp
public bool Inno.UI.UiBackendCapabilities.supportsFontCollectionFaces { get; }
```

Gets whether the backend can select nonzero faces from a font collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L44).
