---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0999e8f188a0b5ffa8d13ef4f3d4a121f1e00a2b48d837f063d752f27771a4db
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken)
title: NativeBuildFingerprint.Create
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: adeb5d4fe95bbc7a0c670c38ae01122ee8ed6a3eeb1b158cfcb4daf88554a3f8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The owner of this phase's complete input inventory and content hashes.

**Parameter `declarations`:** Ordered non-file inputs; declaration order remains significant.

**Parameter `inputs`:** Complete inputs with stable logical identities and physical read locations.

**Parameter `cancellationToken`:** Cancels complete enumeration and hashing.

## Returns

The SHA-256 identity; repeated physical reads within this phase are reused.
