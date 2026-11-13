---
uid: api.8a1f9f0682bcf1aa694c9964a38a7e9df615ff4406e1d9c654d775e6d9f0b179
symbol: "engine:Inno.Rendering:M:Inno.Rendering.GraphicsApi.TryParse(System.String,Inno.Rendering.GraphicsApi@)"
source: xml
reviewed: 80c1569a75a687bf91c5f09d06d6d692de6ef14b4ed6198752eace2b19ac8679
title: "TryParse"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Parses an open backend identity without consulting a closed engine-side backend list.

**Parameter `value`:** The exact stable backend identity.

**Parameter `api`:** The parsed value, or default when parsing fails.

**Returns:** True when the identifier is portable and nonempty.
