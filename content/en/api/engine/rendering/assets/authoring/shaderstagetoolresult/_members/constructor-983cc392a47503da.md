---
uid: api.983cc392a47503dafa87f000582a2b6507779bc118e785f05de5c610c8290423
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.Authoring.ShaderStageBinding},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceDiagnostic})"
source: xml
reviewed: f0fcf96db0e4c0b462571f508ad08c4a190bfda1f14ae150c1a1a79421d3f425
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Creates a candidate result from adapter-owned generation, compilation and diagnostics.

**Parameter `bytes`:** Compiled binary, or empty after failure.

**Parameter `bindings`:** Logical-to-native resource layout used by this exact binary.

**Parameter `diagnostics`:** Structured adapter diagnostics with original source positions.
