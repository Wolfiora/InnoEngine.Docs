---
uid: api.e0d1e0939cce4a7598cf94c5b63c405e9a52c1dfc648d32831b38e6a8043e02e
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFunction.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceParameter},Inno.Rendering.Shaders.ShaderSourcePosition)"
source: xml
reviewed: 8ff6813dcee31c870c85158153c3815c2ce0c38295882ca252e741d0b19f8214
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures a source function declaration without retaining parser or provider objects.

**Parameter `name`:** Implementation function name selected by import settings.

**Parameter `returnType`:** Canonical result type; void has no result port.

**Parameter `parameters`:** Unique named parameters in call order.

**Parameter `location`:** Original declaration location.

**Exception `T:System.ArgumentException`:** The name is reserved or parameters have duplicate names.
