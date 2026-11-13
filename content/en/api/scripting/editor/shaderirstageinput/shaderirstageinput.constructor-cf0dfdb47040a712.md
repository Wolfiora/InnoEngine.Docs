---
uid: api.cf0dfdb47040a7123c33e7d3c2a7dcb66fcf80e71e27f12ae52c6b923d487ade
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrStageInput.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrInputKind,System.String,System.Int32)"
source: xml
reviewed: e48f6bac9129679665b99836f4f2abd8f17ca8d5fc8583f2201a0e84785085a3
title: "ShaderIrStageInput.Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates an immutable stage input binding.

**Parameter `id`:** Stable binding identity, also used by the block's named Input instruction.

**Parameter `type`:** Complete non-void type.

**Parameter `kind`:** Source of the GPU value.

**Parameter `semantic`:** Target semantic, such as position, texcoord, color, instance-data or fragment-coordinate.

**Parameter `location`:** Attribute/semantic index or assigned texture slot, never a native handle.
