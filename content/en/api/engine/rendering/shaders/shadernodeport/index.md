---
uid: api.inno.rendering.shaders.7f970da683c5cadc
symbol: "engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderNodePort"
source: xml
reviewed: bd41508fe70a9936e426faa2005151372c0310f272999d2213624ab4466e510f
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
