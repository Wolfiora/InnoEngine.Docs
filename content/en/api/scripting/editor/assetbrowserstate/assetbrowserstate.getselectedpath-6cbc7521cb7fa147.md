---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6cbc7521cb7fa1479bdfb6ce6c358b98987be438ef49081fa9b0f594acbb302d
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext)
title: AssetBrowserState.GetSelectedPath
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
reviewed: 2e946f1db120bc6b19db807d5581130140f5f189306dfcfbe5cb0a1210af1005
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
