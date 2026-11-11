---
title: "IEditorGizmoSink"
description: "Reference for IEditorGizmoSink in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.1dc2a0a0adab4ee5
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `IEditorGizmoSink`

This reference describes `IEditorGizmoSink` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Icon`](#api-c8a9ddfab70a08a9) | Method |
| [`Line`](#api-dfcee605a3f95d06) | Method |

## Type declaration

<a id="api-1dc2a0a0adab4ee5"></a>
<!-- api: T:Inno.Editor.Rendering.IEditorGizmoSink fd980c86dffb90426f0af38a910a4f8af5ba0ca0c783c6a76d8ea55e8754f1d6 -->

```csharp
public interface Inno.Editor.Rendering.IEditorGizmoSink
```

Receives transient world-space gizmo geometry from independent Editor extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L62).

## `Icon`

<a id="api-c8a9ddfab70a08a9"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorGizmoSink.Icon(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Vector3,System.String) b2a51ccb52439cec2b0f14f78c67e5f8988b59c2fbc951d2b852663fac71689d -->

```csharp
void Inno.Editor.Rendering.IEditorGizmoSink.Icon(Inno.Core.Identity.Identity owner, Inno.Core.Mathematics.Vector3 position, string iconId)
```

Adds a visible, selectable icon at an object's world position.

**Parameter `owner`:** The scene object selected when the icon is clicked.

**Parameter `position`:** The icon position in world space.

**Parameter `iconId`:** A stable semantic icon ID. Unknown IDs use the generic scene icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L76).

## `Line`

<a id="api-dfcee605a3f95d06"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorGizmoSink.Line(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 3b3eb80b19ae7ecf666d6a5709e1cf7c81666358fe923d4cac53e68dbf7c79f1 -->

```csharp
void Inno.Editor.Rendering.IEditorGizmoSink.Line(Inno.Core.Mathematics.Vector3 start, Inno.Core.Mathematics.Vector3 end)
```

Adds a non-interactive world-space line, normally for selected bounds.

**Parameter `start`:** The first world-space endpoint.

**Parameter `end`:** The second world-space endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L91).
