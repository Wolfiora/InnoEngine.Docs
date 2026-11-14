---
uid: api.c66ed995044e44271bfb9db987cd97fc0141c930a904e53a0d1e50737e9c9e6a
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: cfcd6551007c01cd91108e4d1e17854d1beb2f8af418db9a64b9a3a30e0893af
title: "EditorAssets.CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Captures reload-safe settings using the currently bound authoring owner's converters and references.

**Type parameter `TValue`:** Current serializable settings type.

**Parameter `value`:** Settings to capture without saving or mutating their referenced assets.

**Returns:** Native properties, stable type identity and automatically collected dependencies.
