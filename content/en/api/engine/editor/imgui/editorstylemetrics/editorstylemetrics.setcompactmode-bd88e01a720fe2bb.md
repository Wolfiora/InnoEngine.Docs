---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd88e01a720fe2bb528fd838a9fec98888634334d7cdf1fa8a6a7a06a6c6e7ba
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean)
title: EditorStyleMetrics.SetCompactMode
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 34977a7b17ec6deb95cfbb329e255a3ef9e73fc294f3f28ef7594d061d7c2a19
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** `true` for compact density.

## Returns

`true` when the requested density changed; owned drawing applies it at the next frame preparation.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
