---
uid: api.5cf923c5f0f52388ae7e6ce8fdd9a3998cd8765bda372395fc843c4bee7449ec
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderSourceParameterDirection)"
source: xml
reviewed: ddb3d4d89c61271431850b404f32fe7c03e25be2afe6ca96767ac076098fd22c
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a validated function parameter.

**Parameter `name`:** Public parameter name, used for semantic port matching rather than ordinal matching.

**Parameter `type`:** Canonical value type.

**Parameter `direction`:** Declared value flow.

**Exception `T:System.ArgumentException`:** The parameter has void type.
