---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82e32eb82898bafd821298816025ae3a11ed6f15dead5201be97c25f43571b26
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetLocation(Inno.Editor.Assets.ImGui.AssetBrowserRoot,System.String)
title: AssetBrowserState.SetLocation
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
reviewed: 11fbca117566a2448891f902dfe24ef740f4c031ae377f5bb96dada83702408d
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
