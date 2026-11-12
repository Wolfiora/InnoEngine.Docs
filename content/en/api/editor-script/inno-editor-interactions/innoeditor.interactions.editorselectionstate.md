---
title: "EditorSelectionState"
description: "Reference for EditorSelectionState in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.10cbe0affc48073e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorSelectionState`

This reference describes `EditorSelectionState` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d63804207ff31955) | Method |
| [`Capture`](#api-a60909a73f62bb29) | Method |
| [`Contains`](#api-b3763fb58f7f6cd4) | Method |
| [```CopyTargets``1```](#api-435366dd8c680ea9) | Method |
| [```TryGet``1```](#api-b02fb590527a01a8) | Method |
| [`anchor`](#api-734712dd70589528) | Property |
| [`count`](#api-44e750959a8da5e8) | Property |
| [`selectedTarget`](#api-eaa28db6611d4162) | Property |
| [`version`](#api-19cfa1a2901992ad) | Property |

## Type declaration

<a id="api-10cbe0affc48073e"></a>
<!-- api: T:InnoEditor.Interactions.EditorSelectionState 663017c1915ba58d926748dde37425e34156ca38c0924ed7cf784025de1b131b -->

```csharp
public sealed class InnoEditor.Interactions.EditorSelectionState
```

Owns ordered transient selection through domain-qualified identities instead of retaining live objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L10).

## `#ctor`

<a id="api-d63804207ff31955"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionState.#ctor 3fb8939e6457066f368fda5d87e8564f3e3c2d914cd319da381462fd46207feb -->

```csharp
public InnoEditor.Interactions.EditorSelectionState.EditorSelectionState()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L10).

## `Capture`

<a id="api-a60909a73f62bb29"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionState.Capture 12bb1384df36117301f1d473815ef5ae05ddcd085ad1e9e6a775a714668efdf8 -->

```csharp
public InnoEditor.Interactions.EditorSelectionSnapshot InnoEditor.Interactions.EditorSelectionState.Capture()
```

Captures the ordered runtime identities without retaining their resolved objects.

**Returns:** An immutable callback-independent snapshot; resolve identities afresh before using targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L98).

## `Contains`

<a id="api-b3763fb58f7f6cd4"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionState.Contains(System.Object) a4a799a302649016058f020927897b0d0f5c9ebcaa5f06831840a14c85884f5a -->

```csharp
public bool InnoEditor.Interactions.EditorSelectionState.Contains(object? target)
```

Checks membership by the target's owning identity domain and generation.

**Parameter `target`:** The immediate target to inspect.

**Returns:** True when the target is a member of this selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L48).

## ```CopyTargets``1```

<a id="api-435366dd8c680ea9"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionState.CopyTargets``1(System.Collections.Generic.ICollection{``0}) e81167b39da3a050bb0b073ba409cf62f40a5bc7f7f3e7ddd3720a771b3be732 -->

```csharp
public int InnoEditor.Interactions.EditorSelectionState.CopyTargets<TTarget>(System.Collections.Generic.ICollection<TTarget> destination) where TTarget : class
```

Copies currently available selected targets into a caller-owned temporary collection.

**Type parameter `TTarget`:** The target type accepted by the caller.

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

**Returns:** The number of targets resolved in this callback.

**Throws `System.ArgumentNullException`:** The destination is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L78).

## ```TryGet``1```

<a id="api-b02fb590527a01a8"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionState.TryGet``1(``0@) a67b3820ff1d67552e28beed528177809a07b3b6a0b3bb91ca2b272c7619727f -->

```csharp
public bool InnoEditor.Interactions.EditorSelectionState.TryGet<TTarget>(out TTarget? target)
```

Resolves the primary selected target as the requested type for immediate use.

**Type parameter `TTarget`:** The expected target type.

**Parameter `target`:** Receives the available primary target, or null.

**Returns:** True when the current primary target has the requested type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L117).

## `anchor`

<a id="api-734712dd70589528"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionState.anchor 685386dcfc2c679d29e1f6f419438bf3022333ff21631f7e65376b23737799b4 -->

```csharp
public object? InnoEditor.Interactions.EditorSelectionState.anchor { get; }
```

Gets the current range anchor, or null when the anchor is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L33).

## `count`

<a id="api-44e750959a8da5e8"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionState.count b9e6f0e3d8c272c0eaef0194ce0f7c1bcf35780adc25c35f7fb102640ffb67fe -->

```csharp
public int InnoEditor.Interactions.EditorSelectionState.count { get; }
```

Gets the number of selected identities, including temporarily unavailable members.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L29).

## `selectedTarget`

<a id="api-eaa28db6611d4162"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionState.selectedTarget afd802e9fe13fab6442d216d2d76eaac2458cb69947e069d82ab2600a63df164 -->

```csharp
public object? InnoEditor.Interactions.EditorSelectionState.selectedTarget { get; }
```

Gets the current primary target for this callback, or null when unavailable or unselected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L25).

## `version`

<a id="api-19cfa1a2901992ad"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionState.version d7870f145f71302a4314941374c1c479fc32ed617d49b4c5419606007eda260f -->

```csharp
public ulong InnoEditor.Interactions.EditorSelectionState.version { get; }
```

Gets the selection revision, incremented only when membership, order or resolved generation changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L37).
