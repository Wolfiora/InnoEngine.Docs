---
uid: api.bef681cee0ca6187b61e6e451ac35e542fee739555cb8716f36bdc03d20a90b3
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationContext.GetRequired\u0060\u00601"
source: xml
reviewed: 1365db7977a83b45d523b30f4ba910906b126ada753291e370a562af367e40a1
title: "GetRequired"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Resolves a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Returns:** The registered context value.

**Exception `T:System.InvalidOperationException`:** Thrown when the requested context was not registered.
