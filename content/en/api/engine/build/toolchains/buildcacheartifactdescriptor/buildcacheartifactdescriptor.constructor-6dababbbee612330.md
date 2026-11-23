---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6dababbbee6123309845242241a4ccbc0669934510504d0d33244e51dd495b70
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.#ctor(System.String,System.String,System.String,System.Int64,System.DateTime,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.BuildCacheArtifactRole)
title: BuildCacheArtifactDescriptor.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 3ac8c2ada6eda23b7adc681488978f563288f1596d533d0a410e852ccd90a1be
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The absolute published artifact or producer-owned workspace directory.

**Parameter `leasePath`:** The absolute persistent file used by this entry's actual producer and readers for Core.IO coordination.

**Parameter `targetID`:** The explicit product target, or null for a shared host artifact that target-scoped cleanup must preserve.

**Parameter `bytes`:** The publisher-recorded sum of owned file lengths, captured under writing ownership for cache budgeting. It does not measure allocated disk blocks or count shared hardlinks as recovered volume space.

**Parameter `lastUseUtc`:** The publisher's last recorded use, used only to order retirement.

**Parameter `dependencies`:** Absolute artifact directories required by this generation.

**Parameter `role`:** The producer-declared lifetime; workspace preference alone does not pin an immutable product.

## Exceptions

**Exception `T:System.ArgumentException`:** A path is relative or the timestamp is not UTC.

**Exception `T:System.ArgumentOutOfRangeException`:** The measured size is negative.

**Exception `T:System.ArgumentNullException`:** The dependency collection is absent.
