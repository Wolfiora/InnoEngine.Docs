---
title: Extend shader Targets and Templates
description: Expand domain graph structure or create an initial graph without replacing the common shader compiler.
uid: extending.shader-targets
kind: how-to
owners: [Inno.Rendering.Shaders]
---
# Extend shader Targets and Templates

Use a Target to impose a domain's program structure at import/Check time. Use a Template to create a useful initial asset once. Both preserve `.ishader` as the authored graph and use the common typed compiler.

## Declare stable metadata

`ShaderTarget(id)` and `ShaderGraphTemplate(id, displayName)` attributes provide immutable registration metadata before provider construction. Inheritance supplies behavior. The registry validates IDs and conflicts before constructing an extension; providers do not repeat identity through a constant-returning override.

Persist only the stable Target ID in the graph. A missing Target fails explicitly and leaves the original graph unchanged. A Template registry similarly rejects unknown or duplicate template IDs. The same metadata-versus-behavior distinction applies to render-pipeline extensions.

## Expand a copied graph

`ShaderTarget.Expand` receives an independent authored-document copy, borrowed owner serialization and a complete reference context. These borrowed inputs are valid only for the call. Expand recognized DomainOutput roles into explicit stage inputs/outputs, resources, techniques, passes and render state.

Return an ordinary GraphDocument. Do not return typed IR, inject BGFX/HLSL/GLSL text or GPU binaries, or use a shader Target to schedule the Scene render graph. Lowering and adapter compilation remain downstream responsibilities.

Capture dependencies introduced by expansion into the same candidate. The authoring artifact retains both original and expanded graphs: editing/export uses the original, compilation uses the expansion. Generated node positions do not change the semantic fingerprint.

## Create an independent asset

`ShaderGraphTemplate.Create` produces initial nodes, connections, passes and settings when a new asset is created. Afterward the asset is independent; normal edit and compile operations do not invoke the Template again.

Prefer an explicit template-created stage graph when authors should see and modify the complete structure. Use a Target only when domain policy must derive or constrain that structure consistently.

## Keep providers generation-scoped

Target/Template providers belong to TypeRegistry snapshots. Menu descriptions contain string metadata, not live extension instances. Do not retain providers, resolver state or converter generations across reload.

Runtime consumes compiled artifacts and does not interpret Targets or graphs. The selected Editor script surface exposes descriptions and expansion contracts; host registries and background compilation ownership remain outside ordinary script APIs.
