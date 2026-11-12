---
title: "IEditorHistory"
description: "Reference for IEditorHistory in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.600ad5c7808b7805
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `IEditorHistory`

This reference describes `IEditorHistory` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`BeginTransaction`](#api-4c08c64ce7f66344) | Method |
| [`Execute`](#api-dbae526580c20345) | Method |
| [`RecordApplied`](#api-91daf5944167a6d4) | Method |
| [`Redo`](#api-dcce878fb2b22397) | Method |
| [`Undo`](#api-372159f324d854eb) | Method |
| [`canRedo`](#api-1c38ce4eaf534090) | Property |
| [`canUndo`](#api-d44a10b926a6331e) | Property |
| [`diskBytes`](#api-a319454b452776e7) | Property |
| [`faultReason`](#api-c598d6b95badad64) | Property |
| [`isFaulted`](#api-5f022f37ed414ff2) | Property |
| [`redoName`](#api-e75192708f5dc4c8) | Property |
| [`redoUnavailableReason`](#api-2f4a3fb61298aa52) | Property |
| [`residentBytes`](#api-aad2b8f21e526ce1) | Property |
| [`undoName`](#api-995a7faa12216077) | Property |
| [`undoUnavailableReason`](#api-3b88cb6dc333705e) | Property |

## Type declaration

<a id="api-600ad5c7808b7805"></a>
<!-- api: T:InnoEditor.Interactions.IEditorHistory 1536c2e3ccb8a83e736cf410cd4241599f49eabca8f1184b2cc38c7eff5190e5 -->

```csharp
public interface InnoEditor.Interactions.IEditorHistory
```

Exposes reload-safe Undo and Redo operations based exclusively on neutral history changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L6).

## `BeginTransaction`

<a id="api-4c08c64ce7f66344"></a>
<!-- api: M:InnoEditor.Interactions.IEditorHistory.BeginTransaction(System.String) 2d65e077974bf6c7ac43d00001e2ad938e21acef1b5bb567285393be7adc9e46 -->

```csharp
InnoEditor.Interactions.EditorHistoryTransaction InnoEditor.Interactions.IEditorHistory.BeginTransaction(string name)
```

Begins an atomic group of neutral history operations.

**Parameter `name`:** The user-facing grouped operation name.

**Returns:** A transaction that must be committed or rolled back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L67).

## `Execute`

<a id="api-dbae526580c20345"></a>
<!-- api: M:InnoEditor.Interactions.IEditorHistory.Execute(System.String,InnoEditor.Interactions.EditorHistoryChange) c23f9d6bef5b514dbae2d63d8342fc292dec48a2c25b684326f76c50e3ca8cc8 -->

```csharp
InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.IEditorHistory.Execute(string name, InnoEditor.Interactions.EditorHistoryChange change)
```

Applies and records a neutral change through its current-generation handler.

**Parameter `name`:** The user-facing operation name.

**Parameter `change`:** The independently owned neutral change.

**Returns:** The result of applying the change in the Redo direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L81).

## `RecordApplied`

<a id="api-91daf5944167a6d4"></a>
<!-- api: M:InnoEditor.Interactions.IEditorHistory.RecordApplied(System.String,InnoEditor.Interactions.EditorHistoryChange) c5a967748ae175193713d4404455bbcaaf96d743516ae71f444b7b9e2873afdb -->

```csharp
void InnoEditor.Interactions.IEditorHistory.RecordApplied(string name, InnoEditor.Interactions.EditorHistoryChange change)
```

Records a neutral change whose domain mutation is already applied.

**Parameter `name`:** The user-facing operation name.

**Parameter `change`:** The independently owned neutral change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L95).

## `Redo`

<a id="api-dcce878fb2b22397"></a>
<!-- api: M:InnoEditor.Interactions.IEditorHistory.Redo 60d3abb77af84075b7b17400993678e1f8541ba75107ee358501509d0ed98cb6 -->

```csharp
InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.IEditorHistory.Redo()
```

Attempts to reapply the newest reverted operation.

**Returns:** The transition result. A state-preserving failure remains available for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L114).

## `Undo`

<a id="api-372159f324d854eb"></a>
<!-- api: M:InnoEditor.Interactions.IEditorHistory.Undo 0f66952999d630778c372c4be670121a9383d0a3945a5d794c0d8a80c942cadd -->

```csharp
InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.IEditorHistory.Undo()
```

Attempts to restore the state preceding the newest committed operation.

**Returns:** The transition result. A state-preserving failure remains available for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L106).

## `canRedo`

<a id="api-1c38ce4eaf534090"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.canRedo d3f0bf4879fdc02912602a674b80655704f9af1ced52da053832e03333803844 -->

```csharp
bool InnoEditor.Interactions.IEditorHistory.canRedo { get; }
```

Gets whether a Redo transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L16).

## `canUndo`

<a id="api-d44a10b926a6331e"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.canUndo 63100404de45380bfb79d289fe685e321ba500b997e8e714de1cc6eb72dba784 -->

```csharp
bool InnoEditor.Interactions.IEditorHistory.canUndo { get; }
```

Gets whether an Undo transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L11).

## `diskBytes`

<a id="api-a319454b452776e7"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.diskBytes 10be521390a77fb4d0390a354661819ff95c0ea24790cd85ce5867b53d5dd184 -->

```csharp
long InnoEditor.Interactions.IEditorHistory.diskBytes { get; }
```

Gets the temporary disk payload bytes retained by committed entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L56).

## `faultReason`

<a id="api-c598d6b95badad64"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.faultReason 66f35d26cb654cd8491c31e5f5797c8657108d14c15500c390d88bbeed0beb9c -->

```csharp
string? InnoEditor.Interactions.IEditorHistory.faultReason { get; }
```

Gets the diagnostic that faulted this history, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L46).

## `isFaulted`

<a id="api-5f022f37ed414ff2"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.isFaulted dc3336efe90ede76791af82d48f0810c9271b6ad31c5944d6048c354e5c39fd6 -->

```csharp
bool InnoEditor.Interactions.IEditorHistory.isFaulted { get; }
```

Gets whether a failed compensation left the domain state indeterminate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L21).

## `redoName`

<a id="api-e75192708f5dc4c8"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.redoName 7208a41b499fd9565e79780db5b4e3af785156fe07b1c853013d07d8c97c49d2 -->

```csharp
string? InnoEditor.Interactions.IEditorHistory.redoName { get; }
```

Gets the next Redo operation name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L31).

## `redoUnavailableReason`

<a id="api-2f4a3fb61298aa52"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.redoUnavailableReason b94104e3085fa1481b5972c48a48c3be63707a1817c567ffc81eb458230f71a9 -->

```csharp
string? InnoEditor.Interactions.IEditorHistory.redoUnavailableReason { get; }
```

Gets why the next Redo entry is unavailable, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L41).

## `residentBytes`

<a id="api-aad2b8f21e526ce1"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.residentBytes c511274b3a628679519ddd73dd557c809eb041c768b9da34fd49902769c0f208 -->

```csharp
long InnoEditor.Interactions.IEditorHistory.residentBytes { get; }
```

Gets the resident payload bytes retained by committed entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L51).

## `undoName`

<a id="api-995a7faa12216077"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.undoName 253c854758dae636372f181807fb9b6d9dae43fbed955b89d063f7c096cffa1c -->

```csharp
string? InnoEditor.Interactions.IEditorHistory.undoName { get; }
```

Gets the next Undo operation name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L26).

## `undoUnavailableReason`

<a id="api-3b88cb6dc333705e"></a>
<!-- api: P:InnoEditor.Interactions.IEditorHistory.undoUnavailableReason 0b0438ace41dca4fbc420206d8d021d3b72b0abc715427195274e1ab043dc6fa -->

```csharp
string? InnoEditor.Interactions.IEditorHistory.undoUnavailableReason { get; }
```

Gets why the next Undo entry is unavailable, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistory.cs#L36).
