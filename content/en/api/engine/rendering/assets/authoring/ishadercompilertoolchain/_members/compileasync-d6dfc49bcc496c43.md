---
uid: api.d6dfc49bcc496c435faf52f218846153bcd02b54bea2f199778a9528c6114922
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,System.Threading.CancellationToken)"
source: xml
reviewed: d8a6090f386051313e1f8f4897d3729757e381695d0b0644fdf94f22da23e2ac
title: "CompileAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Generates and compiles one typed stage, including its frozen function modules and resource layout.

**Parameter `request`:** Typed stage and exact target profile.

**Parameter `cancellationToken`:** Cancellation before publishing the candidate.

**Returns:** Immutable compiled bytes, generated binding names and structured diagnostics.
