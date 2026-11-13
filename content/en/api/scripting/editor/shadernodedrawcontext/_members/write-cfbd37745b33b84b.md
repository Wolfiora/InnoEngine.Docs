---
uid: api.cfbd37745b33b84bdfe4be8dd14ba8f9cfb49c08d148adac00df321e3128fd1e
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderNodeDrawContext.Write\u0060\u00601(System.String,\u0060\u00600,System.String)"
source: xml
reviewed: dcb13cbffc5a82c642e341808a63bd2cc2bd83e527326b069faa9f0efba8c99d
title: "Write"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Records an unsaved draft edit through shared history; only an explicit document save applies it to the asset.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `value`:** New detached value.

**Parameter `mergeKey`:** The current shared gesture key, or null for an independent edit.
