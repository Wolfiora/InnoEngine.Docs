---
title: "IEditorSelectionCoordinator"
description: "Reference for IEditorSelectionCoordinator in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.83dc74edddaf73ea
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `IEditorSelectionCoordinator`

This reference describes `IEditorSelectionCoordinator` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`RegisterIdentityDomain`](#api-fca6b3e6f0aac0aa) | Method |
| [`SetSelection`](#api-126a7cd67c25eef8) | Method |
| [`selectedTarget`](#api-b2630d20a7058fe2) | Property |

## Type declaration

<a id="api-83dc74edddaf73ea"></a>
<!-- api: T:Inno.Editor.Interactions.IEditorSelectionCoordinator 545698c58b88f17b5da1dc380e70ae32e9b4e0f51a89f67a9896470709503de1 -->

```csharp
public interface Inno.Editor.Interactions.IEditorSelectionCoordinator
```

Coordinates host-owned selection and the Core identity lifetime of temporary presentations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/IEditorSelectionCoordinator.cs#L10).

## `RegisterIdentityDomain`

<a id="api-fca6b3e6f0aac0aa"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorSelectionCoordinator.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator) 0070b062adba2dbea345fb7512a61de7f3c32ffc0cf60ff06fed52a65a54bca0 -->

```csharp
System.IDisposable Inno.Editor.Interactions.IEditorSelectionCoordinator.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator allocator)
```

Registers the Core identity domain used by a temporary scene presentation.

**Parameter `allocator`:** The borrowed allocator owned by that presentation's runtime session.

**Returns:** A routing lease released after restoring the preceding selection.

**Throws `System.ArgumentNullException`:** The allocator is null.

**Throws `System.InvalidOperationException`:** The domain is already active or the caller is not the owner thread.

**Throws `System.ObjectDisposedException`:** The coordinator has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/IEditorSelectionCoordinator.cs#L31).

## `SetSelection`

<a id="api-126a7cd67c25eef8"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorSelectionCoordinator.SetSelection(System.Object) 22af3ac8b0bd5506ee1669858cedb5b2ab384493b0cbbb2d39e36c19d2a801af -->

```csharp
void Inno.Editor.Interactions.IEditorSelectionCoordinator.SetSelection(object? target)
```

Replaces the current target after closing presentations owned by another target.

**Parameter `target`:** The new target, or `null` to clear selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/IEditorSelectionCoordinator.cs#L44).

## `selectedTarget`

<a id="api-b2630d20a7058fe2"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorSelectionCoordinator.selectedTarget 77ecbc23087d925c23456697d3fa1b1aa20cc2f5ffe3c660043317e7290a0ed6 -->

```csharp
object? Inno.Editor.Interactions.IEditorSelectionCoordinator.selectedTarget { get; }
```

Gets the currently selected target, or `null` when selection is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/IEditorSelectionCoordinator.cs#L36).
