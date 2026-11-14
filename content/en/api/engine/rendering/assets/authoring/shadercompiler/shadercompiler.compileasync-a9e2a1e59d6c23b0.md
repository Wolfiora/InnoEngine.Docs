---
uid: api.a9e2a1e59d6c23b08be94e77740c49e91d37a8682ac01dab224c67023e1e66fb
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Shaders.ShaderGraphProgramResult,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)"
source: xml
reviewed: 18f093024110fcf79d3c3ff688ebc9a0047318ca411662eda8641eff9f6f972b
title: "ShaderCompiler.CompileAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Compiles every graph-lowered pass through the adapter's typed stage interface.

**Parameter `definition`:** Source-free material, technique, capability and pass contract.

**Parameter `program`:** Complete graph lowering result for this exact variant.

**Parameter `target`:** Target compiler policy and capabilities.

**Parameter `variant`:** Keyword selection already applied while lowering source functions and graph nodes.

**Parameter `serialization`:** Current owner registry used to capture the runtime contract before asynchronous work.

**Parameter `context`:** Complete owner reference context; only the encoded stable references cross the asynchronous boundary.

**Parameter `cancellationToken`:** Cancellation before candidate publication.

**Returns:** One complete immutable target artifact, or errors without a partial candidate.
