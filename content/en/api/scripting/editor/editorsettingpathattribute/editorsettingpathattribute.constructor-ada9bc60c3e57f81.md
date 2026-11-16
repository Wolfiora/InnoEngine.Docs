---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ada9bc60c3e57f8177fff2bf5e56d3730688c560fef8b090e446d2c707957082
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32)
title: EditorSettingPathAttribute.Constructor
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: f55ed6da0c73f7c7a841c926c35a591e34c77b3e853ede9b4a6a9f9cce3b3986
apiScope: Editor
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
