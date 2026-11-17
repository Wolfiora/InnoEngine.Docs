---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.41e01201df9f697cba1b12626f29b0384b2f91f5e035795742acd07152b9bba1
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)
title: ProjectSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: 8d3836006dc750ca1cce94a1e49d6022d4b7a000d310c8d2af71c6fdd9a0a790
apiScope: Editor
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
