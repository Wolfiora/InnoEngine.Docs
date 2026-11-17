---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.07e9df22c976e933722363c242c37a62d2c24d032b016b866363797318e9f19b
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.GetLayoutSectionNames(System.String)
title: EditorContext.GetLayoutSectionNames
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 9a94195bdb5aa363153d234b468059a7b0df27ed77e03a92751729658e5a7191
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

## Returns

A stable sorted snapshot of matching section names.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `prefix` is `null`.
