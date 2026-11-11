---
title: "UiDocumentSource"
description: "Reference for UiDocumentSource in Inno.UI."
uid: api.inno.ui.13cd221296c74a30
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentSource`

This reference describes `UiDocumentSource` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cee22f2f180fac6c) | Method |
| [`language`](#api-22713592c992652d) | Property |
| [`sourceUri`](#api-1ac3b66f349e00d4) | Property |
| [`text`](#api-4f8a6146ee5dc7a5) | Property |

## Type declaration

<a id="api-13cd221296c74a30"></a>
<!-- api: T:Inno.UI.UiDocumentSource 99d39866a60ce4bfe3326790aa7fcbc47814269569e7e6ecc30af4f831109a81 -->

```csharp
public sealed class Inno.UI.UiDocumentSource
```

Contains immutable text in one explicitly selected UI document language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L67).

## `#ctor`

<a id="api-cee22f2f180fac6c"></a>
<!-- api: M:Inno.UI.UiDocumentSource.#ctor(Inno.UI.UiDocumentLanguageId,System.String,System.String) 11e5efed62a0afd24bd4b5f5c15cf93e7f27dd2d1aab64be3c95fe854c9491ff -->

```csharp
public Inno.UI.UiDocumentSource.UiDocumentSource(Inno.UI.UiDocumentLanguageId language, string text, string sourceUri = "memory://ui-document")
```

Creates a validated in-memory document source.

**Parameter `language`:** Explicit source language understood by a registered backend.

**Parameter `text`:** Complete immutable document text.

**Parameter `sourceUri`:** Virtual source address used only for diagnostics and relative dependency identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L81).

## `language`

<a id="api-22713592c992652d"></a>
<!-- api: P:Inno.UI.UiDocumentSource.language 0ff995fd77f080588f3456954bb33b652adb52601b36637c579c1ec38d134143 -->

```csharp
public Inno.UI.UiDocumentLanguageId Inno.UI.UiDocumentSource.language { get; }
```

Gets the explicitly selected source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L98).

## `sourceUri`

<a id="api-1ac3b66f349e00d4"></a>
<!-- api: P:Inno.UI.UiDocumentSource.sourceUri 1e8a8a76bdca9b654a08f8616feb3a29cca481bf4d4b7c33099e0f13bf2c93f4 -->

```csharp
public string Inno.UI.UiDocumentSource.sourceUri { get; }
```

Gets the virtual source address.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L106).

## `text`

<a id="api-4f8a6146ee5dc7a5"></a>
<!-- api: P:Inno.UI.UiDocumentSource.text 3a398d811f40dd40d2abef852d243cb57f624570cb5cb834423175ecc57e9ba6 -->

```csharp
public string Inno.UI.UiDocumentSource.text { get; }
```

Gets the complete immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L102).
