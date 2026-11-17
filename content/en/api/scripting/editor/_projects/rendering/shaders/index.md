---
uid: api.directory.scripting.editor._projects.rendering.shaders
title: "Shaders"
kind: landing
owners: []
---

# Shaders

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IShaderNodeCompiler](../../../ishadernodecompiler/index.md) | Defines one shader node&#39;s typed ports and lowering; drawing belongs to a separate editor extension. |
| [IShaderSourceFrontend](../../../ishadersourcefrontend/index.md) | Parses one source language into canonical function interfaces; it does not create GPU objects. |
| [IShaderSourceResolver](../../../ishadersourceresolver/index.md) | Reads dependencies only from the current source candidate and records their import dependencies. |
| [ShaderGraphBindings](../../../shadergraphbindings/index.md) | Keeps graph input edits and the material-visible parameter contract in one neutral document change. |
| [ShaderGraphClipboard](../../../shadergraphclipboard/index.md) | Copies and pastes shader structures as detached atomic candidates, including their parameter and Pass contracts. |
| [ShaderGraphDocument](../../../shadergraphdocument/index.md) | Defines the native graph document protocol shared by shader import, templates and the editor. |
| [ShaderGraphInputSettings](../../../shadergraphinputsettings/index.md) | Stores a stage input node&#39;s logical interface without native names or GPU handles. |
| [ShaderGraphLiteral](../../../shadergraphliteral/index.md) | Stores an exact typed value for an unconnected node input, independently of source-language syntax. |
| [ShaderGraphNodeEffect](../../../shadergraphnodeeffect/index.md) | Declares whether a graph-authored function is pure or intentionally emits ordered effects. |
| [ShaderGraphNodeInputSettings](../../../shadergraphnodeinputsettings/index.md) | Stores values supplied by callers to a graph-authored node. |
| [ShaderGraphNodeInterface](../../../shadergraphnodeinterface/index.md) | Freezes the complete public interface resolved from one graph-authored node asset. |
| [ShaderGraphNodeKind](../../../shadergraphnodekind/index.md) | Chooses whether a graph-authored node is inlined or consumed by a domain Target. |
| [ShaderGraphNodeOutputSettings](../../../shadergraphnodeoutputsettings/index.md) | Stores values returned by a graph-authored function node. |
| [ShaderGraphNodePortDefinition](../../../shadergraphnodeportdefinition/index.md) | Declares one stable, typed port on a graph-authored node interface. |
| [ShaderGraphNodes](../../../shadergraphnodes/index.md) | Reads and expands reusable node graphs without retaining assets or provider instances. |
| [ShaderGraphNodeSettings](../../../shadergraphnodesettings/index.md) | Stores graph-level identity and catalog metadata for a reusable Shader node. |
| [ShaderGraphOutput](../../../shadergraphoutput/index.md) | Stores one stable output port&#39;s destination, independent of adapter source syntax. |
| [ShaderGraphPassProgram](../../../shadergraphpassprogram/index.md) | References shared stage output identities from a material-selectable pass. |
| [ShaderGraphPasteResult](../../../shadergraphpasteresult/index.md) | Contains a detached paste candidate and its newly allocated node identities. |
| [ShaderGraphPrograms](../../../shadergraphprograms/index.md) | Edits pass-to-program references without copying computation or changing runtime render states. |
| [ShaderGraphStageSettings](../../../shadergraphstagesettings/index.md) | Stores one stage&#39;s explicit output interface and compute dimensions inside its output node. |
| [ShaderGraphTemplate](../../../shadergraphtemplate/index.md) | Contributes an ordinary shader graph to the shared asset creation workflow. |
| [ShaderGraphTemplateAttribute](../../../shadergraphtemplateattribute/index.md) | Declares immutable creation metadata for a Shader graph template. |
| [ShaderGraphTemplates](../../../shadergraphtemplates/index.md) | Provides small backend-neutral starting documents composed exclusively of ordinary graph nodes. |
| [ShaderGraphType](../../../shadergraphtype/index.md) | Persists a complete shader type as neutral native-serializable data, without extension instances. |
| [ShaderIrBlock](../../../shaderirblock/index.md) | Contains immutable ordered instructions and nested structured regions without retaining builder callbacks. |
| [ShaderIrBuilder](../../../shaderirbuilder/index.md) | Builds typed shader IR instructions for graph compilation. |
| [ShaderIrInputKind](../../../shaderirinputkind/index.md) | Identifies the GPU interface through which a stage receives a value. |
| [ShaderIrInstruction](../../../shaderirinstruction/index.md) | Stores one immutable typed instruction without generated stage source or backend expressions. |
| [ShaderIrOperation](../../../shaderiroperation/index.md) | Defines backend-neutral value operations; graph node IDs are not instruction opcodes. |
| [ShaderIrOutputKind](../../../shaderiroutputkind/index.md) | Identifies where a typed stage output is written. |
| [ShaderIrStage](../../../shaderirstage/index.md) | Freezes a typed GPU stage and its explicit interface. It contains no main function, varying declarations or source expressions. Targets own stage/resource layout; adapters translate these semantics into their native language. |
| [ShaderIrStageInput](../../../shaderirstageinput/index.md) | Describes a stage input without embedding native declarations or expressions. |
| [ShaderIrStageOutput](../../../shaderirstageoutput/index.md) | Describes a named block output&#39;s GPU destination. |
| [ShaderIrValue](../../../shaderirvalue/index.md) | Identifies a typed single-assignment value within one intermediate block. |
| [ShaderNodeDescriptionContext](../../../shadernodedescriptioncontext/index.md) | Provides invocation-scoped property decoding through the complete owner serialization context. |
| [ShaderNodeLoweringContext](../../../shadernodeloweringcontext/index.md) | Supplies one node&#39;s connected values and the region builder during lowering only. |
| [ShaderNodePort](../../../shadernodeport/index.md) | Declares a typed shader port independently of editor presentation and backend source syntax. |
| [ShaderSourceAnalysis](../../../shadersourceanalysis/index.md) | Returns a recoverable source analysis result and complete original-source dependencies. |
| [ShaderSourceDiagnostic](../../../shadersourcediagnostic/index.md) | Reports a frontend problem without retaining a language-specific exception or parser. |
| [ShaderSourceField](../../../shadersourcefield/index.md) | Describes one immutable named structure field. |
| [ShaderSourceFile](../../../shadersourcefile/index.md) | Contains immutable source text supplied by the asset candidate&#39;s controlled source resolver. |
| [ShaderSourceFunction](../../../shadersourcefunction/index.md) | Contains the single callable interface exported by a source asset. |
| [ShaderSourceImplementationAnalysis](../../../shadersourceimplementationanalysis/index.md) | Freezes a parsed implementation and its complete source inputs without retaining a frontend or resolver. |
| [ShaderSourceInclude](../../../shadersourceinclude/index.md) | Records an include resolution edge so compilation never reinterprets authoring paths against live files. |
| [ShaderSourceModuleAnalysis](../../../shadersourcemoduleanalysis/index.md) | Reports whether every supplied implementation and variant has the same callable graph interface. |
| [ShaderSourceNodeDefinition](../../../shadersourcenodedefinition/index.md) | Projects one resolved source interface into immutable graph ports without duplicating authored port declarations. |
| [ShaderSourceParameter](../../../shadersourceparameter/index.md) | Describes one parameter parsed from a public source declaration. |
| [ShaderSourceParameterDirection](../../../shadersourceparameterdirection/index.md) | Declares value flow across a source function parameter. |
| [ShaderSourcePosition](../../../shadersourceposition/index.md) | Identifies an original source position, not a generated temporary compiler filename. |
| [ShaderSourceRequest](../../../shadersourcerequest/index.md) | Carries the immutable inputs required to execute one shader source request. |
| [ShaderSourceType](../../../shadersourcetype/index.md) | Describes a language-independent function value, including aggregate members and fixed arrays. |
| [ShaderStorageType](../../../shaderstoragetype/index.md) | Describes typed storage without embedding a backend register, declaration or resource handle. |
| [ShaderTarget](../../../shadertarget/index.md) | Expands a domain&#39;s surface contract into ordinary graph stages before source dependency capture. |
| [ShaderTargetAttribute](../../../shadertargetattribute/index.md) | Declares the immutable identity used to select a Shader Target from an authored graph. |
| [ShaderTargetContext](../../../shadertargetcontext/index.md) | Supplies neutral authoring data to a domain target without exposing an adapter or live asset. |
| [ShaderTargetUnavailableException](../../../shadertargetunavailableexception/index.md) | Identifies an authored target that is absent from the current extension generation. |

