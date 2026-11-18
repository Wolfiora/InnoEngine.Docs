---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d908f524ac6566cc5638aa63a9d4eefe976ab178b4c0774d2a2084e587e6f380
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.Record(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.String,System.Threading.CancellationToken)
title: BuildCachePublisher.Record
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 7658989ab8d1b20689924cce59f7760a595a31e38e3b7930a4b35441c9db5098
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** An existing artifact within this publisher's exact boundary.

**Parameter `leasePath`:** The persistent lease used by its producer and readers.

**Parameter `dependencies`:** Exact owned entries required while this generation is protected.

**Parameter `currentKey`:** A product/target/configuration root identity, or null for an unselected generation.

**Parameter `cancellationToken`:** Cancels before metadata selection.

**Parameter `targetId`:** The producer's product target, or null for a shared host generation.

## Exceptions

**Exception `T:System.IO.IOException`:** An owned path escapes the boundary, crosses a directory link, or contains an invalid file link.

**Exception `T:System.IO.DirectoryNotFoundException`:** The completed generation is absent.

## Remarks

Reusable workspaces may contain compiler-created file aliases only when their complete link chain resolves to a regular file within the same workspace. Aliases are not counted as duplicate payloads. Immutable artifacts and process working directories reject all links.
