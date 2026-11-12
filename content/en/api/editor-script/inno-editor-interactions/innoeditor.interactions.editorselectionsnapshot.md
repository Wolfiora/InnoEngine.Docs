---
title: "EditorSelectionSnapshot"
description: "Reference for EditorSelectionSnapshot in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.0a859c8fe0f56fc0
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorSelectionSnapshot`

This reference describes `EditorSelectionSnapshot` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-303bd809a5d9dda3) | Method |
| [```CopyTargets``1```](#api-62d9dcc732be53d6) | Method |
| [`anchor`](#api-fcd6d69091732754) | Property |
| [`identities`](#api-a376e648d8bfb5a9) | Property |
| [`primary`](#api-e8bc7ae688732d5d) | Property |

## Type declaration

<a id="api-0a859c8fe0f56fc0"></a>
<!-- api: T:InnoEditor.Interactions.EditorSelectionSnapshot c472a2632fe9b5fb30cb7c12806c2e999c909ff94b195220777c54d7c93d3130 -->

```csharp
public sealed class InnoEditor.Interactions.EditorSelectionSnapshot
```

Captures ordered selection identities without retaining any domain object or extension instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L10).

## `#ctor`

<a id="api-303bd809a5d9dda3"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionSnapshot.#ctor 97a9e1be7dfe92db92924983e420be8d274a712b34483f8bb1651e39c3cb8112 -->

```csharp
public InnoEditor.Interactions.EditorSelectionSnapshot.EditorSelectionSnapshot()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L10).

## ```CopyTargets``1```

<a id="api-62d9dcc732be53d6"></a>
<!-- api: M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets``1(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0}) 1cc2a1dbcc1b37c22471c17f1a3ea1fe3a32cbfb0727d2585ade7f9efcf64eac -->

```csharp
public int InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets<TTarget>(InnoEditor.Interactions.EditorInteractions interactions, System.Collections.Generic.ICollection<TTarget> destination) where TTarget : class
```

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

**Type parameter `TTarget`:** The target type accepted by the current presenter.

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

**Returns:** The number of currently available compatible targets; missing members remain represented by this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L46).

## `anchor`

<a id="api-fcd6d69091732754"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionSnapshot.anchor 95201f1fda4b39e7104c725fa7cacb147a87df93b464dd2c8c2b5a5f542b29ea -->

```csharp
public InnoEngine.Core.RuntimeIdentity? InnoEditor.Interactions.EditorSelectionSnapshot.anchor { get; }
```

Gets the range anchor identity, or null when there is no registered anchor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L29).

## `identities`

<a id="api-a376e648d8bfb5a9"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionSnapshot.identities 984de9a861f1cfc160091ea4907329c395e30f50aeace45cde084b6e38aac44a -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Core.RuntimeIdentity> InnoEditor.Interactions.EditorSelectionSnapshot.identities { get; }
```

Gets unique selection identities in order; the final identity is the primary selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L25).

## `primary`

<a id="api-e8bc7ae688732d5d"></a>
<!-- api: P:InnoEditor.Interactions.EditorSelectionSnapshot.primary caee5ca45f1aeaa908f816e567ebdb66b73eaf2e21743e2ee8d687fa1ea85690 -->

```csharp
public InnoEngine.Core.RuntimeIdentity? InnoEditor.Interactions.EditorSelectionSnapshot.primary { get; }
```

Gets the primary identity, or null when this snapshot contains no registered targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Selection/EditorSelectionSnapshot.cs#L64).
