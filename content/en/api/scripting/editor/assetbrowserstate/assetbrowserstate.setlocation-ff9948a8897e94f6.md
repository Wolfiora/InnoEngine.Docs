---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ff9948a8897e94f6f61ec4ed0df42e38cae6857d39e73452209f12cc6bd1baec
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot,System.String)
title: AssetBrowserState.SetLocation
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
reviewed: b6b877569d01614a6581f60f52cf7abd3cc10a686880a9e456440fa2bcf67352
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetRoot`:** The navigation root that owns the requested directory.

**Parameter `directory`:** The isolated source-relative directory; empty selects the root.

## Exceptions

**Exception `T:System.ArgumentException`:** The directory belongs to a different source root.
