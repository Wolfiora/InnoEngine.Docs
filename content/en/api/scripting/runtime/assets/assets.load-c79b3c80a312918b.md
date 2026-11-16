---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c79b3c80a312918b143a5adef292fa2c0333aef798edb1ad0d2c831c4195dcea
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(System.Guid)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 02f596938a2c38207005538292919681d3f4411adeaf70500f5356d460e03925
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

## Returns

The canonical compatible asset owned by the current lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
