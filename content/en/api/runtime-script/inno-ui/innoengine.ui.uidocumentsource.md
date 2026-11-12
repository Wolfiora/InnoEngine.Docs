---
title: "UiDocumentSource"
description: "Reference for UiDocumentSource in Inno.UI."
uid: api.inno.ui.runtime-script.e702e4d4c3fc484e
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentSource`

This reference describes `UiDocumentSource` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-96e5eef6511e2f42) | Method |
| [`language`](#api-bf9ec986f297bcb2) | Property |
| [`sourceUri`](#api-928371902ba724d2) | Property |
| [`text`](#api-fb56412ef88905e1) | Property |

## Type declaration

<a id="api-e702e4d4c3fc484e"></a>
<!-- api: T:InnoEngine.UI.UiDocumentSource 7d5aeb503ceba1fa041bdbf7abb9f51d8a2166b21c59f07bfde1bebd1a72895c -->

```csharp
public sealed class InnoEngine.UI.UiDocumentSource
```

Contains immutable text in one explicitly selected UI document language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L67).

## `#ctor`

<a id="api-96e5eef6511e2f42"></a>
<!-- api: M:InnoEngine.UI.UiDocumentSource.#ctor(InnoEngine.UI.UiDocumentLanguageId,System.String,System.String) 46ac4fbef730de79d33ea4fbe9fbf446ec8b3f589116f47e07ee8bebc6d71511 -->

```csharp
public InnoEngine.UI.UiDocumentSource.UiDocumentSource(InnoEngine.UI.UiDocumentLanguageId language, string text, string sourceUri = "memory://ui-document")
```

Creates a validated in-memory document source.

**Parameter `language`:** Explicit source language understood by a registered backend.

**Parameter `text`:** Complete immutable document text.

**Parameter `sourceUri`:** Virtual source address used only for diagnostics and relative dependency identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L81).

## `language`

<a id="api-bf9ec986f297bcb2"></a>
<!-- api: P:InnoEngine.UI.UiDocumentSource.language 612db64bf8c5b2ad163b14dab178c069c375a62465f9f52b8856cd9d1a765ce5 -->

```csharp
public InnoEngine.UI.UiDocumentLanguageId InnoEngine.UI.UiDocumentSource.language { get; }
```

Gets the explicitly selected source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L98).

## `sourceUri`

<a id="api-928371902ba724d2"></a>
<!-- api: P:InnoEngine.UI.UiDocumentSource.sourceUri c790e3fa95e2f997880ca648bc6b1f3285c44281637ab8e70797b44df1f12257 -->

```csharp
public string InnoEngine.UI.UiDocumentSource.sourceUri { get; }
```

Gets the virtual source address.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L106).

## `text`

<a id="api-fb56412ef88905e1"></a>
<!-- api: P:InnoEngine.UI.UiDocumentSource.text 4887087907652066f3ba95f2955f8a93d7ac6f9491b585922a18320641c31d6f -->

```csharp
public string InnoEngine.UI.UiDocumentSource.text { get; }
```

Gets the complete immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L102).
