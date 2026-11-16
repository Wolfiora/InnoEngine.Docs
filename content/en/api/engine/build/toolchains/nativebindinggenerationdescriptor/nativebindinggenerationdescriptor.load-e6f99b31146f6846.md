---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e6f99b31146f6846b9a80668003310c51d95944abb3812dc3abb29e394b5e1b8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Load(System.String)
title: NativeBindingGenerationDescriptor.Load
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 2b0eadd6f0b1afed4c16b42181646bb723684fba7ebd8058a929bcbf4c082dfc
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
