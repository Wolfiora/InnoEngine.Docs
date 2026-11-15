---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c79b3c80a312918b143a5adef292fa2c0333aef798edb1ad0d2c831c4195dcea
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(System.Guid)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 275e56ac1272287493e3232ba3f3d2ec41588907df131bd3fa14b54db1921ffc
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Loads the canonical asset with a persistent identity in the current session.

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

## Returns

The canonical compatible asset owned by the current lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
