---
title: "EditorActionContext"
description: "Reference for EditorActionContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.c070ef3df20cb723
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorActionContext`

This reference describes `EditorActionContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-be289c28f277133a) | Method |
| [`area`](#api-f5c235ca7eedd71c) | Property |
| [`editor`](#api-6b7dda1bea9f1df4) | Property |
| [`history`](#api-63fb71874fc8b7bf) | Property |
| [`interactions`](#api-418d63f091649398) | Property |
| [`target`](#api-25ccfe247b6810ed) | Property |

## Type declaration

<a id="api-c070ef3df20cb723"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionContext d822b9437ff708cdb14dde2e08cef37805abf3c0cf850e9c619964bb5895b650 -->

```csharp
public class InnoEditor.Interactions.EditorActionContext
```

Provides contextual state to an editor action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L8).

## `#ctor`

<a id="api-be289c28f277133a"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionContext.#ctor 9633f2093d9bde17710532b9bf2e2563dd608ebc251800ee3190d344ed1e8335 -->

```csharp
public InnoEditor.Interactions.EditorActionContext.EditorActionContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L8).

## `area`

<a id="api-f5c235ca7eedd71c"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext.area e0555dc115611dcf41ad8fcd1926af01068834f85e78cfd6227cc7a27e7ce119 -->

```csharp
public string InnoEditor.Interactions.EditorActionContext.area { get; }
```

Gets the stable interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L64).

## `editor`

<a id="api-6b7dda1bea9f1df4"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext.editor 0c7705ea7d7de9d83beb2c6ac5e91573537a3903c2a163342c16f6b1534e7833 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorActionContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L52).

## `history`

<a id="api-63fb71874fc8b7bf"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext.history f2110713de33eb206290897445c93bc9b70664b3ab30c4e027afb0dcef0d9b10 -->

```csharp
public InnoEditor.Interactions.IEditorHistory InnoEditor.Interactions.EditorActionContext.history { get; }
```

Gets the transactional history used to record reversible mutations performed by this action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L60).

## `interactions`

<a id="api-418d63f091649398"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext.interactions 6a66923a4ab51d1e8570c362aaf4f70a192c77cb3d1c82e2a4f092b8532b531b -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorActionContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L56).

## `target`

<a id="api-25ccfe247b6810ed"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext.target e607bf8c711ca552056ef6da1df025be9246fd903913e61825ab5d5c6acb2015 -->

```csharp
public object? InnoEditor.Interactions.EditorActionContext.target { get; }
```

Gets the contextual action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L68).
