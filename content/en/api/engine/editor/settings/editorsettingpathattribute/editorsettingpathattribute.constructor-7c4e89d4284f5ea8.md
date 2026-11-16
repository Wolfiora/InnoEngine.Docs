---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7c4e89d4284f5ea8561c1777c5a5b2c7c2d450377abf548d8573990f99734d1c
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32)
title: EditorSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: f95a728f69297d9157876caf692fab073f0735a32953c179d1cce5adef436012
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The slash-delimited page and field path.

**Parameter `order`:** The stable order among fields with the same section and label.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` contains an empty segment or is outside the `Editor` root.
