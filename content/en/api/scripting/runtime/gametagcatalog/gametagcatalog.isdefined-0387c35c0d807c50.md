---
uid: api.0387c35c0d807c5046c0789fef0a839fcfba7798ee2057e2d02c6c7ab31e85e5
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameTagCatalog.IsDefined(System.String)"
source: xml
reviewed: 1aa11a6a2f54246dac582ceca54f29e2e469ad6e32f45be11d50e28ae20a5c14
title: "GameTagCatalog.IsDefined"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Determines whether an ordinal tag is defined by the project.

## Parameters

**Parameter `tag`:** The tag to resolve.

## Returns

`true` when the normalized tag is defined.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or invalid.
