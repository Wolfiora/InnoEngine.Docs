---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a7c074b8b1a2c60abea8e0fb8cf9c16014b1df1814ef2d9c22858df40c8fa2db
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.Load(System.String)
title: NativeBindingCompilation.Load
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 042c43af36a4b45849e4e4da3e97e55ef0a0015789c339ef50af63dde16ec84b
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
