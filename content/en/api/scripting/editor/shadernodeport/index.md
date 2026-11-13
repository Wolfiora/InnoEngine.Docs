---
uid: api.inno.rendering.shaders.editor-script.0def49589f32cc91
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderNodePort"
source: xml
reviewed: 0e7b5ed326a6dce02997a3e1b69dd44370b2cb5223306550b975efdc61abad32
title: "ShaderNodePort"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-shaders
aliases: []
---

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.
