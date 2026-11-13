---
uid: api.5606e5c65d80e0bbe948d0d4d1b96407f315e1ec0d98c7407a7cccc8a28ba535
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.GraphicsApi.TryParse(System.String,InnoEngine.Rendering.GraphicsApi@)"
source: xml
reviewed: d710e13756695f77e0317fc8ae89aa8739fbbcc6bcfe5b6318e1f69e9b2718e3
title: "TryParse"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Parses an open backend identity without consulting a closed engine-side backend list.

**Parameter `value`:** The exact stable backend identity.

**Parameter `api`:** The parsed value, or default when parsing fails.

**Returns:** True when the identifier is portable and nonempty.
