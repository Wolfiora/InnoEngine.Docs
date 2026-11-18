---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.130ac32de79cbd0245202f8c2c331716245c57d4c181be18309c38a46ecfa9f3
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSetting.IsDefault(InnoEditor.Settings.EditorSettingObject)
title: EditorSetting.IsDefault
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
sourceFingerprint: 74554869fd84333765ae30e8d3c20031ebe709597ef65dab183137781cc39e37
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `setting`:** The isolated staged object to compare.

## Returns

`true` when every stored property equals the field default.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.
