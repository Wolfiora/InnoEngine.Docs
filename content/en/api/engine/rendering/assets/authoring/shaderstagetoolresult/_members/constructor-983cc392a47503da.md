---
uid: api.983cc392a47503dafa87f000582a2b6507779bc118e785f05de5c610c8290423
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.Authoring.ShaderStageBinding},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceDiagnostic})"
source: xml
reviewed: 85d0ef8dde5d61c01e2da07f132a797b84a31935850167131773840b5a69ebb3
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Creates a candidate result from adapter-owned generation, compilation and diagnostics.

**Parameter `bytes`:** Compiled binary, or empty after failure.

**Parameter `bindings`:** Logical-to-native resource layout used by this exact binary.

**Parameter `diagnostics`:** Structured adapter diagnostics with original source positions.
