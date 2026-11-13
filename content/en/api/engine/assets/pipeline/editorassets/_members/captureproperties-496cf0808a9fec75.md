---
uid: api.496cf0808a9fec7578b7faa031f4354d84fd85e62aafc6323387855cca631c3f
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: ff5290c334acaf3b2e707f7f112136ed563532d060b3142b3b7a8914449ba45c
title: "CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Captures reload-safe settings using the currently bound authoring owner's converters and references.

**Type parameter `TValue`:** Current serializable settings type.

**Parameter `value`:** Settings to capture without saving or mutating their referenced assets.

**Returns:** Native properties, stable type identity and automatically collected dependencies.
