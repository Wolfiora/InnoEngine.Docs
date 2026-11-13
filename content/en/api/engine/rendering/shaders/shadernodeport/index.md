---
uid: api.inno.rendering.shaders.7f970da683c5cadc
symbol: "engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderNodePort"
source: xml
reviewed: 0c43c554ff97fa1b9e1fd2da8741fadcf26ed00cfb50199eee6765253c5779b9
title: "ShaderNodePort"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
contracts:
- project.inno-rendering-shaders
aliases: []
---

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.
