---
title: "EditorHistoryTransaction"
description: "Reference for EditorHistoryTransaction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.87f3a4d12434e653
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryTransaction`

This reference describes `EditorHistoryTransaction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0de13b486409de34) | Method |
| [`Commit`](#api-406254b867c1efe0) | Method |
| [`Dispose`](#api-e125e62fc34c9bf8) | Method |
| [`Rollback`](#api-5fb1dd9f0d595df1) | Method |
| [`name`](#api-e0d761b1191c7ccd) | Property |

## Type declaration

<a id="api-87f3a4d12434e653"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryTransaction bbf10dbd15ad57a6e3dc214a702f179a848a58d10c458d1642d14c7d8e115017 -->

```csharp
public sealed class InnoEditor.Interactions.EditorHistoryTransaction : System.IDisposable
```

Collects several history operations into one atomic undo and redo entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L8).

## `#ctor`

<a id="api-0de13b486409de34"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryTransaction.#ctor 825fd0e50a3a30543eb584fbce139e7b5dbb489ff92a29e469e725096eb850fa -->

```csharp
public InnoEditor.Interactions.EditorHistoryTransaction.EditorHistoryTransaction()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L8).

## `Commit`

<a id="api-406254b867c1efe0"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryTransaction.Commit e7f21ec0f6f192ed0c97cfe0dcb1ca866ddc0e487b6c8f590f28e6a2f5171980 -->

```csharp
public void InnoEditor.Interactions.EditorHistoryTransaction.Commit()
```

Commits all recorded child operations as one atomic history entry.

**Throws `System.InvalidOperationException`:** Thrown when the transaction is no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L36).

## `Dispose`

<a id="api-e125e62fc34c9bf8"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryTransaction.Dispose 2ceea6ce54135644565188e0bdd658f7bb9a9d5758ce3f5632bc2df9288cff40 -->

```csharp
public void InnoEditor.Interactions.EditorHistoryTransaction.Dispose()
```

Rolls back an uncommitted transaction before releasing it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L66).

## `Rollback`

<a id="api-5fb1dd9f0d595df1"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryTransaction.Rollback f4c270ea16000f52f4ad1e45139047ed9d0c26b6f1fba8f91a571ccff25dd47b -->

```csharp
public InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorHistoryTransaction.Rollback()
```

Reverts every operation recorded by the transaction and does not add a history entry.

**Returns:** The result of the atomic rollback attempt.

**Throws `System.InvalidOperationException`:** Thrown when the transaction is no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L52).

## `name`

<a id="api-e0d761b1191c7ccd"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryTransaction.name 2f5e4606239dab313734a5be0905184781d5f4209738ffced882712c1166533a -->

```csharp
public string InnoEditor.Interactions.EditorHistoryTransaction.name { get; }
```

Gets the user-facing name assigned to the transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L26).
