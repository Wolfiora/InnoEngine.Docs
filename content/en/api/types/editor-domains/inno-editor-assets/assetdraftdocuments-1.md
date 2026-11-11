---
title: "AssetDraftDocuments`1"
description: "Reference for AssetDraftDocuments`1 in Inno.Editor.Assets."
uid: api.inno.editor.assets.59b3edbc8dfa119f
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# ``AssetDraftDocuments`1``

This reference describes ``AssetDraftDocuments`1`` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Nested types

- [``AssetDraftDocuments`1.Draft``](assetdraftdocuments-1.draft.md)

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fd3e60cf4366c89c) | Method |
| [`ApplyHistory`](#api-1a72deeadfbcd64e) | Method |
| [`Dispose`](#api-671928ddd5b9fa7e) | Method |
| [`GetDraft`](#api-eb99746c49c9126b) | Method |
| [`Open`](#api-bc354be2e4f86a2b) | Method |
| [`Read`](#api-01ac309ac2712d8a) | Method |
| [`Replace`](#api-36714b82efdb144a) | Method |
| [`ReplaceMany`](#api-206200b71725b824) | Method |
| [`Start`](#api-ce57369af31b1272) | Method |
| [`TryMergeHistory`](#api-58495933ae6abe75) | Method |
| [`Update`](#api-3dd24657e73211a1) | Method |
| [`ValidateHistory`](#api-fe236e51a04108c9) | Method |

## Type declaration

<a id="api-59b3edbc8dfa119f"></a>
<!-- api: T:Inno.Editor.Assets.AssetDraftDocuments`1 d36b720aa4455d2d98706325a4b743fdc907c9ca55b3fedb0cdd2b151d38beba -->

```csharp
public sealed class Inno.Editor.Assets.AssetDraftDocuments<TAsset> where TAsset : Inno.Assets.AssetObject : System.IDisposable
```

Owns detached native asset drafts with shared document, History, recovery and explicit-save semantics.

**Type parameter `TAsset`:** Native source type edited by the consuming feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L19).

## `#ctor`

<a id="api-fd3e60cf4366c89c"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Editor.Interactions.EditorInteractions,System.String,System.String,System.String,System.String) 8ec69f108da762460a7b01338b715f7e4479f24e33a7d84ca0827e3a086503d4 -->

```csharp
public Inno.Editor.Assets.AssetDraftDocuments<TAsset>.AssetDraftDocuments(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Editor.Interactions.EditorInteractions interactions, string providerId, string historyKind, string extension, string label)
```

Creates a feature-owned draft store; call Start after document services become available.

**Parameter `assets`:** Owner of source identities, serialization and import.

**Parameter `serialization`:** Host registry for neutral History and recovery records.

**Parameter `interactions`:** Shared documents and History services.

**Parameter `providerId`:** Stable unique document provider identifier.

**Parameter `historyKind`:** Stable protocol handled by the feature's registered History handler.

**Parameter `extension`:** Native source extension including its leading dot.

**Parameter `label`:** Human-readable singular asset kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L57).

## `ApplyHistory`

<a id="api-1a72deeadfbcd64e"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.ApplyHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection) 43d75245c31b09e34a49ec6ab92dfb03192431bc986d1a4ad2ded4c7d16a1a93 -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.ApplyHistory(Inno.Editor.Interactions.EditorHistoryChange change, Inno.Editor.Interactions.EditorHistoryDirection direction)
```

Applies a previously validated neutral record; failed recovery leaves the draft unchanged.

**Parameter `change`:** Record owned by the shared History service.

**Parameter `direction`:** Requested traversal direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L270).

## `Dispose`

<a id="api-671928ddd5b9fa7e"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Dispose f37ec6451a7a46e80aff54e53f57c812952884ef9e67435a481e4b20d7577eae -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Dispose()
```

Preserves unsaved recovery and unregisters the current feature provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L478).

## `GetDraft`

<a id="api-eb99746c49c9126b"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.GetDraft(System.Guid) 72731a091d782d6dacedf5c0c58d82547e651cb52faa7b806c15663a51740457 -->

```csharp
public Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft Inno.Editor.Assets.AssetDraftDocuments<TAsset>.GetDraft(System.Guid assetId)
```

Gets host-owned neutral presentation state for an open document.

**Parameter `assetId`:** Persistent source identity.

**Returns:** Read-only presentation state; it contains no live asset or extension objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L95).

## `Open`

<a id="api-bc354be2e4f86a2b"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Open(Inno.Assets.AssetPath) 7ed4b3e72a0922668bcdbb25597c540ee3fcdd136bcc4d3683202f7ba2f8ff2e -->

```csharp
public System.Guid Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Open(Inno.Assets.AssetPath path)
```

Opens a native asset source in the shared document service without revealing a second Inspector.

**Parameter `path`:** Source path, including sources with failed imports.

**Returns:** The persistent asset identity used for subsequent draft operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L105).

## `Read`

<a id="api-01ac309ac2712d8a"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Read(System.Guid) 592046fb4df45bb4d433ca9dedfee386c93924272478beaf38aa1bf7c98d3361 -->

```csharp
public TAsset Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Read(System.Guid assetId)
```

Reads a detached current-generation value; callers must never mutate its referenced canonical assets.

**Parameter `assetId`:** Open asset identity.

**Returns:** A detached editable asset whose changes have not been published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L124).

## `Replace`

<a id="api-36714b82efdb144a"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Replace(System.Guid,`0,System.String) e9b7dd163bb3b09de309810ca2d837c61938dfdb71bda87e99bde3842588bb3d -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Replace(System.Guid assetId, TAsset candidate, string? mergeKey = null)
```

Updates the open draft through shared History without saving or publishing a runtime asset.

**Parameter `assetId`:** Open asset identity.

**Parameter `candidate`:** Detached edited asset.

**Parameter `mergeKey`:** The current gesture key, or null for an independent discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L137).

## `ReplaceMany`

<a id="api-206200b71725b824"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary{System.Guid,`0},System.String) 01662c182dffc3428c039d887d579d3b6d5663d801257ce2f15eb0fe61feda31 -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary<System.Guid, TAsset> candidates, string? mergeKey = null)
```

Records a fully validated selection sample atomically in the shared History.

**Parameter `candidates`:** Detached candidates keyed by their persistent source identity.

**Parameter `mergeKey`:** The owning gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L157).

## `Start`

<a id="api-ce57369af31b1272"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Start 17c71061768f46418ad0e4b755908530b3f60775932636feada5a818371d4b9b -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Start()
```

Registers the feature provider with the headless document ownership service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L402).

## `TryMergeHistory`

<a id="api-58495933ae6abe75"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@) f5a22b5465ad307b88bdc8bac3f06bc65b444dd9af9a35a7ab82161ceee67573 -->

```csharp
public bool Inno.Editor.Assets.AssetDraftDocuments<TAsset>.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange older, Inno.Editor.Interactions.EditorHistoryChange newer, out Inno.Editor.Interactions.EditorHistoryChange? merged)
```

Combines adjacent samples of the same document and gesture without retaining live assets.

**Parameter `older`:** The preceding owned record.

**Parameter `newer`:** The subsequent owned record.

**Parameter `merged`:** Receives a new independent payload when the records form a contiguous edit.

**Returns:** True when both records describe the same continuous value change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L221).

## `Update`

<a id="api-3dd24657e73211a1"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.Update 00df66ca55682c7bba575cbdef17af28dcbabbb0b3c4a9fc0a783088c811425c -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Update()
```

Imports explicit saves and reconciles source changes without owning UI gesture lifetimes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L412).

## `ValidateHistory`

<a id="api-fe236e51a04108c9"></a>
<!-- api: M:Inno.Editor.Assets.AssetDraftDocuments`1.ValidateHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection) 6d9ae671d464a02a62f298dba3c7cd0b503b687089a1f15d23f268759c45d332 -->

```csharp
public void Inno.Editor.Assets.AssetDraftDocuments<TAsset>.ValidateHistory(Inno.Editor.Interactions.EditorHistoryChange change, Inno.Editor.Interactions.EditorHistoryDirection direction)
```

Validates a feature's neutral History record without changing the draft.

**Parameter `change`:** Record owned by the shared History service.

**Parameter `direction`:** Requested traversal direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L252).
