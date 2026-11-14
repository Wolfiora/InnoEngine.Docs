---
uid: api.d6dfc49bcc496c435faf52f218846153bcd02b54bea2f199778a9528c6114922
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,System.Threading.CancellationToken)"
source: xml
reviewed: fbce6eea8ccb07fe8bb84bdced0dadaac06eb82a2f25128b614c59b0931b5444
title: "IShaderCompilerToolchain.CompileAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Generates and compiles one typed stage, including its frozen function modules and resource layout.

**Parameter `request`:** Typed stage and exact target profile.

**Parameter `cancellationToken`:** Cancellation before publishing the candidate.

**Returns:** Immutable compiled bytes, generated binding names and structured diagnostics.
