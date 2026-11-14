---
uid: api.9acb78a3f7af0177992a359dee44c2fbd300d308f835e3046aa8236a3adfb706
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodePort.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Core.Graphs.GraphPortDirection,System.Boolean)"
source: xml
reviewed: 34cb664205290eb18b42b83aa32726f74587f2d62db41d61cddf10a3a8016180
title: "ShaderNodePort.Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.
