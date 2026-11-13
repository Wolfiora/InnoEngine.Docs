---
uid: api.directory.engine.rendering.assets.authoring
title: "Authoring"
kind: landing
owners: []
---

# Authoring

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [CompiledShaderArtifact](compiledshaderartifact/index.md) | Contains an immutable target shader artifact and expected reflected interface. |
| [CompiledShaderPass](compiledshaderpass/index.md) | Stores all compiled stages and state for one shader pass. |
| [IShaderCompilerToolchain](ishadercompilertoolchain/index.md) | Defines a backend-owned target compiler used by the common Shader IR pipeline. |
| [ITextureTargetCompiler](itexturetargetcompiler/index.md) | Converts supported artist texture sources into a validated portable runtime container. |
| [ShaderArtifactSelection](shaderartifactselection/index.md) | Describes the artifact selected after evaluating a candidate compilation. |
| [ShaderCompilationResult](shadercompilationresult/index.md) | Returns a candidate artifact and structured diagnostics without mutating active state. |
| [ShaderCompiler](shadercompiler/index.md) | Compiles validated Shader IR through one target toolchain. |
| [ShaderCompileTarget](shadercompiletarget/index.md) | Selects one renderer profile and compilation policy. |
| [ShaderFunctionAsset](shaderfunctionasset/index.md) | Represents an authoring-only source-function library; it is never a complete GPU stage or runtime dependency. |
| [ShaderGraphArtifact](shadergraphartifact/index.md) | Persists graph and frozen function inputs as an authoring artifact; Player export removes this payload. |
| [ShaderGraphSourceSnapshot](shadergraphsourcesnapshot/index.md) | Contains detached graph source state, not a compiled or live runtime asset. |
| [ShaderGraphSourceStore](shadergraphsourcestore/index.md) | Reads and atomically saves the sole shader graph source format without requiring successful compilation. |
| [ShaderLastGoodStore](shaderlastgoodstore/index.md) | Atomically preserves last-good CPU shader artifacts by asset, target and variant. |
| [ShaderSourceBundle](shadersourcebundle/index.md) | Persists only frozen function compilation inputs, never a parser, live asset, resolver or generated main function. |
| [ShaderSourceImportSettings](shadersourceimportsettings/index.md) | Configures one source-function library through the standard asset import-settings sidecar. |
| [ShaderStageArtifact](shaderstageartifact/index.md) | Stores one immutable target stage binary. |
| [ShaderStageBinding](shaderstagebinding/index.md) | Maps one logical binding to the adapter-generated native name, without exposing a GPU handle. |
| [ShaderStageToolRequest](shaderstagetoolrequest/index.md) | Supplies typed stage semantics and frozen source modules to a target compiler. |
| [ShaderStageToolResult](shaderstagetoolresult/index.md) | Returns a frozen typed-stage compilation candidate; failure never carries a usable artifact. |

