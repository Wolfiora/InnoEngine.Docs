---
title: "EditorMenuContext"
description: "Reference for EditorMenuContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.2e9c659dda27d922
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuContext`

This reference describes `EditorMenuContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-56db67758aeff526) | Method |
| [`area`](#api-f4807853533b7230) | Property |
| [`editor`](#api-24068ae5ba1cb35e) | Property |
| [`interactions`](#api-ad81ac6bb345d20f) | Property |
| [`target`](#api-92310968ee452746) | Property |

## Type declaration

<a id="api-2e9c659dda27d922"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuContext d241d6948de02ca91bb9a880461c6026e2579c37dfe5131c78d3588f095fce9b -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuContext
```

Provides contextual state while constructing an editor menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L10).

## `#ctor`

<a id="api-56db67758aeff526"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,System.Object) 97610d10eea2c5b2fb61f161990f1d94002db222248c1d8f42384084041a0461 -->

```csharp
public InnoEditor.Interactions.EditorMenuContext.EditorMenuContext(InnoEditor.Core.EditorContext editor, InnoEditor.Interactions.EditorInteractions interactions, string area, object? target = null)
```

Creates a contextual menu request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

**Throws `System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L33).

## `area`

<a id="api-f4807853533b7230"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuContext.area c80628d9b68114bfae7395f5a5e756a267faa2abb3c08cd10ef5b62aeaa8dd2d -->

```csharp
public string InnoEditor.Interactions.EditorMenuContext.area { get; }
```

Gets the requested menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L59).

## `editor`

<a id="api-24068ae5ba1cb35e"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuContext.editor 4886a836ef8e38e6bfe6fb6ea5d7414ce06c96c57228fec48f1f58629bd9d335 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorMenuContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L49).

## `interactions`

<a id="api-ad81ac6bb345d20f"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuContext.interactions 1d7f5a1a0b2f84e4040a56ad1cf771673844a3c69f7236a4f143bbb37c0fc425 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorMenuContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L54).

## `target`

<a id="api-92310968ee452746"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuContext.target 2b21e8fb0a21078913756a1019e20a1b548471daeca2c48aac47f0a292e5f6c0 -->

```csharp
public object? InnoEditor.Interactions.EditorMenuContext.target { get; }
```

Gets the contextual menu target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L64).
