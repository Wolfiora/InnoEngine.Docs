---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82e32eb82898bafd821298816025ae3a11ed6f15dead5201be97c25f43571b26
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetLocation(Inno.Editor.Assets.ImGui.AssetBrowserRoot,System.String)
title: AssetBrowserState.SetLocation
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
reviewed: 9f25852c426f83d9aac229d3084b643174de3c46b98dd10c1d01ef027f785631
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
