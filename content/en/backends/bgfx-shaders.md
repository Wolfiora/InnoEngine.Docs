---
title: Compile shader assets for BGFX
description: Freeze authored sources, analyze shader functions and publish
  target-specific engine artifacts.
uid: backends.bgfx-shaders
kind: how-to
owners:
  - Inno.Build.Toolchains.Bgfx.Shaders
  - Inno.Build.Toolchains.Bgfx.Tools
  - Inno.Build.Toolchains.Bgfx
contracts:
  - project.inno-build-toolchains-bgfx-shaders
  - project.inno-build-toolchains-bgfx-tools
  - project.inno-build-toolchains-bgfx
---
# Compile shader assets for BGFX

The BGFX build integration turns authored shader graphs and source functions into immutable target artifacts through the existing Asset Pipeline and typed Shader IR. The runtime consumes those artifacts; it does not compile source functions or carry offline tools.

Start with [shader authoring](../manual/rendering/shader-authoring.md). Use the unified Build entry for ordinary products. The APIs below are for an existing authoring/build host with an explicit source owner, target, workspace and deployed tool closure.

## Freeze the input once

`ShaderBuildInputs.Capture` records actual source files and permanent `.imeta` metadata. Derived `.abin` files, atomic-publication temporaries and source-policy noise are excluded. The fingerprint and compiler consume that same captured object.

Acquire a registered shader workspace through `StandardBuildCaches.CreateShaderWorkspaceAsync`, copy the captured sources into its process-owned directory, and import only that copy. Revalidate the full file set and content after copying and before publication. Additions, deletions and same-length changes with preserved timestamps invalidate the candidate.

`ShaderArtifactBuilder.Compile` and `CompileGraphicsProgram` use the shared importer, IR, target frontend and artifact codec. Failed import/compilation preserves the previous target. Only a complete candidate replaces it through atomic publication. Temporary asset, module and diagnostic owners are released when the isolated operation exits.

## Keep source functions explicit

The BGFX frontend analyzes one explicitly selected configuration. The shared frontend catalog validates cross-implementation/variant interfaces and full module input snapshots. Retirement barriers propagate; they are not downgraded to an include diagnostic.

Both definitions and prototypes must avoid `main()`. Source modules cannot declare non-const global bindings or implicitly read stage inputs, `gl_*` globals, predefined matrices or generated bindings. Pass dependencies through function parameters; the graph target owns stage interfaces and resource slots. Structure members are distinguished from stage globals, and native reserved identifiers are not available as local names.

The frontend uses tokenization, conditional preprocessing and declaration analysis. It handles comments, macro aliases/rescanning, token pasting, include guards, constant expressions, structures, typedefs, fixed arrays, declarations and `in/out/inout`. Ambiguous overloads, unknown types, invalid arrays and unbalanced declarations report original locations instead of guessing an interface. Function-body boundary/stage checks are not a substitute for shaderc's full language validation.

## Lower typed stages

The toolchain consumes typed stage IR, emits entry/interface/binding code and frozen function calls, then invokes the existing shaderc process runner. It returns bytes, logical-to-native binding information and structured diagnostics. Rendering Core does not store backend SC expressions or parse shaderc console formats.

- Private functions/constants are isolated by frozen module content; compatible structures share native layouts.
- Includes follow frozen resolution edges. Compilation does not consult a mutable resolver again.
- Empty varying declarations stay explicitly empty; no fake shader input is inserted to quiet a tool.
- Original source markers and native error excerpts recover source locations where possible. Otherwise diagnostics retain the generated location rather than inventing a source line.
- Exit code zero is insufficient: explicit native errors or missing output bytes reject the candidate.
- Branches and loops retain real control flow and memory-operation placement. Loop-carried values are captured together before replacement.
- Matrices retain the IR's column-based meaning; lowering honors BGFX matrix conventions and non-square shapes rather than treating host row indexing as columns.

## Respect target limits

Supported typed operations include texture sampling/LOD, discard, buffer load/store/atomic-add and 2D/array/3D image load/store. BGFX runtime storage bindings currently belong to compute. Capabilities, access permissions and slot limits are checked before invoking shaderc. Buffer storage supports explicit-stride 32-bit scalars and two/four-component vectors; arbitrary structure packing, resource-function parameters and barrier wiring are not assumed from a host structure layout.

BGFX uniform storage uses vec4/mat3/mat4 and fixed arrays. Targets must explicitly pack scalar parameters. Modern desktop GLSL color outputs receive attachment locations, including sparse slots; other output languages use their corresponding lowering. These implementation details do not alter the backend-neutral IR contract.

Reflection must agree with the actual compiled interface. OpenGL/OpenGLES payload analysis recovers live uniforms and reconciles the BGFX binary table with generated IR; unused declarations are removed while surviving metadata is retained. Other backends consume native reflection. Invalid lengths, terminators, UTF-8 or unrepresentable storage fail with `BGFX_SHADER_REFLECTION`, without falling back to an untrimmed interface or relaxing runtime validation.

Complete native-header syntax, advanced resources, array typedefs and reflection coverage still have limits. Interface tests do not certify GPU compilation. Windows D3D compilation needs a Windows environment; a macOS result is not equivalent evidence.

## Keep tool execution separate from products

`ToolRunner` launches an explicitly deployed tool with an argument array. Cancellation stops the child process tree, waits for exit and observes both output readers. Missing tools fail explicitly; callers translate nonzero exits into build diagnostics. The loader does not discover tools in source checkouts.

The product configuration selects the runtime library; standard offline shaderc/texturec tools use Release independently of the Editor configuration. Runtime binding-generation changes do not invalidate an unrelated offline tool build. Tool sources, SDK, generator, recipe and actual parameters still participate in its identity.

See [Native preparation](../architecture/native-preparation.md) and the [BGFX build reference](projects/inno-build-toolchains-bgfx.md) for source snapshots, platform profiles, reader protection and publication.
