---
title: Reuse a shader graph node
description: Publish ordinary graph functions, retain stable ports and bridge supported shader stages.
uid: manual.rendering.reusable-shader-nodes
kind: how-to
owners: [Inno.Rendering.Shaders]
---
# Reuse a shader graph node

Compose existing nodes in a reusable `.ishader` before writing a custom compiler primitive. The graph retains normal editing, persistence and dependency handling without a separate inspector or handwritten lowering implementation.

## Create the node asset

In File Browser, choose **Create / Shader / Reusable Node**. Graph-level `ShaderGraphNodeSettings` owns its identity, creation path and ordering.

Add at most one Function Inputs boundary and at most one Function Outputs boundary. At least one must exist and the combined port count must be nonzero. A constant-producing function can have only outputs; an explicitly SideEffect function can have only inputs. Ordinary calculations can have both.

Port IDs are persistent connection identities. Renaming a port must not reconnect existing edges by position. After saving, the asset appears under **Create / Graph Nodes** according to its own `createPath` and `createOrder`.

## Call and compile

Import recursively inlines ordinary Function nodes into the candidate. Caller defaults, property declarations, source-function dependencies and stage use enter the same frozen authoring artifact. Runtime executes compiled programs, not node graphs.

Cycles, missing required inputs, outputs with no value, conflicting resources and obsolete caller ports fail the current import/Check. Keep the original graph for repair; do not discard it because the candidate cannot compile.

Required function inputs need graph connections. Optional value inputs get a typed zero from the compiler; the Editor displays that fact rather than maintaining a second override/default editor. Resources and effect tokens cannot receive a zero value or be optional.

## Cross a supported stage boundary

An authored Vertex output can connect to a Fragment input. Lowering derives the complete value type, inserts matching varying output/input and reuses one bridge for repeated consumers of the same source.

Generated bridge plumbing is absent from the authored graph, Undo state and semantic hash. Resource handles cannot cross stages. Compute/raster crossings and Fragment-to-Vertex edges fail explicitly.

## Collapse existing logic

**Organize / Collapse to Subgraph** derives the external boundary of a same-stage selection, creates a new `.ishader` asset and replaces the selection with one call node. Stable port identities preserve inputs, outputs, properties and multiple connections.

A DomainOutput node instead names a stable domain role. A plugin Target recognizes that role and expands it into ordinary stages. The engine has no hard-coded surface-domain switch. See [Target expansion](../../extending/shader-targets.md) when the reusable logic must also impose a domain program structure.
