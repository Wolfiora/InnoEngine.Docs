---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.081eda4ce2b6f4b200917f42a4daac86b19612352dec90b9f8bf0647b2db9549
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)
title: ProjectSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
sourceFingerprint: 9763b002f23b4e9fd5f5426b004dd94f0a3908b58633a93136d98ff2ac69a71f
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
