---
title: "EditorActionContext"
description: "Reference for EditorActionContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.75920a6c5895965a
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorActionContext`

This reference describes `EditorActionContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`area`](#api-5b6adb3b31e1b11d) | Property |
| [`editor`](#api-09175151643ad0ef) | Property |
| [`history`](#api-4f5529aeb56877f1) | Property |
| [`interactions`](#api-bf8950acc0a5879b) | Property |
| [`target`](#api-6eaba7a2c27f1e67) | Property |

## Type declaration

<a id="api-75920a6c5895965a"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionContext d6ba85112d56ad426564a5a4cd0a121abb23ea0a826eecc25703572afe252436 -->

```csharp
public class Inno.Editor.Interactions.EditorActionContext
```

Provides contextual state to an editor action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L8).

## `area`

<a id="api-5b6adb3b31e1b11d"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext.area 796bc31420f38b8485a5d27bfd61314caf959bfc6dccdb8f021187a14b2ff769 -->

```csharp
public string Inno.Editor.Interactions.EditorActionContext.area { get; }
```

Gets the stable interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L64).

## `editor`

<a id="api-09175151643ad0ef"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext.editor ff08aca4611e2f5cb41fa2880dd71b81a3d2eebfdf11a6cbad8c601507ed9600 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorActionContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L52).

## `history`

<a id="api-4f5529aeb56877f1"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext.history 263dbe99fac9a5e8c4efcf8e6199c1cefd78db6c13c9de764ccbe1f027027906 -->

```csharp
public Inno.Editor.Interactions.IEditorHistory Inno.Editor.Interactions.EditorActionContext.history { get; }
```

Gets the transactional history used to record reversible mutations performed by this action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L60).

## `interactions`

<a id="api-bf8950acc0a5879b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext.interactions 275b35136c0411b5a8e113c1f3df721e182cae87ac3496cd7cec777fd64fb529 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorActionContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L56).

## `target`

<a id="api-6eaba7a2c27f1e67"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext.target 19d53e285f48911d275053c787538d436800e8de2f91a145869786ef82139d6f -->

```csharp
public object? Inno.Editor.Interactions.EditorActionContext.target { get; }
```

Gets the contextual action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L68).
