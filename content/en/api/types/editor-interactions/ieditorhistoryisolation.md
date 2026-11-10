---
title: "IEditorHistoryIsolation"
description: "Reference for IEditorHistoryIsolation in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.3fcca375f5dc0c28
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `IEditorHistoryIsolation`

This reference describes `IEditorHistoryIsolation` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BeginHistoryIsolation`](#api-3631aa191004ac61) | Method |

## Type declaration

<a id="api-3fcca375f5dc0c28"></a>
<!-- api: T:Inno.Editor.Interactions.IEditorHistoryIsolation feac9874d5755cc5d25bba9e2b4afdff936ed63197c8a2b0c25076c6b1096311 -->

```csharp
public interface Inno.Editor.Interactions.IEditorHistoryIsolation
```

Creates temporary history branches for transient editor workflows without exposing history internals.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistoryIsolation.cs#L8).

## `BeginHistoryIsolation`

<a id="api-3631aa191004ac61"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorHistoryIsolation.BeginHistoryIsolation be7af2b7b7be2b0dd767f89f35e6849f0803ab4943e62d646b98af62b9dc609c -->

```csharp
System.IDisposable Inno.Editor.Interactions.IEditorHistoryIsolation.BeginHistoryIsolation()
```

Starts an independently disposable history branch while retaining the current editing branch.

**Returns:** A lease that releases the temporary branch and restores the retained branch when disposed.

**Throws `System.InvalidOperationException`:** Thrown while another history transition, transaction, or isolated branch is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/IEditorHistoryIsolation.cs#L19).
