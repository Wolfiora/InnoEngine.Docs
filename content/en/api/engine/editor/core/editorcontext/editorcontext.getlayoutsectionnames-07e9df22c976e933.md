---
uid: api.07e9df22c976e933722363c242c37a62d2c24d032b016b866363797318e9f19b
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.GetLayoutSectionNames(System.String)"
source: xml
reviewed: 4d2d6e2233a0f04e0e0a960345abfac6f9e0e6b2bd13aa5b599f735b084f9a78
title: "EditorContext.GetLayoutSectionNames"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets layout section names matching an ordinal prefix.

## Parameters

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

## Returns

A stable sorted snapshot of matching section names.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `prefix` is `null`.
