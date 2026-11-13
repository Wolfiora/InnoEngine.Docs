---
uid: api.ab574a9d05fb29b433ecd8cef7100957d7721ab3c7bdea13fa163e55778eccae
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest})"
source: xml
reviewed: c667338824232e9416eef7eeec3a851261ec223a4b839af0029fe1593ee954a0
title: "AnalyzeModule"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Freezes and validates a complete module without mixing frontend generations between implementations.

**Parameter `implementations`:** Explicit implementation and variant candidates from the current asset transaction.

**Returns:** A neutral module result containing no frontend or source resolver references.

**Exception `T:System.ArgumentException`:** The candidate list is empty or has duplicate implementation keys.
