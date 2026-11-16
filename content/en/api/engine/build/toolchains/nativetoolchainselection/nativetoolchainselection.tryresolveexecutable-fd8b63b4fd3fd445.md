---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fd8b63b4fd3fd4458db808dcd61d19f01338f67c9cabf05bf6433b76aa41773b
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(System.String,System.String@)
title: NativeToolchainSelection.TryResolveExecutable
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 800188ba7462574e7eec22fb1aaca7e3bfa79bd6f951034dbb636cb413a1d915
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The declared tool identity to check.

**Parameter `executable`:** The frozen absolute path when present, or an empty string when absent.

## Returns

True only when this selection explicitly supplies the requested tool.

## Exceptions

**Exception `T:System.ArgumentException`:** The tool identity is empty.
