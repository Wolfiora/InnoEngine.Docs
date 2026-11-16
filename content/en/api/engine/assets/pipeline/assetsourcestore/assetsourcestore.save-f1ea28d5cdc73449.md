---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f1ea28d5cdc7344919cfe1874f8609255ea21ae265ff4364d99a1606f2cb559e
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceStore.Save(Inno.Assets.AssetPath,System.Byte[],System.String)
title: AssetSourceStore.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 534029b35e05666782ec2fbdff9d8e123705c5ed8cb130a58f3094b5ccd8a224
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** Writable mounted destination.

**Parameter `bytes`:** Complete serializable source, including invalid authoring states.

**Parameter `expectedHash`:** Last read/save fingerprint; null requires a nonexistent destination.

## Returns

The saved fingerprint.
