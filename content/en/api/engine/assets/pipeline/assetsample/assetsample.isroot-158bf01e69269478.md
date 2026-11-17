---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.158bf01e69269478fbf9efda45acd2792d6b587a2794814fd3d3502a7972ef7c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.IsRoot(Inno.Assets.AssetPath)
title: AssetSample.IsRoot
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: ff9db955c6b0394d6c639d69f106c7d3a2570f4c6adb8b4a206477ef8e97377a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path to inspect.

## Returns

`true` when the path belongs to an installed Plugin source and its final segment starts with `~`. A Project directory with the same name remains normal writable authoring content.
