---
uid: api.999012edcfedbfba2b7aa57c5c57b85a405188f793019a389b7aa1a6bafd4584
symbol: "engine:Inno.Build:M:Inno.Build.PlatformTargetDescriptor.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,System.String,System.Boolean)"
source: xml
reviewed: 36b0fa40a0cfd77ed24edcb4f95869e450d8fb25f58d4f80a020fcb43fca5837
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an explicit platform, processor, ABI and managed-runtime mapping.

**Parameter `id`:** The stable publication target identity.

**Parameter `platform`:** The platform package owning system integration.

**Parameter `architecture`:** The target processor architecture, such as x64, arm64 or wasm32.

**Parameter `abi`:** The native ABI selected by this platform implementation.

**Parameter `runtimeIdentifier`:** The exact managed toolchain runtime identifier.

**Parameter `supportsEditor`:** Whether this implemented target supports the shared Editor product.

**Exception `T:System.ArgumentException`:** An identity or required target fact is unassigned.
