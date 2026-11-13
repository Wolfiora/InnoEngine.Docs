---
uid: api.42c8c7f46832aa9edb3f840aa9e2a8b187ed427b67f452510c4693098feeda76
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest})"
source: xml
reviewed: b8a6dd505a5f6dd2b1e0f580c88095e642e19820347307dd87c7a7f15b69374c
title: "AnalyzeModule"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Analyzes all selected implementations and variants against one immutable provider generation.

**Parameter `implementations`:** Explicit implementation/configuration candidates; no native-code translation is attempted.

**Returns:** Frozen source inputs and a common interface, or recoverable missing/interface diagnostics.

**Exception `T:System.ArgumentException`:** The candidate list is empty or contains null or duplicate implementation IDs.
