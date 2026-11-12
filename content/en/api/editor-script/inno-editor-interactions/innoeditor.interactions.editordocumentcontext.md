---
title: "EditorDocumentContext"
description: "Reference for EditorDocumentContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.370a0792be98577d
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDocumentContext`

This reference describes `EditorDocumentContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-168ddd1649f764ce) | Method |
| [`SetViewParameter`](#api-178d94bfe54c0b5f) | Method |
| [`TryGetViewParameter`](#api-5143c3b00131c5bb) | Method |
| [`assetId`](#api-14a79b29f630bf6c) | Property |
| [`assetPath`](#api-0270d917a855ca21) | Property |
| [`documentId`](#api-a88d2f067d0021f0) | Property |
| [`isDirty`](#api-09a51d847b429947) | Property |
| [`isProviderAvailable`](#api-fa0b9cf9c349540a) | Property |
| [`providerId`](#api-da0424da93f62dc8) | Property |
| [`title`](#api-3342fe5ba814d656) | Property |
| [`viewParameters`](#api-a5d3ca967eef8bf5) | Property |

## Type declaration

<a id="api-370a0792be98577d"></a>
<!-- api: T:InnoEditor.Interactions.EditorDocumentContext f5580c26801cedde74cfaaf0cbaaa4896cc68af2b42bc010caeb320a961138a0 -->

```csharp
public sealed class InnoEditor.Interactions.EditorDocumentContext
```

Stores only stable, reload-safe document identity and provider-owned draft parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L10).

## `#ctor`

<a id="api-168ddd1649f764ce"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentContext.#ctor f53a345a5ef6739f4114bb9aa346074ba4f09218235f1baf547de17e0d55eef3 -->

```csharp
public InnoEditor.Interactions.EditorDocumentContext.EditorDocumentContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L10).

## `SetViewParameter`

<a id="api-178d94bfe54c0b5f"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentContext.SetViewParameter(System.String,System.String) 93b9d80fddd8a8bf2404d3069dc97827d87fa1ed18431f9b594a001b4ce84cfc -->

```csharp
public void InnoEditor.Interactions.EditorDocumentContext.SetViewParameter(string key, string value)
```

Adds or replaces one stable scalar or JSON-formatted view parameter.

**Parameter `key`:** Stable provider-local parameter name.

**Parameter `value`:** Persistent scalar or JSON-formatted value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L76).

## `TryGetViewParameter`

<a id="api-5143c3b00131c5bb"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentContext.TryGetViewParameter(System.String,System.String@) ea9f719edce0e9a1bafbfff39c68f22be18e8eac2caec1c676f59c7ed821b255 -->

```csharp
public bool InnoEditor.Interactions.EditorDocumentContext.TryGetViewParameter(string key, out string value)
```

Tries to read one stable view parameter.

**Parameter `key`:** Stable provider-local parameter name.

**Parameter `value`:** Receives the stored value.

**Returns:** `true` when the parameter exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L97).

## `assetId`

<a id="api-14a79b29f630bf6c"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.assetId 27f95d6a1f36b0a6bf28cc76a34ce5c9728dc50e32ab30f6db8f6d596f62cce0 -->

```csharp
public System.Guid InnoEditor.Interactions.EditorDocumentContext.assetId { get; }
```

Gets the persistent asset identity, or an empty value before the source has one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L35).

## `assetPath`

<a id="api-0270d917a855ca21"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.assetPath a8c7c586d5eb09e80ef2e00fcf63d1a087a3be72957edd34a9bf624fb8baf870 -->

```csharp
public string InnoEditor.Interactions.EditorDocumentContext.assetPath { get; }
```

Gets the normalized project asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L40).

## `documentId`

<a id="api-a88d2f067d0021f0"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.documentId 623c945dd7dc1d736f773e53063f1258a1788233cdb5692114eda230358009f8 -->

```csharp
public System.Guid InnoEditor.Interactions.EditorDocumentContext.documentId { get; }
```

Gets the stable identity of this open source document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L30).

## `isDirty`

<a id="api-09a51d847b429947"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.isDirty 36aee368c77883a0f5f1475df50005d41f568cd42e46af794766e75da0969439 -->

```csharp
public bool InnoEditor.Interactions.EditorDocumentContext.isDirty { get; }
```

Gets whether unsaved source or staged changes exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L55).

## `isProviderAvailable`

<a id="api-fa0b9cf9c349540a"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.isProviderAvailable cba87fc622eff904a76bb9d6bd20534af196db1ceca0a945e0c74372c90d2f6e -->

```csharp
public bool InnoEditor.Interactions.EditorDocumentContext.isProviderAvailable { get; }
```

Gets whether a current-generation provider is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L60).

## `providerId`

<a id="api-da0424da93f62dc8"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.providerId 5bab6f9a6fe1da4e498f5024f9d483a3a894bf00c73b81b72e05b1c43068b987 -->

```csharp
public string InnoEditor.Interactions.EditorDocumentContext.providerId { get; }
```

Gets the stable provider identity used to recover across extension reload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L45).

## `title`

<a id="api-3342fe5ba814d656"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.title cdb0fa5a65198640121b201e01078d63101dd42d54b52b2c7daf3c2113424a96 -->

```csharp
public string InnoEditor.Interactions.EditorDocumentContext.title { get; set; }
```

Gets or sets the author-facing source title used by diagnostics and dedicated editors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L50).

## `viewParameters`

<a id="api-a5d3ca967eef8bf5"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentContext.viewParameters d7548c49f654c74d723e89f2851782ba6a3c65f02b7f03429f3acdd94755ed88 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> InnoEditor.Interactions.EditorDocumentContext.viewParameters { get; }
```

Gets an immutable snapshot of stable view parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L65).
