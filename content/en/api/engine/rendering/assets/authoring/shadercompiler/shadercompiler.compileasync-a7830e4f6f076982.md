---
uid: api.a7830e4f6f0769824b5895fc39aaf25ad41f4bfeba4a3fe2e371b6d76403c24b
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Shaders.ShaderIrStage,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,System.Threading.CancellationToken)"
source: xml
reviewed: d97eeaf14d8daa3178f38509d4628ead4be9de841e8e6e15258ad44a28e61d93
title: "ShaderCompiler.CompileAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Compiles a typed stage through the configured adapter without an intermediate complete-source authoring asset.

**Parameter `stage`:** Typed stage and frozen function modules.

**Parameter `target`:** Configured target capability/profile snapshot.

**Parameter `cancellationToken`:** Cancellation before publishing the candidate.

**Returns:** Compiled stage bytes, exact generated binding names and structured diagnostics.
