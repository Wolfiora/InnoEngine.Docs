---
uid: api.2610750b2a30f303a257f428a53d5ce35c0315595bfee0ccaaf1ca13d70a0524
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderNodePort.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Graphs.GraphPortDirection,System.Boolean)"
source: xml
reviewed: 9193607c1e81f7833e804d343300b02189beed5291a5a765a3029c50f11ca0ea
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.
