---
uid: api.9acb78a3f7af0177992a359dee44c2fbd300d308f835e3046aa8236a3adfb706
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodePort.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Core.Graphs.GraphPortDirection,System.Boolean)"
source: xml
reviewed: 0acb09efff6c68a5d884958fab5853d8d16b22151097998fdc911f2ac08ca617
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.
