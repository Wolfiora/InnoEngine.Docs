---
title: Rendering and shaders
description: Work with neutral render graphs, persistent graphics assets and the implemented shader authoring chain.
uid: manual.rendering.home
kind: landing
---
# Rendering and shaders

InnoEngine provides rendering mechanisms and extension boundaries. It does not assume a built-in Camera/Light model, PBR material system or one fixed 2D/3D pipeline. A rendering domain or plugin supplies those policies using the neutral contracts.

## Choose a task

- [Author a shader](shader-authoring.md) by choosing a graph, source function or optional domain Target.
- [Define a source function](shader-functions.md) with explicit inputs, outputs and frozen dependencies.
- [Reuse shader graph nodes](reusable-shader-nodes.md) while preserving stable ports and stage boundaries.
- [Work with materials and runtime artifacts](materials.md) without persisting GPU handles.
- [Contribute to a rendered frame](../../extending/render-frame.md) through requests, models or graph contributors.
- [Extend shader Targets and Templates](../../extending/shader-targets.md) for domain-specific authoring.
- [Add a shader primitive](../../extending/shader-nodes.md) only when existing graphs and public IR cannot express it.

## Understand the layers

| Layer | Responsibility |
| --- | --- |
| [Rendering Core](../../api/projects/inno-rendering.md) | Device capabilities, resources, commands and RenderGraph relationships. |
| [Runtime assets](../../api/projects/inno-rendering-assets.md) | Persistent neutral Shader, Material, Texture, Geometry and Pipeline data. |
| [Rendering Runtime](../../api/projects/inno-rendering-runtime.md) | Output requests, model generations, GPU caches and retirement. |
| [Asset authoring](../../api/projects/inno-rendering-assets-authoring.md) | Imports, source freezing, target candidates and last-good publication. |
| [Shader mechanisms](../../api/projects/inno-rendering-shaders.md) | Function analysis, graph lowering and typed stage/region IR. |

Runtime consumes compiled artifacts; it does not interpret graph documents or compile authoring sources during a frame. Product composition selects a backend and platform integration explicitly. Read [render-frame ownership](../../architecture/render-frame.md) before retaining resources or callbacks across frames and reloads.
