---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c79b3c80a312918b143a5adef292fa2c0333aef798edb1ad0d2c831c4195dcea
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(System.Guid)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 36c549ae5dc6c0c0e45b451a161080dca991f8eada2b3ec8988db1d95b9b5d67
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

**Parameter `persistentID`:** The non-empty persistent asset identity.

## Returns

The canonical compatible asset owned by the current lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
