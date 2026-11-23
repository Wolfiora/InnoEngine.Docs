---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d3976f7edbf489c0239f4e469308b85db327470c60b6d1b55ed54758e3f89681
symbol: engine:Inno.Build:M:Inno.Build.PlatformTargetDescriptor.#ctor(Inno.Build.BuildTargetID,System.String,System.String,System.String,System.String,System.Boolean)
title: PlatformTargetDescriptor.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 5fd090f1ce32c22d23e28607cab82c4b7f48b3e4ec9c5251523d8557895655c5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable publication target identity.

**Parameter `platform`:** The platform package owning system integration.

**Parameter `architecture`:** The target processor architecture, such as x64, arm64 or wasm32.

**Parameter `abi`:** The native ABI selected by this platform implementation.

**Parameter `runtimeIdentifier`:** The exact managed toolchain runtime identifier.

**Parameter `supportsEditor`:** Whether this implemented target supports the shared Editor product.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity or required target fact is unassigned.
