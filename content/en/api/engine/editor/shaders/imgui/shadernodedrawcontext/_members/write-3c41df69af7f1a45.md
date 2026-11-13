---
uid: api.3c41df69af7f1a4510eb1a38ea0ea659d0b176324ababdd02543fd034661cfc9
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Write\u0060\u00601(System.String,\u0060\u00600,System.String)"
source: xml
reviewed: 370ee0ec112beb642ba5915ee67729d016895b538ae62db69041b82fa2dad52a
title: "Write"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Records an unsaved draft edit through shared history; only an explicit document save applies it to the asset.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `value`:** New detached value.

**Parameter `mergeKey`:** The current shared gesture key, or null for an independent edit.
