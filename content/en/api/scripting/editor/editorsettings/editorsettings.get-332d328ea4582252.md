---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.332d328ea4582252a379c3641d62c127e0c4929f0619ec81ad27304f9744f44e
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.Get(System.String)
title: EditorSettings.Get
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: c153a360156bebde70aaed108cc9a3884c94132018ffb29a73ee3838ffd03603
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The slash-delimited Settings field path.

## Returns

The stored object, or an isolated copy of the field's default object.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is invalid, missing, or describes a page.
