---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.081eda4ce2b6f4b200917f42a4daac86b19612352dec90b9f8bf0647b2db9549
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)
title: ProjectSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: bd578ed30d2f027cc273613c233c1f8fcd4b56c1f40492a8133a61c58cdce615
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.
