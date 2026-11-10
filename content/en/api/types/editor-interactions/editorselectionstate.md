---
title: "EditorSelectionState"
description: "Reference for EditorSelectionState in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.7819b00345dc2033
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorSelectionState`

This reference describes `EditorSelectionState` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-bf35b6227233a070) | Method |
| [`Contains`](#api-827951d17e3b1a2b) | Method |
| [```CopyTargets``1```](#api-3fb388a3f7f8b4e2) | Method |
| [```TryGet``1```](#api-eb9af785be97ea2e) | Method |
| [`anchor`](#api-5e3c7f9217d43d4f) | Property |
| [`count`](#api-55ee919cef5dd835) | Property |
| [`selectedTarget`](#api-d5c3b408ba018df2) | Property |
| [`version`](#api-d1a8f858c17fb386) | Property |

## Type declaration

<a id="api-7819b00345dc2033"></a>
<!-- api: T:Inno.Editor.Interactions.EditorSelectionState e660b467dbb779c4880881cc0dda960b0a286dae53f5fc003d3280c569e8a888 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorSelectionState
```

Owns ordered transient selection through domain-qualified identities instead of retaining live objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L10).

## `Capture`

<a id="api-bf35b6227233a070"></a>
<!-- api: M:Inno.Editor.Interactions.EditorSelectionState.Capture ec2cbc1a750e03cdd2eb7c11b63f3d43f70b3f4f95b60142ad863ac0e99551e2 -->

```csharp
public Inno.Editor.Interactions.EditorSelectionSnapshot Inno.Editor.Interactions.EditorSelectionState.Capture()
```

Captures the ordered runtime identities without retaining their resolved objects.

**Returns:** An immutable callback-independent snapshot; resolve identities afresh before using targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L98).

## `Contains`

<a id="api-827951d17e3b1a2b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorSelectionState.Contains(System.Object) 15a5a7c23d9a7b6a83c6e510b4a490add2e85e0cc9bd7dd45223923860947f1c -->

```csharp
public bool Inno.Editor.Interactions.EditorSelectionState.Contains(object? target)
```

Checks membership by the target's owning identity domain and generation.

**Parameter `target`:** The immediate target to inspect.

**Returns:** True when the target is a member of this selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L48).

## ```CopyTargets``1```

<a id="api-3fb388a3f7f8b4e2"></a>
<!-- api: M:Inno.Editor.Interactions.EditorSelectionState.CopyTargets``1(System.Collections.Generic.ICollection{``0}) 14f8d1903508f9d38d59b6c9347643768394038ddf226984bec2fcfb5e82598b -->

```csharp
public int Inno.Editor.Interactions.EditorSelectionState.CopyTargets<TTarget>(System.Collections.Generic.ICollection<TTarget> destination) where TTarget : class
```

Copies currently available selected targets into a caller-owned temporary collection.

**Type parameter `TTarget`:** The target type accepted by the caller.

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

**Returns:** The number of targets resolved in this callback.

**Throws `System.ArgumentNullException`:** The destination is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L78).

## ```TryGet``1```

<a id="api-eb9af785be97ea2e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorSelectionState.TryGet``1(``0@) e3910fa1da7292d5cfb727736ccc74b26d4b05935c6f1cc6fe077bd01882af34 -->

```csharp
public bool Inno.Editor.Interactions.EditorSelectionState.TryGet<TTarget>(out TTarget? target)
```

Resolves the primary selected target as the requested type for immediate use.

**Type parameter `TTarget`:** The expected target type.

**Parameter `target`:** Receives the available primary target, or null.

**Returns:** True when the current primary target has the requested type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L117).

## `anchor`

<a id="api-5e3c7f9217d43d4f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionState.anchor bbcd629be583877556291e4cc4a77e95cfa71c24edee2b912d8bc98bce66ba97 -->

```csharp
public object? Inno.Editor.Interactions.EditorSelectionState.anchor { get; }
```

Gets the current range anchor, or null when the anchor is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L33).

## `count`

<a id="api-55ee919cef5dd835"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionState.count 802258409c9b98d6ffadb180f0e5e3978fa138b52ad94822aafb023889b9c3b6 -->

```csharp
public int Inno.Editor.Interactions.EditorSelectionState.count { get; }
```

Gets the number of selected identities, including temporarily unavailable members.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L29).

## `selectedTarget`

<a id="api-d5c3b408ba018df2"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionState.selectedTarget d7f3363655b026da05b3543404b72504a4a55cd20d8f3cb8139a911cf271c043 -->

```csharp
public object? Inno.Editor.Interactions.EditorSelectionState.selectedTarget { get; }
```

Gets the current primary target for this callback, or null when unavailable or unselected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L25).

## `version`

<a id="api-d1a8f858c17fb386"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionState.version 9ec6ff5166962d5a68ced67281b4c8929ecb2dd0e3fd351e1ff3a28e4af5aa00 -->

```csharp
public ulong Inno.Editor.Interactions.EditorSelectionState.version { get; private set; }
```

Gets the selection revision, incremented only when membership, order or resolved generation changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionState.cs#L37).
