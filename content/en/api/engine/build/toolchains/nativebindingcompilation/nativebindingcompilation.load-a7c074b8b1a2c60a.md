---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a7c074b8b1a2c60abea8e0fb8cf9c16014b1df1814ef2d9c22858df40c8fa2db
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.Load(System.String)
title: NativeBindingCompilation.Load
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 4ec4a27ea347198bc461491fcb2b233b9c5dc0279b426cc770f6c477e5f73c8a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `nativeDirectory`:** The complete selected generation's native directory.

## Returns

The validated description; missing or malformed descriptions fail explicitly.

## Exceptions

**Exception `T:System.IO.IOException`:** The description cannot be read.

**Exception `T:System.Text.Json.JsonException`:** The description does not match the current contract.

**Exception `T:System.IO.InvalidDataException`:** A root, path or content identity is invalid.
