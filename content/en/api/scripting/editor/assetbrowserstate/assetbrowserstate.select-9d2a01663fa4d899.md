---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d2a01663fa4d899fc327e507586d45a1ab676245902e2522bbaff044e051941
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.Select(InnoEditor.Core.EditorContext,System.String)
title: AssetBrowserState.Select
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
reviewed: e3950969d876d1c27436645b095f705168d1dee3b38c2bab984f26935b142413
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
