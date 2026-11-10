---
title: "EditorInteractions"
description: "Reference for EditorInteractions in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.272861538ee12f87
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorInteractions`

This reference describes `EditorInteractions` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.Interactions.IEditorSelectionCoordinator`, `Inno.Editor.Interactions.IEditorHistoryIsolation`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginHistoryIsolation`](#api-29330961e9c2b565) | Method |
| [`ClosePanel`](#api-6df798df48c99ff3) | Method |
| [`For`](#api-9df5cf164e5d89a6) | Method |
| [`GetPanelDeclarations`](#api-1f3fdc30c4a515e7) | Method |
| [`OpenPanel`](#api-56a6bb564392da4a) | Method |
| [`RegisterIdentityDomain`](#api-d4f4318191fc33e7) | Method |
| [`SelectRange`](#api-76bbbdb2d0d773ce) | Method |
| [`SetSelection`](#api-e892dbb3126ac9c9) | Method |
| [`SetSelection`](#api-00cbb11ebcef45ce) | Method |
| [`TogglePanel`](#api-c596e15bf18e6387) | Method |
| [`ToggleSelection`](#api-e307af9890698ab7) | Method |
| [`TryGetActiveDragIdentity`](#api-cdfb6508266f43cd) | Method |
| [`TryGetDragSource`](#api-10fad60239fa7cfd) | Method |
| [```TryGetModule``1```](#api-1ba6c9ce21fce782) | Method |
| [`TryGetPanelState`](#api-086093bd92badb9d) | Method |
| [`TryResolveIdentity`](#api-df00ca2a1a25d2c8) | Method |
| [`TryResolveIdentity`](#api-e1f1f41d986ab499) | Method |
| [`documents`](#api-1b9a01c34de149a6) | Property |
| [`events`](#api-54b56f5ae124e113) | Property |
| [`focusedArea`](#api-b99defe56446b8a5) | Property |
| [`focusedTarget`](#api-f9720500a2139181) | Property |
| [`history`](#api-e6a0d7fc2a854104) | Property |
| [`keyboard`](#api-0280669dc9db2dfd) | Property |
| [`selection`](#api-fb55b93eb85546e0) | Property |

## Type declaration

<a id="api-272861538ee12f87"></a>
<!-- api: T:Inno.Editor.Interactions.EditorInteractions 109fc8e106832a09f45f65db23f153cad634e6c4a57dbfb39d3c13d672ed28f0 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorInteractions : Inno.Editor.Interactions.IEditorSelectionCoordinator, Inno.Editor.Interactions.IEditorHistoryIsolation
```

Provides the single presentation-independent entry point for editor actions, menus, selection, focus, and drag-and-drop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L15).

## `BeginHistoryIsolation`

<a id="api-29330961e9c2b565"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.BeginHistoryIsolation 2c8279b5d7e9ac10449b355e5d5f10b28062ca493846e927f4a592d86dc7f643 -->

```csharp
public System.IDisposable Inno.Editor.Interactions.EditorInteractions.BeginHistoryIsolation()
```

Starts an isolated temporary Undo and Redo branch while retaining the current editing branch.

**Constraints:** Disposing the returned scope releases every temporary operation and restores the retained branch.
This host-level boundary is intended for transient editor sessions such as Play Mode.

**Returns:** A scope that restores the retained history branch when disposed.

**Throws `System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L118).

## `ClosePanel`

<a id="api-6df798df48c99ff3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.ClosePanel(System.String) a66b5656b0ef1c1aaff6ede0a0d7eb54b8905a3c77b316b1ae5a3dd11463ca6f -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.ClosePanel(string panelId)
```

Closes one panel in the active extension generation without toggling its current state.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L450).

## `For`

<a id="api-9df5cf164e5d89a6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.For(System.String,System.Object) f9585b1a74871b6d1003da8d6f8356c122c48dcef7e3a922bb681aac6c97b6be -->

```csharp
public Inno.Editor.Interactions.EditorInteraction Inno.Editor.Interactions.EditorInteractions.For(string area, object? target = null)
```

Creates a lightweight interaction handle for one area and optional target.

**Parameter `area`:** The stable interaction area.

**Parameter `target`:** The optional object represented by the area.

**Returns:** A lightweight interaction handle.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L173).

## `GetPanelDeclarations`

<a id="api-1f3fdc30c4a515e7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.GetPanelDeclarations 1ab48741ac47ee6961e5131664118365c964b07c1f8f0cf1140a40ce0df8ef73 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Core.EditorPanelAttribute> Inno.Editor.Interactions.EditorInteractions.GetPanelDeclarations()
```

Gets immutable discovery metadata for the active, available panels.

**Returns:** Current panel declarations; the snapshot contains no panel or extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L131).

## `OpenPanel`

<a id="api-56a6bb564392da4a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.OpenPanel(System.String) 72908515f0326302dcf403e4142b42d512426b22e76cc695d251f94763273650 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.OpenPanel(string panelId)
```

Opens and requests presentation focus for one panel in the active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L432).

## `RegisterIdentityDomain`

<a id="api-d4f4318191fc33e7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator) c253c9988d2e0d1c214050ca77852814513edcdf3b2b13008dce2e4e2341c55d -->

```csharp
public System.IDisposable Inno.Editor.Interactions.EditorInteractions.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator allocator)
```

Makes a temporary Core identity domain available to selection, focus and drag resolution.

**Parameter `allocator`:** The borrowed allocator owned by the temporary runtime session.

**Returns:** A routing lease; retire it after restoring Edit selection and before releasing the session.

**Throws `System.ArgumentNullException`:** The allocator is null.

**Throws `System.InvalidOperationException`:** The domain is already registered or the caller is not the owner thread.

**Throws `System.ObjectDisposedException`:** The interaction runtime has retired its identity routing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L364).

## `SelectRange`

<a id="api-76bbbdb2d0d773ce"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{Inno.Core.Identity.RuntimeIdentity},Inno.Core.Identity.IdentityObject,System.Boolean) 070b88d9efaa02ac7a31abd16ea7d6708af6af7358b820f73d429cb258351a67 -->

```csharp
public void Inno.Editor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList<Inno.Core.Identity.RuntimeIdentity> orderedTargets, Inno.Core.Identity.IdentityObject target, bool additive = false)
```

Selects the inclusive visible range between the current anchor and the clicked target.

**Parameter `orderedTargets`:** Runtime identities in the current visible sort and filter order, resolved through Core Identity only when selected.

**Parameter `target`:** The clicked range endpoint, which becomes primary.

**Parameter `additive`:** Whether to preserve existing members outside the selected range.

**Throws `System.ArgumentNullException`:** The visible targets or endpoint is null.

**Throws `System.ArgumentException`:** The endpoint is not in the visible target order.

**Throws `System.InvalidOperationException`:** A range identity is unavailable; the current selection remains unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L258).

## `SetSelection`

<a id="api-e892dbb3126ac9c9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{Inno.Core.Identity.IdentityObject},Inno.Core.Identity.IdentityObject) 4083557ed46f421631fb958ba552f3c030139894bcd90b2ccfbb4875fa396d3d -->

```csharp
public void Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable<Inno.Core.Identity.IdentityObject> targets, Inno.Core.Identity.IdentityObject? anchor)
```

Replaces the ordered selection; duplicates are removed and the final target becomes primary.

**Parameter `targets`:** Registered objects resolved for the current callback.

**Parameter `anchor`:** The range anchor, or null to use the first selected target.

**Throws `System.ArgumentNullException`:** The target collection or one member is null.

**Throws `System.InvalidOperationException`:** A target has no live identity registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L208).

## `SetSelection`

<a id="api-00cbb11ebcef45ce"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Object) 84097791a011a2bacf3203d5e2c88efacc7f864ada24e9247bf9bb628401f7fb -->

```csharp
public void Inno.Editor.Interactions.EditorInteractions.SetSelection(object? target)
```

Replaces the editor selection after closing presentations owned by other targets.

**Parameter `target`:** The target to select, or `null` to clear the selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L183).

## `TogglePanel`

<a id="api-c596e15bf18e6387"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TogglePanel(System.String) e544b191cbd0fb554db2f0d6e4ed167b5e52f3a4e1758ce35b952d9405c45803 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TogglePanel(string panelId)
```

Toggles one panel in the currently active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found and toggled.

**Throws `System.ArgumentException`:** Thrown when `panelId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L339).

## `ToggleSelection`

<a id="api-e307af9890698ab7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.ToggleSelection(Inno.Core.Identity.IdentityObject) 9b3db079e50341b5defeeed6b13d3b0e5791591ce738a3e450cbc497f6ca81fb -->

```csharp
public void Inno.Editor.Interactions.EditorInteractions.ToggleSelection(Inno.Core.Identity.IdentityObject target)
```

Adds or removes a member while preserving the existing range anchor.

**Parameter `target`:** A currently registered selection target.

**Throws `System.ArgumentNullException`:** The target is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L226).

## `TryGetActiveDragIdentity`

<a id="api-cdfb6508266f43cd"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryGetActiveDragIdentity(Inno.Core.Identity.RuntimeIdentity@) 7a7dc68a69c4438f76fba3272955563697dc1f396014bbc3cdc24876b5a30145 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryGetActiveDragIdentity(out Inno.Core.Identity.RuntimeIdentity identity)
```

Gets the active drag identity used to select the matching native payload domain.

**Parameter `identity`:** The active runtime identity when one remains valid.

**Returns:** `true` when a live drag source exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L326).

## `TryGetDragSource`

<a id="api-10fad60239fa7cfd"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@) d4aec5df3cc775e8519d6ea10dc9a95343b523b2a09b3f0ce19ed8429ca064a2 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity identity, out Inno.Core.Identity.IdentityObject? source)
```

Resolves the live source for an active runtime identity.

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

**Returns:** `true` when the identity is active and resolves to a live source; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L313).

## ```TryGetModule``1```

<a id="api-1ba6c9ce21fce782"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryGetModule``1(``0@) 86225a8c9cf272a4e6c1e7041cd6cadfb4d3bd3ec3f4aeafe30507f347509e29 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryGetModule<TModule>(out TModule? module) where TModule : Inno.Editor.Core.EditorModule
```

Resolves an active feature module for immediate use in the current Editor callback.

**Type parameter `TModule`:** The feature module contract to resolve.

**Parameter `module`:** The started, non-quarantined module, or null when unavailable.

**Returns:** True when the active generation supplies the requested module.

**Constraints:** Do not retain the result across callbacks or generation changes. Candidate modules are never exposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L95).

## `TryGetPanelState`

<a id="api-086093bd92badb9d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryGetPanelState(System.String,System.Boolean@) e05161fd984da3ce019a4e0faa118338c0cc3b5c032ca0e141bbf9143cac6db5 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryGetPanelState(string panelId, out bool isOpen)
```

Reads whether one available panel is currently open.

**Parameter `panelId`:** The stable panel identity.

**Parameter `isOpen`:** Receives the open state, or false when the panel is unavailable.

**Returns:** True when the current generation contains the requested available panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L144).

## `TryResolveIdentity`

<a id="api-df00ca2a1a25d2c8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.IdentityDomainId,System.Guid,Inno.Core.Identity.IdentityObject@) 8dc562942ae6632194aae6fcc0f178e14e7a30448c750d26a9159252d5548ba7 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.IdentityDomainId domainId, System.Guid persistentId, out Inno.Core.Identity.IdentityObject? target)
```

Resolves a persistent identity through one explicitly selected Editor identity domain.

**Parameter `domainId`:** Identity domain that owns the object and any replacement generation.

**Parameter `persistentId`:** Stable object identity to resolve inside that domain.

**Parameter `target`:** Receives the current live object, or `null` when the domain or object is unavailable.

**Returns:** `true` when the stable identity resolves in the requested domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L411).

## `TryResolveIdentity`

<a id="api-e1f1f41d986ab499"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@) 5bf8693d666ee38e49555d9d6867a07de08434e5d08e25e7698a29643e01244a -->

```csharp
public bool Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity identity, out Inno.Core.Identity.IdentityObject? target)
```

Resolves a domain-qualified runtime identity through the Editor's complete identity-domain set.

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

**Returns:** `true` when the exact identity resolves in its owning domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L387).

## `documents`

<a id="api-1b9a01c34de149a6"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.documents d28b04516a1bbb3a82e2f8d2f26013f046e83ac615ab83c1b00d31f8d2ad9ad6 -->

```csharp
public Inno.Editor.Interactions.IEditorDocumentService Inno.Editor.Interactions.EditorInteractions.documents { get; }
```

Gets the headless reload-safe document lifetime used by dedicated asset editors and Inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L78).

## `events`

<a id="api-54b56f5ae124e113"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.events 28c2c3c20e8f6453e004a0753ceee95e02dc4a0581ce5c48b8dda7dfe299b403 -->

```csharp
public Inno.Core.Events.EventDispatcher Inno.Editor.Interactions.EditorInteractions.events { get; }
```

Gets synchronous Editor lifecycle notifications implemented by the Core event dispatcher.

**Constraints:** Own and dispose a hub rather than retaining callbacks beyond their extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L57).

## `focusedArea`

<a id="api-b99defe56446b8a5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.focusedArea cfef1568c709413f96a39c23b91b98d61278e7e055453291eb0094696fb13365 -->

```csharp
public string Inno.Editor.Interactions.EditorInteractions.focusedArea { get; }
```

Gets the area that most recently received keyboard focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L123).

## `focusedTarget`

<a id="api-f9720500a2139181"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.focusedTarget 325fc3cc3ce2ad053c4978f9284fcb11418a0567ae1ddece20617b7929368654 -->

```csharp
public object? Inno.Editor.Interactions.EditorInteractions.focusedTarget { get; }
```

Gets the target associated with the focused area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L156).

## `history`

<a id="api-e6a0d7fc2a854104"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.history e4be4cac48ff39e45d880dc5aa4b35e0fdae3ebbb208bfe6ca67a090a77d7072 -->

```csharp
public Inno.Editor.Interactions.IEditorHistory Inno.Editor.Interactions.EditorInteractions.history { get; }
```

Gets the transactional Undo and Redo history owned by this editor runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L74).

## `keyboard`

<a id="api-0280669dc9db2dfd"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.keyboard 155002fb1535cdcb8d4950f787b9469305ab216ad18b71b210510e2a656220a5 -->

```csharp
public Inno.Editor.Core.EditorKeyboardPolicy Inno.Editor.Interactions.EditorInteractions.keyboard { get; }
```

Gets the immutable product keyboard policy used by commands and selection controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L68).

## `selection`

<a id="api-fb55b93eb85546e0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteractions.selection 1b9994de27ce7c85c93a16d32c3f01112fc253b3a45c52724eb6736881f96bbd -->

```csharp
public Inno.Editor.Interactions.EditorSelectionState Inno.Editor.Interactions.EditorInteractions.selection { get; }
```

Gets the shared read-only editor selection state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteractions.cs#L63).
