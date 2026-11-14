---
uid: api.999012edcfedbfba2b7aa57c5c57b85a405188f793019a389b7aa1a6bafd4584
symbol: "engine:Inno.Build:M:Inno.Build.PlatformTargetDescriptor.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,System.String,System.Boolean)"
source: xml
reviewed: 9c2ed92141561a55bca7796d9b7d182d72fd7af614af120520bc87930cd7f431
title: "PlatformTargetDescriptor.Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an explicit platform, processor, ABI and managed-runtime mapping.

## Parameters

**Parameter `id`:** The stable publication target identity.

**Parameter `platform`:** The platform package owning system integration.

**Parameter `architecture`:** The target processor architecture, such as x64, arm64 or wasm32.

**Parameter `abi`:** The native ABI selected by this platform implementation.

**Parameter `runtimeIdentifier`:** The exact managed toolchain runtime identifier.

**Parameter `supportsEditor`:** Whether this implemented target supports the shared Editor product.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity or required target fact is unassigned.
