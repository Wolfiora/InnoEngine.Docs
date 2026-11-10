---
title: "IEditorHistory"
description: "Reference for IEditorHistory in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.6e8895a5356b1768
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `IEditorHistory`

This reference describes `IEditorHistory` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BeginTransaction`](#api-96b7f505234d7711) | Method |
| [`Execute`](#api-ed997203c9567f7a) | Method |
| [`RecordApplied`](#api-3f11c5cfec83120f) | Method |
| [`Redo`](#api-e25abd6bbad207d0) | Method |
| [`Undo`](#api-b2375ae68f8d4ac4) | Method |
| [`canRedo`](#api-4e3ba21478cf45fa) | Property |
| [`canUndo`](#api-c8c924e2202827f1) | Property |
| [`diskBytes`](#api-7d082d25f71d9bf6) | Property |
| [`faultReason`](#api-50c08388b4a5c643) | Property |
| [`isFaulted`](#api-830cde5dc2e1b0ca) | Property |
| [`redoName`](#api-e69abf0668519cc0) | Property |
| [`redoUnavailableReason`](#api-8a76ac5792e41a30) | Property |
| [`residentBytes`](#api-516c50534dc7bcd3) | Property |
| [`undoName`](#api-0ff807a81e151595) | Property |
| [`undoUnavailableReason`](#api-7fc71156682571ba) | Property |

## Type declaration

<a id="api-6e8895a5356b1768"></a>
<!-- api: T:Inno.Editor.Interactions.IEditorHistory 0cbd8b134a5b88b07948f19c422329b89a595752871fb49e9b2175df92f94a1e -->

```csharp
public interface Inno.Editor.Interactions.IEditorHistory
```

Exposes reload-safe Undo and Redo operations based exclusively on neutral history changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L6).

## `BeginTransaction`

<a id="api-96b7f505234d7711"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistory.BeginTransaction(System.String) d4e65b7b052114716989eb33bb685842c3c2fd3399393000d130b88c7307bbf0 -->

```csharp
Inno.Editor.Interactions.EditorHistoryTransaction Inno.Editor.Interactions.IEditorHistory.BeginTransaction(string name)
```

Begins an atomic group of neutral history operations.

**Parameter `name`:** The user-facing grouped operation name.

**Returns:** A transaction that must be committed or rolled back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L67).

## `Execute`

<a id="api-ed997203c9567f7a"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistory.Execute(System.String,Inno.Editor.Interactions.EditorHistoryChange) e25f3d2faa745ac37351ac6f130e7eaa101a328a467a5c05722e5a227ed0af81 -->

```csharp
Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.IEditorHistory.Execute(string name, Inno.Editor.Interactions.EditorHistoryChange change)
```

Applies and records a neutral change through its current-generation handler.

**Parameter `name`:** The user-facing operation name.

**Parameter `change`:** The independently owned neutral change.

**Returns:** The result of applying the change in the Redo direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L81).

## `RecordApplied`

<a id="api-3f11c5cfec83120f"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistory.RecordApplied(System.String,Inno.Editor.Interactions.EditorHistoryChange) dff3a3f325ff143b30106233a79dcc6d340c5e94c86cfda8d3af7091e2e300de -->

```csharp
void Inno.Editor.Interactions.IEditorHistory.RecordApplied(string name, Inno.Editor.Interactions.EditorHistoryChange change)
```

Records a neutral change whose domain mutation is already applied.

**Parameter `name`:** The user-facing operation name.

**Parameter `change`:** The independently owned neutral change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L95).

## `Redo`

<a id="api-e25abd6bbad207d0"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistory.Redo fdfda19617ae073d162f8edb604d52943eb6da276d15619b16f18dbf58688589 -->

```csharp
Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.IEditorHistory.Redo()
```

Attempts to reapply the newest reverted operation.

**Returns:** The transition result. A state-preserving failure remains available for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L114).

## `Undo`

<a id="api-b2375ae68f8d4ac4"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistory.Undo 3e4bb3b20df9698174cf72b807ba4b3114e86755c0fb0d38dfb47ee3a2d31961 -->

```csharp
Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.IEditorHistory.Undo()
```

Attempts to restore the state preceding the newest committed operation.

**Returns:** The transition result. A state-preserving failure remains available for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L106).

## `canRedo`

<a id="api-4e3ba21478cf45fa"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.canRedo 7fb77374ff3673ddce81568b154c676e06c5e6323352be790c021d6cadf1841a -->

```csharp
bool Inno.Editor.Interactions.IEditorHistory.canRedo { get; }
```

Gets whether a Redo transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L16).

## `canUndo`

<a id="api-c8c924e2202827f1"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.canUndo 0e893d0d49cacda88f807301ed398c0bb2d44d097a19e0bbe1aa0996539b01cb -->

```csharp
bool Inno.Editor.Interactions.IEditorHistory.canUndo { get; }
```

Gets whether an Undo transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L11).

## `diskBytes`

<a id="api-7d082d25f71d9bf6"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.diskBytes c316fb6b27e3385caa17035a1d59ee61b81e8435c16ed5e1dd58525ee78df651 -->

```csharp
long Inno.Editor.Interactions.IEditorHistory.diskBytes { get; }
```

Gets the temporary disk payload bytes retained by committed entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L56).

## `faultReason`

<a id="api-50c08388b4a5c643"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.faultReason d5982aed69aa3af29061eb44a5b381921329a19b492a8baa4788843473e0924b -->

```csharp
string? Inno.Editor.Interactions.IEditorHistory.faultReason { get; }
```

Gets the diagnostic that faulted this history, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L46).

## `isFaulted`

<a id="api-830cde5dc2e1b0ca"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.isFaulted 43d21e8d145929340db1642c5510800e28079a553587c1922dd9c62e3238e3f0 -->

```csharp
bool Inno.Editor.Interactions.IEditorHistory.isFaulted { get; }
```

Gets whether a failed compensation left the domain state indeterminate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L21).

## `redoName`

<a id="api-e69abf0668519cc0"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.redoName e70d55004c05fe6304d3a877414d279d10acf46500650152eb4350a1cccb5fd6 -->

```csharp
string? Inno.Editor.Interactions.IEditorHistory.redoName { get; }
```

Gets the next Redo operation name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L31).

## `redoUnavailableReason`

<a id="api-8a76ac5792e41a30"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.redoUnavailableReason 0d7db5319171a2a0525c650fd21d06097c72b883299b902b80d4a01b52cc7717 -->

```csharp
string? Inno.Editor.Interactions.IEditorHistory.redoUnavailableReason { get; }
```

Gets why the next Redo entry is unavailable, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L41).

## `residentBytes`

<a id="api-516c50534dc7bcd3"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.residentBytes 316e2cc13b467110de07bc8b5d34618b0d350857517c3c529e845aab573e7a24 -->

```csharp
long Inno.Editor.Interactions.IEditorHistory.residentBytes { get; }
```

Gets the resident payload bytes retained by committed entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L51).

## `undoName`

<a id="api-0ff807a81e151595"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.undoName 00f30ba1adb36aef8668e1dbc8e7b630d3bad10e13002a5f1a985da840e4295f -->

```csharp
string? Inno.Editor.Interactions.IEditorHistory.undoName { get; }
```

Gets the next Undo operation name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L26).

## `undoUnavailableReason`

<a id="api-7fc71156682571ba"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorHistory.undoUnavailableReason c134b983e6d9f348e6480bc51ac1515921d3196030bba6bc6c520ed65503db06 -->

```csharp
string? Inno.Editor.Interactions.IEditorHistory.undoUnavailableReason { get; }
```

Gets why the next Undo entry is unavailable, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L36).
