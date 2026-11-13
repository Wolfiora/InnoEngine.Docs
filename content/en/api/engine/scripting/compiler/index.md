---
uid: api.directory.engine.scripting.compiler
title: "Compiler"
kind: landing
owners: []
---

# Compiler

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [CSharpSampleSourceRewriter](csharpsamplesourcerewriter/index.md) | Gives imported C# sample scripts distinct type identities before their scene assets are remapped. |
| [IScriptCompilationEnvironmentProvider](iscriptcompilationenvironmentprovider/index.md) | Supplies the host-selected framework contract for one compilation or IDE projection operation. |
| [LogicalScriptingApiAnalyzer](logicalscriptingapianalyzer/index.md) | Enforces logical scripting namespaces and rejects direct implementation namespace access. |
| [ScriptAssemblyDefinitionAsset](scriptassemblydefinitionasset/index.md) | Defines one project script assembly and its compilation policy. |
| [ScriptAssemblyScope](scriptassemblyscope/index.md) | Identifies whether a project script assembly can use editor-only APIs. |
| [ScriptCompilationInputs](scriptcompilationinputs/index.md) | Describes framework references and predefined symbols selected by the authoring host&#39;s SDK. |
| [ScriptCompilationProgress](scriptcompilationprogress/index.md) | Describes monotonic progress through one script compilation. |
| [ScriptCompilationResult](scriptcompilationresult/index.md) | Reports the outputs and diagnostics of one authoring-generation or runtime-deployment script compilation. |
| [ScriptCompilationStageTiming](scriptcompilationstagetiming/index.md) | Describes the elapsed wall time of one completed script compilation stage. |
| [ScriptCompiler](scriptcompiler/index.md) | Produces deterministic runtime and editor script artifacts from one authoring snapshot. |
| [ScriptCompilerOptions](scriptcompileroptions/index.md) | Identifies the project and derived-cache locations used by one script compiler. |
| [ScriptDiagnostic](scriptdiagnostic/index.md) | Represents one source-oriented script compilation diagnostic. |
| [ScriptModuleDeployment](scriptmoduledeployment/index.md) | Describes the immutable assembly artifacts and dependency topology of one compiled script module. The receiving host chooses how these artifacts enter its module catalog. |
| [ScriptSourceAsset](scriptsourceasset/index.md) | Describes an imported C# source snapshot and its parse diagnostics. |

