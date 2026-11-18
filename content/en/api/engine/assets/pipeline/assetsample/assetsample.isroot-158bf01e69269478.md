---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.158bf01e69269478fbf9efda45acd2792d6b587a2794814fd3d3502a7972ef7c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.IsRoot(Inno.Assets.AssetPath)
title: AssetSample.IsRoot
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 2c22c4d2f578850efd1ad04c3bd8c34d48e1c99020d9ce3a350e199ae9808de4
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
