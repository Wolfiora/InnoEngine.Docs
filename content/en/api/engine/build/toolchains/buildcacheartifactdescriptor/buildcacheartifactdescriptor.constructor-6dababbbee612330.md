---
uid: api.6dababbbee6123309845242241a4ccbc0669934510504d0d33244e51dd495b70
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.#ctor(System.String,System.String,System.String,System.Int64,System.DateTime,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.BuildCacheArtifactRole)"
source: xml
reviewed: c493ffd5565976066af88a34963c1a3e8357b611fdc704488fb6850e0ced492c
title: "BuildCacheArtifactDescriptor.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes ownership metadata supplied by the artifact's actual publisher.

**Parameter `directory`:** The absolute published artifact or producer-owned workspace directory.

**Parameter `leasePath`:** The absolute persistent file used by this entry's actual producer and readers for Core.IO coordination.

**Parameter `bytes`:** The publisher-recorded sum of owned file lengths, captured under writing ownership for cache budgeting. It does not measure allocated disk blocks or count shared hardlinks as recovered volume space.

**Parameter `targetId`:** The explicit product target, or null for a shared host artifact that target-scoped cleanup must preserve.

**Parameter `lastUseUtc`:** The publisher's last recorded use, used only to order retirement.

**Parameter `dependencies`:** Absolute artifact directories required by this generation.

**Parameter `role`:** The producer-declared lifetime; workspace preference alone does not pin an immutable product.

**Exception `T:System.ArgumentException`:** A path is relative or the timestamp is not UTC.

**Exception `T:System.ArgumentOutOfRangeException`:** The measured size is negative.

**Exception `T:System.ArgumentNullException`:** The dependency collection is absent.
