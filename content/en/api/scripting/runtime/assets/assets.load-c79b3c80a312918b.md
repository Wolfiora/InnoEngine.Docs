---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c79b3c80a312918b143a5adef292fa2c0333aef798edb1ad0d2c831c4195dcea
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(System.Guid)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: dba296c4f357d27268f80211be6444ae302c0aa508d0af02e5ced179305763ab
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
