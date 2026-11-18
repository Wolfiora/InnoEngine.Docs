---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8ba16fcbee6ad532e487b1140eb4ff622745ff807eec963771cc5a5688660f80
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireBindings(Inno.Build.Toolchains.NativeComponentDescriptor)
title: NativeBuildContext.RequireBindings
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 6e58ddc632f3e266d4c5c286eed6826be9b92f8ded0cf4a17a6aba222b08b90c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `component`:** The component whose facade and managed binding share one generation.

## Returns

The immutable completed generation descriptor.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The owner has no prepared generation in this operation.

**Exception `T:System.ObjectDisposedException`:** The caller released the borrowed binding result before this operation finished.
