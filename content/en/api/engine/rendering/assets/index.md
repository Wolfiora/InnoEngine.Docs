---
uid: api.directory.engine.rendering.assets
title: "Assets"
kind: landing
owners: []
---

# Assets

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Authoring](authoring/index.md) | Frozen rendering imports, graph editing, target compilation and last-good publication. |

## Types

| Type | Purpose |
| --- | --- |
| [GeometryArtifact](geometryartifact/index.md) | Encodes and validates the stable backend-neutral geometry artifact shared by import and runtime stages. |
| [GeometryAsset](geometryasset/index.md) | Represents imported geometry without prescribing scene or draw semantics. |
| [GeometryAssetRuntime](geometryassetruntime/index.md) | Decodes normalized CPU geometry committed by mesh importers. |
| [GeometryData](geometrydata/index.md) | Contains normalized CPU mesh data ready for backend upload. |
| [GeometrySection](geometrysection/index.md) | Identifies a contiguous triangle-index range. |
| [GeometryVertex](geometryvertex/index.md) | Stores one normalized vertex shared by all rendering backends. |
| [IRenderTextureArtifactSource](irendertextureartifactsource/index.md) | Exposes one or more portable image artifacts owned by an imported asset. |
| [MaterialAsset](materialasset/index.md) | Represents material state keyed by stable shader property identifiers. |
| [MaterialMetadataEntry](materialmetadataentry/index.md) | Stores one open material metadata key and value. |
| [MaterialPassResolution](materialpassresolution/index.md) | Describes one capability-compatible material pass selection. |
| [MaterialPassResolver](materialpassresolver/index.md) | Resolves materials through open provider-owned shader contracts and roles. |
| [MaterialPropertyBlock](materialpropertyblock/index.md) | Holds frame-local material overrides without modifying a shared asset. |
| [MaterialPropertyEntry](materialpropertyentry/index.md) | Stores one persistent material property entry. |
| [MaterialValue](materialvalue/index.md) | Stores one native-serializable material value without a GPU binding. |
| [MaterialValueKind](materialvaluekind/index.md) | Identifies the neutral value stored by a material property. |
| [RenderFeatureConfiguration](renderfeatureconfiguration/index.md) | Stores one ordered feature extension selection using only stable data. |
| [RenderPipelineAsset](renderpipelineasset/index.md) | Selects a pipeline extension and ordered feature configuration without defining a render path. |
| [RenderShaderArtifact](rendershaderartifact/index.md) | Contains one immutable, source-free shader artifact ready for runtime GPU resource creation. |
| [RenderShaderArtifactCodec](rendershaderartifactcodec/index.md) | Encodes and validates the strict source-free binary format shared by game builds and Players. |
| [RenderShaderPassArtifact](rendershaderpassartifact/index.md) | Carries one immutable compiled shader pass and its reflected runtime bindings. |
| [RenderShaderStageArtifact](rendershaderstageartifact/index.md) | Stores one immutable target shader stage without retaining authoring source or compiler state. |
| [RenderShaderVariant](rendershadervariant/index.md) | Identifies one deterministic selection of static shader keyword options shared by authoring and runtime. |
| [RenderTargetArtifactPath](rendertargetartifactpath/index.md) | Defines deterministic relative paths shared by target-artifact producers and runtime consumers. |
| [RenderTextureArtifactReference](rendertextureartifactreference/index.md) | Identifies one immutable texture source across authoring, deployment, and runtime generations. |
| [RenderTextureArtifactSlot](rendertextureartifactslot/index.md) | Declares an immutable source artifact that is compiled into one sampled texture slot. |
| [SerializedRenderExtensionState](serializedrenderextensionstate/index.md) | Stores reload-safe configuration for one pipeline or feature extension generation. |
| [ShaderAsset](shaderasset/index.md) | Represents the runtime contract imported from a shader graph. |
| [ShaderCompareFunction](shadercomparefunction/index.md) | Selects the comparison used by depth testing. |
| [ShaderContractId](shadercontractid/index.md) | Identifies an open shader and pipeline compatibility contract. |
| [ShaderCullMode](shadercullmode/index.md) | Selects the triangle face rejected by a raster pass. |
| [ShaderDefinition](shaderdefinition/index.md) | Contains the source-of-truth definition shared by shader import and material tooling. |
| [ShaderDefinitionValidator](shaderdefinitionvalidator/index.md) | Validates the source-free material, pass and technique contract shared by graph compilation and deployed shaders. |
| [ShaderDiagnostic](shaderdiagnostic/index.md) | Reports one structured shader validation or compilation issue. |
| [ShaderKeywordDefinition](shaderkeyworddefinition/index.md) | Declares one static shader keyword that may produce compiled variants. |
| [ShaderMetadataEntry](shadermetadataentry/index.md) | Stores one open metadata key and value. |
| [ShaderPassDefinition](shaderpassdefinition/index.md) | Defines one backend-neutral raster or compute shader pass. |
| [ShaderPassRoleId](shaderpassroleid/index.md) | Identifies an open pass purpose defined by a rendering provider. |
| [ShaderPropertyBindingOwner](shaderpropertybindingowner/index.md) | Identifies which layer supplies a declared shader property&#39;s value for each dispatch or draw. |
| [ShaderPropertyDefinition](shaderpropertydefinition/index.md) | Declares one shader property and its reflected stage visibility. |
| [ShaderRenderState](shaderrenderstate/index.md) | Declares backend-neutral fixed-function state for one shader pass. |
| [ShaderSourceLocation](shadersourcelocation/index.md) | Maps a shader diagnostic back to an asset, pass, stage, and source position. |
| [ShaderTechniqueDefinition](shadertechniquedefinition/index.md) | Declares one contract-compatible pass mapping selectable by materials. |
| [ShaderTechniqueId](shadertechniqueid/index.md) | Identifies one material-selectable technique in a shader. |
| [ShaderTechniquePass](shadertechniquepass/index.md) | Maps one provider-defined role to one concrete shader pass. |
| [TextureAsset](textureasset/index.md) | Represents imported texture content without owning a GPU handle. |
| [TextureColorSpace](texturecolorspace/index.md) | Selects how texture samples are decoded for shader use. |

