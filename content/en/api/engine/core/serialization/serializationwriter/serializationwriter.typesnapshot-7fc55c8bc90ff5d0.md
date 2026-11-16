---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7fc55c8bc90ff5d01c9e579800246d7f57cf92ff6f3fe2b9480c553473feb12f
symbol: engine:Inno.Core.Serialization:P:Inno.Core.Serialization.SerializationWriter.typeSnapshot
title: SerializationWriter.typeSnapshot
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 084138ecdf0a63c5253b4f420369b8be47f96e9d736c9ff501c46df2fee26bd9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Use this snapshot for consistent type identities during a complete capture. It must not be retained beyond the writer's operation; keeping it would retain its collectible types after the converter lease is released.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The writer no longer belongs to an active capture.
