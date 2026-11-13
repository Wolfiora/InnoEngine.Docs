---
uid: api.07e9df22c976e933722363c242c37a62d2c24d032b016b866363797318e9f19b
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.GetLayoutSectionNames(System.String)"
source: xml
reviewed: e27192fac8f74a6c37e790f1624c8a7f737d8c4463b6e31a4a2d39fbbb8b50b2
title: "GetLayoutSectionNames"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets layout section names matching an ordinal prefix.

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

**Returns:** A stable sorted snapshot of matching section names.

**Exception `T:System.ArgumentNullException`:** Thrown when `prefix` is `null`.
