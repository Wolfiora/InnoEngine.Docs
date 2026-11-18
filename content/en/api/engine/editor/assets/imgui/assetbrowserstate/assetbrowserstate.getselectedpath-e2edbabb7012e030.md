---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e2edbabb7012e030ba7514efde2aebaa3564147c1c6a36049a3669651d3a9247
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext)
title: AssetBrowserState.GetSelectedPath
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
sourceFingerprint: f0d9ac2123a37f34d3c44a5a50929f79e509ca0c236dd301c35042d48b158f84
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing the global selection.

## Returns

The normalized source-relative path, or `null` when another target type is selected.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
