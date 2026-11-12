---
title: "EditorViewportNavigationMode"
description: "Reference for EditorViewportNavigationMode in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.ac25aaef7ea88375
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportNavigationMode`

This reference describes `EditorViewportNavigationMode` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Fly`](#api-636b10310314969f) | Field |
| [`Orbit`](#api-cb28f308958237b7) | Field |
| [`Planar`](#api-06f5de556c0b8889) | Field |

## Type declaration

<a id="api-ac25aaef7ea88375"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportNavigationMode 1e5695eb03db937f2338f1713b0a73ef5f6794c04da75770d9918ddd16312857 -->

```csharp
public enum InnoEditor.Rendering.EditorViewportNavigationMode : int
```

Identifies the active interaction model without prescribing a rendering camera type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L26).

## `Fly`

<a id="api-636b10310314969f"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationMode.Fly 232e5eb99dc5cce4d51b28b03bdbf6f438da6264bd5eab2aac1117fdb7626e43 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationMode.Fly = 2
```

Moves and looks freely from the current view position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L41).

## `Orbit`

<a id="api-cb28f308958237b7"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationMode.Orbit eaf13ac64f38949b69d65a9713b5b0b5bc36e8dc147bc32063854f8f57eb5963 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationMode.Orbit = 1
```

Rotates around a focus pivot and dollies along the view direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L36).

## `Planar`

<a id="api-06f5de556c0b8889"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationMode.Planar 06dd7bcaaebd4646fd5a42c5baadb7968e1b9c00b0e3f5efdc80c56f946b5db5 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationMode.Planar = 0
```

Pans and zooms over a provider-defined plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L31).
