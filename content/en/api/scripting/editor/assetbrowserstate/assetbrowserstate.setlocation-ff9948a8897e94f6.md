---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ff9948a8897e94f6f61ec4ed0df42e38cae6857d39e73452209f12cc6bd1baec
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot,System.String)
title: AssetBrowserState.SetLocation
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
sourceFingerprint: 464b8c7bee0d51305cf947664133b4d91ffbc1c3bab565ef731e8d67c2006484
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
