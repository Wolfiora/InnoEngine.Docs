---
title: "EditorSelectionSnapshot"
description: "Reference for EditorSelectionSnapshot in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.c80ec1947ac6fa34
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorSelectionSnapshot`

This reference describes `EditorSelectionSnapshot` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```CopyTargets``1```](#api-b7eda8eb1fb2da89) | Method |
| [`anchor`](#api-7ff67a808ceaa624) | Property |
| [`identities`](#api-70ff4e10ac6628b2) | Property |
| [`primary`](#api-bcbdad3dd160f9cf) | Property |

## Type declaration

<a id="api-c80ec1947ac6fa34"></a>
<!-- api: T:Inno.Editor.Interactions.EditorSelectionSnapshot 4c6c5d0bf098b6325d171391efe106629ab0bdc593dbca602fd10c80a309cf04 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorSelectionSnapshot
```

Captures ordered selection identities without retaining any domain object or extension instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L10).

## ```CopyTargets``1```

<a id="api-b7eda8eb1fb2da89"></a>
<!-- api: M:Inno.Editor.Interactions.EditorSelectionSnapshot.CopyTargets``1(Inno.Editor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0}) 45b590944f17cafa5d97a3c3da7613a2f865246518981b162a2e1ab8da9dfa81 -->

```csharp
public int Inno.Editor.Interactions.EditorSelectionSnapshot.CopyTargets<TTarget>(Inno.Editor.Interactions.EditorInteractions interactions, System.Collections.Generic.ICollection<TTarget> destination) where TTarget : class
```

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

**Type parameter `TTarget`:** The target type accepted by the current presenter.

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

**Returns:** The number of currently available compatible targets; missing members remain represented by this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L46).

## `anchor`

<a id="api-7ff67a808ceaa624"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionSnapshot.anchor 37ae4814e5f6ebce84411f1896b2e9c6c6e09a64a39ee320f9b8df8d1e0c9c1d -->

```csharp
public Inno.Core.Identity.RuntimeIdentity? Inno.Editor.Interactions.EditorSelectionSnapshot.anchor { get; }
```

Gets the range anchor identity, or null when there is no registered anchor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L29).

## `identities`

<a id="api-70ff4e10ac6628b2"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionSnapshot.identities 37daf90a4af99a7a522d93b5f5ef8f013b6d625e5c60ffbf0ca9d63b13e36f24 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Identity.RuntimeIdentity> Inno.Editor.Interactions.EditorSelectionSnapshot.identities { get; }
```

Gets unique selection identities in order; the final identity is the primary selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L25).

## `primary`

<a id="api-bcbdad3dd160f9cf"></a>
<!-- api: P:Inno.Editor.Interactions.EditorSelectionSnapshot.primary e0856002972c6770c2b930ac14407c33d5bb2dd265f5ec841d70100f2969ae9d -->

```csharp
public Inno.Core.Identity.RuntimeIdentity? Inno.Editor.Interactions.EditorSelectionSnapshot.primary { get; }
```

Gets the primary identity, or null when this snapshot contains no registered targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L64).
