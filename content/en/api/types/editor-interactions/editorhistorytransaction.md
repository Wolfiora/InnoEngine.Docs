---
title: "EditorHistoryTransaction"
description: "Reference for EditorHistoryTransaction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.0d1a32a55a93dcdf
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryTransaction`

This reference describes `EditorHistoryTransaction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Commit`](#api-d69695aa86018792) | Method |
| [`Dispose`](#api-462037318bf87863) | Method |
| [`Rollback`](#api-005583595d3ff5d8) | Method |
| [`name`](#api-6224186d6b92a716) | Property |

## Type declaration

<a id="api-0d1a32a55a93dcdf"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryTransaction f2c4b561c077b0a06af02e92e07a017245640d333e863e3c077f9f0217ef9853 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryTransaction : System.IDisposable
```

Collects several history operations into one atomic undo and redo entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L8).

## `Commit`

<a id="api-d69695aa86018792"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryTransaction.Commit a89146be30e50746068da065a48bb51abc0237c0f217e6ffa1f8c3d9d877667d -->

```csharp
public void Inno.Editor.Interactions.EditorHistoryTransaction.Commit()
```

Commits all recorded child operations as one atomic history entry.

**Throws `System.InvalidOperationException`:** Thrown when the transaction is no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L36).

## `Dispose`

<a id="api-462037318bf87863"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryTransaction.Dispose 8a28b04110e752434c8d19618d49283d91e80b41466ca95a5aa7e47202d78056 -->

```csharp
public void Inno.Editor.Interactions.EditorHistoryTransaction.Dispose()
```

Rolls back an uncommitted transaction before releasing it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L66).

## `Rollback`

<a id="api-005583595d3ff5d8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryTransaction.Rollback 5abe856fdcd97e996ff21788066771d586bbca4d8ff550c2b898066add832751 -->

```csharp
public Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorHistoryTransaction.Rollback()
```

Reverts every operation recorded by the transaction and does not add a history entry.

**Returns:** The result of the atomic rollback attempt.

**Throws `System.InvalidOperationException`:** Thrown when the transaction is no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L52).

## `name`

<a id="api-6224186d6b92a716"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryTransaction.name 78da8c5560698924c6b6442770babf63604547a291c319d399c09f1919819c2c -->

```csharp
public string Inno.Editor.Interactions.EditorHistoryTransaction.name { get; }
```

Gets the user-facing name assigned to the transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryTransaction.cs#L26).
