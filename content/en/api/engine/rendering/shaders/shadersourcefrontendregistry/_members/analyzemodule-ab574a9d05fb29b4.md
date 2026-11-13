---
uid: api.ab574a9d05fb29b433ecd8cef7100957d7721ab3c7bdea13fa163e55778eccae
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest})"
source: xml
reviewed: 7be31c99acce2b366a7a35480f6f8202f28fa34aa60a23baa18f2a780cd83013
title: "AnalyzeModule"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Freezes and validates a complete module without mixing frontend generations between implementations.

**Parameter `implementations`:** Explicit implementation and variant candidates from the current asset transaction.

**Returns:** A neutral module result containing no frontend or source resolver references.

**Exception `T:System.ArgumentException`:** The candidate list is empty or has duplicate implementation keys.
