---
title: Choose a shader authoring workflow
description: Use graphs, local source functions and optional domain expansion in one compilation chain.
uid: manual.rendering.shader-authoring
kind: how-to
owners: [Inno.Rendering.Shaders, Inno.Rendering.Assets.Authoring]
---
# Choose a shader authoring workflow

The authored `.ishader` graph is the authoritative shader asset. Source functions and optional domain Targets feed that graph's compilation chain; they are not competing full-shader formats.

## Choose the right input

| Input | Use it for | Result |
| --- | --- | --- |
| `.ishader` | Explicit shader stages/passes, or reusable visual functions. | A persistent graph with stable nodes, ports, connections and settings. |
| `.ishadersource` | Local algorithms better represented in source than a large visual graph. | Explicitly exported, typed Source Function nodes. |
| `ShaderTarget` | A domain that must expand one high-level output into a fixed program structure. | An ordinary expanded stage/pass graph entering the same compiler. |

Templates provide an initial graph once at asset creation. They are not a fourth representation and do not control subsequent edits or compilation of the independent asset.

## Author a graph

Use the Shader Editor to compose the graph and its parameters, stages, passes and techniques. Save persists the graph itself. Check compiles the current graph through the typed IR and selected adapter toolchain; generated backend source is not a second editable authority that can be converted back into the canvas.

An explicit graph can define Vertex, Fragment or Compute stages with resources and outputs. A reusable `.ishader` instead declares function boundaries. Ordinary function subgraphs are inlined during import; domain-output subgraphs retain the semantic boundary a Target recognizes.

Use [reusable graph nodes](reusable-shader-nodes.md) for repeated visual logic and [source functions](shader-functions.md) for stable local algorithms. Neither should introduce hidden GPU inputs or implicit resource dependencies.

## Add a Target only for domain policy

A Target receives a copy of the authored graph and expands domain outputs into explicit stages, resources, techniques, passes and render state. It returns GraphDocument, then the ordinary graph compiler produces typed IR and the adapter compiles it.

A rendering plugin could use this to derive several domain passes from one surface definition. That is an extension example, not a claim that the engine ships a PBR, Terrain or particle model. Simple explicit shaders need no Target when authors should see and edit their full stage structure.

## Preserve source when a candidate fails

Import freezes source, dependencies and the graph before target compilation. Validate the complete candidate before publishing it. A missing Target, invalid connection, unsupported capability or compile error preserves authored intent and last-good output rather than silently replacing it with a different shader.

Runtime consumes the successful compiled artifact; graph traversal and source-language parsing remain authoring work. See [shader Targets and Templates](../../extending/shader-targets.md) and [typed IR constraints](../../architecture/shader-ir.md) when extending this workflow.
