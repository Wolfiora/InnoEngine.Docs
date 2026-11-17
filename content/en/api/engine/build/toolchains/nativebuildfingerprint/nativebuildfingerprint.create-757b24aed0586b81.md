---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.757b24aed0586b81caf7ef77870484dcaacee8dab37da0b1899ac7141637b290
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken)
title: NativeBuildFingerprint.Create
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 6c7d5d6dd8a4772c5a4f0f8829b46276cf4f33bfae194670f39efd33b6ded6cf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `declarations`:** Ordered target, configuration, SDK, compiler and linker arguments. Order is significant.

**Parameter `inputs`:** Files and directories with explicit logical identities; overlapping reading locations are hashed once.

**Parameter `cancellationToken`:** Cancels enumeration or complete content hashing before a fingerprint is returned.

## Returns

A lowercase SHA-256 identity that changes when a declaration, input inventory or input byte changes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required input collection is null.

**Exception `T:System.IO.IOException`:** An input cannot be read or contains a directory-link cycle.

**Exception `T:System.OperationCanceledException`:** Content hashing was canceled.
