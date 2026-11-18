---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.999012edcfedbfba2b7aa57c5c57b85a405188f793019a389b7aa1a6bafd4584
symbol: engine:Inno.Build:M:Inno.Build.PlatformTargetDescriptor.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,System.String,System.Boolean)
title: PlatformTargetDescriptor.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 7cf5c43dd7ca6c6b20e366a4d1e21c29394fb3bb3f849586e0d236a24eaf1982
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
