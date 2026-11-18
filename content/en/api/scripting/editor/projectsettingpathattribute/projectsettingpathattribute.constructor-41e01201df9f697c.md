---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.41e01201df9f697cba1b12626f29b0384b2f91f5e035795742acd07152b9bba1
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)
title: ProjectSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
sourceFingerprint: 22024f3517824d0f6492bcd7f9c8aa63b6efbb8ab06df58cb8510cde5f48dd26
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
