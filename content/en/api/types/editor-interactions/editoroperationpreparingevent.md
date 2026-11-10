---
title: "EditorOperationPreparingEvent"
description: "Reference for EditorOperationPreparingEvent in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.bd7716c28b1c9b1b
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorOperationPreparingEvent`

This reference describes `EditorOperationPreparingEvent` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-51620891dc769cc3) | Method |

## Type declaration

<a id="api-bd7716c28b1c9b1b"></a>
<!-- api: T:Inno.Editor.Interactions.EditorOperationPreparingEvent bba584d09bf9e0c6ccfebc9dfbda1a47262089bbcaa2c309b68ada58766cbb28 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorOperationPreparingEvent : Inno.Core.Events.Event
```

Synchronously closes transient edits before command execution or an extension-handler generation switch.

**Constraints:** A handler failure aborts the boundary. Subscribers must use owned Core Event hubs and release them during retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorOperationPreparingEvent.cs#L10).

## `#ctor`

<a id="api-51620891dc769cc3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorOperationPreparingEvent.#ctor f778d6b7bd8d16d33ee70c0682e730b7bc17f49821c7738ce525ba935d876b42 -->

```csharp
public Inno.Editor.Interactions.EditorOperationPreparingEvent.EditorOperationPreparingEvent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Editing/EditorOperationPreparingEvent.cs#L10).
