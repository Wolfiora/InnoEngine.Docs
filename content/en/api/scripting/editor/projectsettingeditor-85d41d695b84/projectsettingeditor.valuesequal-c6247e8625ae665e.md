---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c6247e8625ae665ec6783062dd5566475a5a8869dbc4596e9e14a227b0335c8f
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingEditor.ValuesEqual(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.ISerializable)
title: ProjectSettingEditor.ValuesEqual
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: 868d8fbb3b4f33b51c579aa43b323f7c57b8ad978e41d8d033df5decef2174d7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

## Returns

`true` when both values contain equal serialized properties.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when either value has another runtime type.
