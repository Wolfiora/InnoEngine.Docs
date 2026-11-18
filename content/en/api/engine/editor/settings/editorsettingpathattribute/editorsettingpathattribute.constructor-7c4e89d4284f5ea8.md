---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7c4e89d4284f5ea8561c1777c5a5b2c7c2d450377abf548d8573990f99734d1c
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32)
title: EditorSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
sourceFingerprint: 94416403f38649c83feb8aa53f98f5a6e3cdae1819c9d712ba981a52d79c96b6
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
