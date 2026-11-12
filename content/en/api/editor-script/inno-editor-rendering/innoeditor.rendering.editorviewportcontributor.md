---
title: "EditorViewportContributor"
description: "Reference for EditorViewportContributor in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.2fc3ac9d5a8f0430
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportContributor`

This reference describes `EditorViewportContributor` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-66789eb5351e3015) | Method |
| [`Build`](#api-5873dfa45a6f1845) | Method |
| [`CanContribute`](#api-d3d6c48e2a12e971) | Method |
| [`ConfigureNavigation`](#api-20b5a7ddd0301cb4) | Method |
| [`DrawToolbar`](#api-c932badf59f9c014) | Method |
| [`HandlePointer`](#api-2461d4a20e42e95e) | Method |

## Type declaration

<a id="api-2fc3ac9d5a8f0430"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportContributor 11529e0a0cd93a622f08720af6282b02007e210bd376e2cc542d14e39cf91ec4 -->

```csharp
public abstract class InnoEditor.Rendering.EditorViewportContributor
```

Contributes one rendering model while the host owns viewport composition, targets, and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L420).

## `#ctor`

<a id="api-66789eb5351e3015"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.#ctor a34f88bcf4de50b4f83e5df518b90659b371191cddc59912143ea131449a5524 -->

```csharp
protected InnoEditor.Rendering.EditorViewportContributor.EditorViewportContributor()
```

Creates a parameterless reloadable viewport contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L425).

## `Build`

<a id="api-5873dfa45a6f1845"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.Build(InnoEditor.Rendering.EditorViewportContext) b2fff0f5a63a983e546d01fb5a9e987cab303c0732669c27d1476d5e64ec4457 -->

```csharp
public abstract InnoEditor.Rendering.EditorViewportContribution InnoEditor.Rendering.EditorViewportContributor.Build(InnoEditor.Rendering.EditorViewportContext context)
```

Builds one model-neutral render contribution for the current frame.

**Parameter `context`:** Frame-only Editor and viewport context.

**Returns:** Contributor-selected pipeline and frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L461).

## `CanContribute`

<a id="api-d3d6c48e2a12e971"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.CanContribute(InnoEditor.Rendering.EditorViewportContext) 22d608306508fdf485d2777ad4b1b25be652f34a05ddee70ca6721de01e00ed6 -->

```csharp
public abstract bool InnoEditor.Rendering.EditorViewportContributor.CanContribute(InnoEditor.Rendering.EditorViewportContext context)
```

Determines whether this rendering model participates in the supplied viewport content.

**Parameter `context`:** Frame-only Editor, navigation, content, and viewport context.

**Returns:** `true` when this contributor can build a valid model contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L438).

## `ConfigureNavigation`

<a id="api-20b5a7ddd0301cb4"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.ConfigureNavigation(InnoEditor.Rendering.EditorViewportContext) 164047c39e9b523d21952ace5b5d75902e9be58b0eaa3a5da487e6c95cdeb81f -->

```csharp
public virtual InnoEditor.Rendering.EditorViewportNavigationProfile InnoEditor.Rendering.EditorViewportContributor.ConfigureNavigation(InnoEditor.Rendering.EditorViewportContext context)
```

Configures neutral host navigation before input is processed and a request is built.

**Parameter `context`:** Frame-only Editor, navigation, content, and viewport context.

**Returns:** The controller's current navigation capabilities and optional selection focus bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L449).

## `DrawToolbar`

<a id="api-c932badf59f9c014"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.DrawToolbar(InnoEditor.Rendering.EditorViewportContext) 57f4a7ed8e50c753cf3f3a7e618706474529baa8e9bc91ef79f348a0df257b92 -->

```csharp
public virtual void InnoEditor.Rendering.EditorViewportContributor.DrawToolbar(InnoEditor.Rendering.EditorViewportContext context)
```

Draws optional controller-specific toolbar controls when this contributor owns viewport interaction.

**Parameter `context`:** Frame-only Editor and viewport context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L469).

## `HandlePointer`

<a id="api-2461d4a20e42e95e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributor.HandlePointer(InnoEditor.Rendering.EditorViewportPointerContext) ce3273f3ddfac409d693d6cc871b442267e4aeb6e8975355542c764c724d916a -->

```csharp
public virtual void InnoEditor.Rendering.EditorViewportContributor.HandlePointer(InnoEditor.Rendering.EditorViewportPointerContext context)
```

Handles one pointer click when this contributor owns viewport interaction.

**Parameter `context`:** Normalized frame-only pointer context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L479).
