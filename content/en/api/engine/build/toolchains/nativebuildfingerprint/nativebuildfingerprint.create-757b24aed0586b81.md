---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.757b24aed0586b81caf7ef77870484dcaacee8dab37da0b1899ac7141637b290
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken)
title: NativeBuildFingerprint.Create
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 7a8ffcd1dee176a4e00024bd196f819a49c9ff35f6b9fb8c8d82285ff18ab534
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
