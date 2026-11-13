---
uid: api.cf0dfdb47040a7123c33e7d3c2a7dcb66fcf80e71e27f12ae52c6b923d487ade
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrStageInput.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrInputKind,System.String,System.Int32)"
source: xml
reviewed: 9f4de921fdf567d92bc4fb476534de1204b5a08318988c8967ff2a23fbebcf5c
title: "Constructor"
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
