---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e6f99b31146f6846b9a80668003310c51d95944abb3812dc3abb29e394b5e1b8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Load(System.String)
title: NativeBindingGenerationDescriptor.Load
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: daee70f7a81b04c1e6ccd25cae52248d11b7372a2a7882aa72324528750567d0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The request-owned descriptor file written after successful generation.

## Returns

The selected generation whose managed source and optional bridge are present.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The descriptor is missing required output identities or contains unavailable outputs.

**Exception `T:System.Text.Json.JsonException`:** The descriptor cannot be read as the current contract.

**Exception `T:System.IO.IOException`:** An immutable artifact escapes its declared publisher or traverses a linked directory.
