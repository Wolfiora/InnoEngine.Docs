---
uid: api.5cf923c5f0f52388ae7e6ce8fdd9a3998cd8765bda372395fc843c4bee7449ec
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderSourceParameterDirection)"
source: xml
reviewed: b3b6138497e3e3de1935f66043bb9ef3243d9fed68183534095f68b008143fe1
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
