---
title: "EditorHistoryChange"
description: "Reference for EditorHistoryChange in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ed5b76f2cfdd4690
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryChange`

This reference describes `EditorHistoryChange` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5491b780f0a0e8f8) | Method |
| [`Dispose`](#api-083fbc87a8080d00) | Method |
| [`kind`](#api-3187481abe358020) | Property |
| [`mergeKey`](#api-21d3cc9afde2ca6b) | Property |
| [`payload`](#api-6090942709abe36e) | Property |

## Type declaration

<a id="api-ed5b76f2cfdd4690"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryChange 546544ab995d44ed9e2e3e5ebb68bbf7804e113738f6f9fa325fc4b468c01ba7 -->

```csharp
public sealed class InnoEditor.Interactions.EditorHistoryChange : System.IDisposable
```

Describes one neutral reload-safe mutation interpreted by an attribute-discovered history handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L8).

## `#ctor`

<a id="api-5491b780f0a0e8f8"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryChange.#ctor(System.String,InnoEditor.Interactions.EditorHistoryPayload,System.String) b34ffed71c0c5b78727edecdf1f153fac6a64ad3fb66b855551ed3b1305c787a -->

```csharp
public InnoEditor.Interactions.EditorHistoryChange.EditorHistoryChange(string kind, InnoEditor.Interactions.EditorHistoryPayload payload, string? mergeKey = null)
```

Creates a neutral history change.

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

**Throws `System.ArgumentException`:** Thrown when `kind` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `payload` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L30).

## `Dispose`

<a id="api-083fbc87a8080d00"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryChange.Dispose 5d4687f498cea87c94d837265ed038bc64e4ade368ddbfc94cdb20836ec16a8d -->

```csharp
public void InnoEditor.Interactions.EditorHistoryChange.Dispose()
```

Releases the payload storage owned by this history change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L73).

## `kind`

<a id="api-3187481abe358020"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryChange.kind d4c4615becf93d9a37e675b7dfe3771fb324a5a5cdd09f07d7c4eac7c4f4f679 -->

```csharp
public string InnoEditor.Interactions.EditorHistoryChange.kind { get; }
```

Gets the stable globally unique handler protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L44).

## `mergeKey`

<a id="api-21d3cc9afde2ca6b"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryChange.mergeKey 0378501a80dca4bba7fb612c3ae584e9faaf0217482227d9833869e3042bbfc1 -->

```csharp
public string? InnoEditor.Interactions.EditorHistoryChange.mergeKey { get; }
```

Gets the optional stable key used to merge adjacent changes to the same logical value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L54).

## `payload`

<a id="api-6090942709abe36e"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryChange.payload 408f1f8c52978b431872b68d48d712443c79a73a4a81861b4331e61ce1e363bd -->

```csharp
public InnoEditor.Interactions.EditorHistoryPayload InnoEditor.Interactions.EditorHistoryChange.payload { get; }
```

Gets the immutable neutral payload interpreted by the active handler generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L49).
