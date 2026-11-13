---
title: Typed shader IR and frozen inputs
description: Understand shader input identity, structured execution and exact
  type semantics.
uid: architecture.shader-ir
kind: explanation
owners:
  - Inno.Rendering.Shaders
contracts:
  - project.inno-rendering-shaders
---
# Typed shader IR and frozen inputs

Shader authoring lowers an expanded graph into typed intermediate representation (IR), then delegates source generation and native compilation to an adapter. The IR describes execution without assuming a particular shading language, scene model or physically based material system.

Start with [shader authoring](../manual/rendering/shader-authoring.md) to build a graph. This page explains the contracts that a frontend, node compiler or target must preserve.

## Capture inputs before compilation

Multi-implementation analysis receives an explicit implementation list and defines. Implementations must agree on return type, parameter names, direction, order and aggregate layout. Their private function names may differ.

A resolver captures every successful source read. Reading different bytes from the same path within one capture fails; declaring a dependency that was never read also fails. The resulting bundle freezes source text and include relationships. Runtime consumers do not reopen the mutable authoring directory.

The source content hash includes language, entry point, paths, text, include edges and sorted defines. Reordering the implementation list does not change its meaning. This hash is **not a complete build-cache key**: graph inputs, target, toolchain, capabilities, resource layout, optimization and variants also matter.

A stage hash includes lowered types, values, side-effect order, nested regions, bindings and source inputs. Moving a node visually is irrelevant. This stage identity likewise does not replace the complete compilation input identity.

## Types have exact semantics

Values use explicit scalar, vector, matrix, structure and fixed-array types. Constants preserve integer or IEEE floating-point bits; they are not native expression strings. Aggregate construction preserves declared member order and array length.

There is no implicit numeric conversion. `Multiply` is component-wise multiplication, not a linear-algebra matrix product. Matrix scalar construction follows column order, and extracting a matrix element by column yields a vector. Call arguments follow declaration order; returned values precede `out` and `inout` results.

`Build` freezes its result. Subsequent edits to a builder cannot mutate an already built stage. Resource handles are not ordinary values that can cross a stage interface or merge through a branch or loop.

## Choose values or execute regions

| Operation | Meaning |
| --- | --- |
| `Select` | Chooses between values that have already been evaluated. |
| `Branch` | Executes only the selected region and merges its declared outputs. |
| `Loop` | Evaluates a `uint` iteration count once and carries explicitly named state. |

`Select` does not suppress evaluation or side effects. Branch outputs must match exactly in name and type; only explicitly merged values escape their region.

A loop exposes an iteration index and carried state. All state replacements take effect together at the end of an iteration. Zero iterations return the initial state. Empty output/state sets are valid for side-effect-only regions.

Nested builders close when their callback returns. A region cannot edit its parent, use an unmerged sibling value or leak a local value outside its scope. Validation applies recursively to nested regions.

## Preserve stage and memory rules

Implicit-derivative texture sampling is Fragment-only. Other stages use an explicit level operation. Discard is also Fragment-only, including when nested inside control flow.

Storage-buffer indices are `uint`; storage-image coordinates are `int2` for 2D and `int3` for array/3D images. Element type, image format and access mode must agree. Storage loads preserve memory order and cannot be merged across writes. Atomic add returns the **old** value and requires a read/write integer or unsigned-integer buffer.

Source-function calls are conservatively treated as ordered side effects. An unused return value does not authorize eliminating or reordering a call. Raster/compute stages retain explicit uniform, texture, storage, render-target and workgroup requirements.

## Resolve graph ports without guessing

Ports use stable identities: `input.<name>`, `output.<name>` and `return`. An `inout` parameter has both input and output ports. Void return handling does not introduce a synthetic value port or bypass array/type validation.

Required inputs need graph connections. Constants are graph nodes, not hidden Inspector overrides. An optional unconnected input receives a typed zero only when its type supports that operation. Storage resources, opaque textures and effect tokens do not acquire implicit optional/zero values. Legacy `input-default.<portId>` data is ignored.

`ShaderGraphLiteral.Zero` supports scalars, vectors, floating-point matrices, structures and fixed arrays. Literals retain the full type and scalar bits in declared member/matrix-column order. Shape validation and emission require the exact expected type.

Aggregate member IDs remain stable. Layout hashes include the full structure and array lengths. After an incompatible type change, preserve dangling ports for explicit repair; never reconnect them by positional coincidence.

Lowering uses stable topology, retaining document order among independent nodes. It builds the input index once rather than repeatedly scanning the entire graph for each node.

## Keep generation ownership outside persisted data

Hold one provider operation scope across a complete multi-language analysis. Missing language support is recoverable, but source diagnostics cannot swallow a provider retirement barrier. Persist stable IDs and neutral data rather than frontend, parser, resolver or provider instances.

See [shader target extensions](../extending/shader-targets.md) for expansion and generation ownership, and [the shader project reference](projects/inno-rendering-shaders.md) for exact declarations.
