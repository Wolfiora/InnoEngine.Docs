---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.514c4102e0fb671a68724d7d033f04670382aefbb54155a7ab72457275ed9eb1
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.EngineObject.op_Equality(InnoEngine.Scene.EngineObject,InnoEngine.Scene.EngineObject)
title: EngineObject.op_Equality
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: 492ce03ee1b66ecec54aabd0a9ca230c56edfda246f5397ab84f5b5722fff4bb
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Compares engine objects using reference identity and destroyed-object null semantics.

## Parameters

**Parameter `left`:** Left operand.

**Parameter `right`:** Right operand.

## Returns

`true` when both operands refer to the same live object or both behave as null.
