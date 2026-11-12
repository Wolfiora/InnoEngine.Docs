---
title: "EditorInteractions"
description: "Reference for EditorInteractions in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.e4d93fdd3fc35217
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorInteractions`

This reference describes `EditorInteractions` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-697e41fd05f76d22) | Method |
| [`BeginHistoryIsolation`](#api-20673582fdfacb80) | Method |
| [`ClosePanel`](#api-281012a91d61c429) | Method |
| [`For`](#api-3de013100adebd44) | Method |
| [`GetPanelDeclarations`](#api-396773799ecc4157) | Method |
| [`OpenPanel`](#api-bde4620cc328d472) | Method |
| [`SelectRange`](#api-8e229d497be70019) | Method |
| [`SetSelection`](#api-885e95fd1c477425) | Method |
| [`SetSelection`](#api-1bfa04f657eea908) | Method |
| [`TogglePanel`](#api-b2e2050e9021f6a1) | Method |
| [`ToggleSelection`](#api-fc146c280ae1ec45) | Method |
| [`TryGetActiveDragIdentity`](#api-c43f4c71ffb4db8b) | Method |
| [`TryGetDragSource`](#api-2988b93b922b89a2) | Method |
| [```TryGetModule``1```](#api-ec61c4f4b45da9c8) | Method |
| [`TryGetPanelState`](#api-914f9f998d8327a3) | Method |
| [`TryResolveIdentity`](#api-253e6510f896340d) | Method |
| [`TryResolveIdentity`](#api-cbcf9341874c1ea9) | Method |
| [`documents`](#api-b11fd1084fe5cbc5) | Property |
| [`events`](#api-a67db4ea696624de) | Property |
| [`focusedArea`](#api-cb3c420dffbc58bb) | Property |
| [`focusedTarget`](#api-a7e47a4d4bc04943) | Property |
| [`history`](#api-662f7c10b2fc464c) | Property |
| [`keyboard`](#api-dae80c2f9f6508e6) | Property |
| [`selection`](#api-06a5b4bc4c900cbf) | Property |

## Type declaration

<a id="api-e4d93fdd3fc35217"></a>
<!-- api: T:InnoEditor.Interactions.EditorInteractions 9a34c0fb573a3d3aa046b3df124dcee90708644bd66dc4b047e298bea468c63a -->

```csharp
public sealed class InnoEditor.Interactions.EditorInteractions
```

Provides the single presentation-independent entry point for editor actions, menus, selection, focus, and drag-and-drop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L15).

## `#ctor`

<a id="api-697e41fd05f76d22"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.#ctor 238b8fae8d02a34fde24743c2d243cf1fa349619adadce10700276936a7877f7 -->

```csharp
public InnoEditor.Interactions.EditorInteractions.EditorInteractions()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L15).

## `BeginHistoryIsolation`

<a id="api-20673582fdfacb80"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation ad589768f4c9a847ad6293546083f9ac3944ab6a100c8f2275577ad5ffc1b1bc -->

```csharp
public System.IDisposable InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation()
```

Starts an isolated temporary Undo and Redo branch while retaining the current editing branch.

**Constraints:** Disposing the returned scope releases every temporary operation and restores the retained branch.
This host-level boundary is intended for transient editor sessions such as Play Mode.

**Returns:** A scope that restores the retained history branch when disposed.

**Throws `System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L118).

## `ClosePanel`

<a id="api-281012a91d61c429"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.ClosePanel(System.String) fb1c1d93e1a5a72f6c0d636c229743dd0cdabc6a1cd6788347535bfe891d86eb -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.ClosePanel(string panelId)
```

Closes one panel in the active extension generation without toggling its current state.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L450).

## `For`

<a id="api-3de013100adebd44"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.For(System.String,System.Object) 94c7b37b482329e364fb724c78cc992ae464982d52e713f75c3f09caa465b085 -->

```csharp
public InnoEditor.Interactions.EditorInteraction InnoEditor.Interactions.EditorInteractions.For(string area, object? target = null)
```

Creates a lightweight interaction handle for one area and optional target.

**Parameter `area`:** The stable interaction area.

**Parameter `target`:** The optional object represented by the area.

**Returns:** A lightweight interaction handle.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L173).

## `GetPanelDeclarations`

<a id="api-396773799ecc4157"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.GetPanelDeclarations cf255511b4a11d26e3ea94add8f79b2dde1be577a6a5db3c784533aa84d7c110 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Core.EditorPanelAttribute> InnoEditor.Interactions.EditorInteractions.GetPanelDeclarations()
```

Gets immutable discovery metadata for the active, available panels.

**Returns:** Current panel declarations; the snapshot contains no panel or extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L131).

## `OpenPanel`

<a id="api-bde4620cc328d472"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.OpenPanel(System.String) 2a539d77b2ac76d4f1fd3d3f1e22797bb8e4fcc6829146a092e1d36f2ad55ef2 -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.OpenPanel(string panelId)
```

Opens and requests presentation focus for one panel in the active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L432).

## `SelectRange`

<a id="api-8e229d497be70019"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity},InnoEngine.Core.IdentityObject,System.Boolean) 0ae078c20864e0ca3d8bda25e19eb8105b7b17691c82b878bd43369dc7686fe9 -->

```csharp
public void InnoEditor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList<InnoEngine.Core.RuntimeIdentity> orderedTargets, InnoEngine.Core.IdentityObject target, bool additive = false)
```

Selects the inclusive visible range between the current anchor and the clicked target.

**Parameter `orderedTargets`:** Runtime identities in the current visible sort and filter order, resolved through Core Identity only when selected.

**Parameter `target`:** The clicked range endpoint, which becomes primary.

**Parameter `additive`:** Whether to preserve existing members outside the selected range.

**Throws `System.ArgumentNullException`:** The visible targets or endpoint is null.

**Throws `System.ArgumentException`:** The endpoint is not in the visible target order.

**Throws `System.InvalidOperationException`:** A range identity is unavailable; the current selection remains unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L258).

## `SetSelection`

<a id="api-885e95fd1c477425"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{InnoEngine.Core.IdentityObject},InnoEngine.Core.IdentityObject) b166c2e3cfe3eaadd77dccb250881f8ee45c606688468f17be5824b3a9850d03 -->

```csharp
public void InnoEditor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable<InnoEngine.Core.IdentityObject> targets, InnoEngine.Core.IdentityObject? anchor)
```

Replaces the ordered selection; duplicates are removed and the final target becomes primary.

**Parameter `targets`:** Registered objects resolved for the current callback.

**Parameter `anchor`:** The range anchor, or null to use the first selected target.

**Throws `System.ArgumentNullException`:** The target collection or one member is null.

**Throws `System.InvalidOperationException`:** A target has no live identity registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L208).

## `SetSelection`

<a id="api-1bfa04f657eea908"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.SetSelection(System.Object) 94016b0144a60b9210a12e39027c6ccbd4e159d5efce8cc4ad0e5d137a1d9b73 -->

```csharp
public void InnoEditor.Interactions.EditorInteractions.SetSelection(object? target)
```

Replaces the editor selection after closing presentations owned by other targets.

**Parameter `target`:** The target to select, or `null` to clear the selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L183).

## `TogglePanel`

<a id="api-b2e2050e9021f6a1"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TogglePanel(System.String) 08e4b74f2c8a9930830a3a52e3269ab2977285ba518038a34b952607f63d5b3d -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TogglePanel(string panelId)
```

Toggles one panel in the currently active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found and toggled.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L339).

## `ToggleSelection`

<a id="api-fc146c280ae1ec45"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.ToggleSelection(InnoEngine.Core.IdentityObject) 0cc076958d11aef8149426c0451280bb9e21fc8a6496787b83224a4b58b4a719 -->

```csharp
public void InnoEditor.Interactions.EditorInteractions.ToggleSelection(InnoEngine.Core.IdentityObject target)
```

Adds or removes a member while preserving the existing range anchor.

**Parameter `target`:** A currently registered selection target.

**Throws `System.ArgumentNullException`:** The target is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L226).

## `TryGetActiveDragIdentity`

<a id="api-c43f4c71ffb4db8b"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryGetActiveDragIdentity(InnoEngine.Core.RuntimeIdentity@) e49a6e2dd2b56f107a82a546f2a7518c8a8e78966fc5ddf8f2e975c44e830c16 -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryGetActiveDragIdentity(out InnoEngine.Core.RuntimeIdentity identity)
```

Gets the active drag identity used to select the matching native payload domain.

**Parameter `identity`:** The active runtime identity when one remains valid.

**Returns:** `true` when a live drag source exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L326).

## `TryGetDragSource`

<a id="api-2988b93b922b89a2"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@) e1d29726041371ab85d560599fecf3eba3a90a6aa8c523429bc18ac6da9bdb1f -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity identity, out InnoEngine.Core.IdentityObject? source)
```

Resolves the live source for an active runtime identity.

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

**Returns:** `true` when the identity is active and resolves to a live source; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L313).

## ```TryGetModule``1```

<a id="api-ec61c4f4b45da9c8"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryGetModule``1(``0@) de3764b429318f83a4325ea7c8b0e40eed7970d3cc0885628fb94624db6c7af9 -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryGetModule<TModule>(out TModule? module) where TModule : InnoEditor.Core.EditorModule
```

Resolves an active feature module for immediate use in the current Editor callback.

**Type parameter `TModule`:** The feature module contract to resolve.

**Parameter `module`:** The started, non-quarantined module, or null when unavailable.

**Returns:** True when the active generation supplies the requested module.

**Constraints:** Do not retain the result across callbacks or generation changes. Candidate modules are never exposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L95).

## `TryGetPanelState`

<a id="api-914f9f998d8327a3"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryGetPanelState(System.String,System.Boolean@) fcff0d0b596aedc2d2a2a9314b3c1117aead6a1e78649989418d0e373ee4a3ec -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryGetPanelState(string panelId, out bool isOpen)
```

Reads whether one available panel is currently open.

**Parameter `panelId`:** The stable panel identity.

**Parameter `isOpen`:** Receives the open state, or false when the panel is unavailable.

**Returns:** True when the current generation contains the requested available panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L144).

## `TryResolveIdentity`

<a id="api-253e6510f896340d"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.IdentityDomainId,System.Guid,InnoEngine.Core.IdentityObject@) 79e9bf8e8f49cac40e0e0790813648971da0bbf7beb2575670101cbcfbe2f5d0 -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.IdentityDomainId domainId, System.Guid persistentId, out InnoEngine.Core.IdentityObject? target)
```

Resolves a persistent identity through one explicitly selected Editor identity domain.

**Parameter `domainId`:** Identity domain that owns the object and any replacement generation.

**Parameter `persistentId`:** Stable object identity to resolve inside that domain.

**Parameter `target`:** Receives the current live object, or `null` when the domain or object is unavailable.

**Returns:** `true` when the stable identity resolves in the requested domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L411).

## `TryResolveIdentity`

<a id="api-cbcf9341874c1ea9"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@) 703e6a6ce0b98778cf151a50402c3822c5a4b63b53d34443403ba0fd15cd4f79 -->

```csharp
public bool InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.RuntimeIdentity identity, out InnoEngine.Core.IdentityObject? target)
```

Resolves a domain-qualified runtime identity through the Editor's complete identity-domain set.

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

**Returns:** `true` when the exact identity resolves in its owning domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L387).

## `documents`

<a id="api-b11fd1084fe5cbc5"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.documents a2bddad5a7cd5be195f2c1f4fd2ab53567ada8743485ea068dd14df41b9dbd42 -->

```csharp
public InnoEditor.Interactions.IEditorDocumentService InnoEditor.Interactions.EditorInteractions.documents { get; }
```

Gets the headless reload-safe document lifetime used by dedicated asset editors and Inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L78).

## `events`

<a id="api-a67db4ea696624de"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.events e1c47227387c12a908457dc935be0c2e5a54a5b8e815dd6ebd102e55ba304b9b -->

```csharp
public InnoEngine.Events.EventDispatcher InnoEditor.Interactions.EditorInteractions.events { get; }
```

Gets synchronous Editor lifecycle notifications implemented by the Core event dispatcher.

**Constraints:** Own and dispose a hub rather than retaining callbacks beyond their extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L57).

## `focusedArea`

<a id="api-cb3c420dffbc58bb"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.focusedArea f06210dba7a727905aff35692d32383db7e9d8662b0a2c7e06457111d3bbf3a0 -->

```csharp
public string InnoEditor.Interactions.EditorInteractions.focusedArea { get; }
```

Gets the area that most recently received keyboard focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L123).

## `focusedTarget`

<a id="api-a7e47a4d4bc04943"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.focusedTarget 5eff309ddd7c0b1a9a697d7b2f863916cef7f11339be68c2d137a547ddea85d9 -->

```csharp
public object? InnoEditor.Interactions.EditorInteractions.focusedTarget { get; }
```

Gets the target associated with the focused area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L156).

## `history`

<a id="api-662f7c10b2fc464c"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.history 0ad80900c9515253b615aeaa8e21b104b2c57239fc0282ef764e7703e28600ed -->

```csharp
public InnoEditor.Interactions.IEditorHistory InnoEditor.Interactions.EditorInteractions.history { get; }
```

Gets the transactional Undo and Redo history owned by this editor runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L74).

## `keyboard`

<a id="api-dae80c2f9f6508e6"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.keyboard c7183d229445a793f39338a722730c514096072b48c2fa6c60798382e0f75e4a -->

```csharp
public InnoEditor.Core.EditorKeyboardPolicy InnoEditor.Interactions.EditorInteractions.keyboard { get; }
```

Gets the immutable product keyboard policy used by commands and selection controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L68).

## `selection`

<a id="api-06a5b4bc4c900cbf"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteractions.selection c23f63b45a73b2497d1e8db226607cb6758f3816fee89da92fe75b14ff135b4b -->

```csharp
public InnoEditor.Interactions.EditorSelectionState InnoEditor.Interactions.EditorInteractions.selection { get; }
```

Gets the shared read-only editor selection state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L63).
