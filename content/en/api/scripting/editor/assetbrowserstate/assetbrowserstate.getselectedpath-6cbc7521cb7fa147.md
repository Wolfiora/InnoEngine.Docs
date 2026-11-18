---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6cbc7521cb7fa1479bdfb6ce6c358b98987be438ef49081fa9b0f594acbb302d
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext)
title: AssetBrowserState.GetSelectedPath
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
sourceFingerprint: 00ce13ad0bc7ea0944943d481a77bfa30d4c42ac58e13dc8f9380a272b2fa973
apiScope: Editor
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
