---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d072d83944ea129d0fa3f2422df1fbd180af4e7d971d1cb5eca06c910db16b8d
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetID,System.String@)
title: BuildPipeline.TryGetGameTargetDisplayName
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 65942821af391336fa49f41d2fcdb374a25559aec3d0c284254923bfc8b1d337
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The stable target identity to query.

**Parameter `displayName`:** Receives the registered user-facing name, or an empty value when no target is registered.

## Returns

`true` when the target is registered; otherwise, `false`.
