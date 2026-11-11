---
title: "EditorViewportContributor"
description: "Reference for EditorViewportContributor in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.736dfd7646af09b5
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportContributor`

This reference describes `EditorViewportContributor` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-020e883ee2020528) | Method |
| [`Build`](#api-924e7e26b84ffcb9) | Method |
| [`CanContribute`](#api-313f60f8e2b46c46) | Method |
| [`ConfigureNavigation`](#api-f67d3add9ce3884a) | Method |
| [`DrawToolbar`](#api-18130c8ded7d8ade) | Method |
| [`HandlePointer`](#api-cfdd800abe382215) | Method |

## Type declaration

<a id="api-736dfd7646af09b5"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportContributor 747c35ee3f3489db2903235afe70a442f1e8fb404ec82101a4239bd69da6b412 -->

```csharp
public abstract class Inno.Editor.Rendering.EditorViewportContributor
```

Contributes one rendering model while the host owns viewport composition, targets, and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L420).

## `#ctor`

<a id="api-020e883ee2020528"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.#ctor 7e9e48d1c133700857aebad22b048f44af1aa181e81a4d7bd5ae55a843315059 -->

```csharp
protected Inno.Editor.Rendering.EditorViewportContributor.EditorViewportContributor()
```

Creates a parameterless reloadable viewport contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L425).

## `Build`

<a id="api-924e7e26b84ffcb9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.Build(Inno.Editor.Rendering.EditorViewportContext) 84c0094203cf9841f639e6d74cd094b8b13e556e318f6a9a4947067ed0863a24 -->

```csharp
public abstract Inno.Editor.Rendering.EditorViewportContribution Inno.Editor.Rendering.EditorViewportContributor.Build(Inno.Editor.Rendering.EditorViewportContext context)
```

Builds one model-neutral render contribution for the current frame.

**Parameter `context`:** Frame-only Editor and viewport context.

**Returns:** Contributor-selected pipeline and frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L461).

## `CanContribute`

<a id="api-313f60f8e2b46c46"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.CanContribute(Inno.Editor.Rendering.EditorViewportContext) 72b9720761dc1bce245818ea68f5510682af24c050add90f159c640e40fac8fa -->

```csharp
public abstract bool Inno.Editor.Rendering.EditorViewportContributor.CanContribute(Inno.Editor.Rendering.EditorViewportContext context)
```

Determines whether this rendering model participates in the supplied viewport content.

**Parameter `context`:** Frame-only Editor, navigation, content, and viewport context.

**Returns:** `true` when this contributor can build a valid model contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L438).

## `ConfigureNavigation`

<a id="api-f67d3add9ce3884a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.ConfigureNavigation(Inno.Editor.Rendering.EditorViewportContext) 28a662823169d7abe6268d275bee5e04ae8cbde3aaafe7de1d06f369e78c45b5 -->

```csharp
public virtual Inno.Editor.Rendering.EditorViewportNavigationProfile Inno.Editor.Rendering.EditorViewportContributor.ConfigureNavigation(Inno.Editor.Rendering.EditorViewportContext context)
```

Configures neutral host navigation before input is processed and a request is built.

**Parameter `context`:** Frame-only Editor, navigation, content, and viewport context.

**Returns:** The controller's current navigation capabilities and optional selection focus bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L449).

## `DrawToolbar`

<a id="api-18130c8ded7d8ade"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.DrawToolbar(Inno.Editor.Rendering.EditorViewportContext) e58ee827c15d24f39b3087544e38761311320977a3336e4efbc2ae0d57890467 -->

```csharp
public virtual void Inno.Editor.Rendering.EditorViewportContributor.DrawToolbar(Inno.Editor.Rendering.EditorViewportContext context)
```

Draws optional controller-specific toolbar controls when this contributor owns viewport interaction.

**Parameter `context`:** Frame-only Editor and viewport context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L469).

## `HandlePointer`

<a id="api-cfdd800abe382215"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributor.HandlePointer(Inno.Editor.Rendering.EditorViewportPointerContext) d4c55f56fdeb78e9ebd99c2a68685304a3498d4c85609489a246e64a175cddbc -->

```csharp
public virtual void Inno.Editor.Rendering.EditorViewportContributor.HandlePointer(Inno.Editor.Rendering.EditorViewportPointerContext context)
```

Handles one pointer click when this contributor owns viewport interaction.

**Parameter `context`:** Normalized frame-only pointer context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L479).
